import React from "react";
import Input from "../../Components/input";
import { Link } from "react-router-dom";
import Button from "../../Components/button";

function Register() {
  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="w-[35%] m-auto rounded-lg bg-white shadow-2xl shadow-dark/20 p-12">
        <h3 className="font-light text-4xl text-dark tracking-tighter uppercase text-center mb-4">
          Register
        </h3>
        <form className="p-4">
          <Input type={"text"} placeholder={"Name"} />
          <Input type={"text"} placeholder={"Email"} />
          <Input type={"password"} placeholder={"Password"} />
          <p className="text-sm text-center my-4 text-dark">
            Already have an account?{" "}
            <span className="text-primary1">
              <Link to="/login"> Sign in</Link>
            </span>
          </p>
          <Button text={"Sign up"} type="fill" className={"my-4"} variant={"blue"}/>
        </form>
      </div>
    </div>
  );
}

export default Register;
