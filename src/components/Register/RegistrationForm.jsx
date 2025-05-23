import { useFormik } from "formik";
import Button from "../../UI/Button";
import { registrationSchema } from "../../schemas";
import { motion } from "framer-motion";

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
  function onSubmit() {
    console.log("submitted");
  }

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-lg">First Name</label>
          <input
            className={`ring-1 ring-black rounded-sm p-1 ${
              errors.firstName && touched.firstName && "ring-red-500"
            }`}
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="text-red-500">{errors.firstName}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-lg">Last Name</label>
          <input
            className={`ring-1 ring-black rounded-sm p-1 ${
              errors.lastName && touched.lastName && "ring-red-500"
            }`}
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="text-red-500">{errors.lastName}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-lg">Email</label>
          <input
            className={`ring-1 ring-black rounded-sm p-1 ${
              errors.email && touched.email && "ring-red-500"
            }`}
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-lg">Password</label>
          <input
            className={`ring-1 ring-black rounded-sm p-1 ${
              errors.password && touched.password && "ring-red-500"
            }`}
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="text-red-500">{errors.password}</p>
          )}
        </motion.div>
        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 w-92"
        >
          <label className="text-lg">Confirm Password</label>
          <input
            className={`ring-1 ring-black rounded-sm p-1 ${
              errors.confirmPassword &&
              touched.confirmPassword &&
              "ring-red-500"
            }`}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
          <p className="text-wrap mt-10">
            By signing up to the House of Bang & Olufsen you accept that Bang &
            Olufsen as well as Bang & Olufsen branded shops can contact you by
            email. You are welcome to unsubscribe at any time. For more
            information about what we do with your personal data see our privacy
            policy
          </p>
          <div className="flex justify-center gap-2 mt-5 self-start">
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
              privacy policy .
            </p>
          </div>
          <div className="flex justify-center  gap-2 mt-5 self-start">
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
          className="flex justify-center font-semibold"
        >
          <Button>Create Account</Button>
        </motion.div>
      </form>
    </div>
  );
}

export default RegistrationForm;
