import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider 
  domain="dev-q8cx154qb7b3j6vd.us.auth0.com"
  clientId="hdrNTtHrlDmKK1OGO7WpBcp6QhB1JfDd"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  audience="https://homyz-front-git-main-mateusbeltraos-projects.vercel.app"
  scope="openid profile email"
>
  <App />
</Auth0Provider>

  </React.StrictMode>
);


homyz