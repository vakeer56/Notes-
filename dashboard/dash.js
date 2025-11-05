const notesList = document.getElementById("notesList");

const mockNotes = [
  { title: "DBMS Notes", link: "https://drive.google.com/dbms" },
  { title: "OS Notes", link: "https://drive.google.com/os" }
];

document.getElementById("uploadBtn").addEventListener("click", () => {
  const title = document.getElementById("title").value.trim();
  const fileUrl = document.getElementById("fileUrl").value.trim();

  if (!title || !fileUrl) {
    alert("Please enter both title and Drive link!");
    return;
  }

  mockNotes.push({ title, link: fileUrl });
  alert(`✅ Uploaded "${title}" successfully!`);
  document.getElementById("title").value = "";
  document.getElementById("fileUrl").value = "";

  renderNotes();
});

document.getElementById("refreshBtn").addEventListener("click", renderNotes);

function renderNotes() {
  notesList.innerHTML = "";

  if (mockNotes.length === 0) {
    notesList.innerHTML = "<p>No notes available yet.</p>";
    return;
  }

  mockNotes.forEach((note) => {
    const div = document.createElement("div");
    div.classList.add("note-item");
    div.innerHTML = `
      <span>${note.title}</span>
      <a href="${note.link}" target="_blank">
        <button>View</button>
      </a>
    `;
    notesList.appendChild(div);
  });
}
