import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar bg-body-tertiary mb-4">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">Cineteca di Mike</Link>
            </div>
        </nav>
    );
};

export default Header;