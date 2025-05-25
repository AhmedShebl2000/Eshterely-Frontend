import { createContext, useContext, useState } from "react";

const ForgotPasswordContext = createContext();

function ForgotPasswordProvider({ children }) {
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function forgotPasswordButtonClicked(userEmail) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://eshterely.up.railway.app/api/auth/forgot-password`,
        {
          method: "POST",
          body: JSON.stringify({ email: userEmail }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong!");
      }
      setForgotPasswordClicked(true);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function resetPassword(newPassword, token) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://eshterely.up.railway.app/api/auth/reset-password/${token}`,
        {
          body: JSON.stringify({ newPassword }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Something went wrong");
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      throw err;
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ForgotPasswordContext.Provider
      value={{
        forgotPasswordClicked,
        setForgotPasswordClicked,
        isLoading,
        error,
        forgotPasswordButtonClicked,
        resetPassword,
      }}
    >
      {children}
    </ForgotPasswordContext.Provider>
  );
}

function useForgotPassword() {
  const context = useContext(ForgotPasswordContext);
  if (context === undefined) {
    throw new Error(
      "useForgotPassword must be used within a ForgotPasswordProvider"
    );
  }
  return context;
}

export { useForgotPassword, ForgotPasswordProvider };
