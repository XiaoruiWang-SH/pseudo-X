/*
 * @Author: Xiaorui Wang
 * @Email: xiaorui.wang@usi.ch
 * @Date: 2025-05-15 14:55:55
 * @LastEditors: Xiaorui Wang
 * @LastEditTime: 2025-06-07 22:23:01
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
import { ContentContainer } from './content/ContentContainer.tsx'
import { ContentDetail } from './content/ContentDetail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<ContentContainer />} />
          <Route path="detail" element={<ContentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
