/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-06-02 22:21:07
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-02 23:16:49
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import { useState, useRef, useEffect } from 'react';
import type {FC} from 'react';

const menuItems: string[] = ["Home", "Expore", "Notification", "Messages", "More"];

export const MenuContainer: FC = () => {

    return (
        <div className='flex-1/4 bg-amber-200 flex flex-col gap-2.5'>
            {
                menuItems.map((element, index, array) => 
                <div>
                    {element}
                </div>)
            }
        </div>
    );

};