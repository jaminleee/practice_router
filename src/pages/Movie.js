import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { useParams, useLocation,useSearchParams} from 'react-router-dom';
import { getMovie } from '../movie_data';

const Movie = () => {
    //URL 파라미터 사용하기
    const params = useParams();
    console.log(params);

    const movie = getMovie(parseInt(params.movieId));
    console.log(movie);

    //쿼리 스트링 사용하기
    const location = useLocation();
    console.log(location);

    

    return (
        <div>
             <h2>{movie.title}</h2>
             <p>감독 : {movie.director}</p>
             <p>카테고리: {movie.category}</p>
        </div>
    );
};

export default Movie;