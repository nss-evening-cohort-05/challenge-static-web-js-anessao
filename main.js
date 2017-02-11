var inObj = {};
var button = document.getElementById("growTree");

//BUTTON ACTION
button.addEventListener("click", function myKeyPress(){
	//CHRISTMAS TREE PATTERN
		//ENTER VALUES FROM INPUTS
		inObj.char = document.getElementById("char").value;
		inObj.num = document.getElementById('height').value;
		var tree = [];
		//CHECK BOTH FIELDS FOR ENTRY
		if (inObj.char === '' || inObj.num === '') { 
			alert("You must fill in both fields");
		//CHECK HEIGHT FIELD FOR NUMBER ENTRY
		} else if (isNaN(inObj.num)) {
			alert("You must enter a number");
		//BUILD TREE
		} else {
		for (i = 0; i < (inObj.num - 1); i++) {
			tree.push(" ");
		}

		tree.push(inObj.char);
		console.log(tree.toString().replace(/,/g, ''));

		for (j = 0; j < (inObj.num-1); j++) {
			tree.splice(0, 1);
			tree.push(inObj.char, inObj.char);
			console.log(tree.toString().replace(/,/g, ''));
		}
	}
});

//ENTER KEY ACTION
var enterKey = function(e) {
if(e.keyCode === 13) { // 13 is keycode for the ENTER key
        document.getElementById("growTree").click();
    }

}













