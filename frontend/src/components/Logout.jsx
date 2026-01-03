import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"

function Logout() {
    let navigate = useNavigate();

    const handleLogout = () => {

        if(!window.confirm("Are you sure you want to log out 😢")) return

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate('/');

    }

    return (
        <Button onClick={handleLogout}>Logout</Button>
    )
}

export default Logout