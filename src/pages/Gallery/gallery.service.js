// src/pages/Gallery/gallery.service.js
import { storage, db } from "../../firebase";
import {
    ref,
    uploadBytes,
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
    where,
} from "firebase/firestore";

const PAGE_SIZE = 12;

// 경로 생성
const createPath = (album, file, prefix = "") => {
    const ext = file.name.split(".").pop();
    const name = crypto.randomUUID();
    return `gallery/${album}/${prefix}${name}.${ext}`;
};

// 업로드 (썸네일 + 원본)
export const uploadImage = async (file, album) => {
    const path = createPath(album, file);
    const thumbPath = createPath(album, file, "thumb_");

    const originRef = ref(storage, path);
    const thumbRef = ref(storage, thumbPath);

    await uploadBytes(originRef, file);
    await uploadBytes(thumbRef, file); // 썸네일은 나중에 압축 가능

    const url = await getDownloadURL(originRef);
    const thumbUrl = await getDownloadURL(thumbRef);

    const docRef = await addDoc(collection(db, "posts"), {
        url,
        thumbUrl,
        path,
        thumbPath,
        album,
        createdAt: serverTimestamp(),
    });

    return { id: docRef.id };
};

// 목록 가져오기 (무한스크롤 + 앨범 필터)
export const fetchPosts = async (lastDoc, album) => {
    let q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(PAGE_SIZE)
    );

    if (album && album !== "all") {
        q = query(
            collection(db, "posts"),
            where("album", "==", album),
            orderBy("createdAt", "desc"),
            limit(PAGE_SIZE)
        );
    }

    if (lastDoc) {
        q = query(q, startAfter(lastDoc));
    }

    const snap = await getDocs(q);

    const posts = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
    }));

    return {
        posts,
        lastDoc: snap.docs[snap.docs.length - 1] || null,
    };
};

// 삭제
export const deletePost = async (post) => {
    await deleteObject(ref(storage, post.path));
    await deleteObject(ref(storage, post.thumbPath));
    await deleteDoc(doc(db, "posts", post.id));
};