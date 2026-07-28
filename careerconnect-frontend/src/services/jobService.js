import api from "./api";

const authHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getAllJobs = () => {
    return api.get("/jobs", authHeader());
};

export const addJob = (job) => {
    return api.post("/jobs", job, authHeader());
};

export const updateJob = (id, job) => {
    return api.put(`/jobs/${id}`, job, authHeader());
};

export const deleteJob = (id) => {
    return api.delete(`/jobs/${id}`, authHeader());
};