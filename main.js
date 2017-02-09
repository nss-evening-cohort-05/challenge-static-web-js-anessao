//ENTER KEY FUNCTIONALITY
function enterKey(event) {
    var x = event.keyCode;
    if (x === 13) {  // 13 is the ENTER keycode
        alert ("You pressed the Enter key!");
    }
}

//Button Action - Bringing it all together
var button = document.getElementById("growTree");

button.addEventListener("click", function(){
	//CHRISTMAS TREE PATTERN
	var char = document.getElementById("char").value;
	var num = document.getElementById('height').value;

		var tree = [];

		for (i = 0; i < (num - 1); i++) {
			tree.push(" ");
		}

		tree.push(char);
		console.log(tree.toString().replace(/,/g, ''));

		for (j = 0; j < (num-1); j++) {
			tree.splice(0, 1);
			tree.push(char, char);
			console.log(tree.toString().replace(/,/g, ''));
		}
});













