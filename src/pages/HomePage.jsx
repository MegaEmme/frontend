import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {

    const [films, setFilms] = useState([])

    const fetchFilms = () => {
        console.log("Fetching movies...");
        axios.get(import.meta.env.VITE_API_URL)
            .then(response => {
                console.log(response.data);
                const { data } = response;
                setFilms(data)
            })
            .catch(error => (console.error(error)))
    }

    useEffect(fetchFilms, [])

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
    )
}

export default HomePage;