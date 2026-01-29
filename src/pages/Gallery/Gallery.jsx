// src/pages/Gallery/Gallery.jsx
import React, { useState } from "react";
import { useGallery } from "./useGallery";
import EmptyState from "./components/EmptyState";
import UploadBox from "./components/UploadBox";
import GalleryItem from "./components/GalleryItem";
import ProgressBar from "./components/ProgressBar";
import Skeleton from "./components/Skeleton";
import "./gallery.scss";

const isAdmin = true; // 유저정보 - 나중에 auth로 교체

function Gallery() {
  const {
    posts,
    progress,
    loading,
    hasMore,
    loadPosts,
    upload,
    remove,
  } = useGallery();

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadPosts();
    }
  };

  return (
    <div className="gallery" onScroll={handleScroll}>
      <UploadBox onUpload={upload} />
      {loading && <ProgressBar progress={progress} />}

      <div className={posts.length > 0 ? "grid" : "nogrid"}>
        {posts.map((p) => (
          <GalleryItem
            key={p.id}
            post={p}
            isAdmin={isAdmin}
            onDelete={remove}
          />
        ))}
        {posts.length === 0 && !loading && (
          <EmptyState onUpload={() => document.querySelector("input[type=file]").click()} />
        )}
        {loading && [...Array(6)].map((_, i) => <Skeleton key={i} />)}
      </div>
    </div>
  );
}

export default Gallery;
