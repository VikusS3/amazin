import { ClothesIcon, CustomIcon, HomeIcon, TvIcon } from "./Icons";

export default function AsideMenu() {
  return (
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
  );
}
