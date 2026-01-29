// src/pages/Gallery/components/UploadBox.jsx
import { useRef } from "react";

export default function UploadBox({ onUpload }) {
    const inputRef = useRef();

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) onUpload(file);
    };

    return (
        <div
            className="upload-box"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => inputRef.current.click()}
        >
            📂 이미지 드래그 or 클릭
            <input
                ref={inputRef}
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => onUpload(e.target.files[0])}
            />
        </div>
    );
}
