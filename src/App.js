// import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    < >
    <div id="myapp">
    <Router>
  <Navbar/>
  
  {/* <Header/> */}
  
  <Routes>
    <Route path="/projects" element={<Projects heading="Semester Projects"/>}></Route>
    <Route path="/" element={<Body />} />
    
  </Routes>
  
  
  <Footer/>
  </Router>
  </div>
  </>
  );
}

export default App;
