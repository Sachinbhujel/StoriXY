import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./Search";
import StoryBar from "./StoryBar";
import Trending from "./Trending";
import Profile from "./Profile";
import AddStory from "./AddStory";

function Bottom() {
    const [active, setActive] = useState("home");
    const [showAddStory, setShowAddStory] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleClick = (tab) => {
        if (showAddStory) return;

        if (tab === "addStory") {
            setShowAddStory(true);
        } else {
            setActive(tab);
        }
        console.log(tab);
    };

    const handleUploadImage = (image) => {
        setUploadedImages((prevImages) => [...prevImages, image]);
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
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <StoryBar uploadedImages={uploadedImages} />
                            }
                        />
                        <Route path="/search" element={<Search />} />
                        <Route path="/trending" element={<Trending />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route
                            path="/addStory"
                            element={
                                <AddStory
                                    onBack={() => navigate("/home")}
                                    onUpload={handleUploadImage}
                                />
                            }
                        />
                    </Routes>
                    <div className="bottom_bar">
                        <Link
                            to="/"
                            className={`home ${
                                active === "home" ? "active" : ""
                            }`}
                            onClick={() => handleClick("home")}
                        >
                            <span className="material-symbols-outlined">
                                home
                            </span>
                        </Link>
                        <Link
                            to="/search"
                            className={`search ${
                                active === "search" ? "active" : ""
                            }`}
                            onClick={() => handleClick("search")}
                        >
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </Link>
                        <div
                            className="plus"
                            onClick={() => navigate("/addStory")}
                        >
                            <p>+</p>
                        </div>
                        <Link
                            to="/trending"
                            className={`trending ${
                                active === "trending" ? "active" : ""
                            }`}
                            onClick={() => handleClick("trending")}
                        >
                            <span className="material-symbols-outlined">
                                trending_up
                            </span>
                        </Link>
                        <Link
                            to="/profile"
                            className={`profile ${
                                active === "profile" ? "active" : ""
                            }`}
                            onClick={() => handleClick("profile")}
                        >
                            <span className="material-symbols-outlined">
                                person
                            </span>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
}

export default Bottom;
