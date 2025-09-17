import PropTypes from "prop-types";

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
    isDetail: PropTypes.bool,
    film: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        plot: PropTypes.string,
        year: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        categories: PropTypes.array
    }).isRequired
};

export default FilmCard;