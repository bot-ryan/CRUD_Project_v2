import {query} from "../db.js";

export const getClients = async (req, res) => {
	const { rows } = await query('SELECT * FROM clients_tb');
	return rows;
};

export const createClient = async (clientData) => {
	const { name, job, salary, isactive } = clientData;
	const { rows } = await query(
		'INSERT INTO clients_tb (name, job, salary, isactive) VALUES ($1, $2, $3, $4) RETURNING *',
		[name, job, salary, isactive]
	);
	return rows[0];
};
