import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import FilmCard from "../components/FilmCard";

const FilmPage = () => {
    const { id } = useParams();
    const [film, setFilm] = useState({});
    const { setIsLoading } = useContext(GlobalContext);

    const fetchFilm = () => {
        setIsLoading(true)
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then(response => {
                const { data } = response;
                setFilm(data)
            })
            .catch(error => console.log(error))
            .then(() => { setIsLoading(false) })
    };
    useEffect(fetchFilm, []);

    return (
        <>
            <h1 className="text-center fw-bold">Dettaglio Film: {film.title}</h1>
            <hr />
            <main className="container p-4">
                {film.id && <FilmCard film={film} isDetail={true} />}
            </main>
        </>
    );
};

export default FilmPage;