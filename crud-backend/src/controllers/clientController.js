import { getHelloMessage } from "../services/clientService.js";

const sayHello = (req, res) => {
	const message = getHelloMessage();

	res.json({ message });
};

export { sayHello };
