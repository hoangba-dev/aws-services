import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmSignIn, confirmSignUp, signIn } from 'aws-amplify/auth';
import { AuthContext, AuthContextProps } from '@/components/Layout/AuthLayout';
import { toast } from 'react-toastify';

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
      const { nextStep } = await signIn({
        username: values.email,
        password: values.password
      });

      console.log('nextStep', nextStep);

      // if (nextStep.signInStep === "CONTINUE_SIGN_IN_WITH_EMAIL_SETUP") {
      //   await confirmSignIn({
      //     challengeResponse: values.email,
      //   });
      // }

      if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        setIsVerifyModal(true);
      }

      if (nextStep.signInStep === 'DONE') {
        navigate('/');
      }
    }
  });

  const handleVerifyEmail = async () => {
    try {
      const { nextStep } = await confirmSignUp({
        username: formik.values.email,
        confirmationCode: verifyCode.join('')
      });
      if (nextStep.signUpStep === 'DONE') {
        toast.success('Email verified successfully!');
        navigate('/');
      }
    } catch (error) {
      console.log("erorr", error)
      toast.error("Verification email failed!");
    } finally {
      setIsVerifyModal(false);
    }
  }

  return {
    formik,
    verifyCode,
    setVerifyCode,
    isVerifyModal,
    setIsVerifyModal,
    handleVerifyEmail
  };
};

export default useSignInForm;
