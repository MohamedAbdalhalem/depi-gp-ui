import { Link } from "react-router";
import productStaticImage from "../assets/Concentré de Nuit.png";

export default function Product() {
  return (
    <Link
      to={`/product-details/${5555}`}
      className="h-fit">
      <img
        src={productStaticImage}
        className="w-full mb-3 rounded-lg h-2/3 block object-fill"
        alt=""
      />

      <div className="flex justify-between items-center mb-2">
        <p className="text-xl font-bold text-base-content">
          Concentré de Nuit
        </p>

        <span className="block text-base-content/70 font-medium text-base">
          $120
        </span>
      </div>

      <p id="description" className="text-base-content/70 font-normal text-sm mb-2">
        Advanced Night Repair treatment designed for cellular regeneration
        during sleep cycles.
      </p>

      <button className="p-3 bg-base-content text-base-100 font-normal text-xs uppercase w-full rounded-lg hover:opacity-90 transition">
        ADD TO Cart
      </button>
    </Link>
  );
}