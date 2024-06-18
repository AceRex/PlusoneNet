import React, { useState } from "react";
import Input from "../../Components/input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/button";
import { register } from "../../Redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const user = useSelector((state) => state.user.user);
  const registerStatus = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const registerDetails = {
        name,
        email,
        password,
      };

      await dispatch(register(registerDetails));
      if (registerStatus === "succeeded") {
        navigate("/");
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="w-[35%] m-auto rounded-lg bg-white shadow-2xl shadow-dark/20 p-12">
        <h3 className="font-light text-4xl text-dark tracking-tighter uppercase text-center mb-4">
          Register
        </h3>
        <form className="p-4">
          <Input
            type={"text"}
            value={name}
            placeholder={"Name"}
            onChange={(e) => setName(e.target.value)}
          />
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
            Already have an account?{" "}
            <span className="text-primary1">
              <Link to="/login"> Sign in</Link>
            </span>
          </p>
          <Button
            text={"Sign up"}
            type="fill"
            className={"my-4"}
            variant={"blue"}
            onClick={handleRegister}
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
