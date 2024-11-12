import * as React from "react";
export default function Form() {
  return (
    <div className="bg-white px-10 py-3 rounded-5xl border-0 border-gray-200">
      <h1 className="text-4xl text-center font-bold text-dark-blue"> Your Logo </h1>
      <p className="font-semibold text-3xl text-black mt-3">
        {" "}
        Good to see you again!{" "}
      </p>
      <div className="mt-5 flex flex-col gap-y-4">
            <button className="font-semibold flex py-2 rounded-xl border-2 border-gray-200 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                Log in with Google</button>
        </div>
        <div className="mt-4 flex justify-center items-center">
            <p className="font-medium text-base opacity-15">
               _______________or Log in with________________
            </p>
        </div>
      
      <div className="mt-4">
        <div>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-2 pl-4 mt-1 bg-transparent placeholder-black"
            placeholder="Your Email"
          ></input>
        </div>
        <div>
          <div className="mt-2">
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-2 pl-4 mt-1 bg-transparent placeholder-black"
              placeholder="Your Password"
              type="password"
            ></input>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Keep me logged in
            </label>
          </div>
          <button className="underline font-medium text-base text-dark-blue">
            Forgot Password
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 bg-dark-blue text-white text-lg font-semibold rounded-2xl ">Log in</button>
        </div>
        <div className="flex justify-center items-center">
            <p className="font-medium text-base opacity-15">
               ______________________________________________
            </p>
        </div>
        <div className="mt-1 flex justify-center items-center">
            <p className="font-medium text-base">
                Don't have an account?
            </p>
            <button className="text-dark-blue text-base font-medium ml-2">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
