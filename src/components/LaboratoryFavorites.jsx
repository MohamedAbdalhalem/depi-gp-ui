import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import { Link } from "react-router";

export default function LaboratoryFavorites() {
  return (
    <section className="bg-[#F5F3F166] dark:bg-[#09090B80] backdrop-blur-md dark:text-white py-12 px-2 md:px-8 ">
      <header className="flex justify-between items-end flex-wrap gap-5 gapy-4 mb-8">
        <div>
          <h3 className="font-bold text-3xl dark:text-white py-1 text-[#1B1C1B] mb-3">
            Laboratory Favorites
          </h3>
          <p className="text-[#43474C] dark:text-white py-1 text-base font-normal">
            Our most advanced formulations for transformative results.
          </p>
        </div>
        <div>
          <Link to='/products' className="text-xs dark:text-white py-1 text-[#1B1C1B] font-blod">
            VIEW ALL FORMULATIONS <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </header>
      <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Product />
        <Product />
        <Product />
      </article>
    </section>
  );
}
