import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";
import styles from "./Restaurants.module.css";

function Restaurants() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getData = () => {
    setLoading(true);
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setTotalPages(data.totalPages);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  return loading ? (
    <LoadingIndicator />
  ) : (
    <div className={styles.restaurants_header}>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div
        data-testid="restaurants-container"
        className={styles.restaurants_container}
      >
        {/* Restaurant Card */}
        {data.length > 0 &&
          data.map((el) => <RestaurantCard key={el.id} {...el} />)}
      </div>
      <div className={styles.pagination}>
        {/* Pagination Component */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Restaurants;
