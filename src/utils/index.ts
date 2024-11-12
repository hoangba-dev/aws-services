import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const maskEmail = (email: string) =>  {
  const [localPart, domain] = email.split("@");
  const maskedLocalPart = localPart.slice(0, 2) + "**" + localPart.slice(-1);
  return maskedLocalPart + "@" + domain;
}
