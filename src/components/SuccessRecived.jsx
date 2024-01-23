import React, { useState, useEffect } from "react";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const SuccessSent = () => {
  const navigate = useNavigate();
  const amount = localStorage.getItem("amount");
  const user = localStorage.getItem("amount");
  return (
    <div className="container flex justify-center mt-20">
      <DeviceFrameset device="iPhone 8" color="black">
        <div className="container bg-primary-punchPeach-lighter text-center h-full">
          <div className="flex justify-between pt-1 pb-20">
            <div className="text-sm pl-2">9:42</div>
            <div className="flex space-x-2 pr-2">
              <FaSignal />
              <FaBatteryFull />
              <FaWifi />
            </div>
          </div>
          <div className="flex flex-col pt-30 text-center">
            <p className="font-display uppercase text-center">Successfully</p>
            <h1 className="font-body uppercase text-9xl">Recieved</h1>
          </div>
          {/* Vad man har skickat */}
          <div className="pt-6 pb-52">
            {amount && (
              <p className="text-8xl font-display">
                {"\u20AC"}
                {amount}
              </p>
            )}
          </div>
          <div className="flex">
            <button
              onClick={() => {
                navigate("/start-opt");
              }}
              className="bg-primary-punchGrey-darker hover:bg-primary-punchPeach text-primary-punchPeach-lighter font-bold py-4 px-32 w-full rounded-xl uppercase font-body text-4xl mx-2"
              type="submit"
            >
              Close
            </button>
          </div>
        </div>
      </DeviceFrameset>
    </div>
  );
};

export default SuccessSent;
