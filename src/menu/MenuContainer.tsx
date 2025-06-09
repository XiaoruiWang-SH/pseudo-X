/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-02 22:21:07
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-09 16:39:26
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import x from "../assets/x.svg"
import home from "../assets/home.svg"
import explorer from "../assets/explorer.svg"
import notification from "../assets/notification.svg"
import messages from "../assets/messages.svg"
import profile from "../assets/profile.svg"
import more from "../assets/more.svg"
import user from "../assets/user.svg"
import more_account from "../assets/more_account.svg"
import { useLocation, useNavigate } from "react-router"
import { useState, useEffect, useRef } from "react"

// const menuItems = ["Home", "Expore", "Notifications", "Messages", "Profile", "More"];
const menuItems = [
    { imgsrc: home, title: "Home", route: "/", selected: true },
    { imgsrc: explorer, title: "Explore", route: "/explore", selected: false },
    { imgsrc: notification, title: "Notifications", route: "/notification", selected: false },
    { imgsrc: messages, title: "Messages", route: "/messages", selected: false },
    { imgsrc: profile, title: "Profile", route: "/profile", selected: false},
    { imgsrc: more, title: "More", selected: false },
];

export const MenuContainer = () => {
    let location = useLocation();
    let [selectItems, setSelectItems] = useState(menuItems);

    const clickEvent = (title: string) => {
        let newItems = selectItems.map((ele) => {
            if (ele.title == title) {
                return {...ele, selected: true}
            } else {
                return {...ele, selected: false}
            }
        })
        setSelectItems(newItems);
    };

    useEffect(() => {
        let route = location.pathname.split("/")[1];
        switch (route) {
            case "home": {
                clickEvent("Home");
                break;
            }
            case "explore": {
                clickEvent("Explore");
                break;
            }
            case "notification": {
                clickEvent("Notifications");
                break;
            }
            case "messages": {
                clickEvent("Messages");
                break;
            }
            case "profile": {
                clickEvent("Profile");
                break;
            }
            default: {
                clickEvent("Home");
            }
        }

    }, [location]);

    return (
        <div className="flex flex-col gap-8 py-2.5">
            <div>
                <img className=" px-5" src={x} alt="app_icon" />
            </div>
            <div className="flex flex-col gap-2">
                {
                    selectItems.map((element, index, array) =>
                            <MenuItem key={index} imgSrc={element.imgsrc} title={element.title} route={element.route} selected={element.selected} clickEvent={clickEvent} />
                        )
                }
            </div>

            <div className="flex justify-center items-center mx-2.5">
                <button className="bg-black w-full text-white font-bold text-lg py-2 rounded-3xl hover:bg-gray-700"
                onClick={() => {
                    console.log("click button post");
                }}
                >
                    Post
                </button>
            </div>

            <div className="mx-2.5 absolute left-0 bottom-[40px]">
                <ProfileItem userName={"XiaoruiWang"} account={"@xiaoruiwang0608"} imgSrc={user} />
            </div>
        </div>

    );

};

const ProfileItem = ({userName, account, imgSrc}: {userName: string, account: string, imgSrc: string}) => {
    return (
        <div className="flex justify-start items-center hover:bg-gray-200 hover:rounded-4xl px-2.5 py-1"
        onClick={() => {
            console.log("clicked user account")
        }}
        >
            <img className="w-[36px]" src={imgSrc} alt="imgSrc" />
            <div className="mx-1.5">
                <div>{userName}</div>
                <div className="text-gray-500">{account}</div>
            </div>
            <img className="w-[20px] ml-2.5" src={more_account} alt="more_account" />
        </div>
    );
}

const MenuItem = ({ imgSrc, title, route, selected, clickEvent }: { imgSrc: string, title: string, route: string | undefined, selected: boolean, clickEvent: (title: string)=>void}) => {
    let navigate = useNavigate();
    return (
        <div className="flex justify-start items-center py-2.5 px-5 hover:bg-gray-200 hover:rounded-3xl"
            onClick={() => {
                if (!route) return;
                navigate(route);
                clickEvent(title);
            }}>
            <img className="w-[26px]" src={imgSrc} alt="imgSrc" />
            <div className={`ml-3 ${selected ? "text-2xl font-bold" : "text-xl"} `}>
                {title}
            </div>
        </div>
    );
}