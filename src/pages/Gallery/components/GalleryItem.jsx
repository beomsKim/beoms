// src/pages/Gallery/components/GalleryItem.jsx
export default function GalleryItem({ post, onClick, onDelete }) {
    return (
        <div className="item">
            <img src={post.thumbUrl} data-full={post.url} loading="lazy" onClick={() => onClick(post.url)} />
            <button className="delete" onClick={onDelete}>✕</button>
        </div>
    );
}