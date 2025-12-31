import { useState } from "react";

function SearchBox({ setNotes }) {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    let url = "";
    const input = searchText.trim().toUpperCase();

    if (!isNaN(input)) {
      url = `http://localhost:5000/notes/year/${input}`;
    } 
    else if (
      ["CSE", "ECE", "EEE", "MECH", "CIVIL", "IT", "BME", "AIDS", "AIML"].includes(input)
    ) {
      url = `http://localhost:5000/notes/department/${input}`;
    } 
    else {
      url = `http://localhost:5000/notes/subject/${searchText}`;
    }

    try {
      setError("");
      const res = await fetch(url);
      const data = await res.json();


      setNotes(data.notes || data);
    } catch (err) {
      setError("Failed to fetch notes");
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by year, department, subject"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default SearchBox;
