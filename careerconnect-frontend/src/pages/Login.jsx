import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../services/api";

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users/login", loginData);

            console.log("LOGIN RESPONSE:");
            console.log(response.data);

            localStorage.removeItem("token");
            localStorage.setItem("token", response.data);

            console.log("TOKEN SAVED:");
            console.log(localStorage.getItem("token"));

            toast.success("Login Successful!");

            navigate("/dashboard");

        } catch (error) {
            console.error(error);
            toast.error("Invalid Email or Password");
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />

            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f8f9fa",
                }}
            >
                <div
                    className="card shadow p-4"
                    style={{
                        width: "400px",
                        borderRadius: "12px",
                    }}
                >
                    <h2 className="text-center text-primary mb-4">
                        CareerConnect
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>

                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Password</label>

                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;