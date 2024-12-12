import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContextProvider from './context/ContextProvider'
import { ConfigProvider, theme } from 'antd'
import './styles.scss'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Home from './pages/Home'
import OpenHistory from './pages/OpenHistory'
import SearchDate from './pages/SearchDate'
import SearchHistory from './pages/SearchHistory'
import OpenDate from './pages/OpenDate'
import React from 'react'

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  errorElement: <ErrorPage/>,
  children: [{
    path:'/login',
    element: <Login/>
  },{
    path: '/home',
    element: <Home/>,
    children: [{
      path: '/home/dates',
      element: <SearchDate/>
    },{
      path: '/home/history',
      element: <SearchHistory/>
    },{
      path: '/home/openHistory',
      element: <OpenHistory/>
    },{
      path: '/home/openDate',
      element: <OpenDate/>
    }]
  }
]}])

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ConfigProvider theme={{algorithm: theme.lightAlgorithm}} >
      <RouterProvider router={router} />
    </ConfigProvider>
  </ContextProvider>
)
