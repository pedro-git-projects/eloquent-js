import min from "./exercises/min.js"

function main() {
	const args = process.argv.slice(2)

	if (args.length === 0) {
		console.log('Please provide an exercise name as an argument.')
		process.exit(1)
	}

	const min1 = args[1], min2 = args[2]
	const n1 = parseInt(min1), n2 = parseInt(min2)
	if (isNaN(n1) || isNaN(n2)) {
		console.log('Please provide numeric arguments.')
		process.exit(1)
	}

	const exercises = {
		min : () => {
			console.log("running minimum exercise...")
			console.log(min(n1, n2))
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
