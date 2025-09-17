import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import GlobalProvider from "./contexts/GlobalContext";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalProvider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/films/:id" element={<FilmPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default App;
