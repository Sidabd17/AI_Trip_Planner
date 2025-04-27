// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CreateTrip from './pages/CreateTrip'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from "./view-trip/[tripId]/index"
import MyTrip from './my-trip/MyTrip'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/create-trip',
    element: <CreateTrip/>
  },
  {
    path: '/view-trip/:tripId',
    element: <ViewTrip/>
  },
  {
    path: '/my-trips',
    element : <MyTrip/>
  }

])

const App = () => {
  
  return (
    <>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_cLIENT_KEY}>
      <Toaster/>
      <Header />
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
