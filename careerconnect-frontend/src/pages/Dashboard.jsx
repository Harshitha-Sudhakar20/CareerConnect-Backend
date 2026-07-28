import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import JobTable from "../components/JobTable";

import AddJobModal from "../components/AddJobModal";
import EditJobModal from "../components/EditJobModal";
import DeleteJobModal from "../components/DeleteJobModal";

import { getAllJobs } from "../services/jobService";
import { exportJobsToPDF } from "../utils/pdfExport";
import { exportJobsToExcel } from "../utils/excelExport";

function Dashboard() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");

    const [selectedJob, setSelectedJob] = useState(null);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
        try {
            setLoading(true);
            const response = await getAllJobs();
            setJobs(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load jobs");
        } finally {
            setLoading(false);
        }
    };

    const openAddModal = () => {
        setShowAddModal(true);
    };

    const openEditModal = (job) => {
        setSelectedJob(job);
        setShowEditModal(true);
    };

    const openDeleteModal = (job) => {
        setSelectedJob(job);
        setShowDeleteModal(true);
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />

            <Navbar />

            <div className="container mt-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>CareerConnect Dashboard</h2>

                    <div>

                        <button
                            className="btn btn-danger me-2"
                            onClick={() => exportJobsToPDF(jobs)}
                        >
                            <i className="bi bi-file-earmark-pdf me-2"></i>
                            PDF
                        </button>

                        <button
                            className="btn btn-success me-2"
                            onClick={() => exportJobsToExcel(jobs)}
                        >
                            <i className="bi bi-file-earmark-excel me-2"></i>
                            Excel
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={openAddModal}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Add Job
                        </button>

                    </div>

                </div>

                <div className="card shadow">

                    <div className="card-body">

                        <DashboardCards jobs={jobs} />

                        <SearchBar
                            search={search}
                            setSearch={setSearch}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        {loading ? (

                            <div className="text-center p-5">
                                <div className="spinner-border text-primary"></div>
                            </div>

                        ) : (

                            <JobTable
                                jobs={jobs}
                                search={search}
                                sortBy={sortBy}
                                openEditModal={openEditModal}
                                openDeleteModal={openDeleteModal}
                            />

                        )}

                    </div>

                </div>

            </div>

            {showAddModal && (
                <AddJobModal
                    onClose={() => setShowAddModal(false)}
                    onJobAdded={() => {
                        setShowAddModal(false);
                        loadJobs();
                    }}
                />
            )}

            {showEditModal && selectedJob && (
                <EditJobModal
                    selectedJob={selectedJob}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedJob(null);
                    }}
                    onJobUpdated={() => {
                        setShowEditModal(false);
                        setSelectedJob(null);
                        loadJobs();
                    }}
                />
            )}

            {showDeleteModal && selectedJob && (
                <DeleteJobModal
                    selectedJob={selectedJob}
                    onClose={() => {
                        setShowDeleteModal(false);
                        setSelectedJob(null);
                    }}
                    onJobDeleted={() => {
                        setShowDeleteModal(false);
                        setSelectedJob(null);
                        loadJobs();
                    }}
                />
            )}

        </>
    );
}

export default Dashboard;