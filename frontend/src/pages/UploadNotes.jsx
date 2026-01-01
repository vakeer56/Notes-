import { useState } from "react";
import axios from "axios";
import { uploadNotes } from "../services/authApi";

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

        try{
            const token = localStorage.getItem("token");
            console.log("Token:", token);
            console.log("Form Data:", formData);
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
            console.log(error);
        }
    };

    return(
        <div className="uploadContainer">
            <h2>Upload Notes</h2>

            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} placeholder="title" onChange={handleChange} required/>
                <textarea name="description" value={formData.description} placeholder="Description" onChange={handleChange} required/>

                <input type="text" name="department" value={formData.department} placeholder="CSE, IT, EEE..." onChange={handleChange} required/>

                <input type="number" name="year" value={formData.year} min="1" max="4" placeholder="Year" onChange={handleChange} required/>

                <input type="text" name="file_url" value={formData.file_url} placeholder="Drive link" onChange={handleChange} required/>

            <button type="submit">Upload</button>
            </form>
        </div>
    );

}

export default UploadNotes;