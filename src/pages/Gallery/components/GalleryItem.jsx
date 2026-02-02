// src/pages/Gallery/components/GalleryItem.jsx
export default function GalleryItem({ post, onClick, onDelete }) {
    return (
        <div className="item">
            <img src={post.thumbUrl} loading="lazy" onClick={onClick} />
            <button className="delete" onClick={onDelete}>✕</button>
        </div>
    );
}