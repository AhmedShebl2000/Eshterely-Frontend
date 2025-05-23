import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState();
  return (
    <div className="flex max-w-[1100px] justify-center items-center mx-auto p-7">
      <div>
        <h3 className="font-semibold text-2xl mb-6">Log in</h3>
        <h5 className="font-medium text-md">Sign in to access your account</h5>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mt-8 space-y-8"
        >
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              required
              className={`w-full pl-0 pr-4 py-2 border-b ${
                emailError ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-black peer`}
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-black peer-valid:-translate-y-7 peer-valid:text-sm peer-valid:text-black cursor-text bg-white pr-1"
            >
              Email (required)
            </label>
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="relative w-full">
              <input
                id="password"
                type="password"
                value={password}
                required
                className={`w-full pl-0 pr-4 py-2 border-b ${
                  firstNameError ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-black peer`}
              />
              <label
                htmlFor="firstName"
                className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-black peer-valid:-translate-y-7 peer-valid:text-sm peer-valid:text-black cursor-text bg-white pr-1"
              >
                Password (required)
              </label>
              {firstNameError && (
                <p className="text-red-500 text-sm mt-1">{firstNameError}</p>
              )}
            </div>
          </div>
          <div>
            <div>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div>Forgot password?</div>
          </div>
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="border-r border-gray-400 mx-8"></div>
      <div>
        <h1>New to Bang & Olufsen?</h1>
        <h4>With your account, you can:</h4>
        <div>
          <span>✔️</span>
          <p>
            Use the Bang & Olufsen app to setup, optimize and control your
            products.
          </p>
        </div>
        <div>
          <span>✔️</span>
          <p>Manage your personal details, history and preferences.</p>
        </div>
        <div>
          <span>✔️</span>
          <p>
            View your access to the house of Bang & Olufsen and exclusive
            benefits.
          </p>
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
