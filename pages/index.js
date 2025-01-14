import React from 'react';
import Business from '@/components/Business';
import BusinessList from '@/components/BusinessList';
import SearchBar from '@/components/SearchBar';

export default function Home() {
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
  for(let i = 0; i < 2; i++) {
    businesses.push(sampleBusiness);
  }
  function onSearch() {

  };

  return (
    <div>
      <header>Ravenous</header>
      <SearchBar
      onSearch={onSearch} />
      <BusinessList
      businesses={businesses}
      />
    </div>
  );
}
