import './App.css';
import{ BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Navbar from "./routes/components/Navbar";

function App() {
  return (
   <>
       <Router>
           <Navbar/>
           <Routes>
               <Route path="/home" element={<Home/>}/>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/project" element={<Project/>}/>
               <Route path="/contact" element={<Contact/>}/>
           </Routes>
       </Router>
   </>
  );
}

export default App;
