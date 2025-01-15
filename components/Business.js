import React from 'react';
import styles from '../styles/Business.module.css';

export default function Business(props) {
    return (
        <div className={styles.business} alt={props.name}>
            <img src={props.image}/>
            <header className={styles.name} >{props.name}</header>
            <div className={styles.content}>
                <div className={styles.businessInfo}>
                    <p className={styles.address} >{props.address}</p>
                    <p className={styles.city}>{props.city}</p>
                    <p className={styles.zipCode}>{props.state} {props.zipCode}</p>
                </div>
                <div className={styles.businessDetails}>
                    <p className={styles.category}>{props.category}</p>
                    <p className={styles.rating}>{props.rating + " stars"}</p>
                    <p className={styles.reviewCount}>{props.reviewCount + " reviews"}</p>
                </div>
            </div>
        </div>
    );
}