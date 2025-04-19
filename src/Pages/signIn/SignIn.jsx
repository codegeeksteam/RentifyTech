import React, { useState, useRef } from "react";
import signInImg from "../../assets/signIn.json";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";
import HelmetTitle from "../../Components/HelmetTitle";
import { MdLink, MdMail } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { singInUser, signInGoogle, forgetPassword } = useAuth();
  console.log({ singInUser, signInGoogle, forgetPassword }); // Debug auth functions

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Sign In Successful!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Please enter an email address.",
        icon: "error",
      });
      return;
    }
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Password Reset Link Sent!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (typeof singInUser !== 'function') {
      console.error('singInUser is not a function:', singInUser);
      Swal.fire({
        title: "Error!",
        text: "Authentication function is not available.",
        icon: "error",
      });
      return;
    }
    singInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Sign In Successful!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <HelmetTitle title={"Sign in"} />
      <div className="min-w-screen min-h-screen text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <Link
                    onClick={handleGoogleSignIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-300 hover:bg-green-700 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign In with Google</span>
                  </Link>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-3 py-1 rounded-full inline-block text-sm text-gray-100 tracking-wide font-medium bg-gray-800 transform translate-y-1/2">
                    Or sign In with Cartesian E-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSignIn} className="space-y-2">
                    <div className="input_container">
                      <label className="input_label" htmlFor="email_field">
                        Email
                      </label>
                      <MdMail size={25} className="icon text-gray-400" />
                      <input
                        placeholder="Your Email"
                        title="Input title"
                        name="email"
                        type="email"
                        className="input_field"
                        id="email_field"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div className="input_container">
                      <label className="input_label" htmlFor="password_field">
                        Password
                      </label>
                      <svg
                        fill="#8B8E98"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          stroke="#141B34"
                          d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"
                        />
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          stroke="#141B34"
                          d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"
                        />
                        <path
                          fill="#141B34"
                          d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"
                        />
                      </svg>
                      <input
                        placeholder="Password"
                        title="Input title"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="input_field"
                        id="password_field"
                        required
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-8 text-gray-300 bottom-3.5"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>

                    <Link
                      className="font-medium text-gray-400"
                      onClick={handleForgetPassword}
                    >
                      Forgot Password?
                    </Link>

                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-green-300 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <IoIosPersonAdd size={25} />
                      <span className="ml-2">Sign In</span>
                    </button>
                    <div className="flex flex-col mt-4 text-gray-400 text-sm text-center">
                      <p>
                        Don't have an account?
                        <NavLink to="/signUp">
                          <span className="text-blue-400 transition hover:underline">
                            Sign Up
                          </span>
                        </NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <Lottie animationData={signInImg}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;