// src/pages/Gallery/useGallery.js
import { useEffect, useState, useRef, useCallback } from "react";
import { uploadImage, fetchPosts, deleteAlbum, deletePost, fetchAlbums } from "./gallery.service";

export const useGallery = (album) => {
  const [posts, setPosts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sort, setSort] = useState("createdAt"); // 정렬 상태
  const [albums, setAlbums] = useState(["all"]);

  const isFetching = useRef(false); // 중복 호출 방지

  const mergeUniquePosts = (prev, next) => {
    const map = new Map();
    [...prev, ...next].forEach((p) => map.set(p.id, p));
    return Array.from(map.values());
  };

  const loadPosts = useCallback(async (reset = false) => {
    if (isFetching.current) return;
    if (!hasMore && !reset) return;

    isFetching.current = true;

    try {
      const { posts: newPosts, lastDoc: newLastDoc } =
        await fetchPosts(reset ? null : lastDoc, album, sort);

      setPosts((prev) => (reset ? newPosts : mergeUniquePosts(prev, newPosts)));
      setLastDoc(newLastDoc);
      setHasMore(!!newPosts.length);
    } finally {
      isFetching.current = false;
    }
  }, [album, sort, lastDoc, hasMore]);

  // album or sort 변경 시 리셋
  useEffect(() => {
    setPosts([]);
    setLastDoc(null);
    setHasMore(true);
    loadPosts(true);
  }, [album, sort]);

  useEffect(() => {
    const loadAlbums = async () => {
      const list = await fetchAlbums();
      setAlbums(["all", ...new Set(list)]);
    };
    loadAlbums();
  }, []);

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

    // 앨범 목록 다시 불러오기
    const list = await fetchAlbums();
    setAlbums(["all", ...new Set(list)]);

    setLoading(false);
  };

  const removeImage = async (post) => {
    setLoading(true);
    await deletePost(post);
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
    setLoading(false);
  };
  
  const removeAlbum = async (albumName) => {
    if (!window.confirm(`"${albumName}" 앨범 삭제?`)) return;

    setLoading(true);
    await deleteAlbum(albumName);
    await loadPosts(true);
    setLoading(false);
  };

  return {
    posts,
    albums,
    hasMore,
    loadPosts,
    upload,
    removeAlbum,
    removeImage,
    loading,
    progress,
    sort,
    setSort,
  };
};