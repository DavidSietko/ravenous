import React, { useState, useEffect } from 'react';
import Business from '@/components/Business';
import BusinessList from '@/components/BusinessList';
import SearchBar from '@/components/SearchBar';
import styles from '../styles/Home.module.css';
import yelp from '../utils/yelpApi.js';

export default function Home({ Component, pageProps }) {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
      const fetchInitialBusinesses = async () => {
        try {
          const firstBusinesses = await yelp("restaurants", "New York", "best_match", []);
          setBusinesses(firstBusinesses);
        } catch (error) {
          console.error("Failed to fetch initial businesses:", error);
        }
      };
      fetchInitialBusinesses();
    }, []);

    const onSearch = async({term, location, sortBy}) => {
      console.log(`${term} ${location}, ${sortBy}`);
      const searchedBusiness = await yelp(term, location, sortBy, businesses);
      setBusinesses(searchedBusiness);
    };
  
    return (
      <div>
        <header className={styles.header}>Ravenous</header>
        <SearchBar
        onSearch={onSearch} />
        <BusinessList
        businesses={businesses}
        />
      </div>
    );
}
