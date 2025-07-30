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
import Profile from './components/Profile/Profile.jsx';

import { AuthProvider } from './context/AuthContext.jsx';

// ✅ Define routes without PrivateRoute
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Anime />} />
      <Route path='watchlist' element={<WatchList />} />
      <Route path='profile' element={<Profile />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Route>
  )
);

// ✅ Render app with AuthProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
