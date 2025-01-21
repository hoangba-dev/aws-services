import { FC } from 'react';
import { Button } from "@/components/ui/button";
import { useAccount } from '@/provides/AccountProvider';
import Avatar from '@/components/Avatar';

const Profile: FC = () => {
  const { actions } = useAccount()
  return (
    <div>
      <Avatar
        onImageChange={() => {}}
      />
      <Button>
        Save
      </Button>
      <Button
        variant='destructive'
        onClick={() => actions.deleteAccount()}
      >
        Delete Account
      </Button>
    </div>
  )
}

export default Profile