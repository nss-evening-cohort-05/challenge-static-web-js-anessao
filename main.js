//CHRISTMAS TREE PATTERN
//WORKING LOOPS!!
var char = "*";
var num = 12;
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

//ENTER KEY FUNCTIONALITY
function enterKey(event) {
    var x = event.keyCode;
    if (x == 13) {  // 13 is the enter keycode
        alert ("You pressed the Enter key!");
    }
}