import React, { Component } from 'react'
import '../css/style2.css';

export default class Info extends Component {
  render() {
    return (
        <>
            <section className="InfoPic">
            <h1><i className="fas fa-mobile-alt"></i>Kontaktuppgifter</h1>
            <figure>
                <img className="photo" src={require("../images/anton.jpg")} alt="bild på mig"/>
            </figure>
            <br/>
            
            <h2><i className="far fa-hand-point-right"></i>Anton Sjöberg</h2>
            <h2><i className="fas fa-mobile-alt"></i>070-237 37 57</h2>
            <h2><i className="fas fa-envelope"></i>sjoberg_13@hotmail.com</h2>
            <h2><i className="fas fa-home"></i>Tegnérgatan 2C</h2>
            <h2><i className="fas fa-home"></i>856 43 Sundsvall</h2>
            <h2><i className="fab fa-instagram"></i>antwonung_training</h2>
            
       

        </section>
        <aside className="cvLink-info">
            <h1><i className="far fa-comment-dots fa-2x"></i> Information</h1>
            <p className='p-rest'>Den här webbplatsen är ett projekt i våran kurs om
                webbutveckling. Jag kommer att utveckla den här sidan 
                under kursens gång men även fortsätta att 
                utveckla den efter de att kursen avslutas.
            </p>
            <p className='p-rest'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ratione nihil eligendi voluptate deserunt, facilis dolore, esse ullam doloremque totam necessitatibus vitae non enim quis sapiente quidem. Officia, assumenda recusandae.</p>

            <p className='p-rest'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quia et ex nisi omnis aliquid impedit facilis beatae explicabo reiciendis cumque harum tempore nihil, adipisci nam id incidunt quisquam ratione.</p>
        </aside>
      
  

    </>
    )
  }
}
