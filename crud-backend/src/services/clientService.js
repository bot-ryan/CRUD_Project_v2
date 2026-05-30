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

export const updateClient = async (clientId, clientData) => {
	const { name, job, salary, isactive } = clientData;
	const { rows } = await query(
		'UPDATE clients_tb SET name=$1, job=$2, salary=$3, isactive=$4 WHERE id=$5 RETURNING *',
		[name, job, salary, isactive, clientId]
	);
	return rows[0];
};

export const deleteClient = async (clientId) => {
	await query('DELETE FROM clients_tb WHERE id=$1', [clientId]);
};

export const searchClients = async (searchTerm) => {
	const { rows } = await query(
		'SELECT * FROM clients_tb WHERE name ILIKE $1 OR job ILIKE $1',
		[`%${searchTerm}%`]
	);
	return rows;
};
