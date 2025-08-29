import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Routes/Home.jsx";
import MapaEcoponto from "./components/Routes/MapaEcoponto.jsx";
import SobreNos from "./components/Sobre nois/SobreNois.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "MapaEcoponto",
    element: <MapaEcoponto />,
  },
  {
    path: "Sobrenos",
    element: <SobreNos />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
