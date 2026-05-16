import express from "express";
import cors from 'cors'
import clientRoute from "./routes/clientRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", clientRoute);

const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
