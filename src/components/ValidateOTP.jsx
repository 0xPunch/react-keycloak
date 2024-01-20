import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const ValidateOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState("+46730803588");
  const [verificationCode, setVerificationCode] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleVerificationChange = (event) => {
    setVerificationCode(event.target.value);
  };
  const navigate = useNavigate();
  const sendOtp = async () => {
    console.log("validateOtp");
    try {
      const response = await fetch(
        "http://punch-auth-env.eba-mk5x9uxm.eu-north-1.elasticbeanstalk.com/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `che2$AQe2rexicho9Haro6u9as8oplciw7i02`,
          },
          body: JSON.stringify({ phoneNumber: phoneNumber,
          code: verificationCode }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        navigate('/wallet');
        console.log("Response:", jsonResponse);
        // Handle the response further if needed
      } else {
        console.error("Request failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DeviceFrameset device="iPhone 8" color="black">
      <div className="bg-primary-punchPeach text-center">
        <h1 className="text-6xl font-bold underline">Hello Punch User!</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendOtp();
          }}
        >
          <div className="justify-center">
            <input
              type="text"
              id="phone_number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
            <input
              type="text"
              id="verification_code"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Validation Code"
              value={verificationCode}
              onChange={handleVerificationChange}
              required
            />
            <button
              className="bg-primary-punchGrey hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </DeviceFrameset>
  );
};

export default ValidateOTP;

