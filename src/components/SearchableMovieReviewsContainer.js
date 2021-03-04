import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    fetchReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        // .then(reviews => console.log("Searched Reviews", reviews.results))
        .then(reviews => this.setState({ reviews: reviews.results }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchReviews()
    }
    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        console.log("Searched Reviews", this.state.reviews)
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <button>Search for a Review</button>
                </form>
                <br></br>
                <MovieReviews reviews= { this.state.reviews }/>
                <hr></hr>
            </div>
        )
    }
}