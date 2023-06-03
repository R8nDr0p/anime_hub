import { Carousel } from "bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Carousel} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Index;
