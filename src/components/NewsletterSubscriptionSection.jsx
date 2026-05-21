import image from "../assets/7fdcc88152aa9810ec50d465efd684bda8d43be8.png";
export default function NewsletterSubscriptionSection() {
  return (
    <div className="grid lg:grid-cols-12 bg-[#F5F5F4] px-2 lg:px-8 items-center gap-y-10">
      {" "}
      <div className="lg:col-span-5">
        {" "}
        <h2 className="text-[#1B1C1B] font-light text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 bg-gradient-to-r from-[#1B1C1B] to-[#43474C] bg-clip-text text-transparent drop-shadow-sm">
          {" "}
          Elevate your skin health with{" "}
          <span className="font-semibold text-primary drop-shadow-sm tracking-wide">clinical precision.</span>{" "}
        </h2>{" "}
        <p className="text-[#43474C] text-sm md:text-base leading-relaxed max-w-md mb-8">
          {" "}
          Join the LUMIÈRE circle for exclusive access to scientific
          breakthroughs, early product releases, and personalized skin
          analysis.{" "}
        </p>{" "}
        {/* Form */}{" "}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          {" "}
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-1 focus:ring-black shadow-sm transition-all duration-300"
          />{" "}
          <button className="px-8 py-3 bg-black text-white text-xs font-bold tracking-[0.15em] uppercase rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#1B1C1B] transition-all duration-300">
            {" "}
            Subscribe{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="lg:col-span-6 lg:col-start-7">
        {" "}
        <img
          src={image}
          alt="Skincare"
          className="w-full h-96 md:h-125 object-cover rounded-xl shadow-sm"
        />{" "}
      </div>{" "}
    </div>
  );
}
