import { useEffect, useState } from "react";
import { updateJob } from "../services/jobService";
import { toast } from "react-toastify";

function EditJobModal({ selectedJob, onClose, onJobUpdated }) {

    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        description: "",
        salary: "",
        jobType: "",
        status: "Applied",
        appliedDate: "",
        favorite: false,
    });

    useEffect(() => {
        if (selectedJob) {
            setJob({
                title: selectedJob.title || "",
                company: selectedJob.company || "",
                location: selectedJob.location || "",
                description: selectedJob.description || "",
                salary: selectedJob.salary || "",
                jobType: selectedJob.jobType || "",
                status: selectedJob.status || "Applied",
                appliedDate: selectedJob.appliedDate || "",
                favorite: selectedJob.favorite || false,
            });
        }
    }, [selectedJob]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setJob({
            ...job,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await updateJob(selectedJob.id, {
                ...job,
                salary: Number(job.salary),
            });

            toast.success("Job updated successfully!");

            onJobUpdated();

        } catch (error) {
            console.error(error);
            toast.error("Failed to update job");
        }
    };

    return (
        <>
            <div
                className="modal fade show"
                style={{ display: "block" }}
                tabIndex="-1"
            >
                <div className="modal-dialog modal-lg">

                    <div className="modal-content">

                        <div className="modal-header">

                            <h5 className="modal-title">
                                Edit Job Application
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>

                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="modal-body">

                                <div className="mb-3">
                                    <label className="form-label">
                                        Job Title
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={job.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Company
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="company"
                                        value={job.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Location
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                        value={job.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Salary
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="salary"
                                        value={job.salary}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Job Type
                                    </label>

                                    <select
                                        className="form-select"
                                        name="jobType"
                                        value={job.jobType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Job Type</option>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Remote">Remote</option>
                                    </select>

                                </div>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Status
                                        </label>

                                        <select
                                            className="form-select"
                                            name="status"
                                            value={job.status}
                                            onChange={handleChange}
                                        >
                                            <option value="Applied">Applied</option>
                                            <option value="Interview">Interview</option>
                                            <option value="Selected">Selected</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">
                                            Applied Date
                                        </label>

                                        <input
                                            type="date"
                                            className="form-control"
                                            name="appliedDate"
                                            value={job.appliedDate}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>

                                <div className="form-check mb-3">

                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="favorite"
                                        checked={job.favorite}
                                        onChange={handleChange}
                                    />

                                    <label className="form-check-label">
                                        ⭐ Favorite Job
                                    </label>

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Description
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        name="description"
                                        value={job.description}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                            <div className="modal-footer">

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn btn-warning"
                                >
                                    Update Application
                                </button>

                            </div>

                        </form>

                    </div>

                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </>
    );
}

export default EditJobModal;