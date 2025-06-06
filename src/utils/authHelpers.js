import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export function setToken(token, rememberMe) {
  const options = {
    secure: true,
    sameSite: "lax",
    expires: rememberMe
      ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      : undefined,
  };

  Cookies.set("token", token, options);
  Cookies.set("rememberMe", rememberMe.toString(), options);
}

export function getToken() {
  return Cookies.get("token") || null;
}
export function getRememberMe() {
  return Cookies.get("rememberMe") === "true";
}

export function isLoggedIn() {
  return !!getToken();
}

export function logout() {
  Cookies.remove("token");
  Cookies.remove("rememberMe");
}

export function isValidToken(token) {
  try {
    const decoded = jwtDecode(token);
    if (!decoded) return false;
    return Date.now() < decoded * 1000;
  } catch (e) {
    return false;
  }
}

export function getLoginState() {
  return {
    token: getToken(),
    rememberMe: getRememberMe(),
  };
}

export function getUserIdFromToken() {
  try {
    const token = getToken();
    if (!token) return null;

    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded._id;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
