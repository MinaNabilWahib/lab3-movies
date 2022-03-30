import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ Movie }) {
    return (
        <div className="card h-100">
            <img src={"https://image.tmdb.org/t/p/w500" + Movie.poster_path} className="card-img-top" alt={Movie.title} />
            <div className="card-body">
                <h5 className="card-title">{Movie.title} </h5>
                <p className="card-text">{Movie.vote_average}/10</p>
                <Link to={`/movies/${Movie.id}`} className="btn btn-primary">
                    Details
                </Link>
            </div>
        </div>
    );
}
