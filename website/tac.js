var portfolio = [{
	"id":0,
	"image":"url('images/flowers.jpg')",
	"text":"Pictured is a garden that our team planted and mulched for a client.  TAC Landscaping is lucky to have partnered with a local pool and patio installation company last summer.  After the pools and patios are installed, TAC is in charge of following the design for planting on the customer’s property.  TAC plants large trees, small trees, flowers, grasses, and also designs and builds individual gardens for clients.  ",
},{
	"id":1,
	"image":"url('images/kfc.jpg')",
	"text":"Our team also works commercially; offering services to local businesses and building owners to make their private space look more inviting and aesthetic to their future customers.  Pictured is a sod installation job done for a local building owner.",
},{
	"id":2,
	"image":"url('images/wood.jpg')",
	"text":"Pictured is an elaborate backyard transformation job done for a client.  Prior to the image pictured, the backyard was filled with 5-foot tall weeds, rocks, debris, old gardens, and sand.  Additionally, there was a problem with the drainage because the backyard was not level—our team had to level the yard to prevent flooding of the house and backyard.  Our team removed all of the unwanted debris and weeds, rototilled the area, leveled grade A top soil on top, and installed sod to the home owner’s specifications.  This is a great example of how our team can transform your backyard into usable living space for your family!  It’s never too late, or something that we cannot handle!  ",
},{
	"id":3,
	"image":"url('images/stone.jpg')",
	"text":"This picture is a small sod installation and garden design job.  The sod in the upper portion of the picture was implemented to replace a heavily weeded area and the rocks were installed to cover up an old and unloved garden.  This is a great example of how we can quickly fix your complicated backyard problems with a simple solution that makes your backyard look neat and tidy.",
},{
	"id":4,
	"image":"url('images/metal.jpg')",
	"text":"Pictured is an example of one of our typical sod installation jobs.  TAC has had more requests for sod than any other job and all of our customers have had us come back for repeat work.  Before our work, this backyard was a barren field.  The family wanted to have some usable space for their kids to play in the backyard without tripping and falling on roots and rocks.  We can sod any area no matter the shape or size.  Call today for a free estimate!  ",
}];
function portfolioInit(){
	for (var i = 0; i <= portfolio.length - 1; i++) {
		var newParent = document.getElementById('portfolio_holder');
		var frame = document.createElement('div');
		var picture = document.createElement('div');
		var text = document.createElement('div');
		newParent.appendChild(frame);
		frame.appendChild(picture);
		frame.appendChild(text);
		frame.setAttribute('class','portfolio_personHolder');
		picture.setAttribute('class','portfolio_picture');
		picture.style.backgroundImage = portfolio[i].image;
		text.setAttribute('class','portfolio_text');
		text.innerHTML=portfolio[i].text;
		if (portfolio[i].text.length>=590){
			text.classList.add("portfolio_text_yScroll");
		}
	}
}
/*
var slidePortfolio = 0;

function portfolioInit(){
	document.getElementById("portfolio_image").style.backgroundImage = portfolio[slidePortfolio].image;
	document.getElementById("portfolio_text").innerHTML=portfolio[slidePortfolio].text;
	document.getElementById("portfolio_text").scrollTop = 0;
	if(slidePortfolio==0){
		document.getElementById("portfolio_left_button").style.backgroundImage = "url()";
	}else{
		document.getElementById("portfolio_left_button").style.backgroundImage = "url('images/arrowLeft.png')";
	}
	if(slidePortfolio==portfolio.length-1){
		document.getElementById("portfolio_right_button").style.backgroundImage = "url()";
	}else{
		document.getElementById("portfolio_right_button").style.backgroundImage = "url('images/arrowRight.png')";
	}
}
function protfolioShiftLeft(){
	if(slidePortfolio>0){
		slidePortfolio -=1;
		portfolioInit()
	}

}
function protfolioShiftRight(){
	if(slidePortfolio<portfolio.length-1){
		slidePortfolio +=1;
		portfolioInit()
	}
}
*/

//OUR TEAM PAGE

