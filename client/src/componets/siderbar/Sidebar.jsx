import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./Sidebar.css"

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(() =>{
        const getCat = async () =>{
            const res = await axios.get("/Categories");
            setCats(res.data);
        };
        getCat();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://wallpapercave.com/uwp/uwp547273.jpeg" alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ullam debitis sequi quisquam cum eligendi nulla corrupti magnam in praesentium, 
                    laudantium esse! Id accusantium doloremque consequuntur quidem nihil cumque excepturi 
                    consectetur.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to={`/cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
