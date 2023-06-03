/*
 * Chapter 2 introduced the standard function Math.min, which returns its small-
 * est argument (see “Return Values” on page 27). We can build something
 * like that now. Write a function min that takes two arguments and returns
 * their minimum.
 */

const min = (x, y) => {
	if (x > y)
		return y 
	return x
}

export default min
