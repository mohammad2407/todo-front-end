import React, { useState,  useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'


export const Login = () => {
    const {
        login,
    } = useContext(AuthContext);


    const [users, setUsers] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUsers({
            ...users,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (users.email !== "" && users.password !== "") {
            fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(users),
                headers: {
                    'Content-Type': "application/json"
                }
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    login(data.token)
                });
        }
        else{
            alert('Invalid User Details')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input
                type="text"
                placeholder='Enter Your Name'
                onChange={handleChange}
                name="email"
                value={users.email}
            />
            <br />

            <label htmlFor="">Password</label>
            <input
                type="text"
                placeholder='Enter Your Password'
                onChange={handleChange}
                name="password"
                value={users.password}
            />
            <br />
            <input type="submit" value="Login" />
        </form>
    )
}
