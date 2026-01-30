// src/pages/Gallery/useGallery.js
import { useEffect, useState } from "react";
import { uploadImage, fetchPosts, deletePost } from "./gallery.service";

export const useGallery = (album) => {
  const [posts, setPosts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const loadPosts = async (reset = false) => {
    if (!hasMore && !reset) return;

    const { posts: newPosts, lastDoc: newLastDoc } =
      await fetchPosts(reset ? null : lastDoc, album);

    setPosts((prev) =>
      reset ? newPosts : mergeUniquePosts(prev, newPosts)
    );

    setLastDoc(newLastDoc);
    if (!newPosts.length) setHasMore(false);
  };


  const mergeUniquePosts = (prev, next) => {
    const map = new Map();
    [...prev, ...next].forEach((p) => {
      map.set(p.id, p);
    });
    return Array.from(map.values());
  };

  useEffect(() => {
    setPosts([]);
    setLastDoc(null);
    setHasMore(true);
    loadPosts(true);
  }, [album]);

  const upload = async (files, album) => {
    setLoading(true);
    setProgress(0);

    let count = 0;
    for (const file of files) {
      await uploadImage(file, album);
      count++;
      setProgress(Math.round((count / files.length) * 100));
    }

    await loadPosts(true);
    setLoading(false);
  };

  const remove = async (post) => {
    setLoading(true);
    await deletePost(post);
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
    setLoading(false);
  };

  return {
    posts,
    hasMore,
    loadPosts,
    upload,
    remove,
    loading,
    progress,
  };
};