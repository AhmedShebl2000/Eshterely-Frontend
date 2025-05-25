import { GoogleLogin } from "@react-oauth/google";
import { setToken } from "../utils/authHelpers";
import { useNavigate } from "react-router";
import { useCart } from "../Contexts/CartContext";

function GoogleButton() {
  const navigate = useNavigate();
  const { fetchCart } = useCart();
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          const res = await fetch(
            "https://eshterely.up.railway.app/api/auth/google",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: credentialResponse.credential }),
            }
          );
          if (!res.ok) throw new Error("Network response was not ok");

          const data = await res.json();
          console.log("User data from backend:", data);
          setToken(data.token, true);
          await fetchCart();
          navigate("/");
        } catch (error) {
          console.error("Login failed:", error);
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default GoogleButton;
