import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MovieCard from "../MovieCard";
import { Movie } from "@/Types/movie";

const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const getMovies = () => {
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/discover/movie",
            params: {
                api_key: "b346ca3d055a0d1ed4948076f24d1809",
                language: "pt-BR",
            }
        }).then(response => {
            setMovies(response.data.results);
        });
    }

    useEffect(() => {
        getMovies()
    }, []);
    
    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}

export default MovieList;