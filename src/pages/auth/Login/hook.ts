import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmSignUp, signIn, signInWithRedirect, SignInWithRedirectInput } from 'aws-amplify/auth';
import { AuthContext, AuthContextProps } from '@/components/Layout/AuthLayout';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const useSignInForm = () => {
  const navigate = useNavigate();
  const { verifyCode, setVerifyCode, isVerifyModal, setIsVerifyModal } = useContext<AuthContextProps>(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be 6 characters or than')
        .max(15, 'Password must be 15 characters or less')
        .required('Password is required')
    }),
    onSubmit: async (values) => {
      handleLogin(values)
    }
  });

  const handleLogin = async (values: {
    email: string;
    password: string;
}) => {
    try {
      const { nextStep } = await signIn({
        username: values.email,
        password: values.password
      });
  
      if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        setIsVerifyModal(true);
      }
  
      if (nextStep.signInStep === 'DONE') {
        navigate('/');
      }
      toast({
        title: 'Login successfully!',
        duration :10000,
      })
    } catch(error) {
      console.log("error", error);
      toast({
        title: 'Login failed!',
        variant: 'destructive',
        className: cn(
          'top-0 right-0 '
        ),
        
      })
    }
  }

  const handleVerifyEmail = async () => {
    try {
      const { nextStep } = await confirmSignUp({
        username: formik.values.email,
        confirmationCode: verifyCode.join('')
      });
      if (nextStep.signUpStep === 'DONE') {
        toast({
          title: 'Email verified successfully!',
          variant: 'default',
        })
        await handleLogin(formik.values)
      }
    } catch (error) {
      toast({
        title: 'Verification email failed!',
        variant: 'destructive',
      })
    } finally {
      setIsVerifyModal(false);
    }
  }

  const handleLoginBySocial = async (input: SignInWithRedirectInput) => {
    try {
      await signInWithRedirect(input);
    } catch (error) {
      toast({
        title: 'Failed to login with social media',
        variant: 'destructive',
      })
    }
  }

  return {
    formik,
    verifyCode,
    setVerifyCode,
    isVerifyModal,
    setIsVerifyModal,
    handleVerifyEmail,
    handleLoginBySocial
  };
};

export default useSignInForm;
