import { Fragment } from "react";

import FoodsSummary from "./FoodsSummary";
import AvailableFoods from "./AvailableFoods";

const Foods = () => {
  return (
    <Fragment>
      <FoodsSummary />
      <AvailableFoods />
    </Fragment>
  );
};

export default Foods;
