import React from "react";
import Link from "next/link";

export default function About(props) {
  return (
    <div className="mt-20 grid grid-cols-8 gap-4 bg-black">
      <div className="col-span-2 "></div>
      <div className=" col-span-4">
        <div className="pb-12 border-b border-white">
          <div className="font-sans font-bold text-5xl">Swaraj Rajagopal</div>
          <div className="mt-3 mb-10 font-serif font-extralight text-2xl">
            Marketing & Sales professional | FMCG
          </div>
          <div className="font-serif leading-7 text-base text-white">
            <div>
              I’m a passionate Marketing professional with over 9+ years of
              experience. With my strong analytical skills, I deep-dive on
              various data such as InMarket data, Nielsen data, Epos data,
              Quantitative surveys, Google analytics. Etc, to diagnose gaps and
              opportunities before designing strategies.
            </div>
            <div className="my-5">
              Being an advocate of strong execution, I enjoy transforming
              strategies to actions on the ground to create impact and achieve
              KPIs.
            </div>
            <div>
              Tracking campaign performance vs KPIs is the key to do things
              differently. One can’t continue to expect different results by
              continuing to do the same thing! The framework which I follow to deliver results:
              <span className="font-serif font-bold">
                Analyze > Design > Execution > Track
              </span>
              .
            </div>
          </div>
        </div>
        <div className="mt-9 w-8 h-8 mb-4 flex items-center justify-center bg-white text-black text-md font-bold rounded-full cursor-pointer z-50">
          <Link href="https://ae.linkedin.com/in/swarajrajagopal">
            <span>in</span>
          </Link>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
