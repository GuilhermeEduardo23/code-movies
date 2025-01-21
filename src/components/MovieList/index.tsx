import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MovieCard from "../MovieCard";
import { Movie } from "@/Types/movie";

const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const API_KEY = process.env.API_TMDB;

    const getMovies = async () => {
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: API_KEY,
                language: "pt-BR",
            }
        }).then(response => {
            setMovies(response.data.results);
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies()
    }, []);
    
    if(isLoading) {
        return <div className="loading-container">
            <h1>Carregando...</h1>
        </div>
    } else {
        return (
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        )
    }
}

export default MovieList;