var ourTeam = [{
	"name":"Chance Macdonald",
	"image":"url('images/chance.jpg')",
	"position":"Owner",
	"email":"chance.macdonald@taclandscaping.com",
	"text":"The owner of TAC Landscape, Chance is also an established hockey player and student. As a hockey player, Chance has played 3 years of high-level junior hockey across North America. He has won an OHL Cup and a Sutherland Cup championship as All Ontario Titles. In high school, Chance attended a prep school called Groton in Massachusetts with a 9% acceptance rate; he played on the varsity hockey team, football team, and crew team and earned the honour of NEPSAC Scholastic Defenceman of the Year in 2011. Currently, Chance is pursuing his bachelor of commerce at Queen’s University; an undergraduate business school ranked first in Canada with many systems.  A prominent student with an entrepreneurial mindset, Chance’s future goal is to own his own consulting firm.  At TAC Landscape, Chance has independently conducted market segmentation, targeting and differentiation analysis to identify new business opportunities, which has contributed to a large increase in customer base.  He has also developed his strong communication skills by engaging with customers daily to guarantee complete satisfaction.  As the founder of such a unique business model, Chance plans to continue to help high school students to reach their goals and to provide guidance to as many students as possible.  Moving forward, Chance plans to transfer the skills of strong leadership, active communication, and business analysis that he has learned while growing TAC Landscape to other parts of the professional work place.",
},{
	"name":"Ryan Coulter",
	"image":"url('images/ryan.jpg')",
	"position":"Senior Manager",
	"email":"ryancoulter84@hotmail.com",
	"text":"Ryan is an elite hockey player with a full scholarship to Bowling Green State University to play Division 1 college hockey.  Ryan has been with TAC for two years. At 19 years old, Ryan has already been drafted to the OHL, NAHL, and USHL and plans to pursue a professional hockey career. Currently, Ryan plays hockey with the Langley Rivermen in British Columbia Jr. A Hockey League. Next season, Ryan plans to study business marketing at BGSU. As a profound student-athlete, Ryan graduate towards the top of his class in high school at the prestigious Culver Military Academy. At TAC Landscape, Ryan has been an integral senior manager.  His lead-by-example attitude, determination, and hard work have differentiated himself and proven that he will be a valuable asset to any field of professional work that he chooses in the future.  Ryan’s greatest accomplishments with TAC have been that he is able to finish projects in a very timely manner while still ensuring customer satisfaction.  Since coming to TAC, Ryan has refined his public relations skills and has been promoted to a position of authority.  Ryan is trusted to give estimates within the company, supervise other employees, and to work at the best of his abilities without any supervision.  Ryan not only has a bright future in hockey, but also the work force; TAC is lucky to have him as an employee.",
},{
	"name":"Paul Dykes",
	"image":"url('images/paul.jpg')",
	"position":"Senior Manager",
	"email":"paul_dykes@hotmail.com",
	"text":"Paul is a current business student at Western University. An entrepreneurial mind with a strong interest in the stock market, Paul hopes to one day succeed in the finance sector of the business world. Paul’s strongest attributes are shown in his commitment to clients, his permeated knowledge of the landscape industry, and his motivated demeanor. In his time with TAC, Paul has had no problem working over time to complete tasks, waking up earlier than necessary to get an early start in the day, and making extra efforts to ensure customer satisfaction. As a senior manager, Paul has used his vast knowledge to teach his entire team new skills and understands that quality is of the utmost importance; he never cuts corners.  Aside from TAC, Paul has been working other jobs his entire life to pursue his goals.  Paul started working when he was 12 years old and made it his goal to purchase his favourite vehicle by the time he graduated high school; a Dodge Challenger.  Paul has accomplished this goal, which is a tremendous testament to his hard work, perseverance, and money management at such a young age.  Paul has learned to develop interpersonal skills with his employees at his time with TAC and hopes to bring those skills to his future business world endeavours.  TAC Landscape is confident that Paul will succeed in the business world given his commitment to success.",
},{
	"name":"Stephen Mizener",
	"image":"url('images/stephen.jpg')",
	"position":"Manager",
	"email":"stephen.mizener@hotmail.ca",
	"text":"Stephen is a current student at Brock University and Niagara College studying sociology and policing.  Stephen has worked with TAC for two years. As an extroverted person with great interpersonal skills, Stephen plans to pursue a career as a police officer. At TAC Landscape, Stephen has learned the value of punctuality, professionalism, and responsible leadership. As a supervisor, Stephen has been essential in organizing and planning out jobs. He has mastered constructive criticism and is a great teacher and leader to his fellow peers who have less experience in the landscaping industry.  TAC Landscape values him as a leader who can develop new employees’ skills to his level.  As for Stephen’s future goals, TAC Landscape is confident that he will have a prosperous career as a police officer and transfer the skills that he has learned to his field of work by implementing his valuable teaching style and leadership qualities.",
},{
	"name":"Braden Coulter",
	"image":"url('images/braden.jpg')",
	"position":"Supervisor",
	"email":"bcoulter1148@gmail.com",
	"text":"Braden is a current grade 12 student at Dundas Valley Secondary School and a hockey player with the Dundas Blues.  Braden has been with TAC for one year. A hard working student who has a strong attention for detail, Braden has aspirations of studying business at the college of his choice. He plans to pursue business and then possibly specialize in insurance. At TAC Landscape, Braden has been an excellent supervisor who has exceeded expectations and improved his skills exponentially. As a quick learner, Braden has been able to master a wide variety of landscaping skills including planting, gardening, mulching, weeding, and arboriculture.  His strong attention to detail has been vital in ensuring the satisfaction of customers, and his customer relations skills have improved substantially.  Since coming to TAC, Braden has become much more comfortable speaking with customers and his attentive work has been requested in many detailed and particular jobs.  Braden has a bright future ahead of him and has cultivated many important skills relevant to the workforce while working at TAC.",
}];

