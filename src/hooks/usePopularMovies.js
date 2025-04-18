import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store?.movie?.popularMovies);
    
    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, [])

    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS);
        const popularMovieDetails = await response.json();
        dispatch(addPopularMovies(popularMovieDetails));
    }
}

export default usePopularMovies