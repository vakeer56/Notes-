import { useNavigate } from "react-router-dom";

function Logout() {
    let navigate = useNavigate();

    const handleLogout = () => {

        if(!window.confirm("Are you sure you want to log out 😢")) return

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate('/');

    }

    return (
        <button onClick={handleLogout}>Logout</button>
        

    )
}

export default Logout