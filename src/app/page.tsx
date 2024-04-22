import Image from "next/image";
import headphone from "@/assets/headphone.svg";

export default function Home() {
   return (
      <main className="max-w-6xl mx-auto px-3 py-2">
         <section className="md:mx-auto flex items-center justify-center flex-col md:flex-row">
            <div className="md:order-2">
               <Image
                  src={headphone}
                  alt="headphone"
                  className="md:w-[600px]"
               />
            </div>
            <div>
               <h1 className="font-bold text-center text-4xl leading-[39px] max-w-[300px] mx-auto text-secondary md:font-normal md:text-left md:max-w-[700px] md:mx-0 md:text-5xl lg:text-6xl">
                  Experience Pure Sound: Meet Our Headphones
               </h1>
               <p className="text-secondary-700 text-center md:text-left max-w-96 mt-4 mx-auto md:mt-7 md:text-[24px] md:max-w-[600px]">
                  Built to Last, Enjoyed for a Lifetime, Transfar Your Listening
                  Experience Today
               </p>
               <div className="mt-8 max-w-[330px] mx-auto md:mx-0 flex flex-row md:gap-3 justify-between md:justify-start">
                  <button
                     type="button"
                     className="bg-secondary rounded-full text-primary px-8 py-2 font-bold"
                  >
                     Buy Now
                  </button>
                  <button
                     type="button"
                     className="bg-primay rounded-full text-secondary md:px-8 md:py-2 font-bold md:border border-secondary"
                  >
                     Explore
                  </button>
               </div>
            </div>
         </section>
      </main>
   );
}
