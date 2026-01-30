export default function ImageModal({ url, onClose }) {
    return (
        <div className="modal" onClick={onClose}>
            <img src={url} />
        </div>
    );
}