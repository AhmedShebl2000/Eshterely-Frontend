import { useFormik } from "formik";
import Button from "../../UI/Button";
import { registrationSchema } from "../../schemas";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router";
import ButtonsLoader from "../ButtonsLoader";
import { useEffect, useState } from "react";
import { getToken, setToken } from "../../utils/authHelpers";

const formVariants = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};
const inputVariants = {
  hidden: {
    x: 300,
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate("/");
    }
  }, [navigate]);

  async function onSubmit() {
    const newUser = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://eshterely.up.railway.app/api/auth/register",
        newUser
      );
      console.log(res.data);
      setToken(res.data.token, false);
      resetForm();
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });
  return (
    <div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-7"
    >
      <motion.h1
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="font-semibold text-2xl"
      >
        New account
      </motion.h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full ">
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-md">
            First Name <span className="text-gray-500">(required)</span>
          </label>
          <input
            className={`w-full py-1 border-b focus:outline-none focus:border-black border-gray-300 peer ${
              errors.firstName && touched.firstName && "border-red-700"
            }`}
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="text-red-700 text-xs">{errors.firstName}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-md">
            Last Name <span className="text-gray-500">(required)</span>
          </label>
          <input
            className={`w-full py-1 border-b focus:outline-none focus:border-black border-gray-300 peer ${
              errors.lastName && touched.lastName && "border-red-700"
            }`}
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="text-red-700 text-xs">{errors.lastName}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-md">
            Email <span className="text-gray-500">(required)</span>
          </label>
          <input
            className={`w-full py-1 border-b focus:outline-none focus:border-black border-gray-300 peer ${
              errors.email && touched.email && "border-red-700"
            }`}
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-red-700 text-xs">{errors.email}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-md">
            Password <span className="text-gray-500">(required)</span>
          </label>
          <input
            className={`w-full py-1 border-b focus:outline-none focus:border-black border-gray-300 peer ${
              errors.password && touched.password && "border-red-700"
            }`}
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="text-red-700 text-xs">{errors.password}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-md">
            Confirm Password <span className="text-gray-500">(required)</span>
          </label>
          <input
            className={`w-full py-1 border-b focus:outline-none focus:border-black border-gray-300 peer  ${
              errors.confirmPassword &&
              touched.confirmPassword &&
              "border-red-700"
            }`}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-700 text-xs">{errors.confirmPassword}</p>
          )}
          <div className="flex justify-center gap-2 mt-5 self-start text-[12px] font-medium text-gray-500">
            <input
              name="acceptContact"
              className="mt-1 h-4 w-4 accent-black"
              type="checkbox"
            />
            <p>
              I accept that Bang & Olufsen can contact me via digital
              communication, including email with personalized marketing of our
              products and events in Bang & Olufsen shops. Unsubscribing is
              possible at any time. Details on how personal data is processed:
              <span className="underline ml-1 underline-offset-2 cursor-pointer">
                privacy policy.
              </span>
            </p>
          </div>
          <p className="text-wrap mt-10 text-[12px] font-medium text-gray-500">
            By signing up to the House of Bang & Olufsen you accept that Bang &
            Olufsen as well as Bang & Olufsen branded shops can contact you by
            email. You are welcome to unsubscribe at any time. For more
            information about what we do with your personal data see our privacy
            policy
          </p>
          <div className="flex justify-center  gap-2 mt-5 self-start text-[12px] font-medium text-gray-500">
            <input
              name="acceptTerms"
              className="mt-1 h-4 w-4 accent-black"
              type="checkbox"
            />
            <p>
              I accept terms of sale and privacy policy. This site is protected
              by reCAPTCHA and the Google Privacy Policy and Terms of Service
              apply
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: [0.9, 1.1, 0.9, 1.1, 0.9],
            transition: {
              duration: 1.5,
              repeat: Infinity,
            },
          }}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex  font-semibold"
        >
          <button
            disabled={isSubmitting}
            className="bg-[#ffc356] py-2 mb-20 rounded-3xl items- cursor-pointer  md:w-40"
          >
            {isLoading ? <ButtonsLoader /> : <span>Create account</span>}
          </button>
        </motion.div>
      </form>
    </div>
  );
}

export default RegistrationForm;
