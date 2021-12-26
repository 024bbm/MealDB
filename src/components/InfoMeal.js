import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const InfoMeal = () => {
    const {id} = useParams()
    const [meal, setMeal] = useState({})

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(({data}) => {
              const mealWidthIngs = {...data.meals[0]}

                const ings = []
                for (let i = 1; i <= 20; i++) {
                    const ing = mealWidthIngs[`strIngredient${i}`]
                    if (ing) ings.push(ing)
                }
             mealWidthIngs.ings = ings
             setMeal(mealWidthIngs)
            })
    }, [id])

    return (
        <div>
            <img width="400"  src={meal.strMealThumb} alt=""/>
            <h3 className="fon">{meal.strMeal}</h3>
            <div>{meal.strInstructions}</div>
            <div>
                {meal.ings?.map((it, idx) => {
                    return (
                        <div key={idx}>
                        <Link to="/">
                            <img src={`https://www.themealdb.com/images/ingredients/${it}-Small.png`} width="200" alt=""/>
                            <div>{it}</div>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default InfoMeal;






