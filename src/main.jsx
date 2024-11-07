import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContextProvider from '../context/ContextProvider'
import Root from './pages/Root'
import Login from './pages/Login'
import Home from './pages/Home'
import Dates from './pages/Dates'
import History from './pages/History'


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
      element: <Dates/>
    },{
      path: '/home/history',
      element: <History/>
    }]
  }
}])

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
)
