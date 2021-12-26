import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/Main";
import InfoMeal from "./components/InfoMeal";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";


const App = () => {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/meals/:id" element={<InfoMeal/>}/>
                    <Route path="/search/:name" element={<SearchResults/>}/>
                    <Route path="/ings/:ing" element={<SearchResults/>}/>
                    <Route path="*" element={<Navigate to={"/"} />}/>
                </Routes>
        </div>
    );
};

export default App;
