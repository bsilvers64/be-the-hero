import React from 'react';
import './styles.css'
import video from "./assets/sample.mp4"
import { Link } from 'react-router-dom';
import seva from './assets/seva2.png'


function Seva() {
  return (
    <html>
  <head>
  <title>SEVA</title>
  </head>
<body>
  <header>
    <h1>SEVA<img src={seva} alt='Be The Hero' /></h1>
    <p style={{'fontFamily':'Helvetica'}}>We are dedicated to making a positive impact in the world.</p>
  </header>
  <nav>
    <div>
     <Link to="./ngolist">NGO Database</Link>
      <Link to="./aboutus" >About us</Link>
      <Link to="./blogs">Blogs</Link>
    </div>
    <div>
    <Link to="./Login" >NGO Login</Link>
    </div>
  </nav>
  <main>
    <h2 style={{'fontFamily':'Gadugi'}}>Our Mission</h2>
    <section id="mission">
      <div class="container">
        <p style={{'fontFamily':'Microsoft YaHei'}}>SEVA: More than just help, will meet the 
    requirements of volunteers and solve the problems faced by the non governmental 
    organisations i.e., Human Resource. The website and application will also allow the non 
    governmental organisations to create awareness on various issues through this 
    application. The organisation can also easily manage the personnel through the 
    application.
    On the other hand, volunteers could choose the cause and event of their liking and 
    be a part and take necessary steps in the process of making the world a better place 
    to live in. They will also be provided a much needed exposure to understand the 
    difficulties of people in adverse circumstances.
    Lastly, as the name of the website and application itself suggests the main objective of providing 
    support and services in the time of need, we hope SEVA would succeed in its 
    objective by connecting people with organisations to help and build lives of others.
    In this digital world, where everybody is lost online, let’s try and find ourselves by 
    losing ourselves in service of others</p><br/>
      </div>
      <video autoPlay loop muted width="1500" height="400" src = {video}></video>
    </section>
    
  </main>
  <footer>
    <p>&copy; 2023 SEVA</p>
  </footer>
</body>
</html>
  )
}


export default Seva
