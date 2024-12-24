import { cn } from '@/utils';
import { FC, MouseEvent } from 'react';

interface BaseButtonProps {
  children: React.ReactNode | string | number;
  variant?: "default" | "gradient" | "outlined" | "text";
  disabled?: boolean;
  color?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}
const BaseButton: FC<BaseButtonProps> = ({ children, variant = "default", color = "gray", disabled, onClick }) => {
  const baseStyles =
    "middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

    const variants = {
      default: `mr-3 bg-${color}-500 text-white shadow-md shadow-${color}-500/20 hover:shadow-lg hover:shadow-${color}-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`,
      gradient: `mr-3 bg-gradient-to-tr from-${color}-600 to-${color}-400 text-white shadow-md shadow-${color}-500/20 hover:shadow-lg hover:shadow-${color}-500/40 active:opacity-[0.85]`,
      outlined: `mr-3 border border-${color}-500 text-${color}-500 hover:opacity-75 focus:ring focus:ring-${color}-200 active:opacity-[0.85]`,
      text: `text-${color}-500 hover:bg-${color}-500/10 active:bg-${color}-500/30`,
    }

  return (
    <button
      className={cn(baseStyles, variants[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BaseButton;