import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 p-3 shadow fixed-top">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand logo me-4"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="navbar-brand" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="filler"></div>
        </>
    );
};

export default Header;