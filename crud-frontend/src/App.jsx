import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import { useState } from "react";
import axios from "axios";

function App() {

	const [isOpen, setisOpen] = useState(false);
	const [modalMode, setmodalMode] = useState("add");
	const [searchTerm, setSearchTerm] = useState("");
	const [clientData, setClientData] = useState(null); //name, job, salary, status

	

	const handleModal = (mode, clientData = null) => {
		setmodalMode(mode);
		setClientData(clientData);
		setisOpen(!isOpen);
	}

	const handleSubmit = async(newClientData) => {
		// handle form submission here
		if(modalMode === "add"){

			try{
				const response = await axios.post("http://localhost:3000/api/clients", newClientData);
				console.log("Client added successfully:", response.data);
			}catch(err){
				console.error("Error adding client:", err);
			}
			// add new client
			console.log("Adding new client...", newClientData);
			console.log("Name: ", newClientData.name);
			console.log("Job: ", newClientData.job);
			console.log("Salary: ", newClientData.salary);
			console.log("Status: ", newClientData.isactive);
		} else if(modalMode === "edit"){
			// edit existing client
			console.log("Editing existing client...", newClientData);
			try{
				const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
				console.log("Client updated successfully:", response.data);
			}catch(err){
				console.error("Error editing client:", err);
			}
		}
	}


	return (
		<>
			<NavBar onOpen={() => handleModal('add')} onSearch={setSearchTerm} />
			<TableList onOpen={handleModal} searchTerm={searchTerm} />
			<ModalForm key={clientData?.id || "add"}
			isOpen={isOpen} 
			onClose={() => setisOpen(false)} 
			onSubmit={handleSubmit} 
			mode={modalMode} 
			clientData={clientData}
			/>
		</>
	);
}

export default App;
