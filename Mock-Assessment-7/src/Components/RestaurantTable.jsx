import { RestaurantCard } from "./RestaurantCard";

function RestaurantTable({ data }) {
  return (
    <table border="1px">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Number of Votes</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {/* map through the data */}
        {data?.map((item) => (
          <RestaurantCard {...item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
