import React from "react";
import login from "../../assets/login.png";

function Banner() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex justify-center items-center ">
          <img
            src={login}
            alt="login banner"
            className="w-lg h-125 max-h-125 opacity-100"
          />
        </div>
        <div className="w-lg mt-10 flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Organize Everything</h1>
            <p className="mt-4 text-center text-gray-600">
              Keep Track of belongings, manage inventory, and streamline your important processes all in one place.
            </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
