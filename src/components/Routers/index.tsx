import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import AuthLayout from '../Layout/AuthLayout';
import PrivateRouter from './PrivateRouter';
// Page
import Register from '@/pages/auth/Register';
import Login from '@/pages/auth/Login';
import RootProvider from '@/provides';

const Home = lazy(async () => await import('@/pages/home'));
const Profile = lazy(async () => await import('@/pages/profile'));

export const router = createBrowserRouter([
  {
    element: (
      <RootProvider>
        <PrivateRouter />
      </RootProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);
