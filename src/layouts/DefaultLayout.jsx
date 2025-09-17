import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { GlobalContext } from "../contexts/GlobalContext";

const DefaultLayout = () => {

    const { isLoading } = useContext(GlobalContext);

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            {isLoading && <Loader />}

        </>
    );
};

export default DefaultLayout;