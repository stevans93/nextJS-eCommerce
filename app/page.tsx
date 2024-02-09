import { CustomFilter, Hero, SearchBar, ShoeCard } from "@/components";
import { fetchShoes } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allShoes = await fetchShoes();
  const isDataEmpty = !Array.isArray(allShoes) || allShoes.length < 1 || !allShoes;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Clothing Overview</h1>
          <p>Explore the clothing you may like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="size"/>
            <CustomFilter title="price"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__shoes-wrapper">
              {allShoes?.map((shoe) => (
                <ShoeCard shoe={shoe} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allShoes?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
