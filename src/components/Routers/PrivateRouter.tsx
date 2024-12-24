import { useEffect, useState } from 'react'
import { getCurrentUser } from 'aws-amplify/auth';
import { Outlet, useNavigate } from 'react-router-dom';


const PrivateRouter: React.FC = () => {
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

  return auth ? <Outlet/> : null;
}

export default PrivateRouter