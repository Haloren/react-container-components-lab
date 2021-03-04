import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        // .then(reviews => console.log("All Reviews", reviews.results))
        .then(reviews => this.setState({ reviews: reviews.results }))
    }
    
    render() {
        // console.log("All Reviews", this.state.reviews)
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={ this.state.reviews } />
            </div>
        )
    }
}