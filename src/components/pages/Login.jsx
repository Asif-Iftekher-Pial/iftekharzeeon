import React from "react";
import Banner from "../login/Banner";
import Form from "../login/form";
import { useNavigate } from "react-router-dom";

function Login() {

  return (
    <div className="grid sm:grid-cols-2  h-screen">
      <div className="hidden sm:block bg-linear-to-tr from-[#EFF6FF] to-[#E0E7FF]">
        <Banner />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default Login;
