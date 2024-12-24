import { FC } from 'react';
import BaseButton from '@/components/Button/BaseButton';
import { useAccount } from '@/provides/AccountProvider';

const Profile: FC = () => {
  const { actions } = useAccount()
  return (
    <div>
      <BaseButton
        color='red'
        onClick={() => actions.deleteAccount()}
      >
        Delete Account
      </BaseButton>
    </div>
  )
}

export default Profile