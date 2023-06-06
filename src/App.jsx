import "./App.css";
import Header from "./components/Header";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroHome from "./components/HeroHome";
import SearchList from "./components/SearchList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import About from "./components/About";
import InfoPage from "./components/InfoPage";

function App() {
  const [searchItem, setSearchItem] = useState();
  const [infoId, setInfoId] = useState("");

  const handleSearch = (term) => {
    setSearchItem(term);
  };

  const handleID = (id) => {
    setInfoId(id);
  };
  // api fetch for popular or top anime
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["data"],
    async () => {
      const { data } = await axios(`https://api.jikan.moe/v4/top/anime`);
      // console.log(data);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  // fetch api for our search function
  const {
    isLoading: searchLoading,
    isError: searchError,
    data: searchData,
    error: searchErrorData,
    refetch: searchRefetch,
  } = useQuery(
    ["data", searchItem],
    async () => {
      if (searchItem.trim() === "") {
        return {};
      }
      const { data } = await axios(
        `https://api.jikan.moe/v4/anime?q=${searchItem}&sfw`
      );
      console.log(data);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  // fetch api for showing full info based on ID
  const {
    isLoading: infoLoading,
    isError: infoError,
    data: infoData,
    error: infoErrorData,
    refetch: infoRefetch,
  } = useQuery(
    ["data", infoId],
    async () => {
      if (infoId.trim() === "") {
        return {};
      }
      const { data } = await axios(
        `https://api.jikan.moe/v4/anime/${infoId}/full`
      );
      console.log(data);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const searchedItems = searchData?.data;
  const popularAnime = data?.data;
  const fullInfoAnime = infoData?.data;

  return (
    // <>
    //   {/* header */}
    //   <Header handleSearch={handleSearch} />

    //   <SearchList data={searchedItems} searchLoading={searchLoading} />
    //   {/* Carousel */}
    //   {isLoading ? (
    //     <div className="spinner-border" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   ) : (
    //     <div>
    //       {isError ? <h1>{error}</h1> : <HeroHome items={popularAnime} />}
    //     </div>
    //   )}
    //   <Footer />
    // </>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout handleSearch={handleSearch} />}>
            <Route path="/about" element={<About />} />
            <Route
              index
              element={
                <div>
                  {isLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : isError ? (
                    <h1>{error}</h1>
                  ) : (
                    <HeroHome items={popularAnime} handleID={handleID} />
                  )}
                </div>
              }
            />

            <Route
              path="/searchlist"
              element={
                <div>
                  {searchLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : searchError ? (
                    <h1>{searchErrorData}</h1>
                  ) : (
                    <SearchList
                      data={searchedItems}
                      searchLoading={searchLoading}
                    />
                  )}
                </div>
              }
            />

            <Route
              path="/info-page"
              element={
                <div>
                  {infoLoading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : infoError ? (
                    <h1>{infoErrorData}</h1>
                  ) : (
                    <InfoPage info={fullInfoAnime} />
                  )}
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
