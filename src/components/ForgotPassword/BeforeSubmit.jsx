import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useForgotPassword } from "../../Contexts/ForgotPasswordContext";
import ButtonsLoader from "../ButtonsLoader";

function BeforeSubmit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "all",
  });

  const { forgotPasswordButtonClicked, isLoading } = useForgotPassword();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const inputValue = watch("email");
  function onSubmit(data) {
    forgotPasswordButtonClicked(data.email);
  }

  return (
    <div className="flex justify-center items-center min-h-screen gap-20 mt-5">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold mb-10 text-center">
          Forgot your password
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-100 p-5">
          <div className="relative">
            <label htmlFor="password" className="text-gray-700">
              Email address <span className="text-gray-500">(required)</span>
            </label>
            <div>
              <input
                id="email"
                type="email"
                autoFocus
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailPattern,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`w-full py-1 border-b focus:outline-none focus:border-black peer ${
                  errors.email
                    ? "border-red-700"
                    : inputValue
                    ? "border-green-500 border-b-2 md:border-b"
                    : "border-gray-300"
                }`}
              />
              {!errors.email && inputValue && (
                <svg
                  className="w-0 h-0 sm:w-5 sm:h-5 mr-2 absolute right-0 top-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            {errors.email && (
              <p className="text-red-700 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <p className="text-xs font-medium text-gray-600 mt-5">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline underline-offset-2">
              Google Privacy Policy
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-2">
              Terms of Service
            </span>{" "}
            apply.
          </p>
          <div className="flex justify-center items-center flex-col mt-10 gap-5">
            <button
              style={{ textTransform: "uppercase" }}
              className="bg-amber-300 hover:bg-gray-50/80 transition cursor-pointer duration-300 w-50 py-2 rounded-2xl font-semibold"
            >
              {isLoading ? <ButtonsLoader /> : "reset password"}
            </button>
            <Link
              to={"/login"}
              style={{ textTransform: "uppercase" }}
              className="hover:bg-blue-500 hover:text-gray-100 duration-200 trasnition px-4 py-2 rounded-2xl font-semibold"
            >
              Go to login
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden lg:block">
        <img
          src="Images/forgot-password.webp"
          alt="Forgot Password"
          className="w-100 h-100 object-cover"
        />
      </div>
    </div>
  );
}

export default BeforeSubmit;
