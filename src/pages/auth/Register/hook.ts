import { signIn } from 'aws-amplify/auth';
import { useFormik } from 'formik';

const useRegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      console.log(values)
      // await signIn({
      //   username: "hello@mycompany.com",
      //   password: "hunter2",
      // })
    },
  }); 

  return {
    formik
  }
}

export default useRegisterForm