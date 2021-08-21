import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://wallpapercave.com/uwp/uwp551559.jpeg"
                alt=""            
            />
        </div>
    )
}
