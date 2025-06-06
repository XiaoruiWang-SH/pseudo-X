/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-15 14:55:55
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-03 16:48:53
 * @Description: 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */

import { MenuContainer } from './menu/MenuContainer'
import { ContentContainer } from './content/ContentContainer'
import { ExtralContainer } from './extral/ExtralContainer'



function App() {

  return (
    <>
      <MainContainer>
        <>
          <div className='flex justify-center mx-70 h-dvh'>
            <div className='flex-1/4 relative min-w-[250px]'>
              <MenuContainer />
            </div>
            <div className='flex-2/4 border-x-[0.5px] border-gray-500 overflow-scroll  min-w-[500px]'>
              <ContentContainer />
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
      {children}
    </>
  );

};

export default App
