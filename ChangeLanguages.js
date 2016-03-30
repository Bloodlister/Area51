var language = document.getElementById("Language");

function check(){
	
	if(document.getElementById("Language").innerHTML == "Български"){
		ToBulgarianSessionOne();
		ToBulgarianSessionTwo();
		ToBulgarianSessionThree();
		ToBulgarianSessionFour();
	}
	else if(document.getElementById("Language").innerHTML == "English")
	{
		ToEnglishSessionOne();
		ToEnglishSessionTwo();
		ToEnglishSessionThree();
		ToEnglishSessionFour();
	}
}

function ToBulgarianSessionOne() {
	document.getElementById("Language").innerHTML = "English";
	
	var secOne = document.getElementById("SectionOne");
	var transBox = secOne.children[0];
	transBox.children[0].innerHTML = "За Нас";
	transBox = secOne.children[1];
	transBox.children[0].innerHTML = "Контакти <br> & &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br>FAQ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	transBox = secOne.children[2];
	transBox.children[0].innerHTML = "Условия";
	transBox = secOne.children[3];
	transBox.children[0].innerHTML = "Резервация";
}

function ToEnglishSessionOne() {
	document.getElementById("Language").innerHTML = "Български";
	
	var secOne = document.getElementById("SectionOne");
	var transBox = secOne.children[0];
	transBox.children[0].innerHTML = "About us";
	transBox = secOne.children[1];
	transBox.children[0].innerHTML = "Contacts <br />& &nbsp; &nbsp; &nbsp; &nbsp;<br />FAQ &nbsp; &nbsp; &nbsp;";
	transBox = secOne.children[2];
	transBox.children[0].innerHTML = "Terms";
	transBox = secOne.children[3];
	transBox.children[0].innerHTML = "Reservation";
}

//-------------------------------------------------------

function ToEnglishSessionTwo() {
	var secTwo = document.getElementById("SectionTwo");
	var transbox = secTwo.children[1];
	transbox.innerHTML = "“Area 51” or “Зона 51” is the first of its kind action-puzzle live entertainment, in which you are the main characters in the story. Transport into the future, where chaos rules and the threat of the zombie-apocalypse is very real… perhaps even a fact. Salvation is in your hands… literally! You will be properly equipped to enter direct confrontation with the threat and will have to rely on your tactics, logical thinking and agility! Become the last hope of mankind, along with your friends and save the world in 60min.! Will you make it?";
}

function ToBulgarianSessionTwo() {
	var secTwo = document.getElementById("SectionTwo");
	var transBox = secTwo.children[1];
	transBox.innerHTML = "\"Area 51\" или \"Зона 51\" взема името от легендарната ЗОНА 51, вероятно разположена в щата Невада, САЩ. По самото наименование на тази нова и единствена по рода си екшън-игра на живо, става ясно, че се забърквате в секретни експерименти, които ще изострят сетивата ви и вземат дъха с уникалните си специални ефекти и логически пъзели. Ще се сблъскате с последния писък на роботиката и спецефектите, както и ще имате възможността да се докоснете до холивудски реплики на прословути по света оръжия, специално преиначени за вашето удоволствие и безопасност. С влизането бивате поглъщани от екшъна и ставате свидетели на това, какво всъщност се крие в митологичния военен бункер. Залата ни на ул. Клокотница в София е едва първата част от фантастичната поредица.";
}

//--------------------------------------------------------

