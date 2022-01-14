const userDoc = require("../route/user.swagger");

const swaggerDocument = {
	openapi: "3.0.0",
	info: {
		title: "Quiz App api",
		version: "1.0.0",
		description: "This demo swagger",
	},
	servers: [
		{
			url: "http://localhost:3000",
			description: "Local server",
		},
		{
			url: "http://production",
			description: "Production server",
		},
	],
	tags: [
		{
			name: "User",
		},
	],
	paths: {
		...userDoc,
	},
};

module.exports = swaggerDocument;
