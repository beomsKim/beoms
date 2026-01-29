// src/pages/Gallery/useGallery.js
import { useEffect, useState } from "react";
import { uploadImage, fetchPosts, deletePost } from "./gallery.service";

export const useGallery = () => {
const [posts, setPosts] = useState([]);
const [lastDoc, setLastDoc] = useState(null);
const [progress, setProgress] = useState(0);
const [loading, setLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);

const loadPosts = async () => {
if (!hasMore) return;

const { posts: newPosts, lastDoc: newLastDoc } =
    await fetchPosts(lastDoc);

setPosts((prev) => {
    const map = new Map(prev.map((p) => [p.id, p]));
    newPosts.forEach((p) => map.set(p.id, p));
    return [...map.values()];
});

setLastDoc(newLastDoc);

if (!newPosts.length) setHasMore(false);
};

useEffect(() => {
    loadPosts();
}, []);

const upload = async (file) => {
    setLoading(true);
    await uploadImage(file, setProgress);
    setPosts([]);
    setLastDoc(null);
    setHasMore(true);
    await loadPosts();
    setLoading(false);
};

const remove = async (post, isAdmin) => {
    if (!isAdmin) return alert("관리자만 삭제 가능");
    await deletePost(post);
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
};

return {
    posts,
    progress,
    loading,
    hasMore,
    loadPosts,
    upload,
    remove,
};
};
