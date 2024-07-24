import { useQuery } from "../hooks/useQuery";

export default function Search() {
  const { query, error, handleChange } = useQuery();

  console.log(error);
  return (
    <section className="search bg-zinc-900 p-2 rounded-lg flex flex-col gap-2 mb-5 ">
      <h1 className="text-5xl font-bold">
        Amaz<span className="text-orange-500">in</span>
      </h1>
      <div className="flex gap-5 jusce items-center">
        <form className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Buscar productos"
            className="p-2 rounded-lg flex-grow-1 text-black"
          />
          <button className="bg-orange-500 text-zinc-900 p-2 rounded-lg">
            Buscar
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
}
