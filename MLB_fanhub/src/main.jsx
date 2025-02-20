import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Contact from './components/Contact/Contact'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import LogoutButton from './components/Logout/Logout'

const router = createBrowserRouter(
  createRoutesFromElements(
    // here path spelling matters not convention means upper and lower cases both are equal here
    <Route path="/"  element={<Layout/>}>
      <Route path="/"  element={<Home/>}/>
      <Route path="/logout"  element={<LogoutButton/>}/>
      <Route path="about"  element={<About/>}/>
      <Route path="login"  element={<Login/>}/>
      <Route path="register"  element={<Register/>}/>
      <Route path="contact"  element={<Contact/>}/>
    </Route>
  )
)

// read docs for more understanding
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)