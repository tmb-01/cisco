import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const ProtectedRouter = ({
  component: Component,
  login: { isAuthenticate, isLoading },
  ...rest
}) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticate || (token !== "" && token) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return { login: state.login };
};

export default connect(mapStateToProps)(ProtectedRouter);
