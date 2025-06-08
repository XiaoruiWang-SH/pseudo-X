/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-15 14:55:55
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-08 23:42:14
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
import { Explore } from './content/Explore.tsx'
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
          <Route path="explore" element={<Explore />} />
          <Route path="notification" element={<Notification />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
