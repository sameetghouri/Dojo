
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import{ BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import NotFound from './NotFound';
import Editblog from './Editblog';

function App() {
  //const title = "Welcome To The New Blog";
  //const likes= 50;
  // const person ={ name: Yoshi, age: 30};
  //const link1='http://www.duckduckgo.com';
  
  return (
    <Router>
    <div className="App">
     <Navbar />
     <div className="content">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/blogs/:id" component={BlogDetails} />
      <Route path="/editblog/:ids" component={Editblog}/>
      <Route path="*" component={NotFound} />
      
      </Switch> 
      
      
       {/* <p>Liked {likes}</p> 
      <p>{person}</p> cant output an object directly
       <p>{10}</p>
      <p>{"Hello, ninjas "}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random()}</p>
      <a href={link1}>Duck Duck</a>  */}
     </div>
    </div>
    </Router>
  );
}

export default App;
