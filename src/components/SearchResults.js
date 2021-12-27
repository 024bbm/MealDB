import React, {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import MealCard from "./MealCard";

const SearchResults = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([])
    // const [error, setError] = useState(false)

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({data}) =>  setMeals(data.meals))
    }, [name])

    return (
        <div className="container">
            <div className="row">
                {
                  meals ?   meals.map(it => {
                      return <MealCard key={it.idMeal} meal={it}/>
                  })
                      : <h1 className='err'>404 Not Found</h1>
                }
            </div>
        </div>
    );
}

export default SearchResults;












