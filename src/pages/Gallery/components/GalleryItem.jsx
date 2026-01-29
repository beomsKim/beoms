// src/pages/Gallery/components/GalleryItem.jsx
export default function GalleryItem({ post, onDelete, isAdmin }) {
    return (
        <div className="item">
            <img src={post.thumbUrl} loading="lazy" />
            {isAdmin && (
                <button onClick={() => onDelete(post)}>삭제</button>
            )}
        </div>
    );
}
