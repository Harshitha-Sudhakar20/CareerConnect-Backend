import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">

        <span className="navbar-brand fw-bold">
          CareerConnect
        </span>

                <button
                    className="btn btn-light"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>
        </nav>
    );
}

export default Navbar;