import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/Auth/Register",{
                username: username,
                email:email,
                password:password
            });
            res.data && window.location.replace("/Login");
        } catch(err){
            setError(true);    
        }
        
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your Username..." 
                    onChange={e=> setUsername(e.target.value)}
                />
                <label>Email</label>
                <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your email..."
                    onChange={e=> setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    className="registerInput" 
                    type="password" 
                    placeholder="Enter your password..."
                    onChange={e=> setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">
                    <Link to="/" className="link">REGISTER</Link>
                </button>
            </form>
            <button className="registerLoginButton">
                <Link to="/Login" className="link">Login</Link>
            </button>
            { error && <span style={{color:"red" ,marginTop:10}}>Something went wrong!!</span>}
            
        </div>
    );
}

