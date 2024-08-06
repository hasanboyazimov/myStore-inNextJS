import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();
  return { data };
};

async function Home() {
  const { data } = await getData();
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto">
      <h1 className="text-3xl mb-10">Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {data.products.map((prod) => {
          return (
            <Link
              key={prod.id}
              href={`singleProduct/${prod.id}`}
              passHref
              className=""
            >
              <div className="card bg-base-100 shadow-xl p-4 cursor-pointer hover:shadow-2xl max-h-[250px]">
                <h3 className="text-2xl mb-3">{prod.title.slice(0, 15)}...</h3>
                <figure>
                  <Image
                    src={prod.thumbnail}
                    alt={prod.title}
                    width={200}
                    height={200}
                  />
                </figure>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
