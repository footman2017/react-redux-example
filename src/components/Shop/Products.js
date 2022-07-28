import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Product 2",
    price: 10,
    description: "This is a second product - amazing!",
  },
  {
    id: 3,
    title: "Product 3",
    price: 63,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {products.map((product) => {
        return (
          <ul key={product.id}>
            <ProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          </ul>
        );
      })}
    </section>
  );
};

export default Products;
