import React from "react";
import "./App.css";

const trendingStories = [
    {
        id: 1,
        name: "Sophia",
        image: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 2,
        name: "Liam",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 3,
        name: "Olivia",
        image: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 4,
        name: "Noah",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 5,
        name: "Souhly",
        image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 6,
        name: "Avary",
        image: "https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 7,
        name: "Pikyu",
        image: "https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 8,
        name: "Tryne",
        image: "https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

const influencerStories = [
    {
        id: 1,
        name: "Charlotte",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOe1zrqK40XbyZO0M79V2jEZMQkM27gao_O51JixRMA&s",
    },
    {
        id: 2,
        name: "Kylie Jenner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecKdC3W7y0g9sswxaHGQEG3s8PEujRHGhAJIiN69A1w&s",
    },
    {
        id: 3,
        name: "Emma",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREihPyQ2zloa6QnTAa7rq62hAc13um-9MtcRCc8K9KcQ&s",
    },
    {
        id: 4,
        name: "Ariana",
        image: "https://static.tildacdn.com/tild3465-3734-4635-b832-353534663234/30117.png",
    },
    {
        id: 5,
        name: "Selena",
        image: "https://optim.tildacdn.one/tild6130-3931-4235-b638-616462323232/-/format/webp/30140.png",
    },
    {
        id: 6,
        name: "Beyonce",
        image: "https://static.tildacdn.com/tild6132-6164-4861-b937-323634666539/30152.png",
    },
    {
        id: 7,
        name: "Taylor",
        image: "https://static.tildacdn.com/tild3339-3561-4232-b232-386263306331/30155.png",
    },
    {
        id: 8,
        name: "Kendall",
        image: "https://static.tildacdn.com/tild3337-6464-4565-a361-376132393236/colleagues-in-office.png",
    },
];

const indianStories = [
    {
        id: 1,
        name: "Virat Kohli",
        image: "https://i1.feedspot.com/original/5606893.jpg",
    },
    {
        id: 2,
        name: "Bhuvan",
        image: "https://i1.feedspot.com/original/5612342.jpg",
    },
    {
        id: 3,
        name: "Tanmay",
        image: "https://i1.feedspot.com/original/5612345.jpg",
    },
    {
        id: 4,
        name: "Kusha",
        image: "https://i1.feedspot.com/original/5612343.jpg",
    },
    {
        id: 5,
        name: "Ashish",
        image: "https://i1.feedspot.com/original/5612344.jpg",
    },
    {
        id: 6,
        name: "Nikhil",
        image: "https://i1.feedspot.com/original/5612346.jpg",
    },
    {
        id: 7,
        name: "Srishti",
        image: "https://i1.feedspot.com/original/5612354.jpg",
    },
    {
        id: 8,
        name: "Dolly Singh",
        image: "https://i1.feedspot.com/original/5612350.jpg",
    },
];

const indianActorStories = [
    {
        id: 1,
        name: "Shahrukh Khan",
        image: "https://www.boxofficeindia.com/images/actors/img1381589927819216841.jpg",
    },
    {
        id: 2,
        name: "Akshay Kumar",
        image: "https://www.boxofficeindia.com/images/actors/img1389915166750912287.jpg",
    },
    {
        id: 3,
        name: "Hrithik Roshan",
        image: "https://www.boxofficeindia.com/images/actors/img138082451834768460.jpg",
    },
    {
        id: 4,
        name: "Ranbir Kapoor",
        image: "https://www.boxofficeindia.com/images/actors/img1371579277782695311.jpg",
    },
    {
        id: 5,
        name: "Ajay Devgn",
        image: "https://www.boxofficeindia.com/images/actors/img1371578274503134131.jpg",
    },
    {
        id: 6,
        name: "Aamir Khan",
        image: "https://www.boxofficeindia.com/images/actors/img13715782421216911107.jpg",
    },
    {
        id: 7,
        name: "Salman Khan",
        image: "https://www.boxofficeindia.com/images/actors/img13895131861353198038.jpg",
    },
    {
        id: 8,
        name: "Shahid Kapoor",
        image: "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/09/Shahid-Kapoor-5-444-322x322.jpg",
    },
];

function Trending() {
    return (
        <>
            <div className="following-div">
                <h2 className="following-heading">Trending</h2>
                <p>View all</p>
            </div>
            <div className="trending-container">
                {trendingStories.map((story) => (
                    <div key={story.id} className="trending-story">
                        <img
                            src={story.image}
                            alt={story.name}
                            className="trending-img"
                        />
                        <p className="trending-name">{story.name}</p>
                    </div>
                ))}
            </div>
            <div className="another-div">
                <div className="following-div">
                <h2 className="following-heading">Influencer</h2>
                <p>View all</p>
                </div>
                <div className="trending-container">
                {influencerStories.map((story) => (
                    <div key={story.id} className="trending-story">
                        <img
                            src={story.image}
                            alt={story.name}
                            className="trending-img"
                        />
                        <p className="trending-name">{story.name}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="another-div">
                <div className="following-div">
                <h2 className="following-heading">Indian</h2>
                <p>View all</p>
                </div>
                <div className="trending-container">
                {indianStories.map((story) => (
                    <div key={story.id} className="trending-story">
                        <img
                            src={story.image}
                            alt={story.name}
                            className="trending-img"
                        />
                        <p className="trending-name">{story.name}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="another-div">
                <div className="following-div">
                <h2 className="following-heading">Indian Actor</h2>
                <p>View all</p>
                </div>
                <div className="trending-container">
                {indianActorStories.map((story) => (
                    <div key={story.id} className="trending-story">
                        <img
                            src={story.image}
                            alt={story.name}
                            className="trending-img"
                        />
                        <p className="trending-name">{story.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Trending;
