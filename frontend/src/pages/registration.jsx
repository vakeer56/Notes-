import { useState } from "react"
import { registerStudent } from "../services/authApi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


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
    return(
     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Student Registration</CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="e.g., Computer Science"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                type="number"
                min={1}
                max={4}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="1-4"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
              />
            </div>

            {succMsg && (
              <p className="text-sm text-green-600 font-medium">{succMsg}</p>
            )}
            {errMsg && (
              <p className="text-sm text-red-600 font-medium">{errMsg}</p>
            )}

            <Button type="submit" className="w-full">
              Register
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    )
}

export default Register