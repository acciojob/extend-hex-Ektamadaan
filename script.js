const extendHex = (shortHex) => {
  // write your code here
	
	const r = shortHex[1];
	const g = shortHex[2];
	const b = shortHex[3];

	const fullHex = `#${r}${r}${g}${g}${b}${b}` ;
	return fullHex ;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
