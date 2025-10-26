

import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css'
import axios from "axios";


const TitleCards = ({title}) =>{
    

    const cardsRef = useRef();
    const [movieData , setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);
    // cards_data.map((data) =>{
    //     setMovieData(data);
    // })
    // console.log(movieData);
    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() =>{

        // const searchTerm = category || "Avengers";
        const fetchMovies = async () =>{
            try{
                setLoading(true);
                setError(null);

                const res = await axios.get("http://localhost:3000/api/movies");
              
                    setMovieData(res.data);
               
            }catch(err){
                console.error("Error fetching movies:",err);
                setError("Failed to load movies");
            }finally{
                setLoading(false);
            }
        };
        fetchMovies();
        const ref = cardsRef.current;
        if(ref) ref.addEventListener("wheel",handleWheel);
        return () =>{
            if(ref) ref.removeEventListener("wheel",handleWheel);
        };
        //  setMovieData(cards_data);
        // cardsRef.current.addEventListener('wheel',handleWheel)
    },[]);

    return(

        <div className="titlecards">
               <h2>{title?title:"Popular on Netflix"}</h2> 
               {loading && <p>Loading movies...</p>}
               <div className="card-list" ref={cardsRef}>
                  
                     {movieData.length > 0 
                        ?
                         movieData.map((movie)=>{
                            return <div className="card" key={movie.id}>
                                <img src={`http://localhost:3000${movie.posterUrl}`} alt={movie.title} />
                                <p>{movie.Title}</p>
                            </div> 
                    }) :!loading && <p>No movies to show</p> }
                  
               </div>
        </div>
    );
};
export default TitleCards
