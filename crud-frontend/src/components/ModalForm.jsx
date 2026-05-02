const ModalForm = ({ isOpen, onClose, onSubmit, mode }) => {
  return (
    <>

      <dialog id="my_modal" className="modal" open={isOpen}>
        <div className="modal-box">
          {/* X button to close */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg">
            {mode === "add" ? "Add New Client" : "Edit Client"}
          </h3>
          <p className="py-4">Press ESC, click ✕, or click outside to close</p>
          <button className="btn" onClick={() => {
            onSubmit();
            onClose();
          }}>
            {mode === "add" ? "Add Client" : "Save Changes"}
          </button>
        </div>

        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop" onClick={onClose}>
         
        </form>
      </dialog>
    </>
  );
};

export default ModalForm;
