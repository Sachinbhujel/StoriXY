import React, {useState} from "react";

function UserStoryImage({
    userImageUrl,
    userStoryClick,
    handleUserStoryBack,
    myImageUrl,
    handleMyStoryBack,
    trendingUserStoryClick,
    trendingImageUrl,
    handleTrendingStoryBack
}) {
    const [followButtonClick, setFollowButtonnClick] = useState(false);

    const handleFollowButtonClick = () => {
        setFollowButtonnClick(!followButtonClick);
    }
    return (
        <>  
            {
            trendingUserStoryClick ? (
                <div className="image-view">
                <button
                    className="back-button"
                    onClick={
                        handleTrendingStoryBack
                    }
                >
                    ←
                </button>
                <button className="follow-button" onClick={handleFollowButtonClick}>{!followButtonClick ? "Follow" : "Following"}</button>
                <img
                    src={trendingImageUrl}
                    alt="Story"
                    className="full-screen-image"
                />
            </div>
            ) : (
                <>
                <div className="image-view">
                <button
                    className="back-button"
                    onClick={
                        userStoryClick ? handleUserStoryBack : handleMyStoryBack
                    }
                >
                    ←
                </button>
                <img
                    src={userStoryClick ? userImageUrl : myImageUrl}
                    alt="Story"
                    className="full-screen-image"
                />
            </div>
     
                </>
            )
        }   
        </>
    )
}

export default UserStoryImage;
