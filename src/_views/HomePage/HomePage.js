import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "../../_actions/";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
function HomePage() {
  const dispatch = useDispatch();
  const page = useSelector(paginationActions.selectPage);

  const handlePageChange = (event, value) => {
    dispatch(paginationActions.setPage(value));
  };

  useEffect(() => {
    return () => {
      dispatch(paginationActions.setDefault());
    };
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Pagination count={10} onChange={handlePageChange}></Pagination>
      <Link to="/login">Login</Link>
    </>
  );
}

export default HomePage;
