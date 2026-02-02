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
    setDoc,
} from "firebase/firestore";

const PAGE_SIZE = 12;

// 경로 생성
const createPath = (album, file, prefix = "") => {
    const ext = file.name.split(".").pop();
    const name = crypto.randomUUID();
    return `gallery/${album}/${prefix}${name}.${ext}`;
};

// 썸네일 생성
const createThumbnail = (file) => {
    return new Promise((resolve) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => (img.src = e.target.result);

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const width = 400;
            const scale = width / img.width;

            canvas.width = width;
            canvas.height = img.height * scale;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(resolve, "image/jpeg", 0.7);
        };

        reader.readAsDataURL(file);
    });
};

// 업로드
export const uploadImage = async (file, album, order = 0) => {
    const path = createPath(album, file);
    const thumbPath = createPath(album, file, "thumb_");

    const originRef = ref(storage, path);
    const thumbRef = ref(storage, thumbPath);

    // 원본 업로드
    await uploadBytes(originRef, file);

    // 썸네일 업로드
    const thumbBlob = await createThumbnail(file);
    await uploadBytes(thumbRef, thumbBlob);

    const url = await getDownloadURL(originRef);
    const thumbUrl = await getDownloadURL(thumbRef);

    const docRef = await addDoc(collection(db, "posts"), {
        url,
        thumbUrl,
        path,
        thumbPath,
        album,
        order: Number(order),
        createdAt: serverTimestamp(),
    });
    
    if (album && album !== "all") {
        await setDoc(doc(db, "albums", album), {
            name: album,
            updatedAt: serverTimestamp(),
        });
    };

    return { id: docRef.id };
};

// 목록 가져오기
export const fetchPosts = async (lastDoc, album) => {
    let q;

    // album 필터 있을 때
    if (album && album !== "all") {
        q = query(
            collection(db, "posts"),
            where("album", "==", album),
            orderBy("createdAt", "desc"),
            ...(lastDoc ? [startAfter(lastDoc)] : []),
            limit(PAGE_SIZE)
        );
    }
    // album 필터 없을 때
    else {
        q = query(
            collection(db, "posts"),
            orderBy("createdAt", "desc"),
            ...(lastDoc ? [startAfter(lastDoc)] : []),
            limit(PAGE_SIZE)
        );
    }

    const snap = await getDocs(q);

    return {
        posts: snap.docs.map((d) => ({ id: d.id, ...d.data() })),
        lastDoc: snap.docs[snap.docs.length - 1] || null,
    };
};

export const fetchAlbums = async () => {
    const snap = await getDocs(collection(db, "albums"));
    return snap.docs.map((d) => d.id).filter((name) => name && name !== "all");
};

// 삭제
export const deletePost = async (post) => {
    await deleteObject(ref(storage, post.path));
    await deleteObject(ref(storage, post.thumbPath));
    await deleteDoc(doc(db, "posts", post.id));
};