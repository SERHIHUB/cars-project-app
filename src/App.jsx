// import { useState } from 'react'
// import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { HomePage } from "./pages/HomePage/HomePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { AbonementsPage } from "./pages/AbonementsPage/AbonementsPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";

import { Navigation } from "./components/Navigation/Navigation";
import { RestrictedRoute } from "./RestrictedRoute";
import { UpdatePasswordPage } from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";

// const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {/* <Suspense fallback={null}> */}

      <Routes>
        <Route path="/home" element={<HomePage />} />

        <Route
          path="/abonements"
          element={
            <RestrictedRoute
              component={<AbonementsPage />}
              redirectTo="/home"
            />
          }
        />

        <Route
          path="/contacts"
          element={
            <RestrictedRoute component={<ContactsPage />} redirectTo="/home" />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/home" />
          }
        />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/home" />
          }
        />

        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route
          path="/reset-password"
          element={<RestrictedRoute component={<UpdatePasswordPage />} />}
        /> */}
        <Route path="/reset-password" element={<UpdatePasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* </Suspense> */}
    </>
  );
}

export default App;
