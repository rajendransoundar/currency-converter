import React, { useState } from "react";
import CurDropdown from "../Components/Dropdown";
import "./style.css";
import {Swap} from "../assets/index"

export default function Index() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [response, setResponse] = useState(null)

  const myHeaders = new Headers();
  myHeaders.append("apikey", "T6efhkEzieT0fGnoC3aHMczY82kHb0ms");
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
        requestOptions
      );
      const result = await response.json();
      setResponse(result);
      console.log(result);  
    } catch (error) {
      console.log("error", error);
    }
  }
  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(from);
  };
  return (
    <>
    
      <div className="container">
      <div className="header">
      <h1>Raa Currency Converter</h1>
    </div>
        {/* <h1>Currency Converter</h1> */}
        <form className="" onSubmit={handleSubmit}>
          <div className="cur-form">
            <div className="input-col">
              <p>Amount</p>
              <input
                type="text  "
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="input-col">
              <p>From</p>
              <CurDropdown value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <div className="input-col">
              <p></p>
              <div className="swap-btn" onClick={handleSwap}>
              <Swap/>
              </div>
            </div>
            <div className="input-col">
              <p>To</p>
              <CurDropdown value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
          </div>
          <div className="input-col">
          <button className="sub-btn" type="submit">
            Submit
          </button>
          </div>
        </form>
        <div className="rslt-cntnr">
        {response?(
         <>

         {amount} {from} = {response.result} {to}
       rate {response.info.rate}
       </>
         ):("jkjk")
        }
        </div>
       
      </div>
      <div className="footer">
        Designed & Developed by @Raa
      </div>
    </>
  );
}
      
