import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import RegistrationForm from "./RegistrationForm";
import { AnimatePresence, motion } from "framer-motion";

function Register() {
  const [showRegFrom, setShowRegFrom] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen ">
      {!showRegFrom && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-3"
          >
            <h1 className="font-medium text-2xl mb-3">
              New to Bang & Olufsen?
            </h1>
            <p className="flex font-medium text-md mb-8">
              With your account you can:
            </p>

            <div className="flex gap-3 items-center">
              <span>
                <FaCheck />
              </span>
              <p className="w-92">
                Use the Bang & Olufsen app to setup, optimize and control your
                products.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span>
                <FaCheck />
              </span>
              <p className="w-92">
                Manage your personal details, history and preferences.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span>
                <FaCheck />
              </span>
              <p className="w-92">
                View your access to the house of Bang & Olufsen and exclusive
                benefits.
              </p>
            </div>
            <button
              onClick={() => setShowRegFrom(true)}
              className="flex flex-1/2 ring-2 ring-black w-40 justify-center rounded-full p-1 font-semibold cursor-pointer hover:text-white hover:bg-black transition-all duration-300 mt-8"
            >
              Create Account
            </button>
          </motion.div>
        </AnimatePresence>
      )}
      {showRegFrom && <RegistrationForm />}
    </div>
  );
}

export default Register;
