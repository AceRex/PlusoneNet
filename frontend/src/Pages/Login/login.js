import React, { useEffect, useState } from "react";
import Input from "../../Components/input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/slice/userSlice";
import { MdErrorOutline } from "react-icons/md";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showErr, setShowErr] = useState(false);
  const user = useSelector((state) => state.user.user);
  const loginStatus = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowErr(false);
    try {
      const loginDetails = {
        email,
        password,
      };

      await dispatch(login(loginDetails));
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  useEffect(() => {
    if (loginStatus === "succeeded") {
      navigate("/admin-portal");
    } else if (loginStatus === "failed") {
      setErrMsg(error);
      setShowErr(true);
    }
  }, [loginStatus, navigate, user, error]);
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="w-[35%] m-auto rounded-lg bg-white shadow-2xl shadow-dark/20 p-12">
        <h3 className="font-light text-4xl text-center text-dark uppercase mb-4">
          Log in
        </h3>
        <form className="p-4">
          <Input
            type={"text"}
            value={email}
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            value={password}
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-sm text-center my-4 text-dark">
            You dont have an account?{" "}
            <span className="text-primary1">
              <Link to="/register"> Sign up</Link>
            </span>
          </p>
          <Button
            text="Login"
            type="fill"
            className={"my-4"}
            variant={"blue"}
            onClick={handleLogin}
          />
          {showErr && (
            <div className="bg-error/10 flex gap-4 items-center place-content-center text-error text-sm p-4 rounded-lg">
              <MdErrorOutline size={20} />
              {errMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
