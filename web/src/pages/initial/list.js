import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function list() {
  return (

<html lang="en">
<head>
  <title>NGO Website</title>
</head>
<body>
  <header>
    <div class="header-image"></div>
    <div class="header-text">
      <h1>Welcome to SEVA</h1>
      <p>We are dedicated to making a positive impact in the world.</p>
    </div>
  </header>
  <nav>
    <div>
      <Link to="./blogs">Blogs</Link>
      <Link to="./">home</Link>
      <Link to="./aboutus" >About us</Link>
    </div>
    <div>
    <Link to="./Login" >NGO Login</Link>
    </div>
  </nav>
  <section class="news"><br></br>
  <section> 
    <h2>List of NGOs in Indore</h2><br></br>
    <ul>
      <li>
        <h3><a href = {"http://pahalindore.org"}>Pahal Jan Sahyog Vikas Sansthan</a></h3>
      </li>
      <li>
        <h3><a href = {"https://www.ngofoundation.in/ngo-directory/aagaz-samaj-kalyan-samiti-society-in-indore-madhya-pradesh_i26828"}>Aagaz Samaj Kalyan Samiti</a></h3>
      </li>
      <li>
      <h3><a href = {"https://ngodetails.com/india/HARYANA/aakanksha-manav-samaj-vikas-sanstha-indore/"}>Aakanksha Manav Samaj Vikas Sanstha Indore</a></h3>
      </li>
      <li>
      <h3><a href = {"https://ngosindia.org/madhya-pradesh-ngos/anunnaki-seva-and-vikas-samiti-indore/"}>Anunnaki Seva And Vikas Samiti</a></h3>
      </li>
      <li>
      <h3><a href = {"https://aparajitaindia.org"}>Aprajita Mahila Sangh</a></h3>
      </li>
      <li>
      <h3><a href = {"https://www.searchdonation.com/ngo/arihant-sansthan.php"}>Arihant Sansthan</a></h3>
      </li>
      <li>
      <h3><a href = {"https://www.searchdonation.com/ngo/asha-kala-kendra.php"}>Asha Kala Kendra</a></h3>
      </li>
      <li>
      <h3><a href = {"https://www.facebook.com/TheBadlaav/"}>Badlaav Samiti</a></h3>
      </li>
      <li>
      <h3><a href = {"https://balniketansangh.org/initiatives.html"}>Bal Niketan Sangh</a></h3>
      </li>
      <li>
      <h3><a href = {"https://projectheena.com/bgmsindore"}>Bhartiya Grameen Mahila Sangh Indore</a></h3>
      </li>
      <li>
      <h3><a href = {"https://www.ngofoundation.in/ngo-list/carewell-education-and-welfare-society-contact-number-contact-details_i61993"}>Carewell Educational And Welfare Society</a></h3>
      </li>
      <li>
      <h3><a href = {"https://www.searchdonation.com/chandrakanta-gupta-charitable-trust"}>Chandrakanta Gupta Charitable Trust</a></h3>
      </li>
      <li>
      <h3><a href = {"https://www.ngofoundation.in/ngo-list/deen-bandhu-samaj-sahyog-samiti-contact-number-contact-details_i62235"}>Deen Bandhu Samaj Sahyog</a></h3>
      </li>
      <li>
      <h3><a href = {"https://www.zaubacorp.com/company/DHANLAXMI-WELFARE-FOUNDATION/U85300PN2020NPL191485"}>Dhan Laxmi Social Welfare Trust</a></h3>
      </li>
    </ul>
    </section>

    <section>
    <h2>NGO Database (82k+ records) Latest News & Information </h2> <br></br>
    <iframe id="iFrameExample"
      title="news" width={1000} height={500} sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      src="https://www.searchdonation.com/ngos/area-of-interest">
    </iframe>
    </section>

    </section>
    </body>
    </html>
  )
}

export default list