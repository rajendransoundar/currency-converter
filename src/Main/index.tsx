import React, { useState } from "react";
import CurDropdown from "../Components/Dropdown"
import "./style.css"

export default function Index() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [curOut, setCurOut] = useState("")

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
      setCurOut(result.result)
      console.log(result);
    } catch (error) {
      console.log('error', error);
    }
  }
  const handleSwap=()=>{
    const temp=from;
    setFrom(to);
    setTo(from)
  }
  return (
    <>
<div className="cur-cnvtr-container">
<form className="" onSubmit={handleSubmit}>
  <div className="cur-form">
<div className="input-col">
  <p>Amount</p>
  <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
</div>
<div className="input-col">
  <p>From</p>
  <CurDropdown onChange={(e) => setFrom(e.target.value)}/>
</div>
<div className="input-col">
  <p>To</p>
  <CurDropdown onChange={(e) => setTo(e.target.value)}/>
</div>
<div className="input-col">
  <p></p>
  <div className="swap-btn" onClick={handleSwap}>swap</div>
</div>
</div>
<button type="submit">Submit</button>
  </form>
</div>
{amount} {from} = {curOut} {to}
      {/* <div className="man-container">
        <h1>Currency Converter</h1>
        <form className="cur-form" onSubmit={handleSubmit}>
          <label>
            Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <label>
            From:
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </label>
          <br />
          <label>
            To:
            <input
              type="text"
              value={to}
              // onChange={(e) => setTo(e.target.value)}
            />
          </label>
          <br />
          <CurDropdown onChange={(e) => setTo(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </>
  );
}
