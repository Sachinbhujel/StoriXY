import React from "react";

function Share({profileImage, name, handleShareBackBtn}) {
    const profileLink = `https://storixy.netlify.app/${name}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(profileLink);
        alert("Profile link copied!");
    };

    const shareProfile = () => {
        if (navigator.share) {
            navigator.share({
                title: "Check out this profile!",
                url: profileLink,
            });
        } else {
            alert("Sharing not supported on this device.");
        }
    };

    return (
        <div className="share-card">
            <span class="material-symbols-outlined share-profile-back" onClick={handleShareBackBtn}>
close
</span>
            <div className="share-content">
                <img
                    src={profileImage}
                    alt={name}
                    className="profile-img"
                />
                <div>
                    <p className="username">{name}</p>
                    <p className="profile-link">{profileLink}</p>
                </div>
            </div>
            <div className="button-group">
                <button className="copy-btn" onClick={copyToClipboard}>
                    Copy Link
                </button>
                <button className="share-btn" onClick={shareProfile}>
                    Share
                </button>
            </div>
        </div>
    );
}

export default Share;