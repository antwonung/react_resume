import React, { Component } from 'react'
import '../css/style2.css';
import Pdf from '../pdf/personligtBrevAntonlia.pdf'

export default class Pb extends Component {
  render() {
    return (
        <>
       
        <section className="InfoPic">
            <h1><i className="far fa-file"></i>Mitt personliga brev</h1>
            <img className="photo" src={require("../images/anton.jpg")} alt="bild på mig"/>
            <p className='p-rest p-font-training'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi accusantium, laboriosam porro ut maiores ratione tenetur, dignissimos ducimus earum repudiandae necessitatibus, mollitia quibusdam doloremque voluptas a iusto eius minus. Numquam eum pariatur laborum commodi necessitatibus quia cumque quae maxime temporibus magni, aut qui iusto odit nesciunt voluptatibus voluptatum architecto fugiat!</p>
            
        </section>
        <aside className="cvLink">
            <i className="fas fa-mouse fa-4x"></i>
            <a href={Pdf} target="_blank" >Här är mitt personliga brev som pdf</a>
        </aside>
  

    </>
    )
  }
}
