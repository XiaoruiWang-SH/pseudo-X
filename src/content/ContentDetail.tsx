/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-07 22:02:34
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-09 12:01:41
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import { type PostItem } from "../data/PostsProvider";
import React, { useContext, useEffect, useRef } from "react";
import { TasksContext } from "../data/PostsProvider";
import back from "../assets/back.svg"
import { PostCell, TopBar } from "./Home";
import { useNavigate, useParams } from "react-router";
import user from "../assets/user.svg"


const comment = [
    {
        commentId: "001",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "001: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "002",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "002: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "003",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "003: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "004",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "004: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "005",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "005: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "006",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "001: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "007",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "002: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "008",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "003: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "009",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "004: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        commentId: "010",
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "005: This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    }
];

export const ContentDetail = () => {
    let navigate = useNavigate();
    let postParams = useParams();
    let posts = useContext(TasksContext) ?? [];
    let post = posts.find((ele) => {
        return ele.postId == postParams.postId;
    })

    return (
        <>
            <div className="flex items-center mx-2 gap-5 bg-white h-[40px]">
                <img className="w-[20px] h-[20px] p-0.5 px-1 hover:bg-gray-300 hover:rounded-[10px]" src={back} alt="back"
                    onClick={() => {
                        navigate(-1);
                    }} />
                <div className="text-xl font-semibold">Post</div>
            </div>
            <div className="h-[calc(100dvh-60px)] overflow-scroll">
                <PostCell {...post!} />
                <div>
                    {comment.map((ele) =>
                        <CommentCell key={ele.commentId} userName={ele.userName} userAccount={ele.userAccount} time={ele.time} content={ele.content} />
                    )}
                </div>
            </div>
        </>
    );
}

const CommentCell = ({ userName, userAccount, time, content }: { userName: string, userAccount: string, time: string, content: string }) => {
    return (
        <div className="flex items-start gap-2.5 px-2.5 py-0.5 border-b-[0.5px] border-gray-300 hover:bg-gray-100">
            <img src={user} alt="userimg" />
            <div className="flex flex-col">
                <TopBar userName={userName} userAccount={userAccount} time={time} />
                <div>
                    {content}
                </div>
            </div>
        </div>
    );
};

