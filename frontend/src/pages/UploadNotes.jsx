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
            setFormData({
                title:"",
                description:"",
                department:"",
                year: "",
                file_url:""
            });
        } catch(error){
            setMessage(error.response?.data?.message || "Upload failed");
        }
    };

    return(
       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
           <div className="bg-white rounded-lg shadow-sm border p-6 w-full max-w-md">
               <div className="space-y-1 mb-6">
                   <h2 className="text-2xl font-bold">Upload Notes</h2>
                   <p className="text-sm text-gray-500">Share your notes with classmates</p>
               </div>
               {message && <p className="mb-4 text-sm text-blue-600">{message}</p>}
               <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="space-y-2">
                       <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Title</label>
                       <input 
                           type="text" 
                           name="title" 
                           value={formData.title} 
                           placeholder="Title" 
                           onChange={handleChange} 
                           required
                           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                       />
                   </div>
                   <div className="space-y-2">
                       <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Description</label>
                       <textarea 
                           name="description" 
                           value={formData.description} 
                           placeholder="Description" 
                           onChange={handleChange} 
                           required
                           rows="4"
                           className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                       />
                   </div>
                   <div className="space-y-2">
                       <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Department</label>
                       <input 
                           type="text" 
                           name="department" 
                           value={formData.department} 
                           placeholder="CSE, IT, EEE..." 
                           onChange={handleChange} 
                           required
                           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                       />
                   </div>
                   <div className="space-y-2">
                       <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Year</label>
                       <input 
                           type="number" 
                           name="year" 
                           value={formData.year} 
                           min="1" 
                           max="4" 
                           placeholder="Year" 
                           onChange={handleChange} 
                           required
                           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                       />
                   </div>
                   <div className="space-y-2">
                       <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Drive Link</label>
                       <input 
                           type="text" 
                           name="file_url" 
                           value={formData.file_url} 
                           placeholder="Drive link" 
                           onChange={handleChange} 
                           required
                           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                       />
                   </div>
                   <button 
                       type="submit"
                       className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                   >
                       Upload
                   </button>
               </form>
           </div>
       </div>
    );

}

export default UploadNotes;