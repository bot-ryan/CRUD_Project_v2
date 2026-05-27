import { useEffect, useState } from "react";

const ModalForm = ({ isOpen, onClose, onSubmit, mode, clientData }) => {
  const [name, setName] = useState(mode === "edit" ? clientData?.name : "");
  const [job, setJob] = useState(mode === "edit" ? clientData?.job : "");
  const [salary, setSalary] = useState(
    mode === "edit" ? clientData?.salary : "",
  );
  const [status, setStatus] = useState(
    mode === "edit" ? (clientData?.isactive ? "Active" : "Inactive") : "",
  );

  

  // Listen for ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    // Cleanup listener when modal closes
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const clientData = { name, job, salary: Number(salary), isactive: status === "Active" };
      await onSubmit(clientData);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
    onClose();
  };

  return (
    <>
      <dialog id="my_modal" className="modal" open={isOpen}>
        <div className="modal-box">
          {/* X button to close */}
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg">
            {mode === "add" ? "Add New Client" : "Edit Client"}
          </h3>
          <p className="py-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <legend className="fieldset-legend">Job</legend>
              <input
                type="text"
                className="input"
                placeholder="Teacher"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
              <legend className="fieldset-legend">Salary</legend>
              <input
                type="number"
                className="input"
                placeholder="10000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <p className="label">Optional</p>
              <legend className="fieldset-legend">Status</legend>
              <select
                className="select w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option disabled value="" selected>
                  Select status
                </option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </fieldset>
          </p>
          <button className="btn" onClick={(e) => handleSubmit(e)}>
            {mode === "add" ? "Add Client" : "Save Changes"}
          </button>
        </div>

        {/* Click outside to close */}
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={onClose}
        ></form>
      </dialog>
    </>
  );
};

export default ModalForm;
