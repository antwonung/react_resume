import React, { Component } from 'react'
import '../css/style2.css';

export default class Training extends Component {
  render() {
    return (
        <>
        
          <section className="InfoPic-rest">
            <h2><i className="fas fa-dumbbell fa-2x"></i><br/>Mina träningsframsteg</h2>
            <p> Haft mycket problem med ländryggen genom åren men älskar att träna. 
                Mitt mål med träningen är att kunna dra upp
                200kg i marklyft en dag, det har tagit lite längre tid än jag tänkt mig
                men det har blivit så eftersom jag haft så mycket problem med just ryggen.
                Mitt max för närvarande är 180kg vilket ni kommer se 
                här nedan, men jag krigar på för att försöka nå mitt mål :)
            </p>
            <h2>På dom två första bilderna drar jag 180kg :)</h2>
            
            <div className="image-grid">
                <video className="img1" controls>
                    <source src={require("../images/pb.mp4")} type="video/mp4"/>
                  180kg mark.
                </video>
                
                <img className="img2" src={require("../images/mark.jpg")} alt="marklyftsbild"/>
                
               
                <video className="img3" controls>
                    <source src={require("../images/lastpb.mp4")} type="video/mp4"/>

                  film 160kg.
                </video>
                
                <img className="img4" src={require("../images/spannis.jpg")} alt="bild på mig"/>
                
                <video className="img5" controls>
                    <source src={require("../images/hardrock.mp4")} type="video/mp4"/>
                  film marklyft.
                </video>

                <video className="img6" controls>
                    <source src={require("../images/thor.mp4")} type="video/mp4"/>
                    film thor.
                </video>
              
            </div>
            
        

        </section>
        
   
      
    </>
    
 
    )
  }
}
