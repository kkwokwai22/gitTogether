const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function(req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	// Pass to next layer of middleware
	next();
});

const ACCESS_TOKEN = ' cb1742c6d4e4db98c2e05e35dc0d6ebaa28c9052';
const GIT_API_USER = `https://api.github.com/users?access_token=${ACCESS_TOKEN}`;
const urlString = 'https://api.github.com/users?access_token=cb1742c6d4e4db98c2e05e35dc0d6ebaa28c9052';
const api_git = `https://api.github.com/users?client_id=9a9a2e0e050b35a25384&client_secret=2e1ee5dee25f547dc39bf82df4d12387b47697bd`;

// app.get('/route', async (req, res, next) => {
// 	try {
// 		const data = 'asdf';
// 		const payload = await something(data).then(result => createPayload(result));

// 		// remember, if you throw anywhere in try block, it will send to catch block
// 		// const something = willFail().catch((error) => {
// 		//     throw 'Custom error message:' + error.message
// 		// })

// 		// return from the route so nothing else is fired
// 		return res.render('route', { payload });
// 	} catch (e) {
// 		// fire down to error middleware
// 		return next(e);
// 	}
// });

// app.get('/github/users', async (req, res) => {
// 	try {
// 		const gitUserData = await axios.get(urlString);
// 		const proms = gitUserData.data.map(async userUrl => {
// 			return await axios(userUrl.url + '?access_token=cb1742c6d4e4db98c2e05e35dc0d6ebaa28c9052');
// 		});
// 		const allData = await Promise.all(proms)
// 		});
// 	} catch (e) {
// 		console.log('this is the e', e.response);
// 	}
// });

// app.get('/api/customers', (req, res) => {
// 	const customers = [
// 		{ id: 1, firstName: 'John', lastName: 'Doe' },
// 		{ id: 2, firstName: 'Brad', lastName: 'Traversy' },
// 		{ id: 3, firstName: 'Mary', lastName: 'Swanson' }
// 	];
// 	res.json(customers);
// });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
