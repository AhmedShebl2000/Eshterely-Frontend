import { useEffect, useState } from "react";
import Register from "../components/Register/Register";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { setToken, isLoggedIn, getRememberMe } from "../utils/authHelpers";
import axios from "axios";
import ButtonsLoader from "../components/ButtonsLoader";
import { useCart } from "../Contexts/CartContext";
import GoogleButton from "../components/GoogleButton";

function Login() {
  const [rememberMe, setRememberMe] = useState(getRememberMe());
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { fetchCart } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, [navigate]);

  async function handleLoginSubmit(data) {
    setIsLoading(true);
    setLoginError(null);
    try {
      const res = await axios.post(
        "https://eshterely.up.railway.app/api/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log(res);
      console.log(rememberMe);
      if (res.data.token) {
        setToken(res.data.token, rememberMe);
        await fetchCart();
        navigate("/");
      } else {
        throw new Error("No token received");
      }
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setLoginError("Invalid email or password");
        reset();
      } else {
        setLoginError(error.message || "Invalid email or password");
        reset();
      }
    } finally {
      setIsLoading(false);
    }
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center md:items-start mx-auto p-4 lg:p-7 gap-8 lg:gap-18 min-h-screen mt-10 max-w-6xl w-full">
      <div>
        <h3 className="font-semibold text-2xl mb-6">Log in</h3>
        <h5 className="font-medium text-md">Sign in to access your account</h5>
        <form
          className="w-full max-w-md mt-8 space-y-8"
          onSubmit={handleSubmit(handleLoginSubmit)}
          noValidate
        >
          <div className="flex flex-col">
            <label htmlFor="email">
              Email <span className="text-gray-500">(required)</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailPattern,
                  message: "Please enter a valid email address",
                },
              })}
              autoFocus
              className={`w-full py-1 border-b focus:outline-none focus:border-black border-gray-300 peer ${
                errors.email ? "border-red-700" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-700 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="password">
              Password <span className="text-gray-500">(required)</span>
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
              className={`w-full py-1 border-b focus:outline-none focus:border-black border-gray-300 peer ${
                errors.password ? "border-red-700" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-700 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {loginError && (
            <span className="text-sm text-red-700 flex justify-center">
              {loginError}
            </span>
          )}

          <div className="flex text-xs justify-between items-center text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <input
                name="acceptTerms"
                id="checkbox"
                className="mt-1 h-3 w-3 accent-black"
                type="checkbox"
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="checkbox" className="cursor-pointer">
                Remember Me
              </label>
            </div>
            <Link
              to={"/forgot-password"}
              className="underline underline-offset-2 cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>

          <p className="text-xs text-gray-600 ">
            This site is protected by reCAPTCHA and the
            <span className="underline underline-offset-2 mx-1 cursor-pointer">
              Google Privacy Policy
            </span>
            and
            <span className="underline underline-offset-2 mx-1 cursor-pointer">
              Terms of Service
            </span>
            apply.
          </p>
          <button
            type="submit"
            className="w-35 px-8 py-2 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors cursor-pointer"
          >
            {isLoading ? <ButtonsLoader /> : <span>Log in</span>}
          </button>
        </form>
        <div class="flex items-center my-6">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="px-4 text-gray-800 dark:text-gray-300 text-sm font-medium">
            OR
          </span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center items-center">
          <GoogleButton />
        </div>
      </div>
      <div className="border-r border-gray-400 mx-10 min-h-[500px] hidden lg:block"></div>
      <div>
        <Register />
      </div>
    </div>
  );
}

export default Login;
