const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/helper/documentation");
const userRoute = require("./src/route/user");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.use(userRoute);
app.listen(3000);
