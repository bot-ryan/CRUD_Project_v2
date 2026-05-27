import axios from "axios";
import { useState, useEffect } from "react";

const TableList = ({ onOpen, searchTerm }) => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/clients");
        setTableData(response.data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const filteredData = tableData.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.salary.toString().includes(searchTerm)
  );

  const handleDelete = async (clientId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this client?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:3000/api/clients/${clientId}`);
      // Refresh the table data after deletion
      const response = await axios.get("http://localhost:3000/api/clients");
      setTableData(response.data);   
    } catch (err) {
      setError("Error deleting client");
      console.error(err);
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* display all clients*/}
            {filteredData.map((client) => {
              return (
                <tr key={client.id} className="hover:bg-base-300">
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.job}</td>
                  <td>{client.salary}</td>
                  <td>
                    {client.isactive ? (
                      <button className="btn btn-success btn-sm">Active</button> // if true, show active button
                    ) : (
                      <button className="btn btn-accent btn-sm">
                        Inactive
                      </button> // if false, show inactive button
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => onOpen("edit", client)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-error btn-sm" onClick={() => handleDelete(client.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
