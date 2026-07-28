function DashboardCards({ jobs }) {

    const appliedCount = jobs.filter(
        (job) => job.status === "Applied"
    ).length;

    const interviewCount = jobs.filter(
        (job) => job.status === "Interview"
    ).length;

    const selectedCount = jobs.filter(
        (job) => job.status === "Selected"
    ).length;

    const rejectedCount = jobs.filter(
        (job) => job.status === "Rejected"
    ).length;

    return (
        <div className="row mb-4">

            <div className="col-md-3 mb-3">
                <div className="card bg-warning text-dark shadow border-0">
                    <div className="card-body text-center">
                        <h6>🟡 Applied</h6>
                        <h2>{appliedCount}</h2>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mb-3">
                <div className="card bg-primary text-white shadow border-0">
                    <div className="card-body text-center">
                        <h6>🔵 Interview</h6>
                        <h2>{interviewCount}</h2>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mb-3">
                <div className="card bg-success text-white shadow border-0">
                    <div className="card-body text-center">
                        <h6>🟢 Selected</h6>
                        <h2>{selectedCount}</h2>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mb-3">
                <div className="card bg-danger text-white shadow border-0">
                    <div className="card-body text-center">
                        <h6>🔴 Rejected</h6>
                        <h2>{rejectedCount}</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DashboardCards;