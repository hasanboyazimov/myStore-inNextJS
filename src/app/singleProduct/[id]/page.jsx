import Image from "next/image";
import Link from "next/link";

const getData = async (id) => {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();

  return { data };
};

async function SingleProduct({ params }) {
  const { data } = await getData(params.id);

  return (
    <div className="w-full mx-auto max-w-[1200px] h-screen">
      <div className="card bg-base-100 w-[1000px] shadow-xl mx-auto p-[30px]">
        <div className="flex flex-row justify-between">
          <figure className="w-1/2">
            <Image
              src={data.thumbnail}
              alt="Product Image"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p>Product's brand: {data.brand}</p>
            <p>Rating:{data.rating}</p>
            <p>Price:{data.price}</p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <p className="">{data.description}</p>
        </div>
        <div className="flex justify-end mt-[30px]">
          
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
