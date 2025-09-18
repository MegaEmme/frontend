const Loader = () => {

    return (
        <div className="overlay d-flex flex-column justify-content-center align-items-center">
            <div className="spinner-border text-light" role="status"></div>
            <p className="mt-2 text-light fw-bold">Caricamento...</p>
        </div>
    );
};

export default Loader;