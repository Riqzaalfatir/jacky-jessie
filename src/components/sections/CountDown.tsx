"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-06-27T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const boxes = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full pt-[48px] pb-[51px] bg-[#935D3B]"
    >
      <Image
        src="/images/Countdown/Layer-Countdown.png"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      {/* Burung */}
      <Image
        src="/images/Hero/Burung.gif"
        alt="Burung"
        width={400}
        height={150}
        className="absolute -top-[70px] w-[102.6vw]"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <h1 className="font-cylburn text-[32px] text-[#FEF8EF] text-center">
          Saturday, 27 June 2026
        </h1>
      </motion.div>

     <div className="flex justify-center items-center gap-[10px] mt-[16px]">
  {boxes.map((box, i) => (
    <motion.div
      key={i}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 2.2, ease: "easeOut", delay: i * 0.30 }}
    >
      {/* Kotak 49x49 */}
      <div className="w-[49px] h-[49px] bg-[#FEF8EF] rounded-[8px] flex flex-col items-center justify-center leading-none gap-[0px]">
        <span className="font-creators text-[28px] text-[#A64508]">
          {String(box.value).padStart(2, "0")}
        </span>
        <span className="font-creators text-[5.66px] text-[#A64508] tracking-widest">
          {box.label}
        </span>
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
};

export default CountDown;
