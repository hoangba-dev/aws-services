import { cn } from '@/utils';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Outlet } from 'react-router-dom';

export interface AuthContextProps {
  isVerifyModal: boolean;
  setIsVerifyModal: Dispatch<SetStateAction<boolean>>;
  verifyCode: string[];
  setVerifyCode: Dispatch<SetStateAction<string[]>>;
}

export  const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthLayout: React.FC = () => {
  const [isVerifyModal, setIsVerifyModal] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string[]>(Array(6).fill(''));

  return (
    <AuthContext.Provider value={{
      isVerifyModal,
      setIsVerifyModal,
      verifyCode,
      setVerifyCode,
    }}>
      <div
        className={cn(
          'relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 bg-no-repeat bg-cover',
          'sm:px-6',
          'lg:px-8'
        )}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'
        }}
      >
        <Outlet/>
      </div>
    </AuthContext.Provider>
  );
};

export default AuthLayout;
