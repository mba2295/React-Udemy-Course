import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { cartSliceActions } from "../../store/slices/cartSlice";
import { useEffect } from "react";
const Products = (props) => {
  const products = useSelector((state) => {
    return state.productSlice.products;
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("products user changed", products);
  }, [products]);

  const onAddToCart = (item) => {
    console.log(item);
    const itemToAdd = { ...item, quantity: 1 };
    dispatch(cartSliceActions.addItem(itemToAdd));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              onAddToCart={() => {
                onAddToCart(product);
              }}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
