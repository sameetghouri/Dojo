import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create= () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('Mario'); 
    const [isloading, setisloading]= useState(false);
    const history = useHistory();
    const handlesubmit = (e) => {
        e.preventDefault();
        const blog={title,body,author};
        setisloading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{setisloading(false);
            history.push("/")
    })

    }
       return ( 
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handlesubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange = {(e) => setTitle(e.target.value)}/>

                <label>Blog Body</label>
                <textarea required value={body} onChange = {(e) => setBody(e.target.value)}>  
                </textarea>

                <label>Blog Author</label>
                <select value={author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                
                {!isloading && <button>Add Blog</button>}
                {isloading && <button disabled>Adding Blog</button>}

            </form>
        </div>
     );
}
 
export default Create;