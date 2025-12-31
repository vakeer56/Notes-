import { useEffect, useState } from "react";
import axios from "axios";
import NotesList from "../components/NoteList";
import SearchBox from "../components/searchBox";


function Dashboard() {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getallNotes = async () =>{
        try{
            const res = await axios.get("http://localhost:5000/notes/allnotes");
            setNotes(res.data.notes);
        } catch(err){
            console.error("Error fetching notes", err)
        } finally{
            setLoading(false);
        }
    }

    useEffect(()=> {
        getallNotes();
    }, []);

    return (
        <>
        <h1>Classroom App</h1>
        <div className="home">
            
            <div className="hero">
                    <SearchBox setNotes={setNotes} />
                <div className="display">
                    {loading ? (<p>
                        Loading Notes...
                    </p>) : (
                        <NotesList notes={notes}/>
                    )}
                </div>
            </div>
        </div>
        </>
    )

}

export default Dashboard;