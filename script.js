var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
} 

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	input.value = "";	
	li.addEventListener('click', markAsDone);

//adding a delete button for each new list item
	var delbutton = document.createElement("button");
	li.appendChild(delbutton);
	delbutton.appendChild(document.createTextNode("x"));
	delbutton.onclick = removeParent;
}


function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

//cross off item from list
function markAsDone() {
    this.classList.toggle("done");
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode == 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete 
// the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete 
// button next to it. 

