import express from "express";
import clientRoute from "./routes/clientRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/hello", clientRoute);

const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
