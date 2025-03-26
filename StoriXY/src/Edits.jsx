import React, { useState, useEffect } from "react";
import "./App.css";
import { FaArrowLeft, FaPlus, FaUserCircle } from "react-icons/fa";

const Edits = ({
    userImg,
    setEditButtonClick,
    initialName,
    initialBio,
    updateProfile,
}) => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState(initialName);
    const [bio, setBio] = useState(initialBio);

    useEffect(() => {
        setProfileImage(userImg);
    }, [userImg]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleBackToProfile = () => {
        setEditButtonClick(false);
    };

    const handleEditDone = () => {
        updateProfile(name, bio, profileImage);
        setEditButtonClick(false);
    };

    return (
        <div className="edit-container">
            <div className="top-bar">
                <span
                    className="material-symbols-outlined back-icon"
                    onClick={handleBackToProfile}
                >
                    arrow_back
                </span>
                <h2>Edit Profile</h2>
            </div>

            <div className="profile-section">
                <label htmlFor="profile-upload" className="image-upload">
                    <img
                        src={profileImage || userImg}
                        alt="Profile"
                        className="profile-img"
                    />
                    <FaPlus className="plus-icon" />
                </label>
                <input
                    type="file"
                    id="profile-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    hidden
                />
            </div>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    maxLength="30"
                />
                <div className="done-btn-div">
                <button className="done-btn" onClick={handleEditDone}>
                    Done
                </button>
                </div>
            </div>
        </div>
    );
};

export default Edits;
