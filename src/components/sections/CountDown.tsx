"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
      className="relative w-full pt-[40px] pb-[51px] bg-[#935D3B]"
    >
      <Image
        src="/images/Countdown/Layer.png"
        alt="Hero Background"
        fill
        className="object-cover object-top"
        priority
      />
      
      <h1 className="font-cylburn text-[32px] text-[#FEF8EF] text-center">
        Saturday, 27 June 2026
      </h1>

      <div className="flex justify-center items-center gap-[10px] mt-[20px]">
        {boxes.map((box, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Kotak 49x49 */}
            <div className="w-[49px] h-[49px] bg-[#FEF8EF] rounded-[8px] flex flex-col items-center justify-center leading-none gap-[4px]">
              <span className="font-creators text-[24px] text-[#935D3B]">
                {String(box.value).padStart(2, "0")}
              </span>
               <span className="font-creators text-[10px] text-[#935D3B]">
              {box.label}
            </span>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountDown;
