const express = require('express');

const data = {
	"data": [
		{
			"id": 1,
			"avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHIvDqPTFq9pNwR5uEsdRFc4r5AuwFf3hGSucwkizwNNGzWv7",
			"name": "Nina",
			"surname": "Palmer",
			"city": "London",
			"email": "nina@gmail.com",
			"phone": "+44 20 7946 0964",
			"dob": "1983-10-20",
			"hired": true
		},
		{
			"id": 2,
			"avatar": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Jorah_Mormont-Iain_Glen.jpg/220px-Jorah_Mormont-Iain_Glen.jpg",
			"name": "Jeff",
			"surname": "Brooks",
			"city": "Sydney",
			"email": "jeff.brooks@gmail.com",
			"phone": "+61 1900 654 321",
			"dob": "1983-10-20",
			"hired": false
		},
		{
			"id": 3,
			"avatar": "https://i.pinimg.com/736x/37/09/02/370902efd7a6e5fc16fcb8126680a6ac--bronn-game-of-thrones-jerome-flynn.jpg",
			"name": "Anthony",
			"surname": "Hill",
			"city": "Los Angeles",
			"email": "a.hill@gmail.com",
			"phone": "+1 213 509 6995",
			"dob": "1983-10-20",
			"hired": true
		},
		{
			"id": 4,
			"avatar": "http://www.serialowa.pl/wpr/wp-content/uploads/2014/06/maisiewills4567.jpg",
			"name": "Shannon",
			"surname": "Hunt",
			"city": "Singapore",
			"email": "s.hunt@gmail.com",
			"phone": "+65 84624113",
			"dob": "1983-10-20",
			"hired": true
		},
		{
			"id": 5,
			"avatar": "https://www.elnacional.cat/uploads/s1/22/58/29/8/john%20Snow%20HBO_1_630x630.jpg",
			"name": "Ryan",
			"surname": "Conner",
			"city": "Hong Kong",
			"email": "ryan@gmail.com",
			"phone": "+852 3772 3361",
			"dob": "1983-10-20",
			"hired": true
		},
		{
			"id": 6,
			"avatar": "http://vignette4.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/4/48/Promo_%28Ygrid%29_Saison_4_%282%29.jpg/revision/latest/top-crop/width/480/height/480?cb=20160424212121&path-prefix=fr",
			"name": "Carol",
			"surname": "Caldwell",
			"city": "Hong Kong",
			"email": "c.c@gmail.com",
			"phone": "+852 2153 9983",
			"dob": "1983-10-20",
			"hired": false
		},
		{
			"id": 7,
			"avatar": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/0d/Profile-Missandei.PNG/revision/latest?cb=20170818044646",
			"name": "Keith",
			"surname": "Spencer",
			"city": "London",
			"email": "k.spencer@hotmail.com",
			"phone": "+44 20 7946 0145",
			"dob": "1983-10-20",
			"hired": true
		},
		{
			"id": 8,
			"avatar": "https://i.ebayimg.com/images/g/kNAAAOSwpLNX~BYN/s-l300.jpg",
			"name": "Stanley",
			"surname": "Reese",
			"city": "Sydney",
			"email": "stanley.reese@gmail.com",
			"phone": "+61 1900 654 321",
			"dob": "1983-10-20",
			"hired": true
		}
	]
}

const port = 5000;
const app = express();

app.get('/data', (req, res, next) => {
	res.status(200).send(JSON.stringify(data));
});

app.listen(port, () => console.log(`Listen to port ${port}`));
