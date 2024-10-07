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
import { CarDetailsPage } from "./pages/CarDetailsPage/CarDetailsPage";

import { Navigation } from "./components/Navigation/Navigation";
import { RestrictedRoute } from "./RestrictedRoute";
import { UpdatePasswordPage } from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Layout } from "./components/Layout/Layout";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { PrivateRoute } from "./PrivateRoute";

// const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/abonements"
            element={
              <PrivateRoute component={<AbonementsPage />} redirectTo="/" />
            }
          />

          <Route
            path="/abonements/:carId"
            element={
              <PrivateRoute component={<CarDetailsPage />} redirectTo="/" />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/" />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/" />
            }
          />

          <Route path="/reset-password" element={<UpdatePasswordPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
