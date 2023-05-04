import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function SingleRestaurantPage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});

  const getData = () => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setSingleData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{singleData.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type: {singleData.type}</div>
      <div data-testid="restaurant-rating">Rating: {singleData.rating}</div>
      <div data-testid="restaurant-votes">
        Votes: {singleData.number_of_votes}
      </div>
      <div data-testid="restaurant-price">
        Starting Price: {singleData.price_starts_from}
      </div>
      <div>
        <img
          data-testid="restaurant-image"
          width={"100px"}
          src={singleData.image}
        />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
