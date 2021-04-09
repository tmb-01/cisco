import React from "react";
import { Route } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import AllRequests from "../../components/allRequests/AllRequests";
import ProtectedRouter from "../../components/protectedRouter/ProtectedRouter";
import OurShops from "../../components/ourShops/OurShops";
import AddPointOfSales from "../../components/addPointOfSales/AddPointOfSales";

const loginPage = () => {
  return (
    <>
      <SideBar />
      <ProtectedRouter exact path="/adminpointofsales" component={OurShops} />
      <ProtectedRouter exact path="/adminpanel" component={AllRequests} />
      <ProtectedRouter
        exact
        path="/adminaddmodel"
        component={AddPointOfSales}
      />
    </>
  );
};
export default loginPage;
