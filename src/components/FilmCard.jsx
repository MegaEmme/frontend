import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FilmCard = (props) => {

    const isDetail = props.isDetail || false;
    const { id, title, imageUrl, plot, year, duration, categories } = props.film;

    return (
        <>
            {isDetail === false && (
                <>
                    <div className="card movie-card rounded-4 bg-dark text-light shadow">

                        <div className="card-header card-header-custom rounded-top-4">
                            <h3 className="card-title text-center fw-bold mb-0 text-dark text-truncate movie-title">{title}
                            </h3>
                        </div>
                        <div className="p-3 d-flex align-items-center justify-content-center">
                            <img src={imageUrl} className="rounded-4 img-fluid img-custom" alt={title} />
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap gap-1 mb-4 justify-content-center">
                                {categories && categories.length > 0 ? (
                                    <>
                                        <span><strong>Genere:</strong></span>
                                        {categories.map((cat, index) => (
                                            <span key={cat.id}>{cat.name}{index < categories.length - 1 && "/"}</span>
                                        ))}
                                    </>
                                ) : (
                                    <span className="mb-3 alert alert-info">Nessun genere assegnato...</span>
                                )}
                            </div>
                            <div className="d-flex justify-content-center mb-4">
                                <Link to={`/films/${id}`} className="btn btn-outline-light btn-custom rounded-pill mx-2">Dettagli</Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {isDetail === true && (
                // 
                <div className="card detail-card rounded-4 bg-dark text-light shadow-lg">
                    <div className="d-flex align-items-stretch">
                        <div className="p-3 d-flex align-items-center justify-content-center">
                            <img src={imageUrl} className="rounded-4 img-fluid" alt={title} />
                        </div>
                        <div className="card-body p-5">
                            <div className="card-header card-header-custom card-header-show mb-3">
                                <h1 className="card-title text-center fw-bold mb-0 text-dark">{title}</h1>
                            </div>
                            <div className="d-flex flex-wrap gap-1 mb-3">

                                {categories && categories.length > 0 ? (
                                    <>
                                        <span>Genere:</span>
                                        {categories.map((cat, index) => (
                                            <span key={cat.id}>{cat.name}{index < categories.length - 1 && "/"}</span>
                                        ))}
                                    </>
                                ) : (
                                    <span className="mb-3 alert alert-info">Nessun genere assegnato...</span>
                                )}
                            </div>
                            <div className="d-flex justify-content-between text-light mb-4">
                                <h6 className="card-subtitle fw-bold">Durata: {duration} min</h6>
                                <h6 className="card-subtitle fw-bold">Anno: {year}</h6>
                            </div>
                            <hr />
                            <h6 className="fw-bold">Trama:</h6>
                            <p className="card-text mb-4">{plot}</p>
                            <hr />
                            <div className="d-flex justify-content-end mt-4">
                                <Link to={"/"} className="btn btn-outline-light btn-custom rounded-pill mx-2">Indietro</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
// propTypes definisce i tipi di proprietà attesi dal componente React che lo usa.
// Il codice assicura che il componente FilmCard venga utilizzato correttamente. Se un componente genitore tenta di renderizzare FilmCard fornendo, ad esempio, un film senza il title (che è isRequired), o fornendo un ID che è una stringa invece di un numero, React stamperà un avvertimento in console in modalità sviluppo

export default FilmCard;