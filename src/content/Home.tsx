/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-02 22:34:33
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-07 23:07:46
 * @Description:
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import user from "../assets/user.svg"
import more_account from "../assets/more_account.svg"
import contentImg from "./imgs/contentImage1.jpeg"
import comments from "../assets/comments.svg"
import repost from "../assets/repost.svg"
import like from "../assets/like.svg"
import views from "../assets/views.svg"
import share from "../assets/share.svg"
import { ContentDetail } from "./ContentDetail"
import { NavLink, Link, useNavigate } from "react-router"

interface PostItem {
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
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    },
    {
        userImgUrl: "https://xxx.png",
        userName: "Warren English",
        userAccount: "TheWarEnglish",
        time: "2025-07-03 16:04:30",
        content: "This drug won a Nobel Prize…But now they're trying to hide it.Ivermectin.Here’s what it is, what it does, & why they don't want you to know the truth:",
        images: ["https://image1.png", "https://image2.png", "https://image3.png"],
        commentCount: "424",
        repostCount: "7.7K",
        likeCount: "29K",
        viewCount: "3.5M"
    }
];

export const Home = () => {
    return (
        <div className="py-2.5">
            {
                sources.map((element, index, array) =>
                    <PostCell key={index} {...element} />
                )
            }
        </div>
    );
};

const PostCell = (item: PostItem) => {
    let navigate = useNavigate();
    return (
        <div className="flex items-start gap-2.5 px-2.5 py-0.5 border-b-[0.5px] border-gray-300 hover:bg-gray-100"
            onClick={() => {
                navigate("/detail");
            }}>
            <img src={user} alt="userimg" />
            <div className="flex flex-col">
                <TopBar userName={item.userName} userAccount={item.userAccount} time={item.time} />
                <div>
                    {item.content}
                </div>
                <img src={contentImg} alt="contentimage" />
                <BottomBar commentCount={item.commentCount} repostCount={item.repostCount} likeCount={item.likeCount} viewCount={item.viewCount} />
            </div>
        </div>
    );
}

const TopBar = ({ userName, userAccount, time }: { userName: string, userAccount: string, time: string }) => {

    const getMonthFromNumber = (num: number) => {
        switch (num) {
            case 0: return "Jan";
            case 1: return "Feb";
            case 2: return "Mar";
            case 3: return "Apr";
            case 4: return "May";
            case 5: return "Jun";
            case 6: return "Jul";
            case 7: return "Aug";
            case 8: return "Sep";
            case 9: return "Oct";
            case 10: return "Nov";
            case 11: return "Dec";
            default: return "";
        }
    };


    let date = new Date(time);
    let timestr = `${getMonthFromNumber(date.getMonth())}  ${date.getDate()}`


    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="font-bold">{userName}</div>
                <div className="text-gray-700 text-sm">{"@" + userAccount}</div>
                <div className="mx-0.5">・</div>
                <div>{timestr}</div>
            </div>
            <div>
                <img src={more_account} alt="more" />
            </div>
        </div>
    );
}

const BottomBar = ({
    commentCount,
    repostCount,
    likeCount,
    viewCount }: {
        commentCount: string,
        repostCount: string,
        likeCount: string,
        viewCount: string
    }) => {
    return (
        <div className="flex justify-between items-center pt-2">
            <div className="flex justify-around items-center text-sm gap-10">
                <div className="flex justify-center items-center px-1 py-0.5 hover:bg-blue-200 hover:rounded-xl">
                    <img className="w-[20px]" src={comments} alt="comments" />
                    <div>
                        <Link to="/detail">{commentCount}</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center  px-1 py-0.5 hover:bg-green-200 hover:rounded-xl">
                    <img className="w-[20px]" src={repost} alt="repost" />
                    <div>{repostCount}</div>
                </div>
                <div className="flex justify-center items-center  px-1 py-0.5 hover:bg-red-200 hover:rounded-xl">
                    <img className="w-[20px]" src={like} alt="like" />
                    <div>{likeCount}</div>
                </div>
                <div className="flex justify-center items-center  px-1 py-0.5 hover:bg-blue-200 hover:rounded-xl">
                    <img className="w-[20px]" src={views} alt="views" />
                    <div>{viewCount}</div>
                </div>
            </div>
            <div className="flex justify-center items-center px-1 py-1 hover:bg-blue-200 hover:rounded-xl">
                <img src={share} alt="share" />
            </div>
        </div>
    );
}



