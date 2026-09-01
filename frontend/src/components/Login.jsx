import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-line bg-parchment px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

function Login() {
  const [message, setMessage] = useState("");
  const { loginUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      navigate("/");
    } catch (error) {
      setMessage("Email or password is incorrect. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setMessage("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-10">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-white p-8 shadow-card">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="grid size-11 place-items-center rounded-xl bg-brand text-parchment">
            <HiOutlineBookOpen className="size-6" />
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
            Welcome back
          </h2>
          <p className="mt-1 text-sm text-muted">Sign in to your Birana account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="••••••••"
              className={inputClass}
            />
          </div>
          {(errors.email || errors.password) && (
            <p className="text-xs text-red-600">Please enter a valid email and password.</p>
          )}
          {message && <p className="text-xs text-red-600">{message}</p>}
          <button type="submit" className="btn-primary w-full">
            Sign in
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-line" /> or <span className="h-px flex-1 bg-line" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-line py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-cream"
        >
          <FaGoogle className="text-brand" /> Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-semibold text-brand hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
