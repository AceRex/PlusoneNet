import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../Pages/Loading/Loading";
const Login = React.lazy(() => import("../Pages/Login/login"));
const Register = React.lazy(() => import("../Pages/Register/register"));
const Main = React.lazy(() => import("../Pages/App/App"));
const AdminPortal = React.lazy(() => import("../Pages/AdminPortal"));
const Preview = React.lazy(() => import("../Pages/App/preview"));
const ProtectedRoute = React.lazy(() => import("./protectedRoute"));

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
          <Route path="/" element={<Main />} />
          <Route path="/preview/:productId" element={<Preview />} />
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
