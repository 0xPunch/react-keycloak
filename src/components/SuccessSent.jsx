import React, { useState, useEffect } from "react";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const Wallet = () => {
  const [walletResponse, setWalletResponse] = useState(null);
  const [balanceResponse, setBalanceResponse] = useState(null);
  const navigate = useNavigate();
  const fetchData = async (url, setter) => {
    console.log("fetchData called for", url);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `che2$AQe2rexicho9Haro6u9as8oplciw7i02`,
        },
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        setter(jsonResponse);
        
        console.log("Response:", jsonResponse);
        console.log("jsonResponse after setBalanceResponse:", jsonResponse);
      } else {
        console.error("Request failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    Promise.all([
      fetchData(
        "http://punch-be-env.eba-afpqhbkf.eu-north-1.elasticbeanstalk.com/wallet?walletid=aa-alaba-missi-1ruhjovms58dj82p",
        setWalletResponse
      ),
      fetchData(
        "http://punch-be-env.eba-afpqhbkf.eu-north-1.elasticbeanstalk.com/balance?walletid=aa-alaba-missi-1ruhjovms58dj82p",
        setBalanceResponse
      ),
    ]).then(() => {
      console.log("walletResponse", walletResponse?.result?.address);
      console.log("balanceResponse", balanceResponse?.result?.balance);
    });
  }, []);

  return (
    <div className="container flex justify-center mt-20">
      <DeviceFrameset device="iPhone 8" color="black">
        <div className="container bg-primary-punchPeach-lighter text-center">
          <div className="flex justify-between pt-1">
            <div className="text-sm pl-2">9:42</div>
            <div className="flex space-x-2 pr-2">
              <FaSignal />
              <FaBatteryFull />
              <FaWifi />
            </div>
          </div>
          <div>
            <h1 className="font-display uppercase">Sent</h1>
          </div>
          <div className="pt-36">
            {balanceResponse?.result && (
              <p className="text-8xl font-display">
                {"\u20AC"}
                {balanceResponse?.result?.balance}
              </p>
            )}
          </div>
          <div className="flex pt-12 pb-20">
                <button
                onClick={() => {navigate("/init-payment");}}
                  className="bg-primary-punchGrey-darker hover:bg-primary-punchPeach text-primary-punchPeach-lighter font-bold py-4 px-32 w-full rounded-xl uppercase font-body text-4xl"
                  type="submit"
                >
                  Send
                </button>
              </div>
          <div className="flex pb-12 justify-center">
            {walletResponse?.result && (
              <div className="pt-20">
                <p className="font-bold">Address: </p>
                <p className="flex text-sm text-center">
                  {walletResponse?.result?.address}
                </p>
              </div>
            )}
          </div>
        </div>
      </DeviceFrameset>
    </div>
  );
};

export default Wallet;
