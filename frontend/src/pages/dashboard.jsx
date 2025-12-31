
function Dashboard() {

    return (
        <>
        <h1>Name of the App</h1>
        <div className="home">
            <div className="category">
                <h2 className="category-heading">Categories</h2>
                <ul className="category-list">
                    <li className="category-item">All</li>
                    <li className="category-item">Subject</li>
                    <li className="category-item">Department</li>
                    <li className="category-item">Year</li>
                </ul>
            </div>
            <div className="hero">
                <div className="search">
                    <input type="text" className="search-bar" placeholder="Search notes here" />
                    <button>search</button> {/* Search button */}
                </div>
                <div className="display">
                    //Notes will be displayed here
                </div>
            </div>
        </div>
        </>
    )

}

export default Dashboard;