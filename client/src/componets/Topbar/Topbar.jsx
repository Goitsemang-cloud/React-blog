import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css"

export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF ="http://localhost:5000/images/";

    const handleLogout =(e)=>{
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/Write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        ( 
                            <Link to="/Settings">  
                                <img className="topImg" src={PF+user.profilePicture} alt="" />
                            </Link>
                          
                        )
                        :
                        (
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link to="/Login" className="link">LOGIN</Link>
                                </li>
                                <li className="topListItem">
                                    <Link to="/Register" className="link">REGISTER</Link>
                                </li>
                            </ul>
                        )
                }

                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
