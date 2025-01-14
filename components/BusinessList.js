import React from "react";
import Business from "./Business";

export default function BusinessList({ businesses }) {
    return (
        <div>
            {businesses.map((business, index) => (
                <Business
                    key={index} 
                    image={business.image}
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