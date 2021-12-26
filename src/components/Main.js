import React, {useState,useEffect} from "react";
// import {Link} from "react-router-dom";
import axios from "axios";
import MealCard from "./MealCard";

const Main = () => {
    const [main, setMain] = useState([])

 useEffect(() => {
     axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
         .then(({data}) => setMain(data.meals))
 },[])

    return (
        <div className="container">
            <div className="row">
                {
                    main.map(it => {
                        return (
                            <MealCard key={it.idMeal} meal={it}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Main;




