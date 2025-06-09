/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-15 14:55:55
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-09 11:51:03
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import { MenuContainer } from './menu/MenuContainer'
import { Home } from './content/Home'
import { ExtralContainer } from './extral/ExtralContainer'
import { Outlet } from 'react-router'
import { PostsProvider } from './data/PostsProvider'


function App() {

  return (
    <>
      <MainContainer>
        <>
          <div className='flex justify-center mx-70 h-dvh'>
            <div className='flex-1/4 relative min-w-[250px] min-h-[600px]'>
              <MenuContainer />
            </div>
            <div className='flex-2/4 border-x-[0.5px] border-gray-500 min-w-[500px] my-2.5'>
              {/* <ContentContainer /> */}
              <Outlet />
            </div>
            <div className='flex-1/4 min-w-[300px]'>
              <ExtralContainer />
            </div>
          </div>
        </>
      </MainContainer>
    </>
  )
}

const MainContainer = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <PostsProvider>
        {children}
      </PostsProvider>
    </>
  );

};

export default App
