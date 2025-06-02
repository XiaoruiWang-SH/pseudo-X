/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-15 14:55:55
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-02 23:09:35
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import { Children, useState } from 'react'
import type { FC } from 'react'
import { MenuContainer } from './menu/MenuContainer'
import { ContentContainer } from './content/ContentContainer'
import { ExtralContainer } from './extral/ExtralContainer'



function App() {

  return (
    <>
      <MainContainer>
        <MenuContainer />
        <ContentContainer />
        <ExtralContainer />
      </MainContainer>
    </>
  )
}

const MainContainer = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='flex justify-center mx-70'>
      {children}
    </div>
  );

};

export default App
