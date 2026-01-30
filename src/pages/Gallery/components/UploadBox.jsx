export default function UploadBox({ onUpload }) {
    const handleFiles = (e) => {
        const files = Array.from(e.target.files);
        onUpload(files);
    };

    return (
        <label className="upload-box">
            이미지 업로드
            <input
                type="file"
                accept="image/*"
                multiple // ✅ 다중 업로드
                hidden
                onChange={handleFiles}
            />
        </label>
    );
}
