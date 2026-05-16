import * as clientService from "../services/clientService.js";

export const getClients = async (req, res) => {
	try {
		const clients = await clientService.getClients(req, res);
		res.status(200).json(clients);
	} catch (error) {
		console.error("Error fetching clients:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
