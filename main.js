//CHRISTMAS TREE PATTERN
var char = "*";
var num = 7;
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