function ToEnglishSessionThree() {
	var secThree = document.getElementById("SectionThree");
	var transBox = secThree.children[1];

	//-----------Въпроси------------------
	var innerBox = transBox.children[0];
	innerBox.innerHTML = "What is \"Area 51\"?";
	
	innerBox = transBox.children[2];
	innerBox.innerHTML = "How long does the game last?";
	
	innerBox = transBox.children[4];
	innerBox.innerHTML = "How can I make a reservation?";
	
	innerBox = transBox.children[6];
	innerBox.innerHTML = "How many people should we be?";
	
	innerBox = transBox.children[8];
	innerBox.innerHTML = "Is there an age limit?";
	
	innerBox = transBox.children[10];
	innerBox.innerHTML = "Is our game being recorded?";
	
	innerBox = transBox.children[12];
	innerBox.innerHTML = "In the event of an emergency, can I exit the room?";
	
	innerBox = transBox.children[14];
	innerBox.innerHTML = "Is there anything scary?";
	
	innerBox = transBox.children[16];
	innerBox.innerHTML = "Anything else I should know?";
	
	//-------Отговори---------------
	
	innerBox = transBox.children[1];
	innerBox.innerHTML = "“Area 51” or “Зона 51” is the first live action-quest game, upgraded into a whole new level of interaction with the latest special effects and action, allowing you to feel what no video game could offer you!";
	
	innerBox = transBox.children[3];
	innerBox.innerHTML = "60min.";
	
	innerBox = transBox.children[5];
	innerBox.innerHTML = "You can make a reservation through our website, where you will see which hours of which days are free on our calendar, the white-coloured hours are free, and those in red – taken.";
	
	innerBox = transBox.children[7];
	innerBox.innerHTML = "The recommended number for a group is from two to five people, the difficulty of the game is consisted with those criteria.";
	
	innerBox = transBox.children[9];
	innerBox.innerHTML = "Because of the thematic and nature of the game, we do not recommend it for people, under the age of 16, whereas in every group there must be at least one player or guardian of age.";
	
	innerBox = transBox.children[11];
	innerBox.innerHTML = "Your game is not being recorded. You are, however, being monitored by an operator at all time.";
	
	innerBox = transBox.children[13];
	innerBox.innerHTML = "Yes, you can exit the room at any time, you will be escorted out and the rest of your group could continue playing.";
	
	innerBox = transBox.children[15];
	innerBox.innerHTML = "Yes!... and no, of course. Everything in the room is props and fake, danger for you and your teammates does not exist nowhere and at no time whatsoever. We try to get you into a “real story” and to make you the main characters in it, in our effort we have tried to keep a certain ambiance and mood to keep the story unveiling in an interesting way.";
	
	innerBox = transBox.children[17];
	innerBox.innerHTML = "We do not allow any mobile phones, video/photo cameras or any other kind of recording technology. We do not recommend people visiting us if they are suffering from claustrophobia, epilepsy or hemophobia (fear of blood), even though all the blood in the room is fake and is definitely not real. We ask you to treat our work and the objects in the room with respect, do not worry – upon entering you sign a declaration, where you are accepting our terms and conditions, whereas an automatic insurance is made and in the event of unwilling damage, you do not pay any kind of money compensation from your side.";
}

function ToBulgarianSessionThree() {
	var secThree = document.getElementById("SectionThree");
	var transBox = secThree.children[1];
	
	//-----------Въпроси------------------
	var innerBox = transBox.children[0];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[2];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[4];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[6];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[8];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[10];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[12];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[14];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[16];
	innerBox.innerHTML = "";
	
	//-------Отговори---------------
	
	innerBox = transBox.children[1];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[3];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[5];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[7];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[9];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[11];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[13];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[15];
	innerBox.innerHTML = "";
	
	innerBox = transBox.children[17];
	innerBox.innerHTML = "";
}

//--------------------------------------------------------

