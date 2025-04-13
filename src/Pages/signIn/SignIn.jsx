import React, { useState } from "react";
import signInImg from "../../assets/signIn.json";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import useAuth from "../../Hooks/useAuth";
import HelmetTitle from "../../Components/HelmetTitle";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  console.log(from);
  const { singInUser, signInGoogle, forgetPassword } = useAuth();

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "success!",
          text: "Sign In Successful!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };
  const handleForgetPassword = () => {
    const email = event.target.email.value;
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "Password Reset Link Sent!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR!",
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
    console.log(email, password);
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "success!",
          text: "Sign In Successful!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR!",
          text: `${error.message}`,
          icon: "error",
        });
      });
  };
  return (
    <div>
      <HelmetTitle title={"Sign in"} />
      <div className="min-w-screen min-h-screen text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-gray-700 shadow sm:rounded-lg flex justify-center flex-1">
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
                    {/**Email Input */}
                    <div className="input_container">
                      <label className="input_label" htmlFor="email_field">
                        Email
                      </label>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                      >
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          stroke="#141B34"
                          d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
                        />
                        <path
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          stroke="#141B34"
                          d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                        />
                      </svg>
                      <input
                        placeholder="Your Email"
                        title="Inpit title"
                        name="email"
                        type="text"
                        className="input_field"
                        id="email_field"
                        required
                      />
                    </div>
                    {/**Password Input */}
                    <div className="input_container">
                      <label className="input_label" htmlFor="password_field">
                        Password
                      </label>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-gray-400"
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
                        title="Inpit title"
                        name="input-name"
                        type={showPassword ? "text" : "password"}
                        className="input_field"
                        id="password_field"
                        required
                      />
                      <Link
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-8 text-gray-300 bottom-3.5"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Link>
                    </div>

                    {/* <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        className="input rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white w-full pl-10"
                        required
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-8 bottom-3.5"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div> */}

                    {/**Forgot Password */}
                    <Link
                        className="font-medium text-gray-400"
                        onClick={handleForgetPassword}
                      >
                        Forget Password
                      </Link>

                    <Link className="mt-5 tracking-wide font-semibold bg-green-300 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-2">Sign In</span>
                    </Link>
                    <div className="flex flex-col mt-4 text-sm text-center">
                      <p>
                        Don't have an account?
                        <NavLink to="/signUp">
                          <Link className="text-blue-400 transition hover:underline">
                            Sign Up
                          </Link>
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
