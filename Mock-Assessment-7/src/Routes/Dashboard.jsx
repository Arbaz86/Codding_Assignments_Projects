import { useContext, useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const { token, logoutUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = () => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${currentPage}&limit=10`
    )
      .then((res) => res.json())
      .then(({ data, totalPages }) => {
        setData(data);
        setTotalPages(totalPages);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button
          data-testid="logout-btn"
          className="logoutBtn"
          onClick={handleLogout}
        >
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data} />
      </div>
      <div data-testid="pagination-container">
        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Dashboard;
