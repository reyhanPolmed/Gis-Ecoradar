import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing-page.tsx";
import AboutPage from "./About-us.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/data-spasial" element={<App/>}/>
        <Route path="/about-us" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
