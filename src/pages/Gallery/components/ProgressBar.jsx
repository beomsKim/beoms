// src/pages/Gallery/components/ProgressBar.jsx
export default function ProgressBar({ progress }) {
    return (
        <div className="progress">
            <div className="bar" style={{ width: `${progress}%` }} />
        </div>
    );
}
