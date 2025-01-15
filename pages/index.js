import React from 'react';
import Business from '@/components/Business';
import BusinessList from '@/components/BusinessList';
import SearchBar from '@/components/SearchBar';
import styles from '../styles/Home.module.css';

export default function Home({ Component, pageProps }) {
  const sampleBusiness = {
      image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    };
    const businesses = [];
    for(let i = 0; i < 8; i++) {
      businesses.push(sampleBusiness);
    }
    function onSearch() {
  
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
