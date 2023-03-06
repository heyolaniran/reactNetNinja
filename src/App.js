import logo from './logo.svg';
import NavBar from './NavBar';
import Home from './Home';
import Create from "./Create" ; 
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import BlogDetails from './BlogDetails';
function App() {

 
  return (
    <Router>
      <div className="App">

        <NavBar/>
        
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blog/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
        
       
        
      </div>
    </Router>
    
  );
}

export default App;
