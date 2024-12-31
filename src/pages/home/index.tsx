import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import BaseButton from "@/components/Button/BaseButton";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.log("error", error);
    }
  }

  return <div>
    <BaseButton onClick={handleLogout}>
      Sign out
    </BaseButton>
    <BaseButton onClick={() => navigate('/profile')}>
      Profile
    </BaseButton>
  </div>;
};

export default Home;
