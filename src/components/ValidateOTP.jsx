import React, { useState, useEffect } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const StartOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState("+46730803588");
  const [verificationCode, setVerificationCode] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleVerificationChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const sendOtp = async (e) => {
    /* e.preventDefault(); */
    console.log("sendOtp");
    try {
      const response = await fetch(
        "http://punch-auth-env.eba-mk5x9uxm.eu-north-1.elasticbeanstalk.com/verify-otp",
        {
          method: "POST",
          headers: {
            "x-api-key": `che2$AQe2rexicho9Haro6u9as8oplciw7i02`,
          },
          body: JSON.stringify({ phoneNumber: phoneNumber,
          code: verificationCode }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Response:", jsonResponse);
        // Handle the response further if needed
      } else {
        console.error("Request failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    /* const config = {
      headers: {
        "x-api-key": `che2$AQe2rexicho9Haro6u9as8oplciw7i02`,
      },
    };

    axios
      .post("http://punch-auth-env.eba-mk5x9uxm.eu-north-1.elasticbeanstalk.com/send-otp", config)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err)); */
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
              placeholder="Enter phone number"
              value={verificationCode}
              onChange={handleVerificationChange}
              required
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Verify
            </button>

            {/* <input
              className="bg-primary-punchGrey text-2xl font-bold text-center"
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
            /> */}
          </div>
        </form>
      </div>
    </DeviceFrameset>
  );
};

export default StartOTP;
/* const Public = () => {
  return <div>Public</div>;
  // 1.OTP - mobilnummer input med mobilnummer
  // 2. Send OTP api
  // 3. Ny sida textbox med input code från sms plus mobilnummer (localstorage)
  // 4. visa wallet 
};

export default Public; */
