import {  useParams,useHistory} from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function Editblog  () {
    const {ids} = useParams();
    const {data, isloading, error}=useFetch('http://localhost:8000/blogs/'+ ids);
    
    const[title, setTitle] = useState(data?.title );
    const[body, setBody] = useState(data?.body );
    const[author, setAuthor] = useState(data?.author ); 
    const [isupdating, setisupdating]= useState(false);
    
    const history = useHistory();

    useEffect(() => {
            //if (data){
            setTitle(data?.title)            
            setBody(data?.body)
            setAuthor(data?.author)
        }, [data]);


     const handleedit = (e) => {
        e.preventDefault();
        const blog={title,body,author};
        setisupdating(true);
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{setisupdating(false)
            history.push(`/blogs/${data.id}`)
        })
        }
    return (  
        <div className="editblog">
        {isloading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && (
           <div>
            <h2>Edit Blog</h2>
            <form onSubmit={handleedit}>
                <label>Blog Title</label>
                <input  type="text" required value={title} onChange = {(e) => setTitle(e.target.value)}/>                


                <label>Blog Body</label>
                <textarea  required value={body} onChange = {(e) => setBody(e.target.value)}>  
                </textarea>


                <label>Blog Author</label>
                <select value={author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <br/>

        {!isupdating && <button> Update</button>}
        {isupdating && <button disabled>Updating Blog ...</button>}
        </form>
            </div>
            
        )}
    </div>
    );
        }
       