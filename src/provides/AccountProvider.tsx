import { createContext, useContext } from 'react';
import { deleteUser } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface AccountContextState {
  actions: {
    deleteAccount: () => void;
  };
}
const AccountContext = createContext<AccountContextState>({} as AccountContextState);

interface AccountProviderProps {
  children: React.ReactNode;
}

const AccountProvider: React.FC<AccountProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      await deleteUser();
      toast.success('Account deleted successfully');
      navigate('/login')
    } catch (error) {
      toast.error('System error. Please try again!!!');
    }
  };
  return (
    <AccountContext.Provider
      value={{
        actions: {
          deleteAccount: handleDeleteAccount
        }
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = useContext(AccountContext);
  return context;
}

export default AccountProvider;
