import { useState } from "react"
import { registerStudent } from "../services/authApi";
import { Link } from "react-router-dom";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());
    const [succMsg, setSuccMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");

   

        let handleRegister = async (e) => {

            e.preventDefault();
            setSuccMsg("");
            setErrMsg("");
        try {
            await registerStudent({name,
                                email,
                                password,
                                department,
                                year})

            setSuccMsg("Registration Succssful")
        }
     
        
     catch (error) {
        if (error.response?.data?.error) {
            setErrMsg(error.response.data.error)
        }
        else {
            setErrMsg("Something Went Wrong");
        }
    }

        }
    return(<>

    <h1>Student Register</h1>

    <form onSubmit={handleRegister}>

        <label>Name: </label>
        <input type="text"
               onChange={(e) => setName(e.target.value)}
               required />

        <label>Email: </label>
        <input type="email"
               onChange={(e) => setEmail(e.target.value)}
               required />

        <label>Department: </label>
        <input type="text"
               onChange={(e) => setDepartment(e.target.value)}
               required />

        <label>Year: </label>
        <input type="number"
               min={1} max={4}
               onChange={(e) => setYear(e.target.value)}
               required />

        <label>Enter Password: </label>
        <input type="text"
               onChange={(e) => setPassword(e.target.value)}
               required />

        <button type="submit">Register</button>
        
        <div className="msg">
            {succMsg && <p>{succMsg}</p>}
            {errMsg && <p>{errMsg}</p>}
        </div>

        <Link to='/login'><button>Student Login</button></Link>
        
    </form>
    </>)

}

export default Register