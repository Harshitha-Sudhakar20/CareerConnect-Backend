import { useState, useEffect } from "react";

function JobTable({
                      jobs,
                      search,
                      sortBy,
                      openEditModal,
                      openDeleteModal,
                  }) {

    const jobsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const filteredJobs = jobs.filter(
        (job) =>
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase())
    );

    const sortedJobs = [...filteredJobs];

    switch (sortBy) {
        case "title":
            sortedJobs.sort((a, b) => a.title.localeCompare(b.title));
            break;

        case "company":
            sortedJobs.sort((a, b) => a.company.localeCompare(b.company));
            break;

        case "salaryLow":
            sortedJobs.sort((a, b) => a.salary - b.salary);
            break;

        case "salaryHigh":
            sortedJobs.sort((a, b) => b.salary - a.salary);
            break;

        default:
            break;
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [search, sortBy]);

    const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;

    const currentJobs = sortedJobs.slice(
        indexOfFirstJob,
        indexOfLastJob
    );

    const getJobTypeBadge = (type) => {

        const jobType = type?.trim().toLowerCase();

        if (jobType === "full time" || jobType === "full-time")
            return <span className="badge bg-success">Full Time</span>;

        if (jobType === "internship")
            return <span className="badge bg-primary">Internship</span>;

        if (jobType === "remote")
            return <span className="badge bg-info text-dark">Remote</span>;

        if (jobType === "part time" || jobType === "part-time")
            return <span className="badge bg-warning text-dark">Part Time</span>;

        return <span className="badge bg-secondary">{type}</span>;
    };

    const getStatusBadge = (status) => {

        switch (status) {

            case "Applied":
                return <span className="badge bg-warning text-dark">Applied</span>;

            case "Interview":
                return <span className="badge bg-primary">Interview</span>;

            case "Selected":
                return <span className="badge bg-success">Selected</span>;

            case "Rejected":
                return <span className="badge bg-danger">Rejected</span>;

            default:
                return <span className="badge bg-secondary">{status}</span>;
        }
    };

    return (
        <>

            <div className="table-responsive">

                <table className="table table-hover table-bordered align-middle">

                    <thead className="table-dark">

                    <tr>
                        <th>★</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Job Type</th>
                        <th>Status</th>
                        <th>Applied</th>
                        <th>Description</th>
                        <th width="170">Actions</th>
                    </tr>

                    </thead>

                    <tbody>

                    {currentJobs.length === 0 ? (

                        <tr>
                            <td colSpan="10" className="text-center">
                                No Applications Found
                            </td>
                        </tr>

                    ) : (

                        currentJobs.map((job) => (

                            <tr key={job.id}>

                                <td className="text-center fs-5">

                                    {job.favorite ? "⭐" : "☆"}

                                </td>

                                <td>{job.title}</td>

                                <td>{job.company}</td>

                                <td>{job.location}</td>

                                <td>
                                    ₹{Number(job.salary).toLocaleString("en-IN")}
                                </td>

                                <td>
                                    {getJobTypeBadge(job.jobType)}
                                </td>

                                <td>
                                    {getStatusBadge(job.status)}
                                </td>

                                <td>

                                    {job.appliedDate
                                        ? new Date(job.appliedDate).toLocaleDateString("en-GB")
                                        : "-"}

                                </td>

                                <td>{job.description}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => openEditModal(job)}
                                    >
                                        <i className="bi bi-pencil-square"></i>
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => openDeleteModal(job)}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                    </tbody>

                </table>

            </div>

            {totalPages > 1 && (

                <nav>

                    <ul className="pagination justify-content-center">

                        <li
                            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                Previous
                            </button>
                        </li>

                        {[...Array(totalPages)].map((_, index) => (

                            <li
                                key={index}
                                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                            >

                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>

                            </li>

                        ))}

                        <li
                            className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Next
                            </button>
                        </li>

                    </ul>

                </nav>

            )}

        </>
    );
}

export default JobTable;