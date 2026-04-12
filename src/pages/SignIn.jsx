import { Link } from "react-router";
import CustomInput from "../components/CustomInput";

export default function SignIn() {
  return (
    <section className="bg-base-100 min-h-screen pt-4 pb-12 flex items-center justify-center">
      <div className="grid lg:grid-cols-7 w-full md:w-4/5 mx-auto rounded-3xl overflow-hidden shadow-2xl bg-base-100 border border-base-300 h-[calc(100vh-6rem)]">
        {/* LEFT PART */}
        <div
          id="sign-in-leftPart"
          className="relative hidden lg:col-span-4 lg:block h-full bg-neutral/90"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl px-6 text-center md:text-left w-full">
            <p className="text-neutral-content/80 tracking-[0.3em] uppercase text-sm md:text-base mb-4">
              LUMIÈRE
            </p>

            <h1 className="text-neutral-content font-light leading-tight text-4xl sm:text-5xl md:text-6xl mb-4">
              Precision meets <span className="font-semibold">poetry.</span>
            </h1>

            <p className="text-neutral-content/70 font-light text-base md:text-lg leading-relaxed max-w-lg">
              Clinically proven results, curated through the lens of aesthetic
              excellence.
            </p>
          </div>
          <div className="absolute bottom-5 left-5 flex items-center">
            <div className="bg-neutral-content/50 w-12 h-[1px] mr-4"></div>
            <p className="text-neutral-content/60 tracking-wider font-normal text-[10px]">
              CLINICAL EXCELLENCE SERIES
            </p>
          </div>
        </div>

        {/* RIGHT PART */}
        <div className="py-16 md:py-24 px-6 md:px-16 lg:col-span-3 flex flex-col justify-center bg-base-100 h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full">
            <h2 className="font-serif text-4xl text-base-content mb-3">Welcome Back</h2>
            <p className="text-base-content/70 text-base font-normal mb-8">
              Access your personalized clinical regimen.
            </p>
            <form action="">
              <div className="space-y-4">
                <CustomInput id={"email"} label={"EMAIL ADDRESS"} type={"text"} />
                <CustomInput id={"password"} label={"PASSWORD"} type={"password"} />
              </div>
              <button className="btn btn-neutral w-full mt-8 mb-8 rounded-xl text-xs font-semibold uppercase tracking-widest text-neutral-content">
                SIGN IN
              </button>
              <div className="bg-base-300 h-[1px] relative mb-8">
                <span className="bg-base-100 text-[10px] uppercase font-semibold px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base-content/40">
                  OR
                </span>
              </div>
              <p className="text-sm font-light text-center text-base-content/70">
                New to Lumière?{" "}
                <Link
                  to="/sign-up"
                  className="text-sm font-semibold text-base-content hover:text-primary transition underline underline-offset-4 ms-2"
                >
                  Create Account
                </Link>
              </p>
              
              <div className="flex justify-center mt-12 flex-wrap gap-3">
                <div className="py-2 px-4 text-base-content/60 text-[10px] font-semibold tracking-wider bg-base-200 rounded-xl uppercase">
                  Safe for all skins
                </div>
                <div className="py-2 px-4 text-base-content/60 text-[10px] font-semibold tracking-wider bg-base-200 rounded-xl uppercase">
                  Dermatologist Verified
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
