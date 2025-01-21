import React from "react";
import Business from "./Business";
import styles from '../styles/BusinessList.module.css'

export default function BusinessList({ businesses = []}) {
    return (
        <div className={styles.businessList}>
            {businesses.map((business, index) => (
                <Business
                    key={index} 
                    image={business.src}
                    name={business.name}
                    address={business.address}
                    city={business.city}
                    state={business.state}
                    zipCode={business.zipCode}
                    category={business.category}
                    rating={business.rating}
                    reviewCount={business.reviewCount}
                />     
            ))}
        </div>
    );
}