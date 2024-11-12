import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmSignUp, signUp } from 'aws-amplify/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const useRegisterForm = () => {
  const navigate = useNavigate();
  const [isVerifyModal, setIsVerifyModal] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string[]>(Array(6).fill(''));

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required')
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
    verifyCode,
    setVerifyCode,
    isVerifyModal,
    setIsVerifyModal,
    handleVerifyEmail
  };
};

export default useRegisterForm;
