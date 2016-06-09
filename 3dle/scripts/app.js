var app = angular.module('homePage', []);

app.controller('PersonaController', function(){
	this.profiles = personas;
});

app.controller('TabController', function(){
	this.tab = 1;
	this.setTab = function(currentTab){
		this.tab = currentTab;
		console.log(currentTab);
	}
	this.isSet = function(checkTab){
		return this.tab === checkTab;
	}
});

app.controller('ScenarioController', function(){
	this.situations = scenarios;
});

var personas = [
	{
		personaNo: 1,
		personaTitle: 'Persona 1',
		personaType: 'Middle School Teacher',
		name: 'Kay Rothman',
		age: 43,
		location: 'Manhattan, New York',
		technicalComfort: 'Novice',
		profession: 'Ancient Greece Teacher',
		quote: 'I’ve been teaching history for over 15 years and everyday there is something new to learn. I would like to communicate the knowledge I have gained to my students and I constantly strive to improve my approach to teaching.',
		background: 'Kay Rothman grew up in New York City and graduated from Columbia University with a Ph.D. in Ancient History. Early in her career she accepted a job offer from a local middle school to teach history to 6-8th grade students. Kay Rothman fell in love with her job and strives everyday to teach and inspire her students.',
		motivations: [
			"Kay researches and educates herself on relevant subjects daily",
			"Enjoys using web applications and resources",
			"Continuously looking for new and innovative ways to teach her students"
		],
		frustrations: [
			"Kay’s students often think history is boring and not fun",
			"They do not do as well on her exams as she would like them to",
			"She feels like her teaching methods are not reaching her students as easily as she would’ve liked"
		],
		idealExperience: [
			"Kay would like a more interactive teaching method that can spark interest within her students",
			"She would like to provide students with an alternative to textbook readings",
			"She would also like to be able to gauge her students progress as well"
		],
		image: 'images/rothman.jpg' 
	},
	{
		personaNo: 2,
		personaTitle: 'Persona 2',
		personaType: '8th grader',
		name: 'Jeffrey White',
		age: 13,
		location: 'Brooklyn, New York',
		technicalComfort: 'Technically savvy',
		profession: 'Student',
		quote: 'I have always done well in school, but history will always be a hard subject for me to grasp. There are too many important dates and events to remember.',
		background: 'Jeffrey lives with his parents and his two younger sisters in an apartment. Jeffrey attends Mark Twain Junior High School. He loves playing sports, such as basketball and football and his favorite subject is mathematics. Jeffrey looks forward to visiting his family in Barbados every summer.',
		motivations: [
			"Jeffrey would like an easier, more interactive way to learn history",
			"He enjoys using social and educational apps on his phone",
			"He prefers hands-on learning"
		],
		frustrations: [
			"Jeffrey’s history grades are the only thing keeping him from a Gold Honors Award at graduation",
			"He would like more ways to learn history than from the textbook",
			"He feels defeated when he cannot remember an important date of historical event"
		],
		idealExperience: [
			"Jeffrey would like to learn history in an interactive way",
			"He would like to be able to focus on one historical event at a time",
			"He would also like to be able to save certain information so he can easily find it later",
			"He thinks being quizzed at the end of every section would be very beneficial for his memory"
		],
		image: 'images/jeffrey.jpg' 
	},
	{
		personaNo: 3,
		personaTitle: 'Persona 3',
		personaType: 'Librarian',
		name: 'Miranda Tuniz',
		age: 33,
		location: 'Philadelphia, Pennsylvania',
		technicalComfort: 'Technically savvy',
		profession: 'Librarian',
		quote: 'I love to watch children learn but I also feel discouraged when children are not eager to learn. Especially with learning history, children do not find reading and memorizing dates appealing. As a librarian, I want children to learn and the library is the perfect place for that.',
		background: 'Miranda Tuniz grew up in Philadelphia and graduated from Drexel University with a Bachelors in Sociology. Miranda first fell in love with reading books at the age of 8 and never stopped reading a book since the first time she started. Miranda’s profuse love for books has inspired her to become a librarian after receiving her degree in Sociology and her love to spread knowledge motivates her to do her best!',
		motivations: [
			"Miranda’s love for books spurs her interest in new ways for learning",
			"New technology in information technology creates new and refreshing methods of learning",
			"Libraries across the nation will be receiving funds to upgrade their resources",
			"Miranda is compelled to make the library a resourceful place for the community"
		],
		frustrations: [
			"Many people often think the library is boring, outdated, and static",
			"Libraries are public and do not receive the amount of attention or funds it deserves",
			"Miranda wishes that more people would go to the library",
			"Miranda wants a new innovative way for people to learn interactively"
		],
		idealExperience: [
			"Miranda wishes that everyone values information and learning as much as she does",
			"Although many don’t like to read, she wants people to learn through another more interactive method",
			"Miranda also wishes that 3DLE will create a new interest in learning geography and history"
		],
		image: 'images/librarian.jpg' 
	}

];

var scenarios = [
	{
		scenarioNo: 1,
		scenarioText: "Kay discovered a new software called 3DLE that could potentially be a great learning tool for her Ancient Greek students at a technology fair she frequents. She decides to use and test the software extensively to see whether it could be of help to her students. She wants to learn the software's in and outs in order to generate class content based on the software.",
		image: "images/KayRothmanScenario.png",
	},
	{
		scenarioNo: 2,
		scenarioText: "In Jeffrey's Ancient History class his teacher introduced a new learning software, 3DLE. She informed them that this will be their new way of learning and studying outside of the classroom. His teacher understood that the students were having a difficult time comprehending the textbook, so she believed this would be a more effective approach. Jeffrey is hopeful to try a more interactive way of learning his more difficult subject. When he arrives home after school, his first task is to see what 3DLE is all about.",
		image: "images/JeffreyWhiteScenario.png",
	},
	{
		scenarioNo: 3,
		scenarioText: "Troubled with people’s perception of the library as boring and dull, Miranda Tuniz seeks a new resource in refreshing people’s experience in the library. After discovering the new software 3DLE, Miranda has gained new hopes of making the library a more exciting place to learn. With 3DLE, children are more engaged and excited in learning geography and history.",
		image: "images/MirandaTunizScenario.png",
	}
];