import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
import Award from './Award';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/Animation';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0]);
     },[movies,url]);
    return (
        <>
            { movie &&(
                <StyledDetails exit="exit" variants= { pageAnimation } initial="hidden" animate="show">
                    <StyledHeadline>
                        <h2>{ movie.title }</h2>
                        <img src={ movie.mainImg } alt={ movie.title }/>
                    </StyledHeadline>
                    <StyledAwards>
                        {movie.awards.map((award) =>
                            <Award title={ award.title } description={ award.description } key={ award.title }/>
                        )}
                    </StyledAwards>
                    <StyledImageDisplay>
                        <img src={ movie.secondaryImg } alt="second movie's image"/>
                    </StyledImageDisplay>
                </StyledDetails>
            )}
        </>
    )
}

const StyledDetails = styled(motion.div)`
    color:white;
`
const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position:absolute;
        top:10%;
        left:50%;
        transform:translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
    }
`
const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content:space-around;
    align-items:center;
    margin:5rem 10rem;
      @media (max-width: 1500px){
      margin-top: 2rem 2rem;
      display: block;
  }
`

const StyledImageDisplay = styled.div`
    min-height:50vh;
    img{
        width: 100%;
        height: 70vh;
        object-fit:cover;
    }
`
export default MovieDetail;