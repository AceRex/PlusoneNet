import React from "react";
import Input from "../../Components/input";
import { Link } from "react-router-dom";
import Button from "../../Components/button";

function Login() {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="w-[35%] m-auto rounded-lg bg-white shadow-2xl shadow-dark/20 p-12">
        <h3 className="font-light text-4xl text-center text-dark uppercase mb-4">
          Log in
        </h3>
        <form className="p-4">
          <Input type={"text"} placeholder={"Email"} />
          <Input type={"password"} placeholder={"Password"} />
          <p className="text-sm text-center my-4 text-dark">
            You dont have an account?{" "}
            <span className="text-primary1">
              <Link to="/register"> Sign up</Link>
            </span>
          </p>
          <Button text="Login" type="fill" className={"my-4"} variant={"blue"} />
        </form>
      </div>
    </div>
  );
}

export default Login;
