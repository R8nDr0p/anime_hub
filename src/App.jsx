import "./App.css";
import Header from "./components/Header";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";
import Carousel from "./components/Carousel";
import PopularList from "./components/PopularList";
import { BrowserRouter, Routes } from "react-router-dom";
import HeroHome from "./components/HeroHome";

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
  const {
    isLoading: searchLoading,
    isError: searchError,
    data: searchData,
    error: searchErrorData,
    refetch: searchRefetch,
  } = useQuery(
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
      {/* {searchLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {searchError ? (
            <h1>{searchErrorData}</h1>
          ) : (
            <Header animes={searchData} refetch={searchRefetch} />
          )}
        </div>
      )} */}
      {/* Carousel */}
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {isError ? <h1>{error}</h1> : <HeroHome items={popularAnime} />}
        </div>
      )}
    </>
  );
}

export default App;
