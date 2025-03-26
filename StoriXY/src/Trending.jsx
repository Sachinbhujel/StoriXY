import React, { useState } from "react";
import "./App.css";
import UserStoryImage from "./UserStoryImage";
import Profile from "./Profile";

const trendingStories = [
    {
        id: 1,
        name: "Sophia",
        image: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Car Lover",
            stories: 1,
            followers: 24,
            following: 23,
            stories_length: [
                {
                    date: "2025-03-01",
                    title: "New York Car",
                    image: "https://images.pexels.com/photos/18941949/pexels-photo-18941949/free-photo-of-yellow-new-york-taxi-in-front-of-new-york-times-building.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ]
    },
    {
        id: 2,
        name: "Liam",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Be Polite!!!",
            stories: 2,
            followers: 304,
            following: 280,
            stories_length: [
                {
                    date: "2025-02-14",
                    title: "Pookie Dog",
                    image: "https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
                {
                    date: "2025-02-16",
                    title: "Nmaste India",
                    image: "https://images.pexels.com/photos/634242/pexels-photo-634242.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ]
    },
    {
        id: 3,
        name: "Olivia",
        image: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Drink Water....",
            stories: 0,
            followers: 4,
            following: 9,
            stories_length: [
            ]
    },
    {
        id: 4,
        name: "Noah",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "living my own life",
            stories: 1,
            followers: 54,
            following: 43,
            stories_length: [
                {
                    date: "2025-02-17",
                    title: "Young Women",
                    image: "https://images.pexels.com/photos/18955781/pexels-photo-18955781/free-photo-of-young-woman-talking-on-phone-while-doing-remote-working-at-park.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ]
    },
    {
        id: 5,
        name: "Souhly",
        image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=800",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Demon Slayer",
            stories: 1,
            followers: 74,
            following: 83,
            stories_length: [
                {
                    date: "2025-02-18",
                    title: "No Caption",
                    image: "https://images.pexels.com/photos/4321585/pexels-photo-4321585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
            ]
    },
    {
        id: 6,
        name: "Avary",
        image: "https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=800",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Avocado!!",
            stories: 0,
            followers: 90,
            following: 24,
            stories_length: [
            ]
    },
    {
        id: 7,
        name: "Pikyu",
        image: "https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=800",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Living in delulu",
            stories: 1,
            followers: 12,
            following: 24,
            stories_length: [
                {
                    date: "2025-02-19",
                    title: "Cute Dog",
                    image: "https://images.pexels.com/photos/4452259/pexels-photo-4452259.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ]
    },
    {
        id: 8,
        name: "Tryne",
        image: "https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=800",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Why sad? Huh",
            stories: 0,
            followers: 89,
            following: 69,
            stories_length: [
            ]
    },
];

const influencerStories = [
    {
        id: 1,
        name: "Charlotte",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOe1zrqK40XbyZO0M79V2jEZMQkM27gao_O51JixRMA&s",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Nothing...",
            stories: 1,
            followers: 256,
            following: 787,
            stories_length: [
                {
                    date: "2025-02-20",
                    title: "Elegant Brussels",
                    image: "https://images.pexels.com/photos/31306289/pexels-photo-31306289/free-photo-of-elegant-brussels-architecture-in-soft-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ]
    },
    {
        id: 2,
        name: "Kylie Jenner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecKdC3W7y0g9sswxaHGQEG3s8PEujRHGhAJIiN69A1w&s",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Just Chill Vibe",
            stories: 2,
            followers: `2M`,
            following: 987,
            stories_length: [
                {
                    date: "2025-02-20",
                    title: "Photography America",
                    image: "https://images.pexels.com/photos/31305639/pexels-photo-31305639/free-photo-of-portrait-of-man-near-washington-monument.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
                {
                    date: "2025-02-21",
                    title: "Historic Towm Hall",
                    image: "https://images.pexels.com/photos/31282634/pexels-photo-31282634/free-photo-of-elegant-historic-town-hall-interior-design.jpeg?auto=compress&cs=tinysrgb&w=600",
                },
            ]
    },
    {
        id: 3,
        name: "Emma",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREihPyQ2zloa6QnTAa7rq62hAc13um-9MtcRCc8K9KcQ&s",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Be Your Own",
            stories: 0,
            followers: `2M`,
            following: 231,
            stories_length: [
            ]
    },
    {
        id: 4,
        name: "Ariana",
        image: "https://static.tildacdn.com/tild3465-3734-4635-b832-353534663234/30117.png",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Song Check",
            stories: 2,
            followers: `34M`,
            following: 239,
            stories_length: [
                {
                    date: "2025-02-20",
                    title: "Marshmallows",
                    image: "https://images.pexels.com/photos/15972884/pexels-photo-15972884/free-photo-of-close-up-of-marshmallows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                },
                {
                    date: "2025-02-15",
                    title: "Elegant Model",
                    image: "https://images.pexels.com/photos/31317480/pexels-photo-31317480/free-photo-of-elegant-model-in-flowing-pink-gown-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                },
            ]
    },
    {
        id: 5,
        name: "Selena",
        image: "https://optim.tildacdn.one/tild6130-3931-4235-b638-616462323232/-/format/webp/30140.png",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Yours...",
            stories: 0,
            followers: `12M`,
            following: 678,
            stories_length: [
            ]
    },
    {
        id: 6,
        name: "Beyonce",
        image: "https://static.tildacdn.com/tild6132-6164-4861-b937-323634666539/30152.png",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "What did you say?",
            stories: 1,
            followers: `7M`,
            following: 90,
            stories_length: [
                {
                    date: "2025-03-22",
                    title: "Autumn Leaves",
                    image: "https://images.pexels.com/photos/19766277/pexels-photo-19766277/free-photo-of-colorful-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                },
            ]
    },
    {
        id: 7,
        name: "Taylor",
        image: "https://static.tildacdn.com/tild3339-3561-4232-b232-386263306331/30155.png",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "Love me like you do!",
            stories: 0,
            followers: `21M`,
            following: 986,
            stories_length: [
            ]
    },
    {
        id: 8,
        name: "Kendall",
        image: "https://static.tildacdn.com/tild3337-6464-4565-a361-376132393236/colleagues-in-office.png",
        img: "https://images.pexels.com/photos/13894435/pexels-photo-13894435.jpeg?auto=compress&cs=tinysrgb&w=800",
            bio: "huh stalking!",
            stories: 1,
            followers: `12M`,
            following: 321,
            stories_length: [
                {
                    date: "2025-02-10",
                    title: "Charming Kyoto",
                    image: "https://images.pexels.com/photos/31236816/pexels-photo-31236816/free-photo-of-charming-kyoto-bookstore-street-scene-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                },
            ]
    },
];

const indianStories = [
    {
        id: 1,
        name: "Virat Kohli",
        image: "https://i1.feedspot.com/original/5606893.jpg",
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
            ]
    },
    {
        id: 2,
        name: "Bhuvan",
        image: "https://i1.feedspot.com/original/5612342.jpg",
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
            ]
    },
    {
        id: 3,
        name: "Tanmay",
        image: "https://i1.feedspot.com/original/5612345.jpg",
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
            ]
    },
    {
        id: 4,
        name: "Kusha",
        image: "https://i1.feedspot.com/original/5612343.jpg",
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
            ]
    },
    {
        id: 5,
        name: "Ashish",
        image: "https://i1.feedspot.com/original/5612344.jpg",
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
            ]
    },
    {
        id: 6,
        name: "Nikhil",
        image: "https://i1.feedspot.com/original/5612346.jpg",
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
            ]
    },
    {
        id: 7,
        name: "Srishti",
        image: "https://i1.feedspot.com/original/5612354.jpg",
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
            ]
    },
    {
        id: 8,
        name: "Dolly Singh",
        image: "https://i1.feedspot.com/original/5612350.jpg",
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
            ]
    },
];

const indianActorStories = [
    {
        id: 1,
        name: "Shahrukh Khan",
        image: "https://www.boxofficeindia.com/images/actors/img1381589927819216841.jpg",
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
            ]
    },
    {
        id: 2,
        name: "Akshay Kumar",
        image: "https://www.boxofficeindia.com/images/actors/img1389915166750912287.jpg",
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
            ]
    },
    {
        id: 3,
        name: "Hrithik Roshan",
        image: "https://www.boxofficeindia.com/images/actors/img138082451834768460.jpg",
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
            ]
    },
    {
        id: 4,
        name: "Ranbir Kapoor",
        image: "https://www.boxofficeindia.com/images/actors/img1371579277782695311.jpg",
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
            ]
    },
    {
        id: 5,
        name: "Ajay Devgn",
        image: "https://www.boxofficeindia.com/images/actors/img1371578274503134131.jpg",
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
            ]
    },
    {
        id: 6,
        name: "Aamir Khan",
        image: "https://www.boxofficeindia.com/images/actors/img13715782421216911107.jpg",
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
            ]
    },
    {
        id: 7,
        name: "Salman Khan",
        image: "https://www.boxofficeindia.com/images/actors/img13895131861353198038.jpg",
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
            ]
    },
    {
        id: 8,
        name: "Shahid Kapoor",
        image: "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/09/Shahid-Kapoor-5-444-322x322.jpg",
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
            ]
    },
];

function Trending() {
    const [trendingUserStoryClick, setTrendingUserStoryClick] = useState(false);
    const [trendingImageUrl, setTrendingImageUrl] = useState("");

    const [trendingUserNameClick, setTrendingUserNameClick] = useState(false);
    const [trendingUserClickData, setTrendingUserClickData] = useState("");

    const handleTrendingUserStory = (trendingUserImgUrl) => {
        setTrendingUserStoryClick(true);
        setTrendingImageUrl(trendingUserImgUrl);
    };

    const handleTrendingStoryBack = () => {
        setTrendingUserStoryClick(false);
    };

    const handleUserNameProfile = (story) => {
        setTrendingUserNameClick(true);
        setTrendingUserClickData(story);
    };

    return (
        <>
            {trendingUserNameClick ? (
                <Profile setTrendingUserNameClick={setTrendingUserNameClick} 
                story={trendingUserClickData} trendingUserNameClick={trendingUserNameClick}/>
            ) : trendingUserStoryClick ? (
                <UserStoryImage
                    trendingImageUrl={trendingImageUrl}
                    trendingUserStoryClick={trendingUserStoryClick}
                    handleTrendingStoryBack={handleTrendingStoryBack}
                />
            ) : (
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
                                    onClick={() =>
                                        handleTrendingUserStory(story.image)
                                    }
                                />
                                <p
                                    className="trending-name"
                                    onClick={() => handleUserNameProfile(story)}
                                >
                                    {story.name}
                                </p>
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
                                        onClick={() =>
                                            handleTrendingUserStory(story.image)
                                        }
                                    />
                                    <p
                                        className="trending-name"
                                        onClick={() => handleUserNameProfile(story)}
                                    >
                                        {story.name}
                                    </p>
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
                                        onClick={() =>
                                            handleTrendingUserStory(story.image)
                                        }
                                    />
                                    <p
                                        className="trending-name"
                                        onClick={() => handleUserNameProfile(story)}
                                    >
                                        {story.name}
                                    </p>
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
                                        onClick={() =>
                                            handleTrendingUserStory(story.image)
                                        }
                                    />
                                    <p
                                        className="trending-name"
                                        onClick={() => handleUserNameProfile(story)}
                                    >
                                        {story.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Trending;
