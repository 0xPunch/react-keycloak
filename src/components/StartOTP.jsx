import React, { useState, useEffect } from "react";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const StartOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  localStorage.setItem("phoneNumber", phoneNumber);
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const navigate = useNavigate();
  
  
  const sendOtp = async () => {
    console.log("sendOtp");
    try {
      console.log(JSON.stringify({ '"phoneNumber"': phoneNumber }));
      const response = await fetch(
        "http://punch-auth-env.eba-mk5x9uxm.eu-north-1.elasticbeanstalk.com/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `che2$AQe2rexicho9Haro6u9as8oplciw7i02`,
          },
          body: JSON.stringify({ phoneNumber: phoneNumber }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Response:", jsonResponse);
        navigate("validate-otp");
      } else {
        console.error("Request failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container flex justify-center mt-20">
      <DeviceFrameset device="iPhone 8" color="black">
        <div className="container bg-primary-punchPeach-lighter text-center w-full">
          <div className="flex justify-between pt-1">
            <div className="text-sm pl-2">9:41</div>
            <div className="flex space-x-2 pr-2">
              <FaSignal />
              <FaBatteryFull />
              <FaWifi />
            </div>
          </div>
          <div className="flex-col width-full pt-6">
            <h1 className="font-body uppercase text-7xl leading-none tracking-wide">
              Borderless
            </h1>
            <h1 className="font-body uppercase text-9xl leading-none">Money</h1>
            <h1 className="font-body uppercase text-7xl leading-none tracking-wider">
              Transfers
            </h1>
          </div>

          <form
            className="flex flex-col justify-center items-center pt-40"
            onSubmit={(event) => {
              event.preventDefault();
              sendOtp();
            }}
          >
            <div className="justify-center">
              <label
                className="flex justify-start text-sm"
                htmlFor="phone_number"
              >
                Please enter you phone number
              </label>
              <input
                type="text"
                id="phone_number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
              <div className="flex pt-12 pb-60">
                <button
                  className="bg-primary-punchGrey-darker hover:bg-primary-punchPeach text-primary-punchPeach-lighter font-bold py-4 px-32 w-full rounded-xl uppercase font-body text-4xl"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </DeviceFrameset>
    </div>
  );
};

export default StartOTP;
