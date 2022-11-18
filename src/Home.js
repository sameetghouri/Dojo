
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

    const {data, isloading, error} =useFetch('http://localhost:8000/blogs');
    
    // const[blog, setBlog] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    // const [name,setName] = useState("Maira");
   
    // const handleDelete = (id) => {
    //     const newblog = blogs.filter(b => b.id!==id);
    //     setBlogs(newblog);
    // }
    
    // const handleClick = (e) => {  //e is event object
    //      console.log("Hello Ninja",e);
    // }
    // const handleClickAgain = (n,e) => {
    //     console.log("Hello "+ n,e.target);
    // }
    // const [name, setName] = useState('Mario') //This value could be any thing eg: an array, boolean,object
    // const [age, setAge] = useState(25)
    // const handleChange = () => {
    //     setName('Lueji');
    //     setAge(30);
    // }
    // let name='mario';
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isloading && <div><h3>Loading... </h3></div>}
            {data && <Bloglist blogs={data} title="All Blogs!" />}
            {data && <Bloglist blogs={data.filter((d)=>d.author==='Mario')} title="Marios Blog"/>}
            {data && <Bloglist blogs={data.filter((d)=>d.author==='Yoshi')} title="Yoshi Blog"/>}
            {/* <button onClick={()=>setName("Lusi")}>Change Name</button>
            <p>{name}</p> */}
            {/* <Bloglist blogs={blog.filter((blog)=>blog.author==='mario')} title="Marios Blog"/> */}
             </div>       
        );
                // <h2>Home</h2>
                // <button onClick={handleClick}>Click Me</button>
                // <br></br>
                // <button onClick={(e)=>handleClickAgain('Mario',e)}>Click Again</button>
                // <p>{name} is {age} years old</p>
                // <button onClick={handleChange}>Change Name</button>                 
}
 
export default Home;