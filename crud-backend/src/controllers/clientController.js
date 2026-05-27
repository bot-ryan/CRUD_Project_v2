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

export const createClient = async (req, res) => {
	try{
		const clientData = req.body;
		const newClient = await clientService.createClient(clientData);
		res.status(200).json(newClient);
	} catch(err){
		console.error("Error creating client:", err);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const updateClient = async (req, res) => {
	try{
		const clientId = req.params.id;
		const clientData = req.body;
		const updatedClient = await clientService.updateClient(clientId, clientData);
		if(!updatedClient){
			return res.status(404).json({ error: "Client not found" });
		}
		res.status(200).json(updatedClient);
	} catch(err){
		console.error("Error updating client:", err);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const deleteClient = async (req, res) => {
	try{
		const clientId = req.params.id;
		await clientService.deleteClient(clientId);
		res.status(200).json({ message: "Client deleted successfully" });
	} catch(err){
		console.error("Error deleting client:", err);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

