var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));

	// create Delete Buttons to each Item
		// Der Button erhält einen eigenen Event Listener, der beim Klicken 
		// das zugehörige <li>-Element entfernt:
	var deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function() {
		li.remove();
	});

	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}



function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// Toggling class on and off
	// Anstatt jedem <li>-Element einzeln einen Event Listener zuzuweisen, 
	// wird ein Listener auf das übergeordnete <ul>-Element gesetzt:
ul.addEventListener("click", function(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
});


