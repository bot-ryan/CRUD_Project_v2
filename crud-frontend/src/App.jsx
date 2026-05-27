import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import { useState } from "react";
import axios from "axios";

function App() {

	const [isOpen, setisOpen] = useState(false);
	const [modalMode, setmodalMode] = useState("add");
	const [searchTerm, setSearchTerm] = useState("");

	const handleModal = (mode) => {
		setmodalMode(mode);
		setisOpen(!isOpen);
	}

	const handleSubmit = (e) => {
		// handle form submission here
		if(modalMode === "add"){
			// add new client
			console.log("Adding new client...", e);
			console.log("Name: ", e.name);
			console.log("Job: ", e.job);
			console.log("Salary: ", e.salary);
			console.log("Status: ", e.status);
		} else if(modalMode === "edit"){
			// edit existing client
			console.log("Editing existing client...");
		}
	}


	return (
		<>
			<NavBar onOpen={() => handleModal('add')} onSearch={setSearchTerm} />
			<TableList onOpen={() => handleModal('edit')} searchTerm={searchTerm} />
			<ModalForm isOpen={isOpen} 
			onClose={() => setisOpen(false)} 
			onSubmit={handleSubmit} 
			mode={modalMode} />
		</>
	);
}

export default App;
