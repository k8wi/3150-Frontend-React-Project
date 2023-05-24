import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='login'>
        <form>
            <label className="label">Username</label>
            <input className='input' type='text' name='us' id='us'/>
            <label  className="label" >Password</label>
            <input className='input' type='password' name='ps' id='ps'/>
            </form>
            <div className='done'>
              
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-35px" >
               <Link to="/">Submit</Link> 
              </button>
          </div>

       
    </div>
  )
}

export default Login