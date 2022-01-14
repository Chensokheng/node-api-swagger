const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const data = [
	{
		id: "7e5a2ae4-1221-4e35-b582-2de33a1e1312",
		name: "David",
	},
	{
		id: "5d3d2102-bfe5-4bbc-854d-59480bb4be12",
		name: "John",
	},
];

router.get("/users", (req, res) => {
	return res.json({
		count: data.length,
		values: data,
	});
});

router.post("/users", (req, res) => {
	const user = {
		id: uuidv4(),
		...req.body,
	};
	data.push(user);
	return res.json(user);
});

// query id
router.get("/users/id", (req, res) => {
	const user_record = data.find((user) => user.id === req.query.id);

	if (!user_record) {
		return res.status(404).json({
			message: "User not found.",
		});
	}

	return res.json(user_record);
});

router.get("/users/:id", (req, res) => {
	const user_record = data.find((user) => user.id === req.params.id);

	if (!user_record) {
		return res.status(404).json({
			message: "User not found.",
		});
	}

	return res.json(user_record);
});

module.exports = router;
