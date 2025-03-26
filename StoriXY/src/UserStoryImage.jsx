import React, {useState} from "react";

function UserStoryImage({
    userImageUrl,
    userStoryClick,
    handleUserStoryBack,
    myImageUrl,
    handleMyStoryBack,
    trendingUserStoryClick,
    trendingImageUrl,
    handleTrendingStoryBack,
    othersStoryImg,
    othersStoryClick
}) {
    const [followButtonClick, setFollowButtonClick] = useState(false);

    const handleFollowButtonClick = () => {
        setFollowButtonClick(!followButtonClick);
    }
    
    return (
        <>  
        {
            othersStoryClick ? (
                <div className="image-view">
                <button
                    className="back-button"
                    onClick={
                        handleTrendingStoryBack
                    }
                >
                    ←
                </button>
                <img
                    src={othersStoryImg}
                    alt="Story"
                    className="full-screen-image"
                />
            </div>
            ) : (
                trendingUserStoryClick? (
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
                        alt="Storytyt"
                        className="full-screen-image"
                    />
                </div>
         
                    </>
                )
            )
        }
        </>
    )
}

export default UserStoryImage;
