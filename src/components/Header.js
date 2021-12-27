import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("")

    const changeInput = (e) => {
        setSearchInput(e.target.value.trim())
    }
    const search = () => {
        navigate(`/search/${searchInput}`)
    }
    const searchKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${searchInput}`)
        }
    }

    const goMain = () => {
        navigate("/")
    }

    const goBack = () => {
        navigate(-1)
    }

    const goNext = () => {
        navigate(+1)
    }

    return (
        <header>
            <div>
                <button onClick={goBack} className="btn btn-secondary">
                    Назад
                </button>

                <button onClick={goNext} className="btn btn-secondary">
                    Вперед
                </button>
            </div>
            <div className="">
                <button onClick={goMain} className="btn btn-primary">
                    Главная
                </button>
            </div>

            <div className="search-box">
                <input placeholder="Введите название блюда" onKeyDown={searchKeyDown} onChange={changeInput} className="search-input me-2" type="text"/>
                <button  disabled={!searchInput} onClick={search} type="button" className="btn btn-success">Success</button>
            </div>
        </header>
    );
};



export default Header;