import { Link } from "react-router";

export default function StartQuizSection() {
  return (
    <section className="py-12 px-2 md:px-8">
      <div
        id="StartQuizSection"
        className="p-10 h-100 rounded-lg flex items-center w-full"
      >
        <div className="lg:w-1/2 ">
          <p className="text-white/70 font-bold text-xs tracking-widest uppercase mb-4 drop-shadow-sm">
            PERSONALIZED REGIMEN
          </p>
          <h3 className="text-white text-5xl md:text-6xl font-bold mb-6 font-serif drop-shadow-md">
            Mirror of Science
          </h3>
          <p className="font-light text-lg mb-8 text-white/90 leading-relaxed max-w-lg drop-shadow-sm">
            Data is the foundation of beauty. Take our advanced Skin Quiz to
            find your personalized clinical regimen tailored to your unique
            microbiome.
          </p>
          <Link to='/profile/survey'>
            <button className="bg-white/95 hover:bg-white text-gray-900 cursor-pointer py-4 px-10 rounded-full text-xs font-bold tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              START SKIN QUIZ
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
