"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger, fadeLeft, fadeRight } from "@/lib/animation";

type Pilihan = "hadir" | "tidak_hadir" | null;
type ModalType = string | null;

const Rsvp = () => {
  const [pilihan, setPilihan] = useState<Pilihan>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleConfirm = (): void => {
    if (!pilihan) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(null);
    if (pilihan === "hadir") {
      setModalType("rsvp_confirmed_hadir");
    } else {
      setModalType("rsvp_confirmed_tidak_hadir");
    }
  };

  return (
    <>
      <section id="rsvp" className="relative w-full pt-[72px] pb-[85px] bg-[#935D3B]">
         <Image
                src="/images/Rsvp/Layer-Rsvp.webp"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
              />
        <div className="relative flex flex-col items-center justify-center leading-none text-center tracking-wide z-4">

           <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
          <h1 className="font-cylburn text-[42px] text-[#FEF8EF]">Rsvp</h1>
          </motion.div>

          <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
          <div className="flex flex-col items-center justify-center gap-[26px] mt-[37px]">
            <p className="font-creators text-[12px] text-[#FEF8EF]">Dear</p>
            <p className="font-creators text-[12px] text-[#FEF8EF]">Sela</p>
          </div>
          </motion.div>

           <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
          <p className="font-creators text-[12px] text-[#FEF8EF] mt-[24px]">
            Kindly confirm your attendance before{" "}
            <span className="block mt-2">27 June 2026</span>
          </p>
          </motion.div>

          {/* BUTTON ATTEND / UNABLE TO ATTEND */}
          <div className="flex items-center justify-center gap-[19px] mt-[34px]">
             <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              >
            <button
              onClick={() => setPilihan(pilihan === "hadir" ? null : "hadir")}
              className={`w-[146px] h-[33px] font-creators text-[12px] uppercase rounded-[71px] transition-all duration-200
                ${
                  pilihan === "hadir"
                    ? "bg-[#FEF8EF] text-[#713324]"
                    : "bg-transparent border border-[#FEF8EF] text-[#FEF8EF] hover:bg-[#FEF8EF]/20"
                }`}
            >
              ATTEND
            </button>
            </motion.div>

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              >
            <button
              onClick={() =>
                setPilihan(pilihan === "tidak_hadir" ? null : "tidak_hadir")
              }
              className={`w-[146px] h-[33px] font-creators text-[12px] uppercase rounded-[71px] transition-all duration-200
                ${
                  pilihan === "tidak_hadir"
                    ? "bg-[#FEF8EF] text-[#713324]"
                    : "bg-transparent border border-[#FEF8EF] text-[#FEF8EF] hover:bg-[#FEF8EF]/20"
                }`}
            >
              UNABLE TO ATTEND
            </button>
            </motion.div>
          </div>

           <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
          <p className="font-creators text-[12px] text-[#FEF8EF] mt-[37px]">
            {pilihan === "tidak_hadir" ? "ARE YOU SURE?" : "Confirm your selection?"}
          </p>
          </motion.div>

          
           <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
          <button
            onClick={handleConfirm}
            className="w-[222px] h-[33px] bg-[#FEF8EF] hover:bg-[#e8ddd0] active:bg-[#d4c4b0] active:scale-95 transition-all duration-200 font-creators text-[12px] text-[#A64508] uppercase rounded-[71px] mt-[29px]"
          >
            {pilihan === "hadir"
              ? "CONFIRM ATTEND"
              : pilihan === "tidak_hadir"
                ? "CONFIRM NOT ATTEND"
                : "CONFIRM"}
          </button>
          </motion.div>

           <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
          <p className="font-creators text-[10px] text-[#FEF8EF] mt-[54px]">
            If you need assistance with your RSVP,
            <span className="block mt-1">please contact our support team.</span>
          </p>
          </motion.div>

            <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[33px] w-[160px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-[#FEF8EF] flex items-center justify-center font-creators text-[12px] rounded-full gap-[6px] mt-[24px] z-[5]"
          >
            <Image
              src="/images/Rsvp/Logo-Wa.svg"
              alt="Logo Wa"
              width={18}
              height={18}
              className="object-contain"
            />
            CHAT SUPPORT
          </a>
          </motion.div>
        </div>
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Rsvp;

// import React from "react";
// import Image from "next/image";

// const Rsvp = () => {
//   return (
//     <section id="rsvp" className="w-full pt-[72px] pb-[85px] bg-[#935D3B]">
//       <div className="flex flex-col items-center justify-center leading-none text-center tracking-wide">
//         <h1 className="font-cylburn text-[42px] text-[#FEF8EF]">Rsvp</h1>
//         <div className="flex flex-col items-center justify-center gap-[26px] mt-[37px]">
//           <p className="font-creators text-[12px] text-[#FEF8EF]">Dear</p>
//           <p className="font-creators text-[12px] text-[#FEF8EF]">Sela</p>
//         </div>
//         <p className="font-creators text-[12px] text-[#FEF8EF] mt-[24px]">Kindly confirm your attendance before <span className="block mt-2">27 June 2026</span>
//         </p>
//         <div className="flex items-center justify-center gap-[19px] mt-[34px]">
//             <button className="w-[146px] h-[33px] bg-[#FEF8EF] text-[#713324] font-creators text-[12px] uppercase rounded-[71px]">ATTEND</button>
//             <button className="w-[146px] h-[33px] border border-[#FEF8EF] text-[#FEF8EF] font-creators text-[12px] uppercase rounded-[71px]">UNABLE TO ATTEND</button>
//         </div>
//         <p className="font-creators text-[12px] text-[#FEF8EF] mt-[37px]">Confirm your selection?</p>
//         <button className="w-[222px] h-[33px] bg-[#FEF8EF] font-creators text-[12px] text-[#A64508] uppercase rounded-[71px] mt-[29px]">CONFIRM NOT ATTEND</button>
//         <p className="font-creators text-[10px] text-[#FEF8EF] mt-[54px]">If you need assistance with your RSVP, <span className="block mt-2">please contact our support team.</span>
//         </p>

//               <a
//                 href="https://wa.me/6281234567890"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-[33px] w-[160px] lg:w-[212px] lg:h-[40px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-[#FEF8EF] flex items-center justify-center font-creators text-[12px] lg:text-[18px] rounded-full gap-[6px] mt-[24px] lg:mt-[44px]"
//               >
//                 <Image
//                   src="/images/Rsvp/Logo-Wa.svg"
//                   alt="Logo Wa"
//                   width={18}
//                   height={18}
//                   className="object-contain"
//                 />
//                 CHAT SUPPORT
//               </a>
//       </div>
//     </section>
//   );
// };

// export default Rsvp;
