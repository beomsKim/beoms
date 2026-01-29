// src/pages/Gallery/components/EmptyState.jsx
export default function EmptyState({ onUpload }) {
    return (
        <div className="empty-state">
            <div className="icon">🖼️</div>
            <h3>아직 갤러리가 비어있어요</h3>
            <p>첫 번째 이미지를 업로드해보세요</p>
            <button onClick={onUpload}>이미지 업로드</button>
        </div>
    );
}
