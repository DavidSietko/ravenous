import React from 'react';
import styles from '../styles/Business.module.css';

export default function Business({image, name, address, city, state, zipCode, category, rating, reviewCount}) {
    return (
        <div className={styles.business} alt={name}>
            <img src={image}/>
            <header className={styles.name} >{name}</header>
            <div className={styles.content}>
                <div className={styles.businessInfo}>
                    <p className={styles.address} >{address}</p>
                    <p className={styles.city}>{city}</p>
                    <p className={styles.zipCode}>{state} {zipCode}</p>
                </div>
                <div className={styles.businessDetails}>
                    <p className={styles.category}>{category}</p>
                    <p className={styles.rating}>{rating + " stars"}</p>
                    <p className={styles.reviewCount}>{reviewCount + " reviews"}</p>
                </div>
            </div>
        </div>
    );
}