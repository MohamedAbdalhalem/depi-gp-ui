import HeroImage from "../assets/Hero-photo.png";

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-18 px-2 md:px-8 bg-base-100">
      <div className="w-4/5">
        <p className="text-primary font-normal text-sm pb-3 uppercase tracking-widest ">
          DERMATOLOGICAL PRECISION
        </p>

        <h3 className="bg-gradient-to-r from-base-content to-base-content/60 bg-clip-text text-transparent text-6xl md:text-7xl font-normal mb-2 font-serif tracking-tight drop-shadow-sm">
          The Clinical
        </h3>

        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-6xl md:text-7xl font-normal mb-6 block font-serif tracking-tight drop-shadow-sm">
          Curator
        </span>

        <p className="text-base-content/80 text-lg md:text-xl font-light mb-8 w-full md:w-3/4 leading-relaxed">
          High-fidelity skincare formulated with precision and backed by the
          rigorous standards of modern dermatological science.
        </p>

        <div className="flex gap-6 flex-wrap items-center">
          <button className="btn btn-primary px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
            SHOP THE COLLECTION
          </button>

          <button className="text-base-content/70 text-sm font-medium border-b-2 border-base-content/20 pb-1 hover:text-primary hover:border-primary transition-all duration-300">
            OUR PHILOSOPHY
          </button>
        </div>
      </div>

      <div>
        <img
          src={HeroImage}
          className="block rounded-lg w-full lg:w-fit ms-auto h-180 object-fill opacity-90"
          alt=""
        />
      </div>
    </section>
  );
}
