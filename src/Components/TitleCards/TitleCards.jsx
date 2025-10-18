

import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css'
import axios from "axios";
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title,category}) =>{
    

    const cardsRef = useRef();
    const [movieData , setMovieData] = useState([]);

    // cards_data.map((data) =>{
    //     setMovieData(data);
    // })
    // console.log(movieData);
    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() =>{
        
         setMovieData(cards_data);
        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])

    return(

        <div className="titlecards">
               <h2>{title?title:"Popular on Netflix"}</h2> 
               <div className="card-list" ref={cardsRef}>
                  {
                      movieData.map((card,index)=>{
                            return <div className="card" key={index}>
                                <img src={card.image} alt="" />
                                <p>{card.name}</p>
                            </div>
                    })
                  }
               </div>
        </div>
    )
}
export default TitleCards
