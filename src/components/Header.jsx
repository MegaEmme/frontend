import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow fixed-top">
                <div className="container-fluid justify-content-start">
                    <Link className="navbar-brand" to="/">Lista Film</Link>
                </div>
            </nav>
            <div className="filler"></div>
        </>
    );
};

export default Header;