import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow fixed-top">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand logo me-4"></a>
                    <div className="container-fluid justify-content-start">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </div>
                </div>
            </nav>
            <div className="filler"></div>
        </>
    );
};

export default Header;