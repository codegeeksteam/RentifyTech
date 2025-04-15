import React, { useState, useEffect } from "react";
import signUpImg from "../../assets/signUp.json";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import HelmetTitle from "../../Components/HelmetTitle";
import { MdAddCall, MdLock, MdMail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoIosPersonAdd } from "react-icons/io";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const navigate = useNavigate();
  const { signInGoogle, createUser, updateMyProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [showPassword, setShowPassword] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data) => {
    try {
      // Image upload to ImgBB
      const imageFile = { image: data.photoURL[0] };
      const imgUploadRes = await axiosPublic.post(
        image_hosting_api,
        imageFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Get the uploaded image URL
      const photoURL = imgUploadRes.data.data.url;

      // Create user with Firebase
      const userRes = await createUser(data.email, data.password);
      console.log(userRes);
      // Update Firebase profile with name and photoURL
      await updateMyProfile(data.name, photoURL);

      // Prepare user info for your backend
      const userInfo = {
        name: data?.name,
        email: data?.email,
        photo: photoURL, // Use the uploaded photo URL
        phone: data?.phone,
        role: data?.userType,
      };

      // Send user info to your backend
      const serverRes = await axiosSecure.post("/users", userInfo);
      if (serverRes.data.insertedId) {
        reset();
        Swal.fire({
          title: "success!",
          text: "Sign Up Successful!",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: "ERROR!",
        text: `${error.message}`,
        icon: "error",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInGoogle();
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        role: "User",
      };
      const serverRes = await axiosPublic.post("/users", userInfo);
      if (serverRes.data.insertedId) {
        Swal.fire({
          title: "success!",
          text: "Sign Up Successful!",
          icon: "success",
        });
        navigate(from, { replace: true });
      }
    } catch (error) {
      Swal.fire({
        title: "ERROR!",
        text: `${error.message}`,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <HelmetTitle title={"Sign up"} />
      <div className="min-w-screen text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex flex-col items-center">
              <div className="w-full flex-1 mt-10">
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-violet-300 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
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
                    <span className="ml-4 text-lg px-5">
                      Sign Up with Google
                    </span>
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-3 py-1 rounded-xl inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <RiContactsFill
                          size={25}
                          className="text-gray-400 ml-3"
                        />
                        <input
                          placeholder="Your Name"
                          name="name"
                          type="text"
                          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div className="min-h-[2px]">
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            This Name is required
                          </span>
                        )}
                      </div>
                    </div>

                    <fieldset className="relative">
                      <label className="block text-sm font-medium text-gray-700">
                        Choose a Profile Picture
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-neutral"
                        {...register("photoURL", { required: true })}
                        name="photoURL"
                      />
                      <div className="min-h-[2px]">
                        {errors.photoURL && (
                          <span className="text-red-500 text-sm">
                            This photo URL is required
                          </span>
                        )}
                      </div>
                    </fieldset>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <MdAddCall size={25} className="text-gray-400 ml-3" />
                        <input
                          placeholder="Your Number"
                          name="phone"
                          type="number"
                          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                          {...register("phone", { required: true })}
                        />
                      </div>
                      <div className="min-h-[2px]">
                        {errors.phone && (
                          <span className="text-red-500 text-sm">
                            This Phone Number is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <MdMail size={25} className="text-gray-400 ml-3" />
                        <input
                          placeholder="Your Email"
                          name="email"
                          type="text"
                          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                          {...register("email", { required: true })}
                          autoComplete="email"
                        />
                      </div>
                      <div className="min-h-[2px]">
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            This Email is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <MdLock size={25} className="text-gray-400 ml-3" />
                        <input
                          placeholder="Password"
                          name="password"
                          autoComplete="new-password"
                          type={showPassword ? "text" : "password"}
                          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern:
                              /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#&*])/,
                          })}
                        />
                        <span
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 text-gray-300"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <div className="min-h-[2px]">
                        {errors.password?.type === "required" && (
                          <span className="text-red-500 text-sm">
                            This Password is required
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="text-red-500 text-sm">
                            Password must be 6 characters
                          </span>
                        )}
                        {errors.password?.type === "pattern" && (
                          <span className="text-red-500 text-sm">
                            Password must include a lowercase, uppercase,
                            number, and special character (@$!#&*)
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        id="userType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        {...register("userType", {
                          required: "User type is required",
                        })}
                      >
                        <option value="">Select user type</option>
                        <option value="User">User</option>
                        <option value="Agent">Agent</option>
                      </select>
                      <div className="min-h-[5px]">
                        {errors.userType && (
                          <p className="text-red-500 text-sm">
                            {errors.userType.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <IoIosPersonAdd size={25} />
                      <span className="ml-3">Sign Up</span>
                    </button>

                    <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                      <p>
                        Already have an account? Please
                        <Link to="/signin">
                          <span className="text-blue-400 transition hover:underline">
                            Sign in
                          </span>
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
              {isMounted && (
                <Lottie animationData={signUpImg} style={{ width: "50%" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
