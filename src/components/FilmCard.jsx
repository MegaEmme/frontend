const FilmCard = (props) => {


    const isDetail = props.isDetail || false;
    const { id, title, imageUrl, plot, year, duration, categories } = props.film;

    return (
        <>
            <hr />
            <h1>Film "{id}" - Titolo: {title}</h1>
            <h2>Anno: {year}</h2>
            <h3>Durata: {duration}</h3>
            <img src={imageUrl} alt="locandina" />
            <p>Trama: {plot}</p>
            <h3>categorie: </h3>
            {categories && categories.length > 0}
            <>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat.id}>{cat.name}</li>
                    ))}
                </ul>
            </>

            <hr />
        </>
    );
};

FilmCard.propTypes = {
    isDetail: propTypes.bool,
    film: propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        imageUrl: propTypes.string.isRequired,
        plot: propTypes.string,
        year: propTypes.number.isRequired,
        duration: propTypes.number.isRequired,
        categories: propTypes.array
    }).isRequired
};

export default FilmCard;