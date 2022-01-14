const express = require("express");
const userRoute = require("./src/route/user");

const app = express();

app.use(express.json());

app.use(userRoute);
app.listen(3000);
