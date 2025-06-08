/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-08 22:28:56
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-08 23:06:26
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import { useReducer, createContext } from "react";

export interface PostItem {
    postId: string,
    userImgUrl: string,
    userName: string,
    userAccount: string,
    time: string,
    content: string,
    images: string[],
    commentCount: string,
    repostCount: string,
    likeCount: string,
    viewCount: string
}


const sources: PostItem[] = [
    {
        postId: "001",
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
        postId: "002",
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
        postId: "003",
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
        postId: "004",
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
        postId: "005",
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

export const TasksContext = createContext<null | PostItem[]>(null);
export const TasksDispatchContext = createContext<null | React.ActionDispatch<[action: {
    type: string;
    id: string;
}]>>(null);

export const PostsProvider = ({ children }: { children: React.ReactElement }) => {

    const tasksReducer = (tasks: PostItem[], action: { type: string, id: string }) => {
        switch (action.type) {
            case "Home": {
                return tasks;
            }
            default: {
                return tasks;
            }
        }
    };

    const [tasks, dispatch] = useReducer(tasksReducer, sources);


    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
};