import { useState } from "react";
import "./App.css";

const Search = () => {
  const [suggestions, setSuggestions] = useState([
    { id: 1, name: "Camalia Votus", followed: false, img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 2, name: "Janey", followed: false, img: "https://media.istockphoto.com/id/1221208909/photo/img-9593.jpg?b=1&s=612x612&w=0&k=20&c=5mwppG23Led1M7dpp4aJu29OA35LXPrXA8BckTO7xO8=" },
    { id: 3, name: "Mike Johnson", followed: false, img: "https://media.istockphoto.com/id/1459324095/photo/img_6189.jpg?b=1&s=612x612&w=0&k=20&c=dSmFD0pja_HXocpC53jBUWxHaonTZuLfaTCVGZKEfZM=" },
    { id: 4, name: "Emily Brown", followed: false, img: "https://images.pexels.com/photos/8453568/pexels-photo-8453568.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 5, name: "Annie", followed: false, img: "https://images.pexels.com/photos/30913847/pexels-photo-30913847/free-photo-of-indoor-artistic-scene-with-calligraphy-and-cat.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" },
  ]);

  const handleFollow = (id) => {
    setSuggestions((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, followed: !user.followed } : user
      )
    );
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="suggestions-list">
        {suggestions.map((user) => (
          <div key={user.id} className="suggestion-item">
            <div className="suggest-profile">
                <img src={user.img} alt={user.id} className="user-img" />
                <span>{user.name}</span>
            </div>
            <button
              className={`follow-btn ${user.followed ? "following" : ""}`}
              onClick={() => handleFollow(user.id)}
            >
              {user.followed ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;