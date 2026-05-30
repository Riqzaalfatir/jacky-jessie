import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

const Dresscode = () => {
  return (
    <section id="dresscode" className="relative w-full pt-[66px] pb-[74px] lg:pt-[108px] lg:pb-[114px]">
      {/* Background Image */}
      <Image
        src="/images/Dresscode/Bg-Dresscode.svg"
        alt="Hero Background"
        fill
        className="object-cover object-bottom hidden lg:block"
        priority
      />

      <Image
        src="/images/Dresscode/Bg-Mobile.svg"
        alt="Hero Background"
        fill
        className="object-cover object-bottom lg:hidden"
        priority
      />
      <div className="relative flex flex-col items-center justify-center leading-none text-center gap-[12px] lg:gap-[45px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <h2 className="font-cylburn text-[42px] lg:text-[64px] text-[#713324]">
            Dress Code
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] leading-[25px] lg:leading-[40px] tracking-wide ">
            Black preferred, <br />
            or your darkest colour
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Dresscode;
