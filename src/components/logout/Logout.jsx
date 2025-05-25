import { logout } from "../../utils/authHelpers";
import { useCart } from "../../Contexts/CartContext";

function Logout() {
  const { setProductArr } = useCart();
  function handleLogout() {
    logout();
    setProductArr([]);
  }
  return <div onClick={() => handleLogout()}>Logout</div>;
}

export default Logout;
