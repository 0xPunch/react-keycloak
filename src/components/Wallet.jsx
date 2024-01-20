import React, { useState, useEffect } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const Wallet = () => {
  const [walletResponse, setWalletResponse] = useState(null);
  const [balanceResponse, setBalanceResponse] = useState(null);

  /*  const fetchData = async (url, setter) => {
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
  }, []); */

  const walletDetails = async () => {
    console.log("wallet");
    try {
      const response = await fetch(
        "http://punch-be-env.eba-afpqhbkf.eu-north-1.elasticbeanstalk.com/wallet?walletid=aa-alaba-missi-1ruhjovms58dj82p",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `che2$AQe2rexicho9Haro6u9as8oplciw7i02`,
          },
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        setWalletResponse(jsonResponse);
        console.log("Response wallet:", jsonResponse);
      } else {
        console.error("Request failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
   const balanceDetails = async () => {
    console.log('balanceDetails called'); 
    try {
      const response = await fetch(
        "http://punch-be-env.eba-afpqhbkf.eu-north-1.elasticbeanstalk.com/balance?walletid=aa-alaba-missi-1ruhjovms58dj82p",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `che2$AQe2rexicho9Haro6u9as8oplciw7i02`,
          }
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        setBalanceResponse(jsonResponse);
        console.log("Response balance:", jsonResponse);
      } else {
        console.error("Request failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await walletDetails();
      await balanceDetails();
    };
  
    fetchData();
  }, []);

  return (
    <DeviceFrameset device="iPhone 8" color="black">
      <div className="bg-primary-punchPeach text-center">
        <h1 className="text-6xl font-bold underline">Hello Wallet!</h1>
        {walletResponse?.result && <p>Address: {walletResponse?.result?.address}</p>}
        {balanceResponse?.result && <p>Balance: {balanceResponse?.result?.balance}</p>}
      </div>
    </DeviceFrameset>
  );
};

export default Wallet;
