import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
import { jwtDecode } from 'jwt-decode';


const client = new Keycloak({
  url: 'https://ims.getpunch.io/',
  realm: "Punch",
  clientId: "Demo",
});

const useAuth = () => {
  const isRun = useRef(false);
  console.log("isRun.current:" + isRun)

  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;
    console.log("isRun.current:" + isRun.current)

    isRun.current = true;
    client
      .init({
        onLoad: "login-required",
      })
      .then((res) => {
        setLogin(res);
        console.log(client.token);
        const decodedToken = jwtDecode(client.token);
        localStorage.setItem("email", decodedToken.email)
        

        setToken(client.token);
      });
  }, []);

  return [isLogin, token];
};

export default useAuth;
