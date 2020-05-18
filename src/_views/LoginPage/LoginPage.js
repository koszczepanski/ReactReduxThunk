import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationActions } from "../../_actions/";
import { Link } from "react-router-dom";

function LoginPage() {
  const page = useSelector(paginationActions.selectPage);

  console.log(page);
  return (
    <>
      <h1>Login Page</h1>
      <Link to="/">Home</Link>
    </>
  );
}
export default LoginPage;
