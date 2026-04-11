import HeroImage from "../assets/Hero-photo.png";
export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-18 px-2 md:px-8 ">
      <div>
        <p className="text-[#272727] font-normal text-sm pb-3">
          DERMATOLOGICAL PRECISION
        </p>
        <h3 className="text-[#1B1C1B] text-7xl font-normal mb-4">
          The Clinical
        </h3>
        <span className="text-[#1B1C1B] text-7xl font-normal mb-4 block">
          Curator
        </span>
        <p className="text-[#43474C] text-xl font-normal mb-4 w-2/3">
          High-fidelity skincare formulated with precision and backed by the
          rigorous standards of modern dermatological science.
        </p>
        <div className="flex gap-5 flex-wrap items-center">
          <button className="bg-[#272727] px-8 py-4 text-white me-5">SHOP THE COLLECTION</button>
          <button className="text-[#272727] text-sm font-normal border-b border-b-[#27272733] p-1">OUR PHILOSOPHY</button>
        </div>
      </div>
      <div>
        <img
          src={HeroImage}
          className="block rounded-lg w-full lg:w-fit ms-auto h-180 object-fill"
          alt=""
        />
      </div>
    </section>
  );
}