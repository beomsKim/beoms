// src/pages/Gallery/components/EmptyState.jsx
export default function EmptyState({ onUpload }) {
    return (
        <div className="empty">
            <div className="icon">🖼️</div>
            <h3>아직 이미지가 없어요</h3>
            <p>첫 번째 이미지를 업로드해보세요</p>
        </div>
    );
}
