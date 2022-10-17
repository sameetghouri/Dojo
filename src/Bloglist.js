import { Link } from "react-router-dom";
const  Bloglist = ({blogs,title, }) => {
// const  Bloglist = (props) => {
//     const blog=props.blogs;
//     const title=props.title;
    return (  
        <div className="bloglist">
            <h2>{title}</h2>
        {blogs.map((blogs) => (
        <div className="blog-preview" key={blogs.id}>
             <Link to={`/blogs/${blogs.id}`}>
             <h2>{ blogs.title }</h2>
             <p>Writen By { blogs.author }</p>
             </Link>
             <br></br>
             {/* <button onClick={() => handleDelete(blogs.id)}>Delete Blog</button> */}
             </div>
        ))}
        
            
</div>)}
 
export default Bloglist;