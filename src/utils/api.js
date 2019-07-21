export const requestData = () => fetch('/data')
	.then(res => {
		return res.json()
	})	
	.then(result => {
		return result
	},
	err => {
		console.log(console.err);
	})

