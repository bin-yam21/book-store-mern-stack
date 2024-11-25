import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getBaseUrl from "../utils/baseUrl";

function AdminLogin() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has been expaired , please login again");
          navigate("/");
        }, 3600 * 1000);
      }
      setMessage("Login successful");
      alert("Admin Login successful");
      navigate("/dashboard");
    } catch (error) {
      setMessage(
        error +
          "email or password incorrect please provide a valid email and password"
      );
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 text-sm"
              htmlFor="email"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="Your username"
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
            <button className="bg-blue-500 w-full rounded focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-6">
              Login
            </button>
          </div>
        </form>

        {/* Google sign in */}

        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy,2025 Book Store , All right Reserved
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
