import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./App.css";

const Profile = () => {
  const [stories] = useState([
    { date: "2025-02-20", title: "Trip to the mountains", image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { date: "2025-02-22", title: "Beach sunset", image: "https://images.pexels.com/photos/30117400/pexels-photo-30117400/free-photo-of-silhouette-of-surfer-at-sunset-in-taghazout.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { date: "2025-02-25", title: "Coffee time", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { date: "2025-02-20", title: "Grassland", image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { date: "2025-02-22", title: "The beauty of lake", image: "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { date: "2025-02-25", title: "Dosa time", image: "https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <div>
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-bio">Web Developer | Traveler</p>
          <div className="profile-stats">
            <span><strong>6</strong> Stories</span>
            <span><strong>667</strong> Followers</span>
            <span><strong>348</strong> Following</span>
          </div>
          <div className="edit-share-button">
            <button className="edit-profile-btn">Edit Profile</button>
            <button className="share-profile-btn">Share Profile</button>
          </div>
        </div>
      </div>

      <div className="stories-section">
        <h3 className="stories-title">Stories</h3>
        <div className="stories-list">
          {stories.map((story, index) => (
            <div key={index} className="story-item">
              <img src={story.image} alt={story.title} className="story-image" />
              <div className="story-info">
                <strong>{story.date}:</strong>
                <p className="story-title">{story.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;