import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

const LoginUser = () => {
    const {loggedInUser, setUser} = useContext(UserContext);
  
  return (
    <div>
        <input className="border border-black rounded-lg"
        placeholder="logged in user"
        value={loggedInUser}
        onChange={(e)=>setUser(e.target.value)}
        >
        </input>
        <div>
            Logged In User : {loggedInUser}
        </div>
    </div>
  )
}

export default LoginUser