import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';
import VerifyEmailModal from '@/components/Modal/VerifyEmailModal';
import SocialButton from '@/components/Button/SocialButton';
import useSignInForm from './hook';
import { cn } from '@/utils';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const {formik, isVerifyModal, setVerifyCode, verifyCode, handleVerifyEmail, handleLoginBySocial} = useSignInForm()
  return (
    <Fragment>
      <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
      <div className='max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10'>
        <div className='text-center'>
          <h2 className='mt-6 text-3xl font-bold text-gray-900'>Welcom Back!</h2>
          <p className='mt-2 text-sm text-gray-600'>Please sign in to your account</p>
        </div>
        <div className='flex flex-row justify-center items-center space-x-3'>
          <SocialButton
            onClick={() => {
              console.log('onClicked Facebook');
            }}
            icon='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0zNzQuMjQ1LDI4NS44MjVsMTQuMTA0LC05MS45NjFsLTg4LjIzMywwbDAsLTU5LjY3N2MwLC0yNS4xNTkgMTIuMzI1LC00OS42ODIgNTEuODQ1LC00OS42ODJsNDAuMTE3LDBsMCwtNzguMjkxYzAsMCAtMzYuNDA4LC02LjIxNCAtNzEuMjE0LC02LjIxNGMtNzIuNjcsMCAtMTIwLjE2NSw0NC4wNDIgLTEyMC4xNjUsMTIzLjc3NWwwLDcwLjA4OWwtODAuNzc3LDBsMCw5MS45NjFsODAuNzc3LDBsMCwyMjIuMzFjMTYuMTk3LDIuNTQyIDMyLjc5OCwzLjg2NSA0OS43MDksMy44NjVjMTYuOTExLDAgMzMuNTEyLC0xLjMyMyA0OS43MDgsLTMuODY1bDAsLTIyMi4zMWw3NC4xMjksMFoiIHN0eWxlPSJmaWxsOiMxODc3ZjI7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9zdmc+'
          />
          <SocialButton
            onClick={() => handleLoginBySocial({
              provider: "Google"
            })}
            iconClassName='w-8 h-8'
            icon='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkNhcGFfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUwIDE1MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzFBNzNFODt9Cgkuc3Qxe2ZpbGw6I0VBNDMzNTt9Cgkuc3Qye2ZpbGw6IzQyODVGNDt9Cgkuc3Qze2ZpbGw6I0ZCQkMwNDt9Cgkuc3Q0e2ZpbGw6IzM0QTg1Mzt9Cgkuc3Q1e2ZpbGw6IzRDQUY1MDt9Cgkuc3Q2e2ZpbGw6IzFFODhFNTt9Cgkuc3Q3e2ZpbGw6I0U1MzkzNTt9Cgkuc3Q4e2ZpbGw6I0M2MjgyODt9Cgkuc3Q5e2ZpbGw6I0ZCQzAyRDt9Cgkuc3QxMHtmaWxsOiMxNTY1QzA7fQoJLnN0MTF7ZmlsbDojMkU3RDMyO30KCS5zdDEye2ZpbGw6I0Y2QjcwNDt9Cgkuc3QxM3tmaWxsOiNFNTQzMzU7fQoJLnN0MTR7ZmlsbDojNDI4MEVGO30KCS5zdDE1e2ZpbGw6IzM0QTM1Mzt9Cgkuc3QxNntjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MTd7ZmlsbDojMTg4MDM4O30KCS5zdDE4e29wYWNpdHk6MC4yO2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDE5e29wYWNpdHk6MC4zO2ZpbGw6IzBENjUyRDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDIwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKTt9Cgkuc3QyMXtvcGFjaXR5OjAuMztmaWxsOnVybCgjXzQ1X3NoYWRvd18xXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QyMntjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyk7fQoJLnN0MjN7ZmlsbDojRkE3QjE3O30KCS5zdDI0e29wYWNpdHk6MC4zO2ZpbGw6IzE3NEVBNjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI1e29wYWNpdHk6MC4zO2ZpbGw6I0E1MEUwRTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI2e29wYWNpdHk6MC4zO2ZpbGw6I0UzNzQwMDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI3e2ZpbGw6dXJsKCNGaW5pc2hfbWFza18xXyk7fQoJLnN0Mjh7ZmlsbDojRkZGRkZGO30KCS5zdDI5e2ZpbGw6IzBDOUQ1ODt9Cgkuc3QzMHtvcGFjaXR5OjAuMjtmaWxsOiMwMDRENDA7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QzMXtvcGFjaXR5OjAuMjtmaWxsOiMzRTI3MjM7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QzMntmaWxsOiNGRkMxMDc7fQoJLnN0MzN7b3BhY2l0eTowLjI7ZmlsbDojMUEyMzdFO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MzR7b3BhY2l0eTowLjI7fQoJLnN0MzV7ZmlsbDojMUEyMzdFO30KCS5zdDM2e2ZpbGw6dXJsKCNTVkdJRF83Xyk7fQoJLnN0Mzd7ZmlsbDojRkJCQzA1O30KCS5zdDM4e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzlfKTtmaWxsOiNFNTM5MzU7fQoJLnN0Mzl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTFfKTtmaWxsOiNGQkMwMkQ7fQoJLnN0NDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTNfKTtmaWxsOiNFNTM5MzU7fQoJLnN0NDF7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTVfKTtmaWxsOiNGQkMwMkQ7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDE0IiBkPSJNMTIwLDc2LjFjMC0zLjEtMC4zLTYuMy0wLjgtOS4zSDc1Ljl2MTcuN2gyNC44Yy0xLDUuNy00LjMsMTAuNy05LjIsMTMuOWwxNC44LDExLjUgICBDMTE1LDEwMS44LDEyMCw5MCwxMjAsNzYuMUwxMjAsNzYuMXoiLz48cGF0aCBjbGFzcz0ic3QxNSIgZD0iTTc1LjksMTIwLjljMTIuNCwwLDIyLjgtNC4xLDMwLjQtMTEuMUw5MS41LDk4LjRjLTQuMSwyLjgtOS40LDQuNC0xNS42LDQuNGMtMTIsMC0yMi4xLTguMS0yNS44LTE4LjkgICBMMzQuOSw5NS42QzQyLjcsMTExLjEsNTguNSwxMjAuOSw3NS45LDEyMC45eiIvPjxwYXRoIGNsYXNzPSJzdDEyIiBkPSJNNTAuMSw4My44Yy0xLjktNS43LTEuOS0xMS45LDAtMTcuNkwzNC45LDU0LjRjLTYuNSwxMy02LjUsMjguMywwLDQxLjJMNTAuMSw4My44eiIvPjxwYXRoIGNsYXNzPSJzdDEzIiBkPSJNNzUuOSw0Ny4zYzYuNS0wLjEsMTIuOSwyLjQsMTcuNiw2LjlMMTA2LjYsNDFDOTguMywzMy4yLDg3LjMsMjksNzUuOSwyOS4xYy0xNy40LDAtMzMuMiw5LjgtNDEsMjUuMyAgIGwxNS4yLDExLjhDNTMuOCw1NS4zLDYzLjksNDcuMyw3NS45LDQ3LjN6Ii8+PC9nPjwvc3ZnPg=='
          />
          <SocialButton
            onClick={() => {
              console.log('onClicked Facebook');
            }}
            icon='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSLlvaLnirZfMV8xXyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IuW9oueKtl8xIj48Zz48cGF0aCBkPSJNMzgxLjYwNCwyNzAuOTQzYy0wLjU4NS01OC4yODUsNDcuNTI2LTg2LjI0MSw0OS42NzMtODcuNjQ3ICAgIGMtMjcuMDMyLTM5LjUzNi02OS4xNTMtNDQuOTYxLTg0LjE1LTQ1LjU3MmMtMzUuODEtMy42NDUtNjkuOTIsMjEuMDk2LTg4LjA5NSwyMS4wOTZjLTE4LjEyOSwwLTQ2LjIwMy0yMC41NjYtNzUuOTAyLTIwLjA0NiAgICBjLTM5LjA4LDAuNTg1LTc1LjA5LDIyLjczMS05NS4yMDEsNTcuNzExYy00MC41NzcsNzAuMzg3LTEwLjM3NSwxNzQuNzEsMjkuMTYyLDIzMS44NDVjMTkuMzM0LDI3LjkyLDQyLjM4NSw1OS4zNDYsNzIuNjI0LDU4LjE5NSAgICBjMjkuMTUyLTEuMTUxLDQwLjE1OC0xOC44NTksNzUuMzkxLTE4Ljg1OWMzNS4yMzQsMCw0NS4xMzUsMTguODU5LDc1Ljk2OCwxOC4yNjZjMzEuMzQzLTAuNTY3LDUxLjIxNi0yOC40NTksNzAuMzk1LTU2LjQ5NiAgICBjMjIuMTg1LTMyLjQ0LDMxLjMyNi02My44NDgsMzEuODY1LTY1LjQ0NkM0NDIuNjU2LDM2My42NzgsMzgyLjIzMiwzNDAuNTI2LDM4MS42MDQsMjcwLjk0M3ogTTMyMy42NjUsOTkuOTEzICAgIGMxNi4wMzctMTkuNDcxLDI2LjkwNC00Ni41MzEsMjMuOTU1LTczLjQ2NGMtMjMuMTUxLDAuOTQtNTEuMTcxLDE1LjM4OS02Ny43ODQsMzQuODQyICAgIGMtMTQuODg3LDE3LjI2MS0yNy45MDksNDQuNzQxLTI0LjQyMSw3MS4xODlDMjgxLjIzMiwxMzQuNDgxLDMwNy41NzIsMTE5LjM0OCwzMjMuNjY1LDk5LjkxM3oiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMxQjFCMUI7Ii8+PC9nPjwvZz48L3N2Zz4='
            iconClassName='-translate-y-[2px]'
          />
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <span className='h-px w-16 bg-gray-300'></span>
          <span className='text-gray-500 font-normal'>OR</span>
          <span className='h-px w-16 bg-gray-300'></span>
        </div>
        <div className='mt-4'>
          <input type='hidden' name='remember' value='true' />
          <div className='relative'>
            <label className='text-sm font-bold text-gray-700 tracking-wide'>Email</label>
            <input
              id="email"
              name="email"
              type='email'
              value={formik.values.email}
              className={cn(
                'w-full text-base py-2 border-b border-gray-300 ',
                'focus:outline-none focus:border-indigo-500'
              )}
              placeholder='mail@gmail.com'
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <span className='text-red-700 text-xs'>{formik.errors.email}</span>
          ) : <span></span>}
          <div className='mt-4 content-center'>
            <label className='text-sm font-bold text-gray-700 tracking-wide'>Password</label>
            <input
              id="password"
              name="password"
              value={formik.values.password}
              type='text'
              autoComplete='off'
              className={cn(
                'w-full content-center text-base py-2 border-b border-gray-300',
                'focus:outline-none focus:border-indigo-500'
              )}
              placeholder='Enter your password'
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <span className='text-red-700 text-xs'>{formik.errors.password}</span>
          ) : <span></span>}
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                name='remember_me'
                type='checkbox'
                className={cn('h-4 w-4 bg-indigo-500 border-gray-300 rounded', 'focus:ring-indigo-400')}
              />
              <label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
                Remember me
              </label>
            </div>
            <div className='text-sm'>
              <a href='#' className='font-medium text-slate-500 cursor-no-drop'>
                {/* text-indigo-500 hover:text-indigo-500*/}
                Forgot your password?
              </a>
            </div>
          </div>
          <div className='mt-4'>
            <button
              onClick={() => formik.handleSubmit()}
              className={cn(
                'w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-300',
                'focus:outline-none focus:shadow-outline',
                'hover:bg-indigo-600'
              )}
            >
              Sign in
            </button>
          </div>
          <p className='flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500'>
            <span>Don't have an account?</span>
            <button
              onClick={() => navigate('/register')}
              className={cn(
                'text-indigo-500 no-underline cursor-pointer transition ease-in duration-300',
                'hover:text-indigo-500 hover:underline'
              )}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
      <VerifyEmailModal 
        open={isVerifyModal}
        verifyEmail={""}
        onSubmit={() => handleVerifyEmail()}
        verifyCode={verifyCode}
        onChangeVerifyCode={(values: string[]) => setVerifyCode(values)}
      />
    </Fragment>
  );
};

export default LoginForm;
