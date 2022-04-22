import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

export const Users = () => {
    const {
        isAuth,
        token
    } = useContext(AuthContext)

    const [userDetails, setUserDetails] = useState([])
    useEffect( () =>{
        fetch("https://reqres.in/api/users?page=2", {
            headers: {
                "Auth": token
            }
        }).then((res) => res.json())
          .then((result) => setUserDetails(result.data))
    
    },[token])

    if(!isAuth){
        return <div>
         Login here <Link to= "/login">Login</Link>
        </div>
    }

    
  return (
    <div>
        
        {
            userDetails.map(user => (<div style={{border: '1 px solid red'}}>
                <p>{user.first_name}</p>
                <p>{user.email}</p>
                <img src={user.avatar} alt ='hello' />
                <Link to={`/users/${user.id}`}>More details...</Link>
            </div>))
        }
    </div>
  )
}
