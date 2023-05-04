import { Box, Flex, Heading, Image, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListingCard } from "../Components/ListingCard";
import Pagination from "../Components/Pagination";
import { getJobsData } from "../Redux/AppReducer/action";
import { GET_JOBS_DATA } from "../Redux/AppReducer/actionTypes";

export const JobListing = () => {
  const data = useSelector((store) => store.data);
  const [jobData, setJobData] = useState(data);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();

  const handleFilter = (e) => {
    let value = e.target.value;

    if (value) {
      let filtered = data.filter(
        (item) => item.role.toLowerCase() === value.toLowerCase()
      );
      setJobData(filtered);
    } else {
      setJobData(data);
    }
  };

  const handlePageChange = (value) => {
    setCurrentPage(currentPage + value);
  };

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getJobsData()).then((res) => {
        if (res.type === GET_JOBS_DATA) {
          setJobData(res.payload);
        }
      });
    }
  }, []);

  const filteredData = jobData.filter((item) =>
    item.language.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filteredData);

  return (
    <Box h="100vh">
      <Box>
        <Heading m="30px" textAlign="center">
          Job Listing
        </Heading>
      </Box>
      <Flex justifyContent="center" gap="30px" m="50px">
        <Select placeholder="Filter by Role" w="250px" onChange={handleFilter}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">FullStack</option>
        </Select>
        <Box>
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            w="250px"
          />
        </Box>
      </Flex>

      <Box bg="#eefbf8" p="10px">
        {filteredData &&
          filteredData.map((item) => <ListingCard key={item.id} {...item} />)}
      </Box>
      <Box>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};
