import { cn } from "@/utils";

interface AuthLayoutProps {
  children: React.ReactNode
}
const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
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
    {children}
  </div>
  );
};

export default AuthLayout;
