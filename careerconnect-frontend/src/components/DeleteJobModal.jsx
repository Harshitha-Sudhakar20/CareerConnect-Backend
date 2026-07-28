import { deleteJob } from "../services/jobService";
import { toast } from "react-toastify";

function DeleteJobModal({ selectedJob, onClose, onJobDeleted }) {

    const handleDelete = async () => {
        try {
            await deleteJob(selectedJob.id);

            toast.success("Job deleted successfully!");

            onJobDeleted();

        } catch (error) {
            console.error(error);
            toast.error("Failed to delete job");
        }
    };

    return (
        <>
            <div
                className="modal fade show"
                style={{ display: "block" }}
                tabIndex="-1"
            >
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title text-danger">
                                Delete Job
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>

                        <div className="modal-body">

                            <p>
                                Are you sure you want to delete
                                <strong> {selectedJob.title}</strong>?
                            </p>

                            <p className="text-muted">
                                This action cannot be undone.
                            </p>

                        </div>

                        <div className="modal-footer">

                            <button
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </>
    );
}

export default DeleteJobModal;