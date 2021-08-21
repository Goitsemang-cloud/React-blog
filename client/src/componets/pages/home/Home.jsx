import "./Home.css";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../siderbar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
    const [post,setPosts] = useState([]);
    const { search } = useLocation();
    //console.log(Location);
    useEffect(() =>{
        const fetchPosts = async () =>{
            const res = await axios.get("/Posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    },[search])
    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={post}/>
                <Sidebar />
            </div>
        </>
    )
}
