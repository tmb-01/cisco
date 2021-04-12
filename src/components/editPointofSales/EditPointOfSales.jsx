import React from "react";
import GridComponet from "../GridComponent/GridComponent";

import CardEdit from "../cardEdit/CardEdit";
const EditPointOfSales = () => {
  return (
    <GridComponet>
      <CardEdit BtnText="Izmenit" />
    </GridComponet>
  );
};

export default EditPointOfSales;
