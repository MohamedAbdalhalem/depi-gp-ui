import { Link } from "react-router";
import CustomInput from "../components/CustomInput";

export default function SignUp() {
  return (
    <section className="bg-base-100 min-h-screen pt-4 pb-12 flex items-center justify-center">
      <div className="grid lg:grid-cols-7 w-full md:w-4/5 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-base-100 border border-base-300 h-[calc(100vh-6rem)]">
        {/* LEFT PART */}
        <div
          id="sign-up-leftPart"
          className="relative hidden lg:col-span-4 lg:block h-full bg-neutral/80"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-6 text-center md:text-left w-full">
            <p className="text-base-content/80 font-bold tracking-widest bg-base-100/50 backdrop-blur-md text-[10px] rounded-xl w-fit py-1.5 px-3 mb-6 uppercase">
              The Clinical Curator
            </p>

            <h1 className="text-neutral-content font-light leading-tight text-4xl sm:text-5xl md:text-6xl mb-6">
              The science of <br/><span className="font-semibold">radiance</span>
            </h1>

            <p className="text-neutral-content/70 font-light text-base md:text-lg leading-relaxed max-w-md">
              Where molecular precision meets sensory luxury. Discover formulas
              designed for the skin's biological clock.
            </p>
          </div>
        </div>

        {/* RIGHT PART */}
        <div className="py-12 md:py-16 px-6 md:px-12 lg:col-span-3 flex flex-col justify-center bg-base-100 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full">
             <h2 className="font-serif text-4xl text-base-content mb-3">
               Create Account
             </h2>
             <p className="text-base-content/70 text-base font-normal mb-8">
               Join the clinical inner circle for curated regimens.
             </p>
             <form action="">
               <div className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <CustomInput id={"firstname"} label={"FIRST NAME"} type={"text"} />
                   <CustomInput id={"lastname"} label={"LAST NAME"} type={"text"} />
                 </div>
                 <CustomInput id={"email"} label={"EMAIL ADDRESS"} type={"email"} />
                 <CustomInput id={"password"} label={"PASSWORD"} type={"password"} />
               </div>
               
               <button className="btn btn-neutral w-full mt-8 mb-8 rounded-xl text-xs font-semibold uppercase tracking-widest text-neutral-content">
                 CREATE ACCOUNT
               </button>
               
               <div className="bg-base-300 h-[1px] relative mb-6"></div>
               
               <p className="text-sm font-light text-center text-base-content/70">
                 Already part of LUMIÈRE?{" "}
                 <Link
                   to="/sign-in"
                   className="text-sm font-semibold text-base-content hover:text-primary transition underline underline-offset-4 ms-2"
                 >
                   Sign In
                 </Link>
               </p>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
