import { Link } from "react-router";

function AfterSubmit() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-20 mt-5">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold mb-10 text-center">
          Password reset
        </h1>
        <div className="max-w-100 p-5">
          <p className="text-md font-medium text-center text-gray-600 mb-10">
            If an account with this email exists, a password reset link will be
            sent
          </p>
          <div className="flex justify-center items-center flex-col mt-10 gap-5">
            <Link
              to="/login"
              style={{ textTransform: "uppercase" }}
              className="bg-amber-300 hover:bg-gray-50/80 transition cursor-pointer duration-300 w-50 py-2 rounded-2xl font-semibold text-center"
            >
              Go to login
            </Link>
          </div>
        </div>
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

export default AfterSubmit;
