import productStaticImage from "../assets/Concentré de Nuit.png";

export default function Product() {
  return (
    <div className="h-fit">
          <img
            src={productStaticImage}
            className="w-full mb-3 rounded-lg h-2/3 block object-fill"
            alt=""
          />
          <div className="flex justify-between items-center mb-2">
            <p className="text-xl font-bold text-[#1B1C1B]">
              Concentré de Nuit
            </p>
            <span className="block text-[#43474C] font-medium text-base">
              $120
            </span>
          </div>
          <p id="description" className="text-[#43474C] font-normal text-sm mb-2">
            Advanced Night Repair treatment designed for cellular regeneration
            during sleep cycles.
          </p>
          <button className="p-3 bg-[#272727] font-normal text-xs text-white uppercase w-full rounded-lg">ADD TO Cart</button>
        </div>
  )
}
