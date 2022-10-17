import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data, isloading, error}=useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory(); 
    const handleclick = () => {
        fetch('http://localhost:8000/blogs/'+ data.id,{
            method: 'DELETE',
        }).then(()=>{history.push('/')})
     }
     
    return ( 
        <div className="blog-details">
            {isloading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
               <div>
                    <h2>{data.title}</h2>
                    <h4>Writen by {data.author}</h4>
                    <div>{data.body}</div>
                    <Link id="editbutton" to={`/editblog/${data.id}`}>Edit</Link>
                    
                    <button  onClick={handleclick}>Delete</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;