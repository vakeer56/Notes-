import {useState} from 'react'
import {loginAdmin} from '../services/authApi.js'
import { useNavigate, Link } from 'react-router-dom'


function AdminLogin() {


const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errMsg, setErrMsg] = useState("")
const navigate = useNavigate()

const handleSubmit = async (e) => {

    e.preventDefault()

    try {

        const response = await loginAdmin({email, password})

        localStorage.setItem("token", response.data.token)
        navigate('/')
    }catch (error) {
        if (error.response?.data?.error) {
            setErrMsg(error.response.data.error)
        }
        else {
            setErrMsg("Something went wrong")
        }
} 
}

return (
    <>

    <h1>Admin Login</h1>

    <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email' />
        <label>Password: </label>
        <input type="password"
               onChange={(e) => setPassword(e.target.value)}
               placeholder='Password..' />

        <button type="submit">Login</button>
        {errMsg && <p  className="error-message">{errMsg}</p>}
    </form>

    <div className="change">
        <Link to="/login"><button>Student Login</button></Link>
    </div>

    </>

);
}

export default AdminLogin