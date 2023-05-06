import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function aboutus() {
  return (
<html>
  <head>
    <title>NGO Name - About Us</title>

  </head>
  <body>
    <header>
      <h1>SEVA</h1>
    </header>
    <nav>
      <div>
      <Link to="./ngolist">NGO Database</Link>
      <Link to="./blogs">Blogs</Link>
        <Link to="./">home</Link>
      </div>
      <div>
       <Link to="./Login" >NGO Login</Link>
      </div>
    </nav>
    <main>
      <h2>About Us</h2><br/>
      <p style={{'fontFamily':'Microsoft YaHei'}} >SEVA is a website that was founded in 2023 with a drive to give back to the community 
       clubbed with organisations seeking active volunteers to help them with their 
       projects and get the expected outcome effectively, it has become crucial to form a 
       network of volunteers and authentic government registered Non-Government 
       Organisations and companies. There is no proper platform for connecting 
       organisations and volunteers. 
       On inquiring different Non-Government Organisation, it was found that many of 
       them face serious issues in implementing their visions to reality, and with pandemic 
       and after pandemic the progress has fallen further. 
      The major problem faced by both volunteers and NGOs is credibility and access 
      platform. We wish to form an interconnection and build a platform which offers 
      services to bridge the gap between organisations and people looking to give back to 
      the community with assured authenticity. This website and app will help small organisations 
      mainly to get better support and access through an online platform App support 
      “Seva”. This website and app will also spread awareness and correct information needed for the 
      people to take studied decisions into getting closer with giving back to the 
      community.
      </p>
    </main>
    <footer>
      <p>SEVA &copy; 2023. All rights reserved.</p>
    </footer>
  </body>
</html>
    )
  }

export default aboutus