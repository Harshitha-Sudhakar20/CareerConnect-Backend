import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

function JobChart({ jobs }) {

    const fullTime = jobs.filter(
        (job) =>
            job.jobType?.trim().toLowerCase() === "full time" ||
            job.jobType?.trim().toLowerCase() === "full-time"
    ).length;

    const internship = jobs.filter(
        (job) =>
            job.jobType?.trim().toLowerCase() === "internship"
    ).length;

    const remote = jobs.filter(
        (job) =>
            job.jobType?.trim().toLowerCase() === "remote"
    ).length;

    const partTime = jobs.filter(
        (job) =>
            job.jobType?.trim().toLowerCase() === "part time" ||
            job.jobType?.trim().toLowerCase() === "part-time"
    ).length;

    const pieData = {
        labels: [
            "Full Time",
            "Internship",
            "Remote",
            "Part Time",
        ],
        datasets: [
            {
                data: [
                    fullTime,
                    internship,
                    remote,
                    partTime,
                ],
            },
        ],
    };

    const companyMap = {};

    jobs.forEach((job) => {
        companyMap[job.company] =
            (companyMap[job.company] || 0) + 1;
    });

    const barData = {
        labels: Object.keys(companyMap),
        datasets: [
            {
                label: "Jobs",
                data: Object.values(companyMap),
            },
        ],
    };

    return (
        <div className="row mb-4">

            <div className="col-md-6">

                <div className="card shadow h-100">

                    <div className="card-body">

                        <h5 className="text-center mb-3">
                            Job Types
                        </h5>

                        <Pie data={pieData} />

                    </div>

                </div>

            </div>

            <div className="col-md-6">

                <div className="card shadow h-100">

                    <div className="card-body">

                        <h5 className="text-center mb-3">
                            Jobs by Company
                        </h5>

                        <Bar data={barData} />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default JobChart;