import React from "react";

const yelp = async(term, location, sortBy, existingBusinessList) => {
    const apiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;
    const url = "https://api.yelp.com/v3/businesses/search";
    const endpoint = `?term=${term}&location=${location}&sort_by=${sortBy}`;
    const urlToFetch = url + endpoint;
    console.log("TRYING TO PERFORM SEARCH");
    try {
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            } 
        });

        if(!response.ok) {
            throw new Error("Invalid Search. Check your spelling on Location or Business!");
        }

        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.businesses.map((business) => {
                return {
                    src: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }
            });
        }
    }
    catch(error) {
        alert(error);
        return existingBusinessList;
    }
}
export default yelp;