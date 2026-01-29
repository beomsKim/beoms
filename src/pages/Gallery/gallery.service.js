// src/pages/Gallery/gallery.service.js
import { storage, db } from "../../firebase";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit,
    startAfter,
    deleteDoc,
    doc,
    serverTimestamp,
} from "firebase/firestore";

const createPath = (file, type = "origin") => {
    const date = new Date();
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const uuid = crypto.randomUUID();
    const ext = file.name.split(".").pop();

    return `gallery/${type}/${y}/${m}/${uuid}.${ext}`;
};

export const uploadImage = async (file, onProgress) => {
    const originPath = createPath(file, "origin");
    const thumbPath = createPath(file, "thumb");

    const originRef = ref(storage, originPath);

    const uploadTask = uploadBytesResumable(originRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            "state_changed",
            (snap) => {
                const percent = Math.round(
                    (snap.bytesTransferred / snap.totalBytes) * 100
                );
                onProgress(percent);
            },
            reject,
            async () => {
                const originUrl = await getDownloadURL(originRef);
                const thumbUrl = originUrl;
                const docRef = await addDoc(collection(db, "posts"), {
                    originUrl,
                    thumbUrl,
                    originPath,
                    thumbPath,
                    createdAt: serverTimestamp(),
                });

                resolve({ id: docRef.id, originUrl, thumbUrl });
            }
        );
    });
};

// 무한스크롤용 fetch
export const fetchPosts = async (lastDoc) => {
    let q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(12)
    );

    if (lastDoc) {
        q = query(q, startAfter(lastDoc));
    }

    const snapshot = await getDocs(q);

    const posts = snapshot.docs.map((doc) => ({
        id: doc.id, // ✅ 무조건 Firestore id
        ...doc.data(),
    }));

    const newLastDoc = snapshot.docs[snapshot.docs.length - 1];

    return { posts, lastDoc: newLastDoc };
};

export const deletePost = async (post) => {
    await deleteObject(ref(storage, post.originPath));
    await deleteDoc(doc(db, "posts", post.id));
};