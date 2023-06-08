import Carousel from "./Carousel";
import FilteredList from "./FilteredList";
import PopularList from "./PopularList";
import Slogan from "./Slogan";

function HeroHome({
  items,
  handleID,
  handleFilterChange,
  filterInfoData,
  isLoading,
  isError,
}) {
  console.log(handleID);
  return (
    <>
      <Slogan handleFilterChange={handleFilterChange} />
      <FilteredList
        filterInfoData={filterInfoData}
        isLoading={isLoading}
        isError={isError}
        handleID={handleID}
      />
      {isLoading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <Carousel items={filterInfoData} />
      )}
      {/* <PopularList item={items} handleID={handleID} /> */}
    </>
  );
}

export default HeroHome;
