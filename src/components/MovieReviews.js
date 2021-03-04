// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    console.log("MovieReviews", props)

    return(
        <ul style={{listStyleType:"none", textAlign:"center"}}className="review-list">
            {props.reviews.map((review, index) =>
                <li className="review" key={index} >
                    <h1>{ review.headline } ({ review.mpaa_rating === "" ? "No Rating" : review.mpaa_rating})</h1>
                    <p>{ review.summary_short } - { review.byline } </p>
                    <hr></hr>
                </li>
            )}
        </ul>
    )
} 

export default MovieReviews