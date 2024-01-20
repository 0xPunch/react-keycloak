import React, { useState, useEffect } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const Wallet = () => {
  const [walletResponse, setWalletResponse] = useState(null);
  const [balanceResponse, setBalanceResponse] = useState(null);

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
    <DeviceFrameset device="iPhone 8" color="black">
      <div className="bg-primary-punchPeach-lighter text-center py-20">
        {balanceResponse?.result &&
        <p className="text-8xl font-display">{"\u20AC"}{balanceResponse?.result?.balance}</p>
      }
      <button className="font-display border-black border-2 px-2 rounded-full">
         + add funds
      </button>
      {walletResponse?.result &&
      <div className="pt-20">
        <p className="font-bold">Address: </p> {walletResponse?.result?.address}
        </div>
      }
      </div>
    </DeviceFrameset>
  );
};

export default Wallet;
