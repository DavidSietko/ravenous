import React, {useState} from "react";

export default function SearchBar( {onSearch} ) {
    // create states for term and location for searching, also the sorting
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    //event handlers when input changes
    const handleTermChange = (e) => {
        setTerm(e.target.value);
    };
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };
    const handleSortClick = (sortOption) => {
        setSortBy(sortOption);
    };

    const handleSearch = () => {
        if(term.trim() && location.trim()) {
            onSearch({term, location, sortBy});
        }
    };
    return (
        <div>
            <div className="sortButtons">
                <button className={sortBy === "best_match" ? "active" : ""} onClick={() => handleSortClick("best_match")}>
                    Best Match
                </button>
                <button className={sortBy === "rating" ? "active" : ""} onClick={() => handleSortClick("rating")}>
                    Highest Rated
                </button>
                <button className={sortBy === "review_count" ? "active" : ""} onClick={() => handleSortClick("review_count")}>
                    Most Reviewed
                </button>
            </div>
            <input type="text" placeholder="Search business" value={term} onChange={handleTermChange}/>
            <input type="text" placeholder="Location" value={location} onChange={handleLocationChange}/>
            <button onClick={handleSearch}>
                Let's Go
            </button>
        </div>
    );
}