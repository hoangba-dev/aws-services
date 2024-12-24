import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

import { router } from './components/Routers';


function App() {
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
