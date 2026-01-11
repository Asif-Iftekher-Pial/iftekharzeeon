import React from "react";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("auth", true);
    navigate("/dashboard");
  }
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-md flex flex-col justify-center items-center">
        <img
          src={DashboardIcon}
          alt="Login"
          className="w-12 h-12 opacity-100 rounded-xl"
        />
        <h1 className="text-3xl font-bold">Home Inventory</h1>
        <p className="text-gray-600">Track organize your things</p>

        <div className="w-md border border-[#E2E8F0] rounded-xl shadow-md shadow-black/20 p-6 mt-6">
          <form className="mt-8 flex flex-col">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              placeholder="Enter your user name"
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <div className="flex justify-between my-2">
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-[#3B82F6]">
                Forgot Password
              </a>
            </div>
            <button onClick={handleLogin} className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
              Sign in
              <FaArrowRight />
            </button>
            <p className="text-center text-gray-600 mt-4">
              Dont have an account?{" "}
              <a href="#" className="text-[#3B82F6]">
                Create one
              </a>
            </p>
          </form>
        </div>
        <div>
          <div className="text-gray-400 text-sm mt-6">
            <p className="text-center">Version 1.0.0</p>
            <div className="flex justify-between items-center">
              <a href="#" className="mx-4">
                Help Center
              </a>
              <h1 className="flex items-center justify-center">.</h1>
              <a href="#" className="mx-4 ">
                Privacy Policy
              </a>
              <h1 className="flex items-center justify-center">.</h1>
              <a href="#" className="mx-4">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
