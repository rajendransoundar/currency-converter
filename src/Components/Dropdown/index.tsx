import React from 'react'
import currencies from "./CurCode.json"

export default function index({onChange}) {

  return (
    <>
    <select onChange={onChange}>
      {Object.entries(currencies).map(([code, name]) => (
        <option key={code} value={code} >
          ({code}) {name}
        </option>
      ))}
    </select>
    </>
  )
}
