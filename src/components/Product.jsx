import { Link } from "react-router";
import { memo } from "react";

import useAddProduct from "../hooks/useAddProduct";
export default memo(function Product({
  id,
  image,
  name,
  description,
  variantOne,
  variantTwo,
  maxPrice,
  minPrice,
}) {
  console.log(maxPrice)
  console.log(minPrice)
  console.log('50' > '40')
  let selctedVariant;
  if (
    (maxPrice === "" || maxPrice === undefined) &&
    (minPrice === "" || minPrice === undefined)
  ) {
    selctedVariant = variantOne;
  }

  if (variantOne.price >= minPrice && variantOne.price <= maxPrice) {
    selctedVariant = variantOne;
  }

  if (variantTwo.price >= minPrice && variantTwo.price <= maxPrice) {
    selctedVariant = variantTwo;
  }

  if (variantOne.price >= minPrice && maxPrice == '') {
    selctedVariant = variantOne;
  }

  if (variantTwo.price >= minPrice && maxPrice == '') {
    selctedVariant = variantTwo;
  }

  const addProduct = useAddProduct(
    selctedVariant.variant_id,
    selctedVariant.stock,
  );
  return (
    <Link
      to={`/products/${id}`}
      className="block h-full bg-base-100 border border-base-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
    >
      {/* Image */}
      <div className="overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 to-transparent z-10 pointer-events-none"></div>
        <img
          src={image}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          alt={name}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[calc(100%-14rem)]">
        {/* Title + Price */}
        <div className="flex justify-between items-start mb-2 gap-2">
          <p className="text-lg font-bold text-base-content line-clamp-1 tracking-tight drop-shadow-sm">{name}</p>

          <span className="bg-base-200 text-base-content text-xs font-bold px-3 py-1.5 rounded-full shadow-sm shrink-0">
            ${selctedVariant.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-base-content/70 text-sm mb-5 line-clamp-2 leading-relaxed font-light">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={(event) => addProduct(event)}
          className="mt-auto w-full py-3 rounded-full bg-base-content text-base-100 text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-80 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
});
