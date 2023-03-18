import React from 'react'
import currencies from "./CurCode.json"

export default function index({value, onChange}) {

  return (
    <>
    <select value={value} onChange={onChange}>
      <option value="">Select Currency</option>
      {Object.entries(currencies).map(([code, name]) => (
        <option key={code} value={code} >
          ({code}) {name}
        </option>
      ))}
    </select>
    </>
  )
}
