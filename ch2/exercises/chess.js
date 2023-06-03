/*
 * Write a program that creates a string that represents an 8×8 grid, using new-
 * line characters to separate lines. At each position of the grid there is either a
 * space or a # character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
*/

const chessboard = () => {
	const rows = 8, cols = 8
	const dark = "#"
	const light = " " 
	for(let i = 1; i <= rows; i++) {
		let rowPattern = ""
		for(let j = 1; j <= cols; j++) {
			const isLightCell = (i+j) % 2 === 0;
			const cell = isLightCell ? light : dark 
			rowPattern += cell
		}
		console.log(rowPattern)
	}
}

export default chessboard
