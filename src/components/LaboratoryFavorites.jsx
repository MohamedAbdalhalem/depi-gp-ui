import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import { Link } from "react-router";
import useLaboratoryFavorites from "../hooks/useLaboratoryFavorites";
import ProductList from "./productList";

export default function LaboratoryFavorites() {
  const {isLoading,someProduct} = useLaboratoryFavorites()
  return (
    <section className=" backdrop-blur-md  py-12 px-2 md:px-8 ">
      <header className="flex justify-between items-end flex-wrap gap-5 gapy-4 mb-10">
        <div>
          <h3 className="font-serif font-bold text-4xl py-1 mb-3 bg-linear-to-r from-base-content to-base-content/70 bg-clip-text text-transparent tracking-tight">
            Laboratory Favorites
          </h3>
          <p className="text-base-content/80 py-1 text-base font-light">
            Our most advanced formulations for transformative results.
          </p>
        </div>
        <div>
          <Link
            to="/products"
            className="text-xs py-1 font-bold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-2 group"
          >
            VIEW ALL FORMULATIONS 
            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </header>
      <ProductList allProduct={someProduct} isLoading={isLoading} />
    </section>
  );
}
