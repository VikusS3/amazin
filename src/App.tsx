import "./App.css";
import Products from "./components/Products";
import AsideMenu from "./components/AsideMenu";
import Search from "./components/Search";

function App() {
  return (
    <div className="p-2 mx-auto layout relative h-screen gap-3">
      <AsideMenu />

      <main className="main w-full overflow-y-auto bg-zinc-900 rounded-lg p-5 ">
        <Search />
        <Products />
      </main>
    </div>
  );
}

export default App;
