import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Cv from "./pages/Cv";
import Pb from "./pages/Pb";
import Project from "./pages/Project";
import Training from "./pages/Training";
import Navbar from './components/Navbar';
import { Component } from "react";


export default class App extends Component {
  componentDidMount(){
    let elite = "";

window.addEventListener('keydown', function (e) {
    if(elite.length === 0)
    {
        elite = e.key.toString();
    }
    else{
        elite = elite + e.key.toString();
    }
    
    if(elite.length === 4)
    {
        if(elite === "1337")
        {
            document.getElementById('eliteModal').click();
        }
        elite = "";
    }
    
});
  }
  render(){
  return (
    <BrowserRouter basename="/react_resume">

      <Routes>
        
        <Route path='/' element={<Home></Home>} />
        

        <Route element={<Navbar></Navbar>}>
        
          <Route path='/Pb' element={<Pb></Pb>} />
          <Route path='/Training' element={<Training></Training>} />
          <Route path='/Info' element={<Info></Info>} />
          <Route path='/Cv' element={<Cv></Cv>} />
          <Route path='/Projects' element={<Project></Project>} />
          </Route>
        
      </Routes>
      
      <a id="eliteModal" href="#modalbox4"></a>
            
            <div id="modalbox4" className="modal">
                <div className="modalcontent">
                    <h3>ELiiiiiiiitE! ;)</h3>
                    <a href="#" className="modalclose">&times;</a>
                </div>
            </div>
      
    </BrowserRouter>
    
   
  );
}
}

