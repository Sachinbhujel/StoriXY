import React, { useState } from 'react';
import './App.css';

function AddStory({ onBack, onUpload }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedFile(imageUrl);
        }
    };

    const handlePost = () => {
        if (selectedFile) {
            onUpload(selectedFile);
            onBack();
        }
    };

    return (
        <div className="add-story-container">
            <div className="top-bar">
                <button className="back-btn" onClick={onBack}>←</button>
                <h2>New Story</h2>
                <button className="post-btn" onClick={handlePost} disabled={!selectedFile}>
                    Post
                </button>
            </div>

            <div className="preview-container">
                {selectedFile ? (
                    <img src={selectedFile} alt="Preview" className="preview-img" />
                ) : (
                    <label htmlFor="fileInput" className="upload-placeholder">
                        <span className="material-symbols-outlined">add_photo_alternate</span>
                        <p>Tap to add a photo</p>
                    </label>
                )}
                <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} hidden />
            </div>
        </div>
    );
}

export default AddStory;
