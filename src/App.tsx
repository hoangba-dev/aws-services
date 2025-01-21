import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

import { router } from './components/Routers';
import { Toaster } from './components/ui/toaster';


function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
      <ToastContainer 
        position='top-right'
        theme='light'
      />
      <Toaster />
    </Suspense>
  );
}

export default App;
