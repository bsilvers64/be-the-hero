import React, { useState }  from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

function blog() {

return	(
	<body>
	<header>
    <h1>SEVA</h1>
    <p style={{'fontFamily':'Helvetica'}}>We are dedicated to making a positive impact in the world.</p>
  </header>
  <nav>
    <div>
     <Link to="./ngolist">NGO Database</Link>
	 <Link to="./">Home</Link>
      <Link to="./aboutus" >About us</Link>
    </div>
    <div>
    <Link to="./Login" >NGO Login</Link>
    </div>
  </nav>
		<section class="blogs">
		<section>
		<div class="container">
			<h2>SEVA's Blog: </h2> <br></br>
			<div class="blog">

				<h3>240 Children Complete Robotics Training at IIT Bombay</h3>
				<p>Mumbai, January 25, 2023: The three-phase workshops at IIT Bombay might prove to be a life-changing experience for the 240 selected students of class VIII & IX from six Mission Education centres of Smile Foundation across Mumbai, Thane and Palghar districts. 

	The robotics workshop is being conducted under the STEM (Science, Technology, Engineering and Mathematics) initiatives of Smile Foundation in collaboration with the Electronics and Robotics Club (ERC) of the Indian Institute of Technology, Bombay. The facilitation partner, Gnaan U Education, played an important role in organizing the workshops. 

	As part of the programme, the on-campus Robotics workshop helped the students gain conceptual knowledge of the Electronics and Robotics field viz. physics, mechanics, electrical current and motors, soldering and basics of computer programming. </p>

			</div><br></br>

			<div class="blog">
				<h3>Govt. School students showcased amazing progress in Space Science and Technology</h3>
				<p>Pune, January 15, 2023: A select group of 120 meritorious students from five government schools showcased their talent and excellence in the areas of space science and technology in the Annual Science Fair. These children were selected from around 2,000 students who have been going through special STEM (Science, Technology, Engineering and Mathematics) education programme in five government schools. 

	Smile Foundation has been conducting a special project named ‘Promoting STEM Education among children’ under its Mission Education Programme. The project, operating with support from Atlas Copco India Ltd., has been focusing on 1,965 children across five government schools in Pimpri-Chinchwad Municipal Corporation (PCMC) area of Pune. Most of the children come from economically weaker families and socially disadvantaged communities.

	The students had created and presented various models, which they had developed under the guidance of Scientists and Trainers in the domain of space science and technology. Activities during the fair included aero modeling, satellites and launch vehicle display, rocket launching demonstration, among others which brought excitement both to the participants as well as visitors. </p>

			</div><br></br>

			<div class="blog">

				<h3>Skilling Youth for both Employability and Entrepreneurship</h3>
				<p>New Delhi, May 15, 2023: World Youth Skills Day emphasizes the need to equip the youth with skills that make them employable, able to deliver stellar work, and become job creators. As the world revives from the pandemic, World Youth Skills Day 2022 is a chance to assess the need for skill development in a world undergoing remarkable socio-economic and technological changes.

	

	The pandemic might have disrupted the pace of skill development and there might be considerable ground to be covered to upskill youth in preparing them for a better tomorrow. The job sector and various industries have undergone a major transformation during the pandemic and the demand for enhanced skills has only grown. 

	

	India has the largest youth population in the world with an average age of 29. Nearly 40 percent of the Indian population is aged 13 to 35 years. The youth (18-29 years) form 22 per cent of country’s population, totaling more than 270 million in number. 

	

	The Prime Minister has rightly reiterated that India would lead the fourth industrial revolution, supplying high-quality workforce to the whole world. Skilling youth properly, across urban and rural India, will be the key to actualizing this vision and ensuring a strong, future-ready workforce for India.  

	

	India’s demographic dividend opportunity is the longest in the world, available over five decades, from 2005 to 2055. India has the potential to emerge as one of the largest consumer economies in the world too, thanks to emerging economic dynamics and favourable demographics.

	

	The young and working population brings many unique possibilities for India’s future too. They include social mobility, economic growth, and a more inclusive and equitable society.

	</p>

			</div> <br></br>
		</div>
		</section>
		<section>     
			<h2>India's NGO's Articles, Events and updates </h2> <br></br>
			<iframe id="iFrameExample"
			title="news" width={450} height={1200} sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
			src="https://ngobox.org/news-article-blog-listing.php">
			</iframe>
		</section>
		<section>
		<Timeline
			dataSource={{
				sourceType: 'profile',
				screenName: 'NGOBOX'
			}}
			options={{
				height: '1200',
				width: '400'
			}}
		/></section>
	 </section>
	</body>
)
}

export default blog