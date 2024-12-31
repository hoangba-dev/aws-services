import { cn, maskEmail } from '@/utils';
import React, { ChangeEvent } from 'react';

interface VerifyEmailModalProps {
  open: boolean;
  verifyCode: string[];
  verifyEmail: string;
  onChangeVerifyCode: (values: string[]) => void;
  onSubmit: () => void;
}
const VerifyEmailModal: React.FC<VerifyEmailModalProps> = ({ open, verifyCode, verifyEmail, onChangeVerifyCode, onSubmit }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let entry = e.target.value;

    if (entry.length <= 1 && !Number.isNaN(entry)) {
      const newCode = [...verifyCode];
      newCode[index] = entry;
      onChangeVerifyCode(newCode);

      if (entry.length === 1) {
        if (index < verifyCode.length - 1) {
          let nextInput = document.getElementById(`verify-code-${index + 1}`);
          if (nextInput) {
            nextInput.focus();
          }
        }
      } else if (entry.length === 0) {
        let prevInput = document.getElementById(`verify-code-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    } else return;
  };

  if (!open) {
    return null;
  }
  return (
    <div
      className={cn(
        'flex flex-col justify-center overflow-hidden bg-black bg-opacity-70 py-12',
        'w-screen min-h-screen',
        'fixed top-0 left-0 z-20'
      )}
    >
      <div className='relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl'>
        <div className='mx-auto flex w-full max-w-md flex-col space-y-16'>
          <div className='flex flex-col items-center justify-center text-center space-y-2'>
            <div className='font-semibold text-3xl'>
              <p>Email Verification</p>
            </div>
            <div className='flex flex-row text-sm font-medium text-gray-400'>
              <p>We have sent a code to your email {maskEmail(verifyEmail)}</p>
            </div>
          </div>

          <div>
            <div>
              <div className='flex flex-col space-y-16'>
                <div className='flex flex-row items-center justify-between mx-auto w-full'>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className='w-16 h-16 '>
                      <input
                        className='w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700'
                        type='number'
                        maxLength={1}
                        aria-controls='false'
                        value={verifyCode[index] || ''}
                        name={`verify-code-${index}`}
                        id={`verify-code-${index}`}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                      />
                    </div>
                  ))}
                </div>

                <div className='flex flex-col space-y-5'>
                  <div>
                    <button
                      onClick={onSubmit}
                      className='flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-indigo-600 border-none text-white text-sm shadow-sm'
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className='flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500'>
                    <p>Didn't recieve code?</p>{' '}
                    <a
                      className='flex flex-row items-center text-blue-600'
                      href='http://'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailModal;
