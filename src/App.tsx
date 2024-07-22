import "./App.css";
import { data } from "./mocks/data.json";
import Products from "./components/Products";
import { Product } from "./lib/types";
import AsideMenu from "./components/AsideMenu";
import Search from "./components/Search";

function App() {
  const products: Product[] = data.products;

  return (
    <div className="p-2 mx-auto layout relative h-screen gap-3">
      <AsideMenu />

      <main className="main w-full overflow-y-auto bg-zinc-900 rounded-lg p-5 ">
        <Search />
        <Products products={products} />
      </main>
    </div>
  );
}

export default App;
