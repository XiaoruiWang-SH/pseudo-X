/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-02 22:21:07
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-03 15:03:48
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

// const menuItems = ["Home", "Expore", "Notifications", "Messages", "Profile", "More"];
const menuItems = [
    { imgsrc: home, title: "Home" },
    { imgsrc: explorer, title: "Expore" },
    { imgsrc: notification, title: "Notifications" },
    { imgsrc: messages, title: "Messages" },
    { imgsrc: profile, title: "Profile" },
    { imgsrc: more, title: "More" },
];

export const MenuContainer = () => {
    let a = "aaa";

    return (
        <div>
            <div>
                <img src={x} alt="app_icon" />
            </div>
            <div className="flex flex-col gap-10">
                {
                    menuItems.map((element, index, array) =>
                        <div>
                            <MenuItem key={index} imgSrc={element.imgsrc} title={element.title} />
                        </div>)
                }
            </div>
        </div>

    );

};

const MenuItem = ({ imgSrc, title }: { imgSrc: string, title: string }) => {
    return (
        <div>
            <img src={imgSrc} alt="imgSrc" />
            <div>
                {title}
            </div>
        </div>
    );
}