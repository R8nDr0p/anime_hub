import "./App.css";
import Header from "./components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Carousel from "./components/Carousel";

function App() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["data"],
    async () => {
      const { data } = await axios(
        `https://api.jikan.moe/v4/anime?q=Overlord&sfw`
      );
      console.log(data);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const anime = data?.data?.[0];

  return (
    <>
      {/* header */}
      <Header />
      {/* Carousel */}
      {/* {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {isError ? (
            <h1>{error}</h1>
          ) : (
            <>
              <h1>{anime.titles[0].title}</h1>
              <img src={anime.images.jpg.image_url} alt="" />
            </>
          )} */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {isError ? (
            <h1>{error}</h1>
          ) : (
            <>
              <Carousel
                image={anime.images.jpg.large_image_url}
                title={anime.titles[0].title}
                plot={anime.synopsis}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
