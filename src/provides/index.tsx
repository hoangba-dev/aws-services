import React from 'react';
import AccountProvider from './AccountProvider';

interface RootProviderProps {
  children: React.ReactNode;
}
const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return <AccountProvider>{children}</AccountProvider>;
};

export default RootProvider;
