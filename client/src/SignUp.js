import React, {useState} from "react";
import { Form } from 'semantic-ui-react'
import {useNavigate} from "react-router-dom";


function SignUp({setUser}) {
    const [formState, setFormState] = useState({})

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            username,
            profile_image,
            first_name,
            last_name,
            email,
            bio,
            password,
            password_confirmation
        }
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => r.json())
        .then((data) => setUser(data))
        .then(navigate('/homefeed'))
    }
    
    const {username, password, profile_image, bio, first_name, last_name, email, password_confirmation} = formState

    console.log(formState)

    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Create an Account</h1>
            
            <Form onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input onChange={handleFormChange} type="text" id="username" name="username" ></input>

                <label htmlFor="first_name">First Name</label>
                <input onChange={handleFormChange} type="text" id="first_name" name="first_name" ></input>

                <label htmlFor="last_name">Last Name</label>
                <input onChange={handleFormChange} type="text" id="last_name" name="last_name" ></input>
                
                <label htmlFor="profile_image">Image</label>
                <input onChange={handleFormChange} placeholder="Image URL" type="text" id="profile_image" name="profile_image" ></input>
            
                <label htmlFor="email">Email</label>
                <input onChange={handleFormChange} type="text" id="email" name="email" ></input>

                <label htmlFor="password">Password</label>
                <input onChange={handleFormChange} type="password" id="password" name="password" ></input>
                
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input onChange={handleFormChange} type="password" id="password_confirmation" name="password_confirmation"></input>

                <label htmlFor="bio">Bio</label>
                <input onChange={handleFormChange} type="text" id="bio" name="bio" ></input>

                <button type="submit">Submit</button>

                </Form>

        </div>
    );
}

export default SignUp;