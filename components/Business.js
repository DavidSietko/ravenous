import React from 'react';
import styles from '../styles/Business.module.css';

export default function Business({image, name, address, city, state, zipCode, category, rating, reviewCount}) {
    return (
        <div className={styles.business} alt={name}>
            <img src={image}/>
            <header className={styles.name} >{name}</header>
            <div className={styles.businessInfo}>
                <p className={styles.addressaddress} >{address}</p>
                <p className={styles.city}>{city}, {state} {zipCode}</p>
            </div>
            <div className={styles.businessDetails}>
                <p className={styles.category}>{category}</p>
                <p className={styles.rating}>{rating}</p>
                <p className={styles.reviewCount}>{reviewCount}</p>
            </div>
        </div>
    );
}