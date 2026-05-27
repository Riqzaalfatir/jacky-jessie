"use client";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  progress: number;
  onDone?: () => void;
};

export default function LoadingScreen({ progress, onDone }: Props) {
  const fading = progress === 100;

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => onDone?.(), 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: "#EADCC8",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
    
      {/* NAMA */}
      <p className="font-creators text-[11px] text-[#713324] tracking-widest mb-3">
        THE WEDDING OF
      </p>
      <h1 className="font-cylburn text-[52px] text-[#713324] leading-none">
        Jacky & Jessie
      </h1>

      <p className="font-creators text-[11px] text-[#713324]/70 mt-3 tracking-wide">
        Saturday, 27 June 2026
      </p>

      {/* PROGRESS BAR */}
      <div
        className="mt-10 rounded-full overflow-hidden"
        style={{ width: 180, height: 2, backgroundColor: "rgba(113,51,36,0.2)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: "#713324" }}
        />
      </div>

      <p className="font-creators text-[11px] text-[#713324]/50 mt-2">
        {progress}%
      </p>
    </div>
  );
}