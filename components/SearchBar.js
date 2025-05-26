import React, {useState} from "react";
import styles from '../styles/SearchBar.module.css';

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
        else {
            alert("Please search by a location and business!");
        }
    };
    return (
        <div className={styles.searchBar}>
            <div className={styles.sortButtons}>
                <button className={sortBy === "best_match" ? styles.active : ""} onClick={() => handleSortClick("best_match")}>
                    Best Match
                </button>
                <button className={sortBy === "rating" ? styles.active : ""} onClick={() => handleSortClick("rating")}>
                    Highest Rated
                </button>
                <button className={sortBy === "review_count" ? styles.active : ""} onClick={() => handleSortClick("review_count")}>
                    Most Reviewed
                </button>
            </div>
            <div className={styles.searchingBars}>
                <input type="text" placeholder="Search business" value={term} onChange={handleTermChange}/>
                <input type="text" placeholder="Location" value={location} onChange={handleLocationChange}/>
            </div>
            <button className={styles.searchButton} onClick={() => handleSearch()}>Let's Go</button>
        </div>
    );
}