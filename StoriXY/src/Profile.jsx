import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";
import UserStoryImage from "./UserStoryImage";
import Edits from "./Edits";
import Share from './Share';
import Message from "./Message";

const Profile = ({ user, userClick, handleBackProfileBtn, setTrendingUserNameClick, story, trendingUserNameClick }) => {
    const [stories] = useState([
        {
            date: "2025-02-20",
            title: "Trip to the mountains",
            image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            date: "2025-02-22",
            title: "Beach sunset",
            image: "https://images.pexels.com/photos/30117400/pexels-photo-30117400/free-photo-of-silhouette-of-surfer-at-sunset-in-taghazout.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            date: "2025-02-25",
            title: "Coffee time",
            image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            date: "2025-02-20",
            title: "Grassland",
            image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            date: "2025-02-22",
            title: "The beauty of lake",
            image: "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            date: "2025-02-25",
            title: "Dosa time",
            image: "https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ]);

    const [userStoryClick, setUserStoryClick] = useState(false);
    const [userImageUrl, setUserImageUrl] = useState("");

    const [myStoryClick, setMyStoryClick] = useState(false);
    const [myImageUrl, setMyImageUrl] = useState("");

    const [editButtonClick, setEditButtonClick] = useState(false);

    const handleUserStoryImage = (imageUrl) => {
        setUserStoryClick(true);
        setUserImageUrl(imageUrl);
    };

    const handleUserStoryBack = () => {
        setUserStoryClick(false);
    }

    const handleMyStoryImage = (imageUrl) => {
        setMyStoryClick(true);
        setMyImageUrl(imageUrl);
    }

    const handleMyStoryBack = () => {
        setMyStoryClick(false);
    }
 
    const handleMyEditData = () => {
        setEditButtonClick(true);
    }

    const [profileImg, setProfileImg] = useState("https://images.pexels.com/photos/4623518/pexels-photo-4623518.jpeg?auto=compress&cs=tinysrgb&w=800");
    const [name, setName] = useState("John Doe");
    const [bio, setBio] = useState("Web Developer | Traveler");

    const [otherProfileStoryImg, setOthersProfileStoryImg] = useState("");
    const [othersProfileStoryImgClick, setOthersProfileStoryImgClick] = useState(false);

    const updateProfile = (updateName, updateBio, updateImage) => {
        setName(updateName);
        setBio(updateBio);
        setProfileImg(updateImage);
    }

    const handleOthersProfileBackBtn = () => {
        setTrendingUserNameClick(false);
    }

    const handleUserProfileStoryImage = (storiesImg) => {
        setOthersProfileStoryImgClick(true);
        setOthersProfileStoryImg(storiesImg);
        console.log("ig storygvtr");
        console.log(storiesImg);
    }

    const [shareClick, setShareClick] = useState(false);
    const [shareUserName, setShareUserName] = useState("");
    const [shareUserImage, setShareUserImage] = useState("");
    const handleShareProfile = (name, image) => {
        setShareClick(true);
        setShareUserName(name);
        setShareUserImage(image);
    }

    const handleShareBackBtn = () => {
        setShareClick(false);
    }

    const [messageClick, setMessageClick] = useState(false);
    const [messageProfileName, setMessageProfileName] = useState("");
    const [messageProfileImage, setMessageProifleImage] = useState("");
    const handleMessageProfile = (name, image) => {
        setMessageClick(true);
        setMessageProfileName(name);
        setMessageProifleImage(image);
    }

    const handleMessageBackBtn = () => {
        setMessageClick(false);
    }

    return (
        <>
        
        { shareClick && <Share name={shareUserName} profileImage={shareUserImage} handleShareBackBtn={handleShareBackBtn}/>}
        
        {messageClick ? (
            <Message name={messageProfileName} profileImage={messageProfileImage} handleMessageBackBtn={handleMessageBackBtn} />)
        : (
            othersProfileStoryImgClick ? (
                <UserStoryImage othersStoryImg={otherProfileStoryImg} othersStoryClick={othersProfileStoryImgClick} setOthersProfileStoryImgClick={setOthersProfileStoryImgClick}/> 
            ) : (
                trendingUserNameClick ? (
                    <div className={`profile-container ${shareClick ? "blurred-bg" : ""}`}>
                    <span
                        className="material-symbols-outlined profile-back-btn"
                        onClick={handleOthersProfileBackBtn}
                    >
                        arrow_back
                    </span>
                    <div className="profile-header">
                        <img src={story.image} className="profile-icon" />
                        <div>
                            <h2 className="profile-name">{story.name}</h2>
                            <p className="profile-bio">{story.bio}</p>
                            <div className="profile-stats">
                                <span>
                                    <strong>{story.stories}</strong> Stories
                                </span>
                                <span>
                                    <strong>{story.followers}</strong> Followers
                                </span>
                                <span>
                                    <strong>{story.following}</strong> Following
                                </span>
                            </div>
                            <div className="edit-share-button">
                                <button className="edit-profile-btn" onClick={() => handleMessageProfile(story.name, story.image)}>
                                    Message
                                </button>
                                <button className="share-profile-btn" onClick={() => handleShareProfile(story.name, story.image)}>
                                    Share Profile
                                </button>
                            </div>
                        </div>
                    </div>
        
                    <div className="stories-section">
                        <h3 className="stories-title">Stories</h3>
                        <div className="stories-list">
                            {story.stories_length.length > 0 ? (
                                story.stories_length.map((story, index) => (
                                    <div key={index} className="story-item">
                                        <img
                                            src={story.image}
                                            alt={story.title}
                                            className="story-image"
                                            onClick={() =>
                                                handleUserProfileStoryImage(
                                                    story.image
                                                )
                                            }
                                        />
                                        <div className="story-info">
                                            <strong>{story.date}:</strong>
                                            <p className="story-title">
                                                {story.title}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="noStory">
                                    <h3>No story found</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                ) : (
                    editButtonClick ? (
                        <Edits userImg={profileImg} setEditButtonClick={setEditButtonClick}
                        initialName={name}
                            initialBio={bio} 
                            updateProfile={updateProfile}/>
                    ) : (
                        userStoryClick ? (
                            <UserStoryImage userImageUrl={userImageUrl} handleUserStoryBack={handleUserStoryBack} userStoryClick={userStoryClick} />
                        ) : userClick ? (
                            <div className={`profile-container ${shareClick ? "blurred-bg" : ""}`}>
                                <span
                                    className="material-symbols-outlined profile-back-btn"
                                    onClick={handleBackProfileBtn}
                                >
                                    arrow_back
                                </span>
                                <div className="profile-header">
                                    <img src={user.img} className="profile-icon" />
                                    <div>
                                        <h2 className="profile-name">{user.name}</h2>
                                        <p className="profile-bio">{user.bio}</p>
                                        <div className="profile-stats">
                                            <span>
                                                <strong>{user.stories}</strong> Stories
                                            </span>
                                            <span>
                                                <strong>{user.followers}</strong> Followers
                                            </span>
                                            <span>
                                                <strong>{user.following}</strong> Following
                                            </span>
                                        </div>
                                        <div className="edit-share-button">
                                            <button className="edit-profile-btn">
                                                Message
                                            </button>
                                            <button className="share-profile-btn" onClick={() => handleShareProfile(user.name, user.img)}>
                                                Share Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="stories-section">
                                    <h3 className="stories-title">Stories</h3>
                                    <div className="stories-list">
                                        {user.stories_length.length > 0 ? (
                                            user.stories_length.map((story, index) => (
                                                <div key={index} className="story-item">
                                                    <img
                                                        src={story.image}
                                                        alt={story.title}
                                                        className="story-image"
                                                        onClick={() =>
                                                            handleUserStoryImage(
                                                                story.image
                                                            )
                                                        }
                                                    />
                                                    <div className="story-info">
                                                        <strong>{story.date}:</strong>
                                                        <p className="story-title">
                                                            {story.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="noStory">
                                                <h3>No story found</h3>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            myStoryClick ? (
                                <UserStoryImage myImageUrl={myImageUrl} handleMyStoryBack={handleMyStoryBack}/>
                            ) : (
                                <div className={`profile-container ${shareClick ? "blurred-bg" : ""}`}>
                                <div className="profile-header">
                                    <img src={profileImg} className="profile-icon"/>
                                    <div>
                                        <h2 className="profile-name">{name}</h2>
                                        <p className="profile-bio">
                                            {bio}
                                        </p>
                                        <div className="profile-stats">
                                            <span>
                                                <strong>6</strong> Stories
                                            </span>
                                            <span>
                                                <strong>667</strong> Followers
                                            </span>
                                            <span>
                                                <strong>348</strong> Following
                                            </span>
                                        </div>
                                        <div className="edit-share-button">
                                            <button className="edit-profile-btn" onClick={handleMyEditData}>
                                                Edit Profile
                                            </button>
                                            <button className="share-profile-btn" onClick={() => handleShareProfile(name, profileImg)}>
                                                Share Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="stories-section">
                                    <h3 className="stories-title">Stories</h3>
                                    <div className="stories-list">
                                        {stories.map((story, index) => (
                                            <div key={index} className="story-item">
                                                <img
                                                    src={story.image}
                                                    alt={story.title}
                                                    className="story-image"
                                                onClick={() => handleMyStoryImage(story.image)}/>
                                                <div className="story-info">
                                                    <strong>{story.date}:</strong>
                                                    <p className="story-title">
                                                        {story.title}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            )
                        )
                    )
                )
            )

        )}
        </>
    );
};

export default Profile;
