import styles from "./RestaurantCard.module.css";
function RestaurantCard({
  name,
  image,
  type,
  rating,
  price_starts_from,
  number_of_votes,
}) {
  return (
    <div data-testid="restaurant-card" className={styles.container}>
      {/* display the props */}
      <div>
        <img data-testid="restaurant-card-image" src={image} alt={name} />
      </div>
      <div className={styles.cartInfo}>
        <div>
          Name: <span data-testid="restaurant-card-name">{name}</span>
        </div>
        <div>
          Type: <span data-testid="restaurant-card-type">{type}</span>
        </div>
        <div>
          Rating: <span data-testid="restaurant-card-rating">{rating}</span>
        </div>
        <div>
          Votes:{" "}
          <span data-testid="restaurant-card-votes">{number_of_votes}</span>
        </div>
        <div>
          Price:{" "}
          <span data-testid="restaurant-card-price">{price_starts_from}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
