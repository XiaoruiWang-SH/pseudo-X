/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-15 14:55:55
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-09 15:47:41
 * @Description: 
 * 
 * 
 * Copyright (c) 2025 by Xiaorui Wang, All Rights Reserved. 
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './content/Home.tsx'
import { ContentDetail } from './content/ContentDetail.tsx'
import { Explore, Trending, News, Sports, Entertainment } from './content/Explore.tsx'
import { Notification } from './content/Notification.tsx'
import { Messages } from './content/Messages.tsx'
import { Profile } from './content/Profile.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path=":postId" element={<ContentDetail />} />
          <Route path="explore" element={<Explore />} >
          <Route index element={<Trending />} />
            <Route path="trending" element={<Trending />} />
            <Route path="news" element={<News />} />
            <Route path="sports" element={<Sports />} />
            <Route path="entertainment" element={<Entertainment />} />
          </Route>
          
          <Route path="notification" element={<Notification />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
