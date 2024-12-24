import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { confirmSignUp, signUp } from 'aws-amplify/auth';
import { AuthContext, AuthContextProps } from '@/components/Layout/AuthLayout';

const useRegisterForm = () => {
  const navigate = useNavigate();

  const {verifyCode, setVerifyCode, isVerifyModal, setIsVerifyModal} = useContext<AuthContextProps>(AuthContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be 6 characters or than').max(15, 'Password must be 15 characters or less').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required')
    }),
    onSubmit: async (values) => {
      try {
        const { nextStep } = await signUp({
          username: values.email,
          password: values.password
        });

        if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
          toast.success('Successful registration!');
          setIsVerifyModal(true);
        }
      } catch (error) {
        console.log("error", error)
        toast.error('Registration failed!');
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
        navigate('/login');
      }
    } catch (error) {
      console.log("erorr", error)
      toast.error("Verification email failed!");
    } finally {
      setIsVerifyModal(false);
    }
  };

  return {
    formik,
    isVerifyModal,
    setIsVerifyModal,
    verifyCode, 
    setVerifyCode,
    handleVerifyEmail
  };
};

export default useRegisterForm;
