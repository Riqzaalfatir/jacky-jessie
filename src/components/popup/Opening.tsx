"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
};

const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpen = (): void => {
    setOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setStart(true);
    }, 800);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex justify-center items-center px-4"
        >
          {/* BG IMAGE */}
          <Image
            src="/images/Cover/Pengantin.svg"
            alt="Galih & Vio Wedding Cover"
            fill
            priority
            className="object-cover object-[50%_12%] hidden lg:block"
          />
          <div className="absolute inset-0 z-[10] bg-black/30 lg:bg-black/60 backdrop-blur-sm lg:backdrop-blur-md" />

          {/* CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 40 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative bg-[#EADCC8] rounded-xl md:rounded-2xl overflow-hidden w-[290px] md:w-[416px] shadow-xl flex flex-col z-[100]"
          >
            {/* FOTO */}
            <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden z-10">
              <Image
                src="/images/Opening/Pengantin..png"
                alt="prewed"
                fill
                className="object-cover object-[50%_46%] md:object-[50%_70%]"
              />
            </div>

            {/* KONTEN TEXT — pakai relative + overflow visible */}
            <div className="relative flex flex-col items-center text-center px-4 pt-[30px] mb-[60px] lg:pt-[26px] flex-1 leading-none">

              {/* RANTING KIRI ATAS — z-[1] supaya di belakang teks */}
              <Image
                src="/images/Opening/Ranting-KiriAtas.png"
                alt="RantingKiriAtas"
                width={503}
                height={74}
                className="absolute top-0 left-0 w-[103px]  z-[1]"
              />

              {/* Ranting kanan atas */}
              <Image
                src="/images/Opening/Ranting-KananAtas.png"
                alt="RantingKiriAtas"
                width={503}
                height={74}
                className="absolute top-0 right-0 w-[103px]  z-[1]"
              />

              <Image
                src="/images/Opening/Pohon-Golden.png"
                alt="Pohon Golden"
                width={761}
                height={163}
                className="absolute -bottom-[65px] -left-[10px] w-[61px]  z-[1]"
              />

              <Image
                src="/images/Opening/Pohon-GoldenKanan.png"
                alt="Pohon Golden"
                width={761}
                height={163}
                className="absolute top-[110px] right-[0px] w-[61px]  z-[1]"
              />

              <Image
                src="/images/Opening/Aset-KiriBawah..png"
                alt="Pohon Golden"
                width={761}
                height={163}
                className="absolute -bottom-16 left-0 w-[151px]  z-[1]"
              />

              <Image
                src="/images/Opening/Aset-KananBawah.png"
                alt="Pohon Golden"
                width={761}
                height={163}
                className="absolute -bottom-16 right-0 w-[151px]  z-[1]"
              />

              {/* TEKS — z-[2] supaya di depan ranting */}
              <p className="relative z-[2] text-[10px] text-[#713324] font-creators tracking-wide">
                THE WEDDING OF
              </p>
              <h1 className="relative z-[2] text-[36px] lg:text-[48px] text-[#713324] pt-[12px] font-cylburn">
                Jacky & Jessie
              </h1>
              <p className="relative z-[2] text-[10px] lg:text-[14px] text-[#713324] font-creators pt-[14px] md:pt-[19px]">
                Dear.
              </p>
              <p className="relative z-[2] text-[14px] lg:text-[18px] text-[#713324] font-creators pt-[14px] md:pt-[17px]">
                {namaTamu}
              </p>
              <p className="relative z-[2] text-[8px] lg:text-[12px] text-[#713324] font-creators leading-[1.6] pt-[17px] md:pt-[23px] tracking-wide">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>
              <button
                onClick={handleOpen}
                className="relative z-[2] bg-[#E2C6AA] flex items-center justify-center text-[#713324] w-[184px] h-[33px] md:w-[220px] md:h-[40px] rounded-full uppercase font-creators text-[12px] lg:text-[18px] mt-[16px] md:mt-[15px]"
              >
                <span>VIEW Invitation</span>
              </button>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;