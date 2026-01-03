import { useEffect, useState } from "react";
import axios from "axios";
import NotesList from "../components/NoteList";
import SearchBox from "../components/searchBox";
import Logout from "../components/Logout";
import {Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


function Dashboard() {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const role = localStorage.getItem("role")

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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">Classroom App</h1>
              <Badge variant="secondary" className="capitalize">
                {role}
              </Badge>
            </div>
            <Logout />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1 w-full sm:w-auto">
              <SearchBox setNotes={setNotes} />
            </div>
            <div className="flex gap-2">
              {role === "student" && (
                <Link to="/upload">
                  <Button>Upload Notes</Button>
                </Link>
              )}
              {role === "admin" && (
                <Link to="/approve-notes">
                  <Button>Approve Notes</Button>
                </Link>
              )}
            </div>
          </div>
        </Card>

        <div>
          {loading ? (
            <Card className="p-8">
              <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent mb-4"></div>
                <p className="text-gray-600">Loading Notes...</p>
              </div>
            </Card>
          ) : (
            <NotesList notes={notes} />
          )}
        </div>
      </main>
    </div>
    )

}

export default Dashboard;