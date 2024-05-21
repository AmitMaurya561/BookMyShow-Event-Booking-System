// LoginPage.js
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext' // Corrected import

const LoginPage = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const { login } = useContext(AuthContext)
   const navigate = useNavigate()
    
   const handleSubmit = (e) => {
       e.preventDefault()
       login(username, password)
       navigate('/')
   }

   return (
     <div style={{ fontFamily: 'georgia pro', padding: '20px' }}>
       <h1>Login</h1>
       <form onSubmit={handleSubmit}>
         <div>
           <label>
             Username: <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}
             style={{ marginLeft: '10px' }} /> 
           </label>
         </div>
         <div>
           Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
           style={{ marginLeft: '10px' }} />
         </div>
         <button type='submit' style={{
           backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px'
         }}>Login</button>
       </form>
     </div>
   )
}

export default LoginPage
