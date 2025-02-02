import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LogoutButton = () => {
  const navigate = useNavigate(); // Initialize navigate *inside* the component

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle logout errors (e.g., display an error message)
    }
  };

  return (
    <>
      <div>
        <button className="bg-white" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default LogoutButton;
