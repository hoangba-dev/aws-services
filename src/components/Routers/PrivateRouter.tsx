import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

interface PrivateRouterProps {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<PrivateRouterProps> = ({ children }) => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState<boolean>(false);

  const isAuthenticated = async () => {
    try {
      const { username, userId, signInDetails }  = await getCurrentUser()
       console.log({ username, userId, signInDetails})
       setAuth(true)
    }catch(error) {
      setAuth(false)
      redirectToLogin()
    }finally {

    }
}

  const redirectToLogin = () => {
    navigate('/login');
}

  useEffect(() => {
    isAuthenticated();
}, []);

  return auth ? children : null;
}

export default PrivateRouter