import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

// Fuentes alojadas en la propia web (antes venían de Google Fonts).
import "@fontsource/pirata-one";
import "@fontsource/im-fell-english";
import "@fontsource/im-fell-english/400-italic.css";
import "@fontsource/im-fell-english-sc";

import { getRouter } from "./router";

const router = getRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
