import axios from "axios";
import { useContext, useState } from "react"
import { Context } from "../../../context/Context"
import Sidebar from "../../siderbar/Sidebar"
import "./Settings.css"

export default function Settings() {
    const { user,dispatch } = useContext(Context);
    const PF ="http://localhost:5000/images/";

    const [file,setFile] = useState(null);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const [sucess,setSucess] = useState(false);

    const handleSubmit =async(e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const UpdatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }
        if(File){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            UpdatedUser.profilePicture = filename;

            try{
                await axios.post("/upload",data);
            }catch(err){

            }
        }
        try{
            const res = await axios.put("/Users/" + user._id, UpdatedUser);
            setSucess(true);
            dispatch({type:"UPDATE_SUCCESS", payload: res.data });
        } catch(err) {
            dispatch({type:"UPDATE_FAILURE"});
        }
        
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Account
                    </span>
                </div>
                <form  onSubmit={handleSubmit}
                    className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img 
                            src={file ? URL.createObjectURL(file) : PF+user.profilePicture}
                            alt=""  
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsProfilePictureIcon far fa-user-circle"></i>
                        </label>
                        <input 
                            type="file" id="fileInput" style={{ display:"none" }}  
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input 
                        className="settingsInputText" 
                        type="text" 
                        placeholder={user.username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input 
                        className="settingsInputText" 
                        type="text" 
                        placeholder={user.email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        className="settingsInputText" 
                        type="password"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">Update</button>
                    {sucess && <span style={{color:"green",textAlign:'center',marginTop:"12px"}}>Profile has been Updated...</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