function ToEnglishSessionFour() {
	var secFour = document.getElementById("SectionFour");
	var transBox = secFour.children[0];
	//----------------------------------------------First Part of TERMS
	var innerBox = transBox.children[0];
	innerBox.innerHTML = "Upon entering our game room, organized by “Area 51 – 2015 Ltd.”, we hereby declare that we agree with the following terms and conditions:";
	
	//----------------------------------------------List of TERMS
	innerBox = transBox.children[1];
	var listItem = innerBox.children[0];
	listItem.innerHTML = "1. We attend the games, organized by “Area 51 – 2015 Ltd.” freely and by our own will.";
	
	listItem = innerBox.children[1];
	listItem.innerHTML = "2. We allow the “Area 51 – 2015 Ltd.” team to lock us into the room, specified for the game.";
	
	listItem = innerBox.children[2];
	listItem.innerHTML = "3. We give our explicit consent to be under constant video and audio monitoring by “Area 51 – 2015 Ltd.” during our stay in the room, specified for the game.";
	
	listItem = innerBox.children[3];
	listItem.innerHTML = "4. The “Area 51 – 2015 Ltd.” team has the right to save video recordings of the game.";
	
	listItem = innerBox.children[4];
	listItem.innerHTML = "5. “Area 51 – 2015 Ltd.” has the right to use photographic materials, taken after the game has ended, for advertising purposes.";
	
	listItem = innerBox.children[5];
	listItem.innerHTML = "6. You can quit your game at any time, by signalling the “Area 51 – 2015 Ltd.” team or by using the provided medium.";
	
	listItem = innerBox.children[6];
	listItem.innerHTML = "7. We are informed that we alone are responsible for our health during the game. The “Area 51 – 2015 Ltd.” team is not responsible for our personal health.";
	
	listItem = innerBox.children[7];
	listItem.innerHTML = "8. We declare that we do not suffer from illnesses regarding the central nervous system, claustrophobia, hemophobia, asthma, epilepsy, seizures and/or other illnesses, which could be provoked by staying in an enclosed space, the décor, props or the game process.";
	
	listItem = innerBox.children[8];
	listItem.innerHTML = "9. We are obligated not to publicize in any way the quests, parts of them, the items or any other confidential information regarding the games, organized by “Area 51 – 2015 Ltd.”.";
	
	listItem = innerBox.children[9];
	listItem.innerHTML = "10. Using cell phones, cameras or other technology with the aim of recording video, sound or photographing in the rooms is prohibited and we are obligated not to use them.";
	
	listItem = innerBox.children[10];
	listItem.innerHTML = "11. We are obligated to use the items and decors in the room conscientiously.";
	
	listItem = innerBox.children[11];
	listItem.innerHTML = "12. We are informed that the quests do not require any kind of heavy-lifting, physical strength or dismantling items.";
	
	listItem = innerBox.children[12];
	listItem.innerHTML = "13. Intentional damaged items are to be paid for.";
	
	listItem = innerBox.children[13];
	listItem.innerHTML = "14. We are informed that upon entering, we are being made individual insurance, with which upon accidental and unwilling damage, breaking or hurting the décor or parts of it, the aforementioned insurance covers it.";
	
	listItem = innerBox.children[14];
	listItem.innerHTML = "15. In case of negligence to the aforementioned points, regarding the terms and conditions, the “Area 51 – 2015 Ltd.” team has the right to stop our game at any time. In these cases, the amount we have paid for does not refund.";
	
	//-----------------------------------End of TERMS
	innerBox = transBox.children[2];
	innerBox.innerHTML = "In case of extreme discontent caused by the game or other exceptional circumstances, in no more than two days after our visit, we have the right to file a refund claim for a part of the entire paid amount for the game. The claim should be filed in writing to the manager of “Area 51 – 2015 Ltd.”";
}

function ToBulgarianSessionFour() {
	var secFour = document.getElementById("SectionFour");
	var transBox = secFour.children[0];
	//----------------------------------------------First Part of TERMS
	var innerBox = transBox.children[0];
	innerBox.innerHTML = "";
	
	//----------------------------------------------List of TERMS
	innerBox = transBox.children[1];
	var listItem = innerBox.children[0];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[1];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[2];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[3];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[4];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[5];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[6];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[7];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[8];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[9];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[10];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[11];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[12];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[13];
	listItem.innerHTML = "";
	
	listItem = innerBox.children[14];
	listItem.innerHTML = "";
	
	//-----------------------------------End of TERMS
	innerBox = transBox.children[2];
	innerBox.innerHTML = "";
}