import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import WatchList from './components/WatchList/WatchList.jsx';
import Anime from './components/Anime/Anime.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import Profile from './components/Profile/Profile.jsx';
import ContactUs from './components/ContactUs.jsx';
import AboutUs from './components/AboutUs.jsx';

import { AuthProvider } from './context/AuthContext.jsx';
import { ProfileProvider } from './context/ProfileContext.jsx'; // Import the new provider

// Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Anime />} />
      <Route path='watchlist' element={<WatchList />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='profile' element={<Profile />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} /> 
      <Route path='*' element={<Navigate to='/' />} />
    </Route>
  )
);

// Render app with both providers
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <RouterProvider router={router} />
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
