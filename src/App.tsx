import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from './components/Layout/AuthLayout';
import PrivateRouter from './components/Routers/PrivateRouter';

const Home = lazy(async () => await import('./pages/home'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRouter>
        <Home />
        </PrivateRouter>
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
        },
      ]
    }
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
      <ToastContainer 
        position='top-right'
        theme='light'
      />
    </Suspense>
  );
}

export default App;
