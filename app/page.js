import Product from "./components/Products";  
import ProductList from "./components/ProductList";
import ParentComponent from "./components/ParentComponent";
import ParentWithCallback from "./components/ParentWithCallback";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import "./globals.css";

export default function Home() {
  return (
    /*<div>
      <Product name="test" price="2.99"/>
      <Product name="Labubu" price="5.99"/>
      <ProductList/>
    </div>*/
    /*<div>
      <ParentComponent />
    </div>*/
    /*<div>
      <ParentWithCallback />
    </div>*/
    /*<div>
      <Counter />
    </div>*/
    <div>
      <LoginForm />
    </div>
  );
}
