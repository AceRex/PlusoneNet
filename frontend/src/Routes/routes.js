import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import AdminPortal from "../Pages/AdminPortal";
const Login = React.lazy(() => import("../Pages/Login/login"));
const Register = React.lazy(() => import("../Pages/Register/register"));
const Main = React.lazy(() => import("../Pages/App/App"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin-portal" element={<AdminPortal />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
