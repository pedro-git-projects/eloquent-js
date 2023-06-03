import outputTriangle from "./triangle.js"
import fizzBuzz from "./fizzbuzz.js"
import chessboard from "./chess.js"

function main() {
	const args = process.argv.slice(2)

	if (args.length === 0) {
		console.log('Please provide an exercise name as an argument.')
		process.exit(1)
	}

	const exercises = {
		triangle: () => {
			console.log("running triangle exercise...")
			outputTriangle()
		},
		fizzbuzz: () => {
			console.log("running fizzbuzz...")
			fizzBuzz()
		},
		chess: () => {
			console.log("running chessboard...")
			chessboard()
		}
	}

	const input = args[0]

	if (!(input in exercises)) {
		console.log(`Exercise '${input}'' not found`)
		process.exit(1)
	}

	exercises[input]()
}

main()
