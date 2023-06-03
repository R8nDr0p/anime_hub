import "./App.css";
import Header from "./components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Carousel from "./components/Carousel";
import PopularList from "./components/PopularList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["data"],
    async () => {
      const { data } = await axios(`https://api.jikan.moe/v4/top/anime`);
      console.log(data);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const popularAnime = data?.data;

  return (
    <>
      {/* header */}
      <Header />
      {/* Carousel */}
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {isError ? <h1>{error}</h1> : <Carousel items={popularAnime} />}
        </div>
      )}
      <PopularList item={popularAnime} />
    </>
  );
}

export default App;
