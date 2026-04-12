import image from "../assets/3f546d1826f0ded04fad4e0a9778d4ddb80b84e0.png";
import Button from "../components/Button";

export default function ProductDetials() {
  return (
    <section className="bg-base-100 min-h-screen py-12">
      {/* PRODUCT TOP SECTION */}
      <div className="grid items-center gap-10 px-4 py-8 md:px-8 lg:grid-cols-7 lg:gap-16 max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-2xl bg-base-200 lg:col-span-4 self-start">
          <img
            src={image}
            alt="Niacinamide Serum"
            className="mx-auto h-[350px] w-full object-contain md:h-[450px]"
          />
        </div>
        
        <div className="lg:col-span-3">
          <p className="mb-3 text-[10px] tracking-widest text-base-content/60">
            MOLECULAR SERIES 01
          </p>
          <h1 className="mb-3 text-3xl leading-tight font-light text-base-content md:text-4xl lg:text-5xl">
            Niacinamide <span className="font-medium">Serum</span>
          </h1>
          <p className="mb-6 text-base leading-relaxed text-base-content/70 md:text-lg">
            Advanced 10% B3 Complex for surface refinement and barrier support.
          </p>
          
          <div className="mb-6 flex items-center gap-3">
            <p className="text-xl font-medium text-base-content md:text-2xl">
              $84.00
            </p>
            <span className="text-xs tracking-wide text-base-content/50">
              TAX INCLUDED
            </span>
          </div>
          
          <div className="mb-6">
            <p className="mb-3 text-[10px] tracking-widest text-base-content/60">
              SELECT VOLUME
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="border-2 border-primary bg-base-100 px-5 py-3 text-xs tracking-wide transition font-semibold"
              >
                30ML
              </button>
              <button
                type="button"
                className="border border-base-300 bg-base-200/50 px-5 py-3 text-xs text-base-content/70 transition hover:border-primary"
              >
                50ML
              </button>
            </div>
          </div>
          
          <button className="btn btn-neutral w-full rounded-xl tracking-widest text-xs h-12 uppercase mb-6">
            Add to Bag
          </button>
          
          <div className="flex flex-wrap gap-2">
            {["VEGAN", "CLINICAL GRADE", "CRUELTY FREE"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-base-200 px-4 py-1.5 text-[10px] tracking-wide text-base-content/70 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RECOMMENDED SIMILAR PRODUCTS BY INGREDIENTS */}
      <div className="mt-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl font-medium text-base-content mb-6 border-b border-base-300 pb-2">
          Highly recommended with this product
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Gentle Cleanser", label: "Step 1" },
            { name: "Exfoliating Toner", label: "Step 2" },
            { name: "Hydra Barrier", label: "Step 4" }
          ].map((item, i) => (
             <div key={i} className="rounded-xl border border-base-300 bg-base-200/30 p-4 text-center hover:bg-base-200/60 transition cursor-pointer">
                <div className="h-24 w-full bg-base-300 rounded-lg mb-3 object-cover flex items-center justify-center text-xs text-base-content/40">Image Placeholder</div>
                <p className="text-xs uppercase text-primary font-semibold tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-medium text-base-content">{item.name}</p>
             </div>
          ))}
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <div className="mt-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-base-300 pt-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-light text-base-content md:text-2xl">
            Customer Reviews
          </h2>
          <div className="text-right">
             <span className="text-2xl font-semibold text-base-content">4.8</span>
             <span className="text-sm text-base-content/60 ml-2 block">Based on 128 reviews</span>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { rating: "★★★★★", text: "My skin texture improved within 2 weeks. This serum feels lightweight and effective.", author: "Sarah M.", verified: true },
            { rating: "★★★★☆", text: "Great for oily skin. Helped reduce pores visibility significantly.", author: "Ahmed K.", verified: true },
            { rating: "★★★★★", text: "Absorbs quickly and gives a subtle glow. Definitely repurchasing.", author: "Lina R.", verified: false }
          ].map((rev, i) => (
             <div key={i} className="rounded-xl border border-base-300 bg-base-200/50 p-6 flex flex-col">
               <p className="mb-2 text-sm text-warning">{rev.rating}</p>
               <p className="mb-4 text-sm leading-relaxed text-base-content/80 flex-grow">
                 {rev.text}
               </p>
               <div className="flex justify-between items-center text-xs">
                 <span className="font-semibold text-base-content">{rev.author}</span>
                 {rev.verified && <span className="text-success flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Verified</span>}
               </div>
             </div>
          ))}
        </div>
        
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-base-300 bg-base-200/30 p-6">
          <p className="text-sm font-medium text-base-content mb-1">
            Write a review
          </p>
          <p className="text-xs text-base-content/60 mb-4">Only verified buyers can submit reviews.</p>
          <div className="flex gap-1 mb-3 text-base-content/30 cursor-pointer">
             <span className="hover:text-warning">★</span><span className="hover:text-warning">★</span><span className="hover:text-warning">★</span><span className="hover:text-warning">★</span><span className="hover:text-warning">★</span>
          </div>
          <textarea
            rows={3}
            className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-sm focus:outline-none focus:border-primary"
            placeholder="Share your experience..."
          />
          <button
            type="button"
            className="mt-4 rounded-xl bg-neutral px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-content w-full"
          >
            Submit review
          </button>
        </div>
      </div>
    </section>
  );
}
