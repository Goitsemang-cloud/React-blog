import axios from "axios";
import { createRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./Login.css";

export default function Login() {

    const userRef = createRef();
    const passwordRef = createRef();
    const { dispatch, isFetching } = useContext(Context);
 
    const handleSubmit= async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/Auth/Login",{
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload: res.data });
        } catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    };
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    className="loginInput" 
                    type="text" 
                    placeholder="Enter your Username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input 
                    className="loginInput" 
                    type="password" 
                    placeholder="Enter your password..."
                    ref={passwordRef} 
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    <Link to="/" className="link">Login</Link>
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/Register" className="link">REGISTER</Link>
            </button>
        </div>
    );
}
