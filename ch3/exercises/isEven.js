/*
 * Define a recursive function isEven corresponding to this description.
 * The function should accept a single parameter (a positive, whole number)
 * and return a Boolean
*/

const isEven = (n) => {
	if(n < 0)
		return false
	if (n === 0)
		return true
	if (n === 1)
		return false
	return isEven(n-2)
}

export default isEven
