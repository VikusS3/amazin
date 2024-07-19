import "./App.css";
import { data } from "./mocks/data.json";
import { ClothesIcon, CustomIcon, HomeIcon, TvIcon } from "./components/Icons";

const { products } = data;
function App() {
  return (
    <div className="p-2 mx-auto layout relative h-screen gap-3">
      <aside className="sidebar bg-zinc-900 p-2 rounded-lg flex-grow-0 flex flex-col overflow-y-auto">
        <div className=" flex flex-col flex-1">
          <h1 className="text-5xl font-bold">
            Amaz<span className="text-orange-500">in</span>
          </h1>
          <nav className="pt-10">
            <h2 className="text-xl font-bold">Categorías</h2>
            <ul className="flex  flex-col gap-5 mt-5">
              <li className="flex  gap-2">
                <CustomIcon />
                <a href="#">Inicio</a>
              </li>
              <li className="flex  gap-2">
                <TvIcon />
                <a href="#">Electrónicos</a>
              </li>
              <li className="flex  gap-2">
                <ClothesIcon />
                <a href="#">Ropa</a>
              </li>
              <li className="flex  gap-2">
                <HomeIcon />
                <a href="#">Hogar</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="main w-full overflow-y-auto bg-zinc-900 rounded-lg p-2 ">
        <section className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.asin}
              className="product-card border w-fit border-zinc-100/45 bg-zinc-950/50 rounded-lg p-2  flex flex-col justify-start items-center gap-5"
            >
              <img
                src={product.product_photo}
                alt={product.product_title}
                className="w-40 h-40 rounded-lg"
              />
              <h3 className="max-w-xs text-center">{product.product_title}</h3>
              <p>{product.product_price}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
