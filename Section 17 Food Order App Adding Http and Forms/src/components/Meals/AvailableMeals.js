import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useAxios from "../../hooks/useAxios";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const {
    response: menuItems,
    loading,
    error,
    sendRequest: fetchMenu,
  } = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMenuRequestConfig = {
      method: "get",
      url: "menu.json",
      headers: JSON.stringify({ ContentType: "application/json" }),
    };
    if (menuItems == null) fetchMenu(fetchMenuRequestConfig);
    if (menuItems !== null) {
      setData(menuItems);
    }
  }, [menuItems, fetchMenu]);

  let mealsList = [];
  Object.keys(data).forEach((key) => {
    mealsList.push(
      <MealItem
        key={key}
        id={key}
        name={data[key].name}
        description={data[key].description}
        price={data[key].price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        {loading && <p>Loading....</p>}
        {!loading && !error && <ul>{mealsList}</ul>}
      </Card>
      {error && <p>{error}</p>}
    </section>
  );
};

export default AvailableMeals;
