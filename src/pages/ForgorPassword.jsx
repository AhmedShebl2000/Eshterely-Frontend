import { useForgotPassword } from "../Contexts/ForgotPasswordContext";
import AfterSubmit from "../components/ForgotPassword/AfterSubmit";
import BeforeSubmit from "../components/ForgotPassword/BeforeSubmit";
function ForgorPassword() {
  const { forgotPasswordClicked } = useForgotPassword();
  return (
    <div>{forgotPasswordClicked ? <AfterSubmit /> : <BeforeSubmit />}</div>
  );
}

export default ForgorPassword;
