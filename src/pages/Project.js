import React, { Component } from 'react'
import ProjectComponent from '../components/ProjectComponent';
import '../css/style2.css';

export default class Project extends Component {
    state = {
        fetching:true,
        projects: []};
    async componentDidMount(){
        const response = await fetch('https://api.github.com/users/antwonung/repos')
        const data = await response.json(); 
        this.setState({fetching:false, projects:data});
    
        const btn = document.getElementById('myBtn');
        const elementImg = document.querySelector('.imgBox');
        btn.addEventListener("click",movePic);
        
        function movePic()
        {
            elementImg.style.opacity = "1";
            elementImg.classList.add("activeAnimate");
            document.getElementById("foundIt").innerHTML = "Du hittade den!";
            document.body.style.backgroundColor = "yellow";
        }
        
        
    }
    componentWillUnmount(){
        document.body.style.backgroundColor = "black";
    }
    render() {
    return (
        <>
       
       <section className="InfoPic">
            <div id="root"></div>
            <h1><i className="fas fa-code"></i>Mina Projekt</h1>
            <figure>
                <img className="photo" src={require("../images/binary.jpg")} alt="bild på mig"/>
            </figure>
            
            {this.state.projects.map((project,key) => (
                <ProjectComponent project={project} key={key} ></ProjectComponent>
                
            ))}
           
        
        
        </section>
        

        
        <aside className="cvLink">
            <h2 id="foundIt">Psst! Här finns en gömd knapp, försök att hitta den..</h2>
            <button id="myBtn" type="button"></button>
            <div className="imgBox" id="imgBox">
                <img className="photoKarlsson" src={require("../images/karlsson.png")} alt="Karlsson"/>
            </div>
            
        </aside>
        
       </>
    
    )
  }
}
