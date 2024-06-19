import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import AdminPortal from "../Pages/AdminPortal";
import Loading from "../Pages/Loading/Loading";
import ProtectedRoute from "./protectedRoute";
const Login = React.lazy(() => import("../Pages/Login/login"));
const Register = React.lazy(() => import("../Pages/Register/register"));
const Main = React.lazy(() => import("../Pages/App/App"));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />}/>
          <Route
            path="/admin-portal"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={AdminPortal}
              />
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
