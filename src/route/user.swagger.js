const user = {
	id: "5d3d2102-bfe5-4bbc-854d-59480bb4be12",
	name: "David",
};

const getUsers = {
	tags: ["User"],
	description: "reeturns all users.",
	responses: {
		200: {
			description: "get user",
			content: {
				"application/json": {
					schema: {
						type: "object",
						example: {
							count: 1,
							user,
						},
					},
				},
			},
		},
	},
};

const createUser = {
	tags: ["User"],
	description: "Create a new user",
	requestBody: {
		content: {
			"application/json": {
				schema: {
					type: "object",
					properties: {
						name: {
							type: "string",
							description: "The user's name",
							example: "Leanne Graham",
						},
					},
				},
			},
		},
	},
	responses: {},
};

const getUserById = {
	tags: ["User"],
	summary: "get user from path id",
	description: "get user by their id.",
	parameters: [
		{
			name: "id",
			in: "path",
			description: "ID of user to return",
			required: true,
			type: "string",
			example: "5d3d2102-bfe5-4bbc-854d-59480bb4be12",
		},
	],
	responses: {
		200: {
			description: "user record",
			content: {
				"application/json": {
					schema: {
						type: "object",
						example: {
							success: true,
						},
					},
				},
			},
		},
	},
};

const getUserByQueryId = {
	tags: ["User"],
	summary: "get user from query id",
	description: "get user by their id.",
	parameters: [
		{
			name: "id",
			in: "query",
			description: "ID of user to return",
			required: true,
			type: "string",
			example: "5d3d2102-bfe5-4bbc-854d-59480bb4be12",
		},
	],
	responses: {
		200: {
			description: "user record",
			content: {
				"application/json": {
					schema: {
						type: "object",
						example: {
							success: true,
						},
					},
				},
			},
		},
		400: {
			description: "User not Found",
		},
	},
};

const userRoute = {
	"/users": {
		post: createUser,
		get: getUsers,
	},
	"/users/{id}": {
		get: getUserById,
	},
	"/users/id": {
		get: getUserByQueryId,
	},
};

module.exports = userRoute;
