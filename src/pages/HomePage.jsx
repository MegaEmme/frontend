import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import FilmCard from "../components/FilmCard";

const HomePage = () => {
    // Ricevo una lista di film, sui quali usare map, stato iniziale => array vuoto ([])
    const [films, setFilms] = useState([]);
    const { setIsLoading } = useContext(GlobalContext);

    const fetchFilms = () => {
        console.log("Fetching movies...");
        setIsLoading(true);
        axios.get(import.meta.env.VITE_API_URL)
            .then(response => {
                console.log(response.data);
                const { data } = response;
                setFilms(data);
            })
            .catch(error => (console.error(error)))
            .then(() => {
                setIsLoading(false);
            })
    }

    useEffect(fetchFilms, []);

    return (
        <>
            <h1 className="text-center fw-bold">Lista Film</h1>
            <hr />
            <main className="container p-4">
                <div className="row g-4">
                    {films.map((film) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                            <FilmCard key={film.id} film={film} isDetail={false} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default HomePage;