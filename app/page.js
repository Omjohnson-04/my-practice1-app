import Product from "./components/Products";  
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div>
      <Product name="test" price="2.99"/>
      <Product name="Labubu" price="5.99"/>
      <ProductList/>
    </div>
  );
}
