import { useState } from "react";
import axios from "axios";
import { uploadNotes } from "../services/authApi";
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function UploadNotes(){
    const [formData, setFormData] = useState({
        title:"",
        description: "",
        department: "",
        year: "",
        file_url: ""
    });

    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name, e.target.value);
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setMessage("")
        try{
            const token = localStorage.getItem("token");
            const response = await uploadNotes(token, formData);

            setMessage(response.data.message);
            setIsSuccess(true);
            setFormData({
                title:"",
                description:"",
                department:"",
                year: "",
                file_url:""
            });
        } catch(error){
            setMessage(error.response?.data?.message || "Upload failed");
            setIsSuccess(false);
        }
    };

    return(
       <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back to Dashboard Link */}
        <Link to="/dashboard">
          <Button variant="ghost" className="mb-4">
            ← Back to Dashboard
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Upload Notes</CardTitle>
            <CardDescription>
              Share your notes with your classmates
            </CardDescription>
          </CardHeader>
          <CardContent>
            {message && (
              <div
                className={`mb-4 p-3 rounded-md text-sm ${
                  isSuccess
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Data Structures Notes"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of the notes..."
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="CSE, IT, EEE..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    min="1"
                    max="4"
                    placeholder="1-4"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file_url">Drive Link</Label>
                <Input
                  id="file_url"
                  type="url"
                  name="file_url"
                  value={formData.file_url}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/..."
                  required
                />
              </div>

              <Button type="submit" className="w-full" >
                Upload Notes
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
    );

}

export default UploadNotes;