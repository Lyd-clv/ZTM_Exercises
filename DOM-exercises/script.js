var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;  //Eingabelänge überprüfen: Hilfsfunktion: Gibt zurück, ob etwas im Textfeld eingegeben wurde. Bei leeren Textfeld kein Event mgl.
}


function createListElement() {
	var li = document.createElement("li");  //li wird dynamisch erstellt
	li.appendChild(document.createTextNode(input.value + " "));

	// create Delete Buttons to each Item
		// Der Button erhält einen eigenen Event Listener, der beim Klicken 
		// (Closure → li.remove() bezieht sich immer auf das richtige Element
		// das zugehörige <li>-Element entfernt:
	var deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function() {
		li.remove();
	});

	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";  // Durch input.value = "" wird das Textfeld geleert.
}



function addListAfterClick() {.       							//Eintrag hinzufügen bei Klick
	if (inputLength() > 0) {
		createListElement();
	}
}



function addListAfterKeypress(event) {							// Eintrag hinzufügen bei Enter
	if (inputLength() > 0 && event.keyCode === 13) {			// Keycode 13 steht für die Enter-Taste
		createListElement();
	}
}

// Damit wird das Erstellen neuer Einträge per Klick oder Enter ausgelöst:
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


// BONUS: adds automatically the delete button to each new item int the list

function createListElement() {
	const li = document.createElement("li");

	// Textinhalt hinzufügen
	li.appendChild(document.createTextNode(input.value + " "));

	// Delete-Button erstellen
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	// Button-Klick: löscht den li
	deleteButton.addEventListener("click", function() {
		li.remove();
	});

	// Button an li anhängen
	li.appendChild(deleteButton);

	// li zur Liste hinzufügen
	ul.appendChild(li);

	// Eingabe leeren
	input.value = "";
}

