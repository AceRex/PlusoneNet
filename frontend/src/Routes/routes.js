import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../Pages/Loading/Loading";
const Login = React.lazy(() => import("../Pages/Login/login"));
const Register = React.lazy(() => import("../Pages/Register/register"));
const MainApp = React.lazy(() => import("../Pages/App/App"));
const Main = React.lazy(() => import("../Pages/App/main"));
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
          <Route path="/" element={<MainApp />}>
            <Route index={true} path="/" element={<Main />} />
            <Route path=":productId" element={<Preview />} />
          </Route>
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
