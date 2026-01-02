import {useState} from 'react'
import {loginUser} from '../services/authApi.js'
import { useNavigate, Link } from 'react-router-dom'


function Login() {


const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errMsg, setErrMsg] = useState("")
const navigate = useNavigate()

const handleSubmit = async (e) => {

    e.preventDefault()

    try {

        const response = await loginUser({email, password})

        localStorage.setItem("token", response.data.token)
        navigate('/approve-notes')
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
    <h1>Student Login</h1>
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
        <Link to="/adminLogin"><button>Admin Login</button></Link>
    </div>
    </>

);
}

export default Login