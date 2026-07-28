import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportJobsToPDF = (jobs) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("CareerConnect - Job Application Report", 14, 18);

    const tableData = jobs.map((job) => [
        job.favorite ? "★" : "",
        job.title,
        job.company,
        job.status,
        job.jobType,
        job.location,
        job.appliedDate || "",
        `₹${Number(job.salary).toLocaleString("en-IN")}`
    ]);

    autoTable(doc, {
        startY: 28,
        head: [[
            "Fav",
            "Title",
            "Company",
            "Status",
            "Type",
            "Location",
            "Applied",
            "Salary"
        ]],
        body: tableData,
        styles: {
            fontSize: 9
        },
        headStyles: {
            fillColor: [13, 110, 253]
        }
    });

    doc.save("CareerConnect_Report.pdf");
};