import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ListsMovies } from "../components/ListMovies";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import Filter from "./Filter";
import { Link } from "react-router-dom"
import "./MovieList.css";

const MovieList = () => {
    const [listMovies, setListMovies] = useState(ListsMovies);
    const [show, setshow] = useState(false);
    const [searchinput, setsearchinput] = useState("");
    const [searchrate, setsearchrate] = useState(0);

    const addMovie = (newmovie) => {
        setListMovies([...listMovies, newmovie]);
        setshow(false);
    };

    const onOpenModal = () => {
        setshow(true);
    };

    const onCloseModal = () => {
        setshow(false);
    };

    const updateinput = (search) => {
        setsearchinput(search);
    };

    const updaterate = (rate) => {
        setsearchrate(rate);
    };

    const displayMovies = () => {
        let filtredMovies = [];
        if (
            searchinput === "" ||
            (searchinput !== "" && parseInt(searchrate) === 0)
        ) {
            filtredMovies = listMovies.filter((mov) => {
                return mov.title.toLowerCase().includes(searchinput.toLowerCase());
            });
        }
        if (searchinput !== "" && parseInt(searchrate) !== 0) {
            filtredMovies = listMovies.filter((mov) => {
                return (
                    mov.title.toLowerCase().includes(searchinput.toLowerCase()) &&
                    mov.rate === parseInt(searchrate)
                );
            });
        }
        if (searchinput === "" && parseInt(searchrate) > 0) {
            console.log(true);
            filtredMovies = listMovies.filter((mov) => {
                return mov.rate === parseInt(searchrate);
            });
        }

        if (filtredMovies.length !== 0) {
            return filtredMovies.map((movie) => {
                return <Link to={{ pathname: `/movie/${movie.id}`, state: movie }} key={movie.id} ><MovieCard movie={movie} /></Link>;
            });
        } else {
            return (
                <h1 style={{ color: "white", marginTop: "220px", padding: "10px" }}>
                    There is no movies Please try again ...
                </h1>
            );
        }
    };

    return (
        <React.Fragment>
            <Filter updateinput={updateinput} updaterate={updaterate} />
            <div className="List-container">
                <div className="List-movies">{displayMovies()}</div>
                <div className="add-Movie">
                    <button className="btn" onClick={onOpenModal}>
                        Add new Movie
          </button>
                </div>
                <Modal open={show} onClose={onCloseModal} center>
                    <AddMovie addMovie={addMovie} />
                </Modal>
            </div>
        </React.Fragment>
    );
};

export default MovieList;