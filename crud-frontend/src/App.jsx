import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import { useState } from "react";

function App() {

	const [isOpen, setisOpen] = useState(false);
	const [modalMode, setmodalMode] = useState("add");

	const handleModal = (mode) => {
		setmodalMode(mode);
		setisOpen(!isOpen);
	}

	const handleSubmit = () => {
		// handle form submission here
		if(modalMode === "add"){
			// add new client
			console.log("Adding new client...");
		} else if(modalMode === "edit"){
			// edit existing client
			console.log("Editing existing client...");
		}
	}


	return (
		<>
			<NavBar onOpen={() => handleModal('add')} />
			<TableList />
			<ModalForm isOpen={isOpen} 
			onClose={() => setisOpen(false)} 
			onSubmit={handleSubmit} 
			mode={modalMode} />
		</>
	);
}

export default App;
