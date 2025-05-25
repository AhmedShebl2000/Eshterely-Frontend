import Cookies from "js-cookie";

export function setToken(token, rememberMe) {
  const options = {
    secure: true,
    sameSite: "strict",
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
