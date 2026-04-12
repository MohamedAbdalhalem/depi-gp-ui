import CustomInput from "../components/CustomInput";

export default function Addresses() {
  return (
    <section className="bg-base-100 min-h-screen py-12">
      <div className="mx-auto max-w-2xl px-4 md:px-8">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-base-300 pb-6">
           <div>
             <h1 className="font-serif text-3xl font-light text-base-content md:text-4xl">
               Saved Addresses
             </h1>
             <p className="mt-2 text-base-content/70">
               Manage where we ship your orders.
             </p>
           </div>
        </header>

        <div className="space-y-6">
          {/* DEFAULT ADDRESS CARD */}
          <div className="rounded-2xl border border-primary bg-base-200/50 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="badge badge-primary badge-sm tracking-wide uppercase font-semibold mb-3">
                  Default
                </span>
                <p className="font-medium text-base-content text-lg mb-1">Alex Dupont</p>
                <p className="text-sm leading-relaxed text-base-content/80">
                  12 Rue de la Paix <br /> 75002 Paris, France
                </p>
              </div>
              <div className="flex gap-4 sm:flex-col sm:gap-2 text-xs font-semibold uppercase tracking-wider">
                <button
                  type="button"
                  className="text-base-content/70 hover:text-primary transition underline underline-offset-4"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-error hover:text-error/70 transition underline underline-offset-4"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* ADD ADDRESS PLACEHOLDER BUTTON */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm flex items-center justify-center border-dashed cursor-pointer hover:bg-base-200/50 transition">
             <p className="text-sm font-medium text-base-content/70 flex items-center gap-2">
                <span className="text-lg">+</span> Add New Address
             </p>
          </div>
        </div>

        {/* ADD ADDRESS FORM SECTION */}
        <div className="mt-16">
          <h2 className="mb-6 font-serif text-xl font-semibold text-base-content border-b border-base-300 pb-3">
            Add New Address
          </h2>
          <div className="rounded-2xl border border-base-300 bg-base-200/30 p-6 md:p-8 shadow-sm">
            <div className="space-y-4">
               <CustomInput id="ad-name" label="FULL NAME" type="text" />
               <CustomInput id="ad-line1" label="ADDRESS LINE 1" type="text" />
               <CustomInput id="ad-line2" label="ADDRESS LINE 2 (OPTIONAL)" type="text" />
               <div className="grid gap-4 sm:grid-cols-2">
                 <CustomInput id="ad-city" label="CITY" type="text" />
                 <CustomInput id="ad-postal" label="POSTAL CODE" type="text" />
               </div>
               
               <label className="mt-6 flex cursor-pointer items-center gap-3 text-sm text-base-content/80">
                 <input
                   type="checkbox"
                   className="checkbox checkbox-sm checkbox-primary rounded"
                 />
                 Set as default shipping address
               </label>
               
               <button
                 type="button"
                 className="btn btn-neutral w-full mt-8 rounded-xl text-xs font-semibold uppercase tracking-[0.2em]"
               >
                 Save Address
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
