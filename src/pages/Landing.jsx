import { useNavigate } from 'react-router-dom'
export default function Landing(){
 const nav=useNavigate()
 return(
 <div style={{background:"#0f172a",color:"white",minHeight:"100vh",padding:"40px"}}>
  <h1>TrustRide</h1>
  <h2>AI Insurance for Delivery Workers</h2>
  <button onClick={()=>nav('/dashboard')}>Open Dashboard</button>
  <div style={{marginTop:"40px"}}>
   <h3>Core Features</h3>
   <ul>
    <li>Hyperlocal Pricing</li>
    <li>Fraud Detection</li>
    <li>Zero Click Claims</li>
    <li>Trust Score</li>
   </ul>
  </div>
 </div>
 )
}
