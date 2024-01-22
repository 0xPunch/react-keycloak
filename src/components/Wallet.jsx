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
    const email = localStorage.getItem("email");
    console.log(email);
    if (email === "test@test.com") {
      localStorage.setItem(
        "userA",
        JSON.stringify({
          email: email,
          address: "0x4fcC6c151e766B253D8dB8503dC0E32B67a5266a",
          walletId: "aa-alaba-missi-1ruhjovms58dj82p",
        })
      );
      localStorage.setItem(
        "userB",
        JSON.stringify({
          email: "daniel@getpunch.io",
          address: "0x00f2DfcB1C78ebC278529Bf52E76eC8fB6F509a9",
          walletId: "aa-coffe-nine-27odqnjao99bma21",
        })
      );
    }
    if (email === "daniel@getpunch.io") {
      localStorage.setItem(
        "userA",
        JSON.stringify({
          email: email,
          address: "0x00f2DfcB1C78ebC278529Bf52E76eC8fB6F509a9",
          walletId: "aa-coffe-nine-27odqnjao99bma21",
        })
      );
      localStorage.setItem(
        "userB",
        JSON.stringify({
          email: "majed@getpunch.io",
          address: "0x4fcC6c151e766B253D8dB8503dC0E32B67a5266a",
          walletId: "aa-alaba-missi-1ruhjovms58dj82p",
        })
      );
    }
  }, []);

  const userData = localStorage.getItem("userA");
  const userA = JSON.parse(userData);
  console.log(userA.walletId);

  useEffect(() => {
    const intervalId = setInterval(() => {
      Promise.all([
        fetchData(
          `http://punch-be-env.eba-afpqhbkf.eu-north-1.elasticbeanstalk.com/wallet?walletid=${userA.walletId}`,
          setWalletResponse
        ),
        fetchData(
          `http://punch-be-env.eba-afpqhbkf.eu-north-1.elasticbeanstalk.com/balance?walletid=${userA.walletId}`,
          setBalanceResponse
        ),
      ]).then(() => {
        console.log("walletResponse", walletResponse?.result?.address);
        console.log("balanceResponse", balanceResponse?.result?.balance);
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <div className="container flex justify-center mt-20">
      <DeviceFrameset device="iPhone 8" color="black">
        <div className="container bg-primary-punchPeach-lighter text-center h-full">
          <div className="flex justify-between pt-1">
            <div className="text-sm pl-2">9:42</div>
            <div className="flex space-x-2 pr-2">
              <FaSignal />
              <FaBatteryFull />
              <FaWifi />
            </div>
          </div>
          <div className="pt-36">
            {balanceResponse?.result && (
              <p className="text-8xl font-display">
                {"\u20AC"}
                {balanceResponse?.result?.balance}
              </p>
            )}
          </div>
          <div className="pt-3">
            <button className="font-display border-black border-2 px-2 rounded-full">
              + add funds
            </button>
          </div>
          <div className="flex pt-32">
            <button
              onClick={() => {
                navigate("/init-payment");
              }}
              className="bg-primary-punchGrey-darker hover:bg-primary-punchPeach text-primary-punchPeach-lighter font-bold py-4 mx-2 w-full rounded-xl uppercase font-body text-4xl"
              type="text"
            >
              Send Money
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
