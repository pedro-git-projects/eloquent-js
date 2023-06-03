/*
 * Write a loop that makes seven calls to console.log to output the following
 * triangle:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
*/

const outputTriangle = () => {
	let char = "#"
	for(let i = 1; i <= 7; i++) {
		console.log(char.repeat(i))
	}
}

export default outputTriangle
