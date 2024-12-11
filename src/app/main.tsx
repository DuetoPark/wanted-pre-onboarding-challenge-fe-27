import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Providers } from "./providers";
import { router } from "./providers/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />

      <ReactQueryDevtools initialIsOpen={false} />
    </Providers>
  </StrictMode>
);
