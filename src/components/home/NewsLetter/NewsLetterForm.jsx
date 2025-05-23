import { useRef, useState } from "react";
import NewsLetterTerms from "./NewsLetterTerms";

export default function NewsLetterForm() {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("The email address entered is invalid");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validateName(firstName)) {
      setFirstNameError("First name must be at least 2 characters");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!validateName(lastName)) {
      setLastNameError("Last name must be at least 2 characters");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (isValid) {
      const formData = { email, firstName, lastName };
      console.log(formData);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-8 space-y-8"
        noValidate
      >
        <div className="relative">
          <input
            id="email"
            type="email"
            required
            className={`w-full pl-0 pr-4 py-2 border-b ${
              emailError ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-black peer`}
            ref={emailRef}
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
              id="firstName"
              type="text"
              required
              className={`w-full pl-0 pr-4 py-2 border-b ${
                firstNameError ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-black peer`}
              ref={firstNameRef}
            />
            <label
              htmlFor="firstName"
              className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-black peer-valid:-translate-y-7 peer-valid:text-sm peer-valid:text-black cursor-text bg-white pr-1"
            >
              First name (required)
            </label>
            {firstNameError && (
              <p className="text-red-500 text-sm mt-1">{firstNameError}</p>
            )}
          </div>
          <div className="relative w-full">
            <input
              id="lastName"
              type="text"
              required
              className={`w-full pl-0 pr-4 py-2 border-b ${
                lastNameError ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-black peer`}
              ref={lastNameRef}
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 top-2 text-gray-500 transition-all peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-black peer-valid:-translate-y-7 peer-valid:text-sm peer-valid:text-black cursor-text bg-white pr-1"
            >
              Last name (required)
            </label>
            {lastNameError && (
              <p className="text-red-500 text-sm mt-1">{lastNameError}</p>
            )}
          </div>
        </div>

        <NewsLetterTerms />
        <button
          type="submit"
          className="w-full px-8 py-3 bg-[#FFB800] text-black font-semibold rounded-full hover:bg-[#FFD700] transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
