import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title,category}) =>{
    

    const cardsRef = useRef();
    const [movieData , setMovieData] = useState([]);


  
    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
useEffect(()=>{
    
    const fetchData = async()=>{
         const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f44d23afbbmshc617eb62fcf1fd8p12b910jsn6464bb663e16',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    setMovieData(result)
} catch (error) {
	console.error(error);
}
}

fetchData();
const ref = cardsRef.current;
ref.addEventListener("wheel",handleWheel);
return ()=>{
    ref.removeEventListener('wheel',handleWheel)
};

    
},[])
    return(
        <div className="titlecards">
               <h2>{title?title:"Popular on Netflix"}</h2> 
               <div className="card-list" ref={cardsRef}>
                  {
                    cards_data.map((card,index)=>{
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