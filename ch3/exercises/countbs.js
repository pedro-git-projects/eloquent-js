/*
 * Write a function countBs that takes a string as its only argument and
 * returns a number that indicates how many uppercase “B” characters there
 * are in the string.
*/

const countBs = (str) => {
	let c = 0 
	for(let i = 0; i < str.length; i++) {
		if (str[i] === 'B')
			c++
	}
	return c
}

export default countBs
