import { useState } from "react";
import "./App.css";
import Profile from "./Profile";

const Search = () => {
    const [suggestions, setSuggestions] = useState([
        {
            id: 1,
            name: "Camalia Votus",
            followed: false,
            img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "huh stalking!",
            stories: 3,
            followers: 34,
            following: 23,
            stories_length: [
                {
                    date: "2025-02-10",
                    title: "Birds Sound",
                    image: "https://images.pexels.com/photos/31190391/pexels-photo-31190391/free-photo-of-high-contrast-black-and-white-birds-in-flight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                },
                {
                    date: "2025-02-12",
                    title: "Photography",
                    image: "https://images.pexels.com/photos/19918538/pexels-photo-19918538/free-photo-of-woman-face-reflected-in-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                },
                {
                    date: "2025-02-15",
                    title: "Aesthetic",
                    image: "https://images.pexels.com/photos/15247738/pexels-photo-15247738/free-photo-of-reflection-of-woman-and-man-in-puddle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                },
            ],
        },
        {
            id: 2,
            name: "Janey",
            followed: false,
            img: "https://media.istockphoto.com/id/1221208909/photo/img-9593.jpg?b=1&s=612x612&w=0&k=20&c=5mwppG23Led1M7dpp4aJu29OA35LXPrXA8BckTO7xO8=",
            bio: "Never Mind....",
            stories: 0,
            followers: 69,
            following: 78,
            stories_length: [],
        },
        {
            id: 3,
            name: "Mike Johnson",
            followed: false,
            img: "https://media.istockphoto.com/id/1459324095/photo/img_6189.jpg?b=1&s=612x612&w=0&k=20&c=dSmFD0pja_HXocpC53jBUWxHaonTZuLfaTCVGZKEfZM=",
            bio: "Sukoon",
            stories: 4,
            followers: 111,
            following: 67,
            stories_length: [
                {
                    date: "2025-03-20",
                    title: "Winter Images",
                    image: "https://images.pexels.com/photos/7099862/pexels-photo-7099862.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                {
                    date: "2025-03-22",
                    title: "Ice skating",
                    image: "https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                {
                    date: "2025-03-25",
                    title: "Drink with friends",
                    image: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                {
                    date: "2025-03-28",
                    title: "Summer",
                    image: "https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ],
        },
        {
            id: 4,
            name: "Emily Brown",
            followed: false,
            img: "https://images.pexels.com/photos/8453568/pexels-photo-8453568.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Seasonal Caty",
            stories: 3,
            followers: 34,
            following: 23,
            stories_length: [
                {
                    date: "2025-02-2",
                    title: "Spring Season",
                    image: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                {
                    date: "2025-02-5",
                    title: "Road to the mountains",
                    image: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                {
                    date: "2025-02-12",
                    title: "Mountains The Nature",
                    image: "https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
            ],
        },
        {
            id: 5,
            name: "Annie",
            followed: false,
            img: "https://images.pexels.com/photos/30913847/pexels-photo-30913847/free-photo-of-indoor-artistic-scene-with-calligraphy-and-cat.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            bio: "Adventure girl...",
            stories: 1,
            followers: 304,
            following: 239,
            stories_length: [
                {
                    date: "2025-03-1",
                    title: "For-Rest",
                    image: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ],
        },
        {
            id: 6,
            name: "Carly",
            followed: false,
            img: "https://images.pexels.com/photos/30954525/pexels-photo-30954525/free-photo-of-elegant-woman-in-white-backless-dress.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            bio: "Camosia",
            stories: 0,
            followers: 44,
            following: 12,
            stories_length: [],
        },
        {
            id: 7,
            name: "Saturn",
            followed: false,
            img: "https://images.pexels.com/photos/30736850/pexels-photo-30736850/free-photo-of-casual-portrait-of-a-man-in-berlin.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            bio: "Don't take it",
            stories: 2,
            followers: 171,
            following: 200,
            stories_length: [
                {
                    date: "2025-03-1",
                    title: "Flowers Beauty",
                    image: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                {
                    date: "2025-03-1",
                    title: "Flowerssss",
                    image: "https://images.pexels.com/photos/74512/pexels-photo-74512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
            ],
        },
        {
            id: 8,
            name: "Beasy",
            followed: false,
            img: "https://images.pexels.com/photos/31024462/pexels-photo-31024462/free-photo-of-fresh-green-pears-in-a-white-bowl.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            bio: "Clumsy girl!! Like i'm exits",
            stories: 0,
            followers: 56,
            following: 78,
            stories_length: [],
        },
        {
            id: 9,
            name: "Everest_life",
            followed: false,
            img: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=800",
            bio: "Wanna go???",
            stories: 1,
            followers: 1236,
            following: 789,
            stories_length: [
                {
                    date: "2025-02-27",
                    title: "Neon Dark",
                    image: "https://images.pexels.com/photos/2449605/pexels-photo-2449605.png?auto=compress&cs=tinysrgb&w=600",
                },
            ],
        },
    ]);
    const [inputText, setInputText] = useState("");
    const [searchProfileClick, setSearchProflieClick] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleFollow = (id) => {
        setSuggestions((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, followed: !user.followed } : user
            )
        );
    };

    const handleSearch = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filterData = suggestions.filter((el) => {
        if (inputText === "") {
            return el;
        } else {
            return el.name.toLowerCase().includes(inputText);
        }
    });

    const handleSearchProfile = (user) => {
        console.log(`Profile id: ${user.id}`);
        setSelectedUser(user);
        setSearchProflieClick(true);
    };

    const handleBackProfileBtn = () => {
      setSearchProflieClick(false);
    }

    return (
        <>
            {searchProfileClick ? (
                <Profile user={selectedUser} userClick={searchProfileClick} handleBackProfileBtn={handleBackProfileBtn} />
            ) : (
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                        onChange={handleSearch}
                    />
                    <div className="suggestions-list">
                        {filterData.map((user) => (
                            <div key={user.id} className="suggestion-item">
                                <div className="suggest-profile">
                                    <img
                                        src={user.img}
                                        alt={user.id}
                                        className="user-img"
                                        onClick={() =>
                                            handleSearchProfile(user)
                                        }
                                    />
                                    <span
                                        onClick={() =>
                                            handleSearchProfile(user)
                                        }
                                    >
                                        {user.name}
                                    </span>
                                </div>
                                <button
                                    className={`follow-btn ${
                                        user.followed ? "following" : ""
                                    }`}
                                    onClick={() => handleFollow(user.id)}
                                >
                                    {user.followed ? "Following" : "Follow"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
