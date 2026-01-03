import {useState} from 'react'
import {loginUser} from '../services/authApi.js'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card.jsx'


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
        localStorage.setItem("role", response.data.user.role)
        navigate('/dashboard')
    }catch (error) {
        if (error.response?.data?.error) {
            setErrMsg(error.response.data.error)
            console.log("error: ", error);
            console.log("response: ", error.response);

        }
        else {
            setErrMsg("Something went wrong")
        }
} 
}

return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <Card className="max-w-wd">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Welcome to Classroom app</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required/>
                    </div>

                    {errMsg && (
                        <p className="text-sm text-red-600">{errMsg}</p>
                    )}

                    <Button type="submit" className="w-full">Login</Button>

                    <div className="text-center">
                        <p className="text-sm text-grey-600">
                            <Link to="/register" className="text-blue-600 hover:underline font-medium">Register Here</Link>
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>

);
}

export default Login