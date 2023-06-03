import countBs from "./exercises/countbs.js"
import countChar from "./exercises/countchar.js"
import isEven from "./exercises/isEven.js"
import min from "./exercises/min.js"

function main() {
	const args = process.argv.slice(2)

	if (args.length === 0) {
		console.log('Please provide an exercise name as an argument.')
		process.exit(1)
	}

	const input = args[0]

	const arg1 = args[1], arg2 = args[2]
	let n1 = 0, n2 = 0


	if (args[0] === "min" || args[0] === "parity") {
		if (arg1 != undefined) {
			n1 = parseInt(arg1)	
		}
		if (arg2 != undefined) {
			n2 = parseInt(arg2)
		}
		if (isNaN(n1) || isNaN(n2)) {
			console.log('Please provide numeric arguments.')
			process.exit(1)
		}
	}

	const exercises = {
		min : () => {
			console.log("running minimum exercise...")
			console.log(min(n1, n2))
		},
		parity: () => {
			console.log("running parity exercise...")
			console.log(isEven(n1))
		},	
		bs: () => {
			console.log("running bs exercise...")
			console.log(countBs(arg1))
		},
		char: () => {
			console.log("running char exercise...")
			console.log(countChar(arg1, arg2))
		}
	}

	if (!(input in exercises)) {
		console.log(`Exercise '${input}'' not found`)
		process.exit(1)
	}

	exercises[input]()
}

main()
