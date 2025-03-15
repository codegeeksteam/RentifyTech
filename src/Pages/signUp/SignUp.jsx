import React, { useState } from "react";
import signUpImg from "../../assets/signUp.json";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const { signInGoogle, createUser, updateMyProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      console.log(res.user);
      updateMyProfile(data.name, data.photoURL)
        .then(() => {
            const userInfo = {
              name: data?.name,
              email: data?.email,
              photo: data?.photoURL,
              phone: data?.phone,
              role: data?.userType,
            };
            console.log(userInfo);
            navigate("/");
            // axiosPublic.post("/users", userInfo).then((res) => {
            //   if (res.data.insertedId) {
            //     reset();
            //     Swal.fire({
            //       title: "success!",
            //       text: "Sign Up Successful!",
            //       icon: "success",
            //     });
            //     navigate("/");
            //   }
            // });
        })
        .catch((error) => console.log(error));
    });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "success!",
          text: "Sign Up Successful!",
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
  return (
    <div>
      <div className="min-w-screen bg-gray-100 text-gray-900 flex lg:h-[99vh] justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-violet-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
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
                    <span className="ml-4 text-2xl px-4">
                      Sign Up with Google
                    </span>
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 mb-3 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      name="name"
                      placeholder="Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        This Name is required
                      </span>
                    )}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 mb-3 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      name="photoURL"
                      {...register("photoURL", { required: true })}
                      placeholder="photo URL"
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        This photo URL is required
                      </span>
                    )}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 mb-3 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="number"
                      name="phone"
                      {...register("phone", { required: true })}
                      placeholder="Phone Number"
                    />
                    {errors.phone && (
                      <span className="text-red-500">
                        This Phone Number is required
                      </span>
                    )}
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 mb-3 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      name="email"
                      {...register("email", { required: true })}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        This Email is required
                      </span>
                    )}
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          pattern:
                            /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#&*])/,
                        })}
                        placeholder="Enter your password"
                        className="input rounded-lg px-8 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:border-gray-400 focus:bg-white w-full"
                        required
                      />
                      {errors.password?.type === "required" && (
                        <span className="text-red-500">
                          This Password is required
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="text-red-500">
                          Password must be 6 characters
                        </span>
                      )}
                      {errors.password?.type === "pattern" && (
                        <span className="text-red-500">
                          Password must be only @$!#&*
                        </span>
                      )}
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-8 bottom-3.5"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {/* User Type Dropdown */}
                    {/* <div className="mb-4">
                      <select
                        id="userType"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 mt-3 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        {...register("userType", {
                          required: "User type is required",
                        })}
                      >
                        <option value="">Select user type</option>
                        <option value="User">User</option>
                        <option value="Delivery Man">Delivery Man</option>
                      </select>
                      {errors.userType &&  (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.userType.message}
                        </p>
                      )}
                      
                    </div> */}
                    <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
                      <span className="ml-3">Sign Up</span>
                    </button>
                    <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                      <p>
                        Already have an account? Please
                        <Link to="/signin">
                          <button className="text-blue-400 transition hover:underline">
                            Sign in
                          </button>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div className="m-12 flex items-center xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <Lottie animationData={signUpImg}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
