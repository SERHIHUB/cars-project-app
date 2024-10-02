// import { useState } from 'react'
// import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { Navigation } from "./components/Navigation/Navigation";
import { RestrictedRoute } from "./RestrictedRoute";
import { UpdatePasswordPage } from "./pages/UpdatePasswordPage/UpdatePasswordPage";

// const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <h1>App</h1>
      {/* <Navigation /> */}
      {/* <Suspense fallback={null}> */}
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route
          path="/"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/reset-password"
          element={<RestrictedRoute component={<UpdatePasswordPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
