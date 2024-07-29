import { Product } from "../lib/types";
import { data } from "../mocks/data.json";

export default function Products() {
  const products: Product[] = data.products;

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  justify-items-center">
      {products.map((product) => (
        <article
          key={product.asin}
          className="product-card border  border-zinc-100/45 bg-zinc-950/60 rounded-lg p-4  flex flex-col justify-between items-center gap-5 relative"
        >
          <header className="flex flex-col  justify-center gap-4 items-center">
            <a href={product.product_url} target="_blank" rel="noreferrer">
              <img
                src={product.product_photo}
                alt={product.product_title}
                className="w-auto h-40 rounded-lg"
              />
            </a>
            <h3 className="max-w-xs mt-5 text-center text-xl text-zinc-200">
              {product.product_title}
            </h3>
          </header>
          <div className="flex flex-col gap-5">
            <main>
              <section className="flex gap-2 justify-center items-center">
                <span className="text-3xl">{product.product_price}</span>
                {product.product_original_price && (
                  <span className="line-through text-sm">
                    {product.product_original_price}
                  </span>
                )}
              </section>
            </main>
            <footer className="flex justify-center items-center gap-2">
              <p className="text-base font-semibold text-zinc-100">
                {product.product_star_rating}
              </p>
              <span>⭐⭐⭐⭐⭐</span>
            </footer>
          </div>
        </article>
      ))}
    </section>
  );
}
