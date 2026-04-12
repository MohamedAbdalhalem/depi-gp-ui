import CustomInput from "../components/CustomInput";

export default function Profile() {
  return (
    <section className="bg-base-100 min-h-screen py-12">
      <div className="mx-auto max-w-2xl px-4 md:px-8">
        <header className="mb-10 border-b border-base-300 pb-6">
           <h1 className="font-serif text-3xl font-light text-base-content md:text-4xl">
             My Profile
           </h1>
           <p className="mt-2 text-base-content/70">
             Manage your personal information and preferences.
           </p>
        </header>

        {/* PROFILE OVERVIEW CARD */}
        <div className="rounded-2xl border border-base-300 bg-base-200/40 p-6 md:p-8 shadow-sm mb-12">
           <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-base-300 flex items-center justify-center text-3xl font-serif text-base-content/50 border border-base-300">
                AD
              </div>
              <div className="text-center md:text-left">
                 <h2 className="text-2xl font-semibold text-base-content">Alex Dupont</h2>
                 <p className="text-base-content/70 mt-1">alex.dupont@example.com</p>
                 <span className="badge badge-outline mt-3 badge-sm text-xs py-2 px-3 tracking-wider">Premium Member</span>
              </div>
           </div>
        </div>

        {/* EDIT PROFILE FORM */}
        <div className="rounded-2xl border border-base-300 bg-base-200/20 p-6 md:p-8 shadow-sm">
          <h3 className="mb-6 font-serif text-xl font-semibold text-base-content border-b border-base-300 pb-3">
            Personal Details
          </h3>
          <form className="space-y-6">
             <div className="grid gap-4 sm:grid-cols-2">
               <CustomInput id="prof-first" label="FIRST NAME" type="text" />
               <CustomInput id="prof-last" label="LAST NAME" type="text" />
             </div>
             <CustomInput id="prof-email" label="EMAIL ADDRESS" type="email" />
             <CustomInput id="prof-phone" label="PHONE NUMBER" type="tel" />
             
             <div className="pt-4">
               <h4 className="text-sm font-semibold tracking-widest text-primary mb-4 uppercase">Change Password</h4>
               <div className="grid gap-4 sm:grid-cols-2">
                 <CustomInput id="prof-pass" label="NEW PASSWORD" type="password" />
                 <CustomInput id="prof-confirm" label="CONFIRM NEW" type="password" />
               </div>
             </div>
             
             <button
               type="button"
               className="btn btn-neutral w-full mt-4 rounded-xl text-xs font-semibold uppercase tracking-[0.2em]"
             >
               Save Changes
             </button>
          </form>
        </div>
      </div>
    </section>
  );
}
