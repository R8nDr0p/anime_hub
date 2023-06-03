import Carousel from "./Carousel";
import PopularList from "./PopularList";

function HeroHome({ items }) {
  return (
    <>
      <Carousel items={items} />
      <PopularList item={items} />
    </>
  );
}

export default HeroHome;
