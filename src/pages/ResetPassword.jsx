import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useForgotPassword } from "../Contexts/ForgotPasswordContext";
import ButtonsLoader from "../components/ButtonsLoader";
import { useState } from "react";

function ResetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "all" });

  const inputPasswordValue = watch("password");
  const inputConfirmPasswordValue = watch("confirmPassword");

  const { resetPassword, isLoading } = useForgotPassword();
  const [successMessage, setSuccessMessage] = useState(null);
  const { token } = useParams();

  async function onSubmit(data) {
    await resetPassword(data.password, token);
    setSuccessMessage("Password reset successfully!");
    setTimeout(() => navigate("/login"), 2000);
  }
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <div className="flex flex-col items-center gap-5">
        <img
          src="https://images.ctfassets.net/8cd2csgvqd3m/5KPtvnQ0EniDy6b2JYJqFm/56a6177d2a141592c3a6cc3b8d5be44f/BO_Logo_Black.svg"
          alt="B&O Logo"
          className="w-13 h-13 object-contain"
        />
        <h1 className="text-3xl font-semibold mb-10">Reset your password</h1>
      </div>
      <form
        className="w-full max-w-md mt-8 space-y-8 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="relative">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoFocus
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password must be at least 8 characters",
              },
              maxLngth: {
                value: 16,
                message: "Password must not exceed 16 characters",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,16}$/,
                message:
                  "Password must contain 1 digit, 1 lowercase, 1 uppercase, 1 special character, no space, and be 8-16 characters long",
              },
            })}
            className={`w-full py-1 border-b focus:outline-none focus:border-black peer ${
              errors.password
                ? "border-red-700"
                : inputPasswordValue
                ? "border-green-500 border-b-2 md:border-b"
                : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-700 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "*required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 16,
                message: "Password must not exceed 16 characters",
              },
              validate: (value) => {
                return value === watch("password") || "Passwords do not match";
              },
            })}
            className={`w-full py-1 border-b focus:outline-none focus:border-black peer ${
              errors.confirmPassword
                ? "border-red-700"
                : inputConfirmPasswordValue
                ? "border-green-500 border-b-2 md:border-b"
                : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-700 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button className="bg-amber-300 hover:bg-gray-50/80 transition cursor-pointer duration-300 py-2 rounded-2xl font-semibold w-full">
            {isLoading ? <ButtonsLoader /> : "Reset password"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
