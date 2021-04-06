import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const ProtectedRouter = ({
  component: Component,
  login: { isAuthenticate, isLoading },
  ...rest
}) => {
  console.log(isAuthenticate);
  console.log(isLoading);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticate && isLoading ? (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return { login: state.login };
};

export default connect(mapStateToProps)(ProtectedRouter);
