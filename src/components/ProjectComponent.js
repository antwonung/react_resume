import React from "react";

export default function ProjectComponent ({project}){
    return (
    <div>
    <h3><i className="far fa-folder-open"></i>{project.name}</h3>
  
            
    <div className="wrapper">
        <a href={`#${project.name}`}>Läs mer</a>
    </div>
    
    <div id={project.name} className="modal">
        <div className="modalcontent">
            <h3>{project.name}</h3>
            {console.log(project.name)}
            <p>{project.description}</p>
            <a href={project.html_url}>Github länk</a>
            <a href="#" className="modalclose">&times;</a>
        </div>
    </div>
    </div>
    );
} 