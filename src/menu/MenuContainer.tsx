/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-02 22:21:07
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-03 11:28:46
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */


const menuItems: string[] = ["Home", "Expore", "Notification", "Messages", "More"];

export const MenuContainer = () => {
    let a = "aaa";
    
    return (
        <div className="flex flex-col gap-10">
            {
                menuItems.map((element, index, array) => 
                <div>
                    {element}
                </div>)
            }
        </div>
    );

};