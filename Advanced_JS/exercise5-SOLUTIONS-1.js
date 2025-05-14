// Complete the below questions using this array:
const array = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => { 		//Sie gibt nichts zurück, sondern wird verwendet, um etwas mit jedem Element zu machen
	let { username } = user;	//username aus dem user-Objekt geholt
	newArray.push(username);   // I need to manually add .push() -> erzeugte Wert wird in das manuell erstellte Array newArray hineingeschoben, da nichts automatisch gespeichert wird.
})
console.log(newArray);

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map(user => {  // Arrow function: Jeder Eintrag im Original-Array (array) wird hier der Reihe nach in user gespeichert.
	let { username } = user;		  // DESTRUCTURING: Bedeutet: Hol den Wert von username aus dem Objekt user heraus.
	return username + "?";			  // using string concetanation
})
console.log(mapArray);

// "map" ist perfekt, wenn du aus jedem Eintrag etwas Neues berechnen willst und daraus ein neues Array entstehen soll.


//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})
	//(1) Wert von i: Der Index des aktuellen Elements im Array, von 0 bis array.length - 1.
	// (2) Pure = Diese Funktion benötigt keinen Index (i), wenn du ihn nicht verwendest. Sie bleibt rein und verändert keine externen Zustände. 
		// Der Ausdruck num * 2 ist der einzige Einfluss auf das Ergebnis.



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

