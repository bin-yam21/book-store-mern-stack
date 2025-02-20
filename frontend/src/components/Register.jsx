import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
function Register() {
  const [message, setMessage] = useState("");
  const { registerUser, signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("user registered successfully");
    } catch (error) {
      setMessage(error + "please enter a valid email and password");
    }
  };
  const hanleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login successfull");
      Navigate("/");
    } catch (error) {
      alert(error + "Google Sign in failed");
    }
  };
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 text-sm"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="name"
              placeholder="Email address"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-inner"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 text-sm"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded py-2 px-3 w-full leading-tight focus:outline-none focus:shadow-inner"
            />
          </div>
          {errors.email ||
            (errors.password && (
              <p className="text-red-500 text-xs italic mb-3">
                Please Enter Valid UserName and Email Addrees
              </p>
            ))}
          {/* {message && (
        <p className="text-red-500 text-xs italic mb-3">
          Please Enter Valid UserName and Email Addrees
        </p>
      )} */}
          <div>
            <button className="bg-blue-500 rounded focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-6">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven an acoount ? Please
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            {""} Login
          </Link>
        </p>
        {/* Google sign in */}
        <div className="mt-4">
          <button
            onClick={hanleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign up with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy,2025 Book Store , All right Reserved
        </p>
      </div>
    </div>
  );
}

export default Register;
