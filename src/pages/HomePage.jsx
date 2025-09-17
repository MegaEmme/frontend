import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const HomePage = () => {

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
            <h1>Cineteca</h1>
            <section>
                <ul>
                    {films.map((film) => (
                        <li key={film.title}>{film.title}</li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default HomePage;