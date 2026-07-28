import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportJobsToExcel = (jobs) => {

    const data = jobs.map((job) => ({
        Favorite: job.favorite ? "Yes" : "No",
        Title: job.title,
        Company: job.company,
        Location: job.location,
        Salary: job.salary,
        "Job Type": job.jobType,
        Status: job.status,
        "Applied Date": job.appliedDate,
        Description: job.description,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Applications");

    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });

    const file = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, "CareerConnect_Applications.xlsx");
};