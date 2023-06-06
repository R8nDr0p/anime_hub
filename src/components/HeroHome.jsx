import Carousel from "./Carousel";
import PopularList from "./PopularList";

function HeroHome({ items, handleID }) {
  console.log(handleID);
  return (
    <>
      <Carousel items={items} />
      <PopularList item={items} handleID={handleID} />
    </>
  );
}

export default HeroHome;
