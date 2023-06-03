/*
 * Next, write a function called countChar that behaves like countBs, except
 * it takes a second argument that indicates the character that is to be counted
*/

const countChar = (str, charToCount) => {
	let c = 0 
	for(let i = 0; i < str.length; i++) {
		if (str[i] === charToCount)
			c++
	}
	return c
}

export default countChar
