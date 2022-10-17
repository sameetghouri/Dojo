import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                 backgroundColor: "lightblue",
                 borderRadius:"6px",
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;