function ourTeamInit(){
	for (var i = 0; i <= ourTeam.length - 1; i++) {
		var newParent = document.getElementById('ourTeam_holder');
		var frame = document.createElement('div');
		var picture = document.createElement('div');
		var textHolder = document.createElement('div');
		var name = document.createElement('div');
		var position = document.createElement('div');
		var email = document.createElement('div');
		var text = document.createElement('div');
		newParent.appendChild(frame);
		frame.appendChild(picture);
		frame.appendChild(textHolder);
		frame.appendChild(text);
		textHolder.appendChild(name);
		textHolder.appendChild(position);
		textHolder.appendChild(email);
		frame.setAttribute('class','ourTeam_personHolder');
		picture.setAttribute('class','ourTeam_picture');
		picture.style.backgroundImage = ourTeam[i].image;
		textHolder.setAttribute('class','ourTeam_textHolder');
		name.setAttribute('class','ourTeam_name');
		name.innerHTML=ourTeam[i].name;
		position.setAttribute('class','ourTeam_position');
		position.innerHTML=ourTeam[i].position;
		email.setAttribute('class','ourTeam_email');
		email.innerHTML=ourTeam[i].email;
		text.setAttribute('class','ourTeam_text');
		text.innerHTML=ourTeam[i].text;
	}
}
/*
var slideOurTeam = 0;

function ourTeamInit(){
	document.getElementById("ourTeam_image").style.backgroundImage = ourTeam[slideOurTeam].image;
	document.getElementById("ourTeam_text").innerHTML=ourTeam[slideOurTeam].text;
	document.getElementById("ourTeam_text").scrollTop = 0;
	if(slideOurTeam==0){
		document.getElementById("ourTeam_left_button").style.backgroundImage = "url()";
	}else{
		document.getElementById("ourTeam_left_button").style.backgroundImage = "url('images/arrowLeft.png')";
	}
	if(slideOurTeam==ourTeam.length-1){
		document.getElementById("ourTeam_right_button").style.backgroundImage = "url()";
	}else{
		document.getElementById("ourTeam_right_button").style.backgroundImage = "url('images/arrowRight.png')";
	}
}
function ourTeamShiftLeft(){
	if(slideOurTeam>0){
		slideOurTeam -=1;
		ourTeamInit()
	}

}
function ourTeamShiftRight(){
	if(slideOurTeam<ourTeam.length-1){
		slideOurTeam +=1;
		ourTeamInit()
	}
}*/