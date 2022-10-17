import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
    <div className="notfound">
        <h2>Sorry</h2>
        <br/>
        <h2>This Page Not Exist </h2>
        <br/>
        <Link to ='/' > Back To Home </Link>
    </div>
     );
}
 
export default NotFound;