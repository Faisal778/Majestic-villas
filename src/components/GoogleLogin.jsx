import React, { useContext } from "react";
import googleLogo from "./../../images/google-logo.svg";
import twitterLogo from "./../../images/twitterLogo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { googleSignIn, twitterLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result.user);
      navigate(from, { replace: true });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Login failed",
        showConfirmButton: true,
      });
    }
  };

  const handleTwitterSignin = async () => {
    try {
      const result = await twitterLogin();
      console.log(result);
      navigate(from, { replace: true });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Twitter Sign-In Error: ", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Login failed",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
      <div onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
        <div className="flex justify-around items-center">
          <div className="px-2 py-2">
            <img className="h-6 w-6" src={googleLogo} alt="Google logo" />
          </div>
          <div className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</div>
        </div>
      </div>

      <div onClick={handleTwitterSignin} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
        <div className="flex justify-around items-center">
          <div className="px-2 py-2">
            <img className="h-8 w-14" src={twitterLogo} alt="Twitter logo" />
          </div>
          <div className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Twitter</div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
