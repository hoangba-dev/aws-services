import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

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
    <button onClick={handleLogout}>
      Sign out
    </button>
  </div>;
};

export default Home;
