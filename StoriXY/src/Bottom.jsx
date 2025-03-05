import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import StoryBar from './StoryBar';
import Trending from './Trending';
import Profile from './Profile';
import AddStory from './AddStory';

function Bottom() {
    const [active, setActive] = useState("home");
    const [showAddStory, setShowAddStory] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleClick = (tab) => {
        if (showAddStory) return; 

        if (tab === "addStory") {
            setShowAddStory(true);
        } else {
            setActive(tab);
        }
    };

    const handleUploadImage = (image) => {
        setUploadedImage(image);
    };

    return (
        <>
            {showAddStory ? (
                <AddStory 
                    onBack={() => setShowAddStory(false)} 
                    onUpload={handleUploadImage} 
                />
            ) : (
                <>
                    {active === "home" && <StoryBar uploadedImage={uploadedImage} />}
                    {active === "search" && <Search />}
                    {active === "trending" && <Trending />}
                    {active === "profile" && <Profile />}

                    <div className='bottom_bar'>
                        <div
                            className={`home ${active === "home" ? "active" : ""}`}
                            onClick={() => handleClick("home")}
                        >
                            <span className="material-symbols-outlined">home</span>
                        </div>
                        <div
                            className={`search ${active === "search" ? "active" : ""}`}
                            onClick={() => handleClick("search")}
                        >
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <div className="plus" onClick={() => setShowAddStory(true)}>
                            <p>+</p>
                        </div>
                        <div
                            className={`trending ${active === "trending" ? "active" : ""}`}
                            onClick={() => handleClick("trending")}
                        >
                            <span className="material-symbols-outlined">trending_up</span>
                        </div>
                        <div
                            className={`profile ${active === "profile" ? "active" : ""}`}
                            onClick={() => handleClick("profile")}
                        >
                            <span className="material-symbols-outlined">person</span>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Bottom;
