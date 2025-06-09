/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-02 22:36:32
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-09 20:11:28
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import search from "../assets/search.svg"
import more from "../assets/more_account.svg"
import user from "../assets/user.svg"
import { useEffect, useState } from "react";
import { useLocation } from "react-router";


const happendingContent = [
    {
        title: "Trending in Switzerland",
        topic: "Amerika",
        number: "17.1K"
    },
    {
        title: "Sports Trending",
        topic: "Ronaldo",
        number: "203K"
    },
    {
        title: "Trending in Switzerland",
        topic: "Helena",
        number: "25.1K"
    },
    {
        title: "Business & Finace Trending",
        topic: "#Silver",
        number: "5,895"
    }
];

const followContent = [
    {
        userName: "Planet PostareSQL",
        userAccount: "planetpostgres",
        head: "https://xxx.userhead.png"
    },
    {
        userName: "MySQL",
        userAccount: "MySQL",
        head: "https://xxx.userhead.png"
    },
    {
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        head: "https://xxx.userhead.png"
    },
];

export const ExtralContainer = () => {
    let location = useLocation();
    let [isExplore, setIsExplore] = useState(false);

    useEffect(() => {
        let route = location.pathname.split("/")[1];
        switch (route) {
            case "explore": {
                setIsExplore(true);
                break;
            }
            default: {
                setIsExplore(false);
            }
        }

    }, [location]);

    return (
        <div className="py-2.5 mx-5 flex flex-col gap-[20px]">
            {
                isExplore ?
                    <></>
                    :
                    <>
                        <SearchBar />
                        <WhatHappending />
                    </>
            }
            <WhoToFollow />
        </div>
    );
};


const SearchBar = () => {
    return (
        <div className="flex items-center ">
            <div className="border-[0.5px] border-black h-10 w-full rounded-[20px] flex items-center gap-1.5">
                <img className="w-[20px] ml-2.5" src={search} alt="search" />
                <input className="outline-0" type="text" name="search" placeholder="search" id="search" />
            </div>
        </div>
    );
}

const WhatHappending = () => {
    return (
        <div className="border-[0.5px] border-black rounded-[10px] w-full flex flex-col p-2.5 gap-2.5">

            <div className="font-bold text-lg">What's happending</div>
            <div className="flex flex-col gap-2.5">
                {
                    happendingContent.map((ele, index) => <TrendCell key={index} title={ele.title} topic={ele.topic} number={ele.number} />)
                }
            </div>
            <div>
                <button className="text-blue-400 hover:text-purple-500 text-sm" onClick={() => {
                    console.log("show more whats happending");
                }}>Show more</button>
            </div>
        </div>
    );
}


const TrendCell = ({ title, topic, number }: {
    title: string,
    topic: string,
    number: string
}) => {
    return (
        <div className="flex justify-between items-start">
            <div className="flex flex-col">
                <div className="text-xs text-gray-500">{title}</div>
                <div className="text-sm">{topic}</div>
                <div className="text-xs text-gray-500">{number} posts</div>
            </div>
            <img className="w-[18px]" src={more} alt="more" />
        </div>
    );
}


const WhoToFollow = () => {
    return (
        <div className="border-[0.5px] border-black rounded-[10px] w-full flex flex-col p-2.5 gap-2.5">

            <div className="font-bold text-lg">Who to follow</div>
            <div className="flex flex-col gap-2.5">
                {
                    followContent.map((ele, index) => <FollowCell key={index} userName={ele.userName} userAccount={ele.userAccount} head={ele.head} />)
                }
            </div>
            <div>
                <button className="text-blue-400 hover:text-purple-500 text-sm" onClick={() => {
                    console.log("show more who to follow")
                }}>Show more</button>
            </div>
        </div>
    );
}

const FollowCell = ({ userName, userAccount, head }: { userName: string, userAccount: string, head: string }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                <img src={user} alt="user" />
                <div className="flex flex-col">
                    <div className="text-sm hover:underline">{userName}</div>
                    <div className="text-xs text-gray-500">@{userAccount}</div>
                </div>
            </div>
            <button className="text-white bg-black py-1 px-2.5 rounded-2xl text-sm hover:bg-gray-700" onClick={() => {
                console.log(`follow user ${userAccount}`);
            }}>Follow</button>
        </div>
    );
}