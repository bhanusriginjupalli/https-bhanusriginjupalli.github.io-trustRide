import { useState } from 'react'
export default function Dashboard(){
 const [result,setResult]=useState("")
 function simulate(){
  let trust=Math.floor(Math.random()*100)
  if(trust>70) setResult("Approved ₹300")
  else if(trust>40) setResult("Verification")
  else setResult("Flagged")
 }
 return(
 <div style={{background:"#020617",color:"white",minHeight:"100vh",padding:"40px"}}>
  <h1>Dashboard</h1>
  <button onClick={simulate}>Simulate Claim</button>
  <p>{result}</p>
 </div>
 )
}
