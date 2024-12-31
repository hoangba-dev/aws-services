import { cn } from '@/utils';

interface SocialButtonProps {
  icon: string | React.ReactNode;
  onClick: () => void;
  iconClassName?: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({ icon, iconClassName, onClick }) => {
  return (
    <button onClick={onClick}>
      <span
        className={cn(
          'w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-white border border-gray-500  cursor-pointer transition ease-in duration-300',
          'hover:shadow-lg'
        )}
      >
        {typeof icon === 'string' ? <img className={cn('w-6 h-6', iconClassName)} src={icon} /> : icon}
      </span>
    </button>
  );
};

export default SocialButton;
