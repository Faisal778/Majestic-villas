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
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate(location.state);
      navigate(from, { replace: true });
    });
  };

  const handleTwitterSignin = () => {
    twitterLogin().then((result) => {
      console.log(result)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(location.state)
      // navigate(location.state);
      navigate(from, { replace: true });
    })
  };
  return (
    <div>
      <div onClick={handleGoogleSignIn}>
      <a
        href="#"
        className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <div className="flex justify-around items-center">
          <div className="px-2 py-2  ">
            <img className="h-6 w-6" src={googleLogo} alt="" />
          </div>

          <div className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</div>
        </div>
      </a>
    </div>

    <div onClick={handleTwitterSignin}>
      <a
        href="#"
        className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <div className="flex justify-around items-center">
          <div className="px-2 py-2  ">
            <img className="h-8 w-14" src={twitterLogo} alt="" />
          </div>

          <div className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Twitter</div>
        </div>
      </a>
    </div>
    </div>
  );
};

export default GoogleLogin;
