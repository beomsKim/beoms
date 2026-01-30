// src/pages/Gallery/Gallery.jsx
import { useState, useRef, useEffect } from "react";
import { useGallery } from "./useGallery";
import GalleryItem from "./components/GalleryItem";
import ImageModal from "./components/ImageModal";

import './gallery.scss';

export default function Gallery() {
  const [album, setAlbum] = useState("all");
  const [newAlbum, setNewAlbum] = useState("기본");
  const [modal, setModal] = useState(null);

  const {
    posts,
    hasMore,
    loadPosts,
    upload,
    remove,
    loading,
    progress,
  } = useGallery(album);

  const observerRef = useRef(null);

  // 무한 스크롤
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadPosts();
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadPosts]);

  // 앨범 목록 (빈값 제거)
  const albums = [
    "all",
    ...new Set(posts.map((p) => p.album).filter(Boolean)),
  ];

  // 드래그앤드롭
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    upload(files, newAlbum);
  };

  return (
    <div className="gallery" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      {/* 헤더 */}
      <header className="gallery-header">
        <div className="title-wrap">
          <h1 className="title">My Gallery</h1>
          {album !== "all" && <p className="subtitle">{album}</p>}
        </div>
      </header>

      {/* 업로드 영역 */}
      <section className="upload-box">
        <div className="upload-left">
          <input
            className="input"
            placeholder="사진첩 이름"
            value={newAlbum}
            onChange={(e) => setNewAlbum(e.target.value)}
          />

          <select className="select" value={album} onChange={(e) => setAlbum(e.target.value)}>
            {albums.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <label className="upload-btn">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => upload(Array.from(e.target.files), newAlbum)}
            hidden
          />
          + 이미지 업로드
        </label>
      </section>

      {/* drag 안내 */}
      <div className="drag-hint">여기에 이미지를 드롭하세요</div>

      {/* skeleton */}
      {!posts.length && !loading && (
        <div className="skeleton-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton"></div>
          ))}
        </div>
      )}

      {/* grid */}
      <div className="grid">
        {posts.map((post) => (
          <GalleryItem
            key={`${post.id}-${post.url}`}
            post={post}
            onClick={() => setModal(post.url)}
            onDelete={() => remove(post)}
          />
        ))}
      </div>

      <div ref={observerRef} style={{ height: 1 }} />

      {modal && <ImageModal src={modal} onClose={() => setModal(null)} />}

      {/* 로딩 */}
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
          <div className="progress">
            <div style={{ width: `${progress}%` }} />
            <span>{progress}%</span>
          </div>
        </div>
      )}
    </div>
  );
}