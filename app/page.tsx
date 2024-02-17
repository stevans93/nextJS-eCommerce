import { Hero, SearchBar, ShoeCard, ShowMore } from "@/components";
import { fetchShoes } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const allShoes = await fetchShoes({ name: searchParams.name || ''});
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
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__shoes-wrapper">
              {allShoes?.map((shoe) => (
                <ShoeCard shoe={shoe} />
              ))}
            </div>

            <ShowMore pageNumber={(searchParams.limit || 5) / 8} isNext={(searchParams.limt || 10) > allShoes.length}/>
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
