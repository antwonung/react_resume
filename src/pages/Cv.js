import React, { Component } from 'react'
import '../css/style2.css';
import data from '../script/cvdata.json';
import Pdf from '../pdf/antonSjobergCV.pdf'

export default class Cv extends Component {
    
    componentDidMount(){
        
            console.log(data)
            document.getElementById("cvJson-edu").innerHTML = `
            ${data.education.map(function(edu) {
                return `
                <div id="education">
                    <h3>| Utbildning : ${edu.school} | Startår: ${edu.startYear} | Slutår: ${edu.endingYear} | Program: ${edu.program}</h3>
                </div>
                `
            }).join('')}
            `
            document.getElementById("cvJson-work").innerHTML = `
            ${data.work.map(function(work) {
                return `
                <div id="work">
                    <h3>| Företag: ${work.company} | Befattning: ${work.position} | Startår: ${work.startYear} | Slutår: ${work.endingYear} | Beskr: ${work.desc}  </h3>
                </div>
                `
            }).join('')}
            `
        
    }
  
    render() {
    return (
        <>
       
        <section className="InfoPic">
                
            <h1><i className="far fa-file"></i>Mitt CV</h1>
            <figure>
                <img className="photo" src={require("../images/anton.jpg")} alt="bild på mig"/>
            </figure>
           <div id="cvJson-edu"></div>
           <div id="cvJson-work"></div>
            <div id="line"></div>
           
           <p className='p-rest'>
                [Fun Fact!] Vet du bakrundshistorien till varför Sundsvall kallas för Stenstan? 
                Det är nämligen så att år: 1888 så brann stora delar av 
                staden ner, så efter branden så diskuterade man länge om hur
                man skulle bygga upp stadsnätet igen. Med råd från ett försäkringsbolag
                så bestämde man sig för att endast stenhus fick byggas i stadens centrum
                för att förhindra att samma öde skulle drabbas igen, därav kom 
                namnet Stenstaden till, eller Stenstan som det numera kallas.
            </p>
            <a target="_blank" href="https://sv.wikipedia.org/wiki/Sundsvall#Stadens_f%C3%B6rhistoria">Läs mer</a> 
            
           

        </section>    
        
        <aside className="cvLink">
            <i className="fas fa-mouse fa-4x"></i>
            <a href= {Pdf} target="_blank">Här är mitt cv i pdf</a>
        </aside>
    </>
   
    )
  }
}
