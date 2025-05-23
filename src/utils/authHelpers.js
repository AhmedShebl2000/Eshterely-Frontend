import Cookies from "js-cookie";

export function setToken(token, rememberMe) {
  const expirationData = rememberMe
    ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    : undefined;

  Cookies.set("token", token, expirationData);
  Cookies.set("remember me", rememberMe, expirationData);
}

export function getToken() {
  return Cookies.get("token") || null;
}
export function getRememberMe() {
  return Cookies.get("remember me") === "true";
}

export function isLoggedIn() {
  return !!getToken();
}

export function logout() {
  Cookies.remove("token");
  Cookies.remove("remember me");
}

export function isValidToken() {
  const token = getToken();
  return token !== null && token.length > 10;
}

export function getLoginState() {
  return {
    token: getToken(),
    rememberMe: getRememberMe(),
  };
}
