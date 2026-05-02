const TableList = ({ onOpen }) => {

    const clients = [
        {
            name: "Cy Ganderton",
            job: "Quality Control Specialist",
            salary: "$50,000",
            isActive: true
        },
        {
            name: "Hart Hagerty",
            job: "Desktop Support Technician",
            salary: "$45,000",
            isActive: false
        },
        {
            name: "Brice Swyre",
            job: "Tax Accountant",
            salary: "$40,000",
            isActive: true
        }
    ];



  return (
    <>
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
            {clients.map(function (client, index) {
               return(
                <tr key={index} className="hover:bg-base-300">
                    <th>{index + 1}</th>
                    <td>{client.name}</td>
                    <td>{client.job}</td>
                    <td>{client.salary}</td>
                    <td>
                    {client.isActive ? (
                      <button className="btn btn-success btn-sm">Active</button> // if true, show active button
                    ) : (
                      <button className="btn btn-accent btn-sm">Inactive</button> // if false, show inactive button
                    )}
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm" onClick={onOpen}>Edit</button>
                  </td>
                   <td>
                    <button className="btn btn-error btn-sm">Delete</button>
                  </td>
                </tr>
               ) 
            })}
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
