// versi aset per aset group

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

const TimeLocation = () => {
  return (
    <section
      id="time"
      className="bg-[#EADCC8] relative w-full pt-[54.4vw] pb-[80.3vw] lg:pt-[170px] lg:pb-[358px] overflow-x-hidden overflow-y-hidden"
    >

      {/* ASET BAGIAN ATAS MOBILE */}
      <Image
        src="/images/Time/Ranting-KiriAtas.png"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute top-0 left-0 w-[64.2vw] z-0 lg:hidden"
      />

         <Image
              src="/images/Hero/Burung.gif"
              alt="Burung"
              width={400}
              height={150}
              className="absolute top-[25px] w-[667px] left-[400px] hidden lg:block"
            />

      <Image
        src="/images/Time/Capung.svg"
        alt="Capung Kiri"
        width={558}
        height={211}
        className="absolute top-[50vw] left-[4vw] w-[14vw] z-0 lg:hidden"
      />

      <Image
        src="/images/Time/Capung.svg"
        alt="Capung Tengah"
        width={558}
        height={211}
        className="absolute bottom-[22vw] left-[32vw] w-[18vw] lg:bottom-[10.5vw] lg:left-[40.5vw] lg:w-[4vw] z-0 scale-x-[-1]"
      />

      <Image
        src="/images/Time/Ranting-KananAtas.png"
        alt="Pohon Kanan Atas"
        width={558}
        height={211}
        className="absolute top-0 right-0 w-[64.2vw] z-0 lg:hidden"
      />

      <Image
        src="/images/Time/Ranting-Tengah.png"
        alt="Ranting Tengah"
        width={558}
        height={211}
        className="absolute top-[47.5%] right-0 w-[33.5vw] z-0 lg:hidden"
      />

      {/* Kupu Kupu 3 */}
           <Image
             src="/images/Hero/KupuKupu-3.gif"
             alt="Kupu Kupu 3"
             width={50}
             height={80}
             className="absolute bottom-[18vw] right-[29vw] w-[4vw] z-[5] hidden lg:block"
           />

      {/* Kupu Kupu 3 */}
           <Image
             src="/images/Hero/KupuKupu-3.gif"
             alt="Kupu Kupu 3"
             width={50}
             height={80}
             className="absolute bottom-[5.5vw] left-[25vw] w-[4vw] z-[5] scale-x-[-1] hidden lg:block"
           />

            <Image
                   src="/images/Hero/KupuKupu-1.gif"
                   alt="Kupu Kupu 3"
                   width={50}
                   height={80}
                   className="absolute bottom-[19vw] left-[6%] w-[5vw]  z-[5] hidden lg:block"
                 />


      {/* RANTING DEKSTOP */}
       <Image
        src="/images/Time/dekstop/Ranting-Kiri.webp"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute -top-[6.5vw] left-0 w-[400px] z-0 hidden lg:block"
      />
       <Image
        src="/images/Time/dekstop/Ranting-Kanan.webp"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute -top-[6.5vw] right-0 w-[400px] z-0 hidden lg:block"
      />



      {/* ASET RANTING BAWAH MOBILE */}
      {/* <Image
        src="/images/Time/Ranting-KiriBawah.png"
        alt="Ranting Kiri Bawah"
        width={558}
        height={211}
        className="absolute bottom-0 left-0 w-[37vw] z-0 lg:hidden"
      />
      <Image
        src="/images/Time/Ranting-KananBawah.png"
        alt="Ranting Kanan Bawah"
        width={558}
        height={211}
        className="absolute bottom-0 right-0 w-[53vw] z-0 lg:hidden"
      /> */}

      {/* ASET RANTING BAWAH DEKSTOP */}
      <Image
        src="/images/Time/dekstop/Ranting-BawahKiri.webp"
        alt="Ranting Kiri Bawah"
        width={558}
        height={211}
        className="absolute bottom-0 left-0 w-[14vw] z-0 hidden lg:block"
      />
      <Image
        src="/images/Time/dekstop/Ranting-KananBawah.webp"
        alt="Ranting Kanan Bawah"
        width={558}
        height={211}
        className="absolute bottom-0 right-0 w-[17.4vw] z-0 hidden lg:block"
      />

      <img
        src="/images/Time/Aset-Bawah3.webp"
        alt="Pohon Kanan Bawah"
        className="absolute -bottom-[13vw] z-[1] lg:hidden"
        style={{
          width: "192vw",
          height: "auto",
          left: "39.9%",
          transform: "translateX(-50%)",
          maxWidth: "none",
        }}
      />

      <img
        src="/images/Time/dekstop/Aset-Bawah.webp"
        alt="Pohon Kanan Bawah"
        className="absolute -bottom-[0.5vw] z-[1] hidden lg:block"
        style={{
          width: "115vw",
          height: "auto",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "none",
        }}
      />


      
      {/* KONTEN */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <h2 className="font-cylburn text-[42px] lg:text-[64px] text-[#713324]">
            Time & Location
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center leading-none mt-[15.6vw] lg:mt-[61px] lg:gap-[70px]">
        {/* Catholic */}
        <div className="flex flex-col items-center text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <h3 className="font-creators text-[20px] lg:text-[26px] text-[#713324] tracking-wide">Catholic Holy Matrimony</h3>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw] lg:mt-[41px] lg:gap-[25px] tracking-wide">
              <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">08.30 WIB</p>
              <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">at</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[4.9vw] lg:mt-[50px] leading-[20px] lg:leading-[30px] tracking-wide">
              Gereja Katolik <br />
              Paroki Bunda Tujuh Kedukaan, Pandu
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.1vw] lg:mt-[20px] tracking-wide">Jl. Pandu No.4, Bandung</p>
          </motion.div>
          <div className="mt-auto">
          <motion.div  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <a href="https://www.google.com/maps/place/Gereja+Katolik+Paroki+Bunda+Tujuh+Kedukaan,+Pandu/@-6.9055223,107.5908405,17z" target="_blank" rel="noopener noreferrer">
              <button className="w-[160px] h-[33px] lg:w-[216px] lg:h-[40px] bg-[#E2C6AA] font-century text-[12px] lg:text-[18px] text-[#713324] rounded-[44px] mt-[10.3vw] lg:mt-[51px] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
                GOOGLE MAPS
              </button>
            </a>
          </motion.div>
          </div>
        </div>

        <div className="w-3 h-3 lg:w-[13px] lg:h-[12px] rounded-full bg-[#713324] my-[11.3vw] mx-auto" />

        {/* Buddhist */}
        <div className="flex flex-col items-center text-center tracking-wide">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <h3 className="font-creators text-[20px] lg:text-[26px]  text-[#713324] tracking-wide">Buddhist Holy Matrimony</h3>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw] lg:mt-[41px] lg:gap-[25px]">
              <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">16.00 WIB</p>
              <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">at</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.5vw] lg:mt-[30px] leading-[20px]">Imah Seniman</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.7vw] lg:mt-[50px] lg:leading-[30px] ">Jl. Kolonel Masturi No. VIII, Kab. <br className="hidden lg:block" /> Bandung, Lembang</p>
          </motion.div>
          <div className="mt-auto">
          <motion.div  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <a href="https://www.google.com/maps/place/Imah+Seniman/@-6.8326678,107.6093505,17z" target="_blank" rel="noopener noreferrer">
              <button className="w-[160px] h-[33px] lg:w-[216px] lg:h-[40px] lg:text-[18px] bg-[#E2C6AA] font-century text-[12px] text-[#713324] rounded-[44px] mt-[10.3vw]  lg:mt-[51px] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
                GOOGLE MAPS
              </button>
            </a>
          </motion.div>
        </div>
        </div>

        <div className="w-3 h-3 lg:w-[13px] lg:h-[13px] rounded-full bg-[#713324] my-[11.3vw] mx-auto" />

        {/* Wedding Reception */}
        <div className="flex flex-col items-center text-center tracking-wide">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <h3 className="font-creators text-[20px] lg:text-[26px] text-[#713324]">Wedding Reception</h3>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw] lg:mt-[41px] lg:gap-[25px]">
              <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">08.30 WIB</p>
              <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">at</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.5vw] lg:mt-[30px]">Imah Seniman</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.7vw] lg:mt-[50px] lg:leading-[30px]   ">Jl. Kolonel Masturi No. VIII, Kab. <br className="hidden lg:block" /> Bandung, Lembang</p>
          </motion.div>
          <div className="mt-auto">
          <motion.div  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <a href="https://www.google.com/maps/place/Imah+Seniman/@-6.8326678,107.6093505,17z" target="_blank" rel="noopener noreferrer">
              <button className="w-[160px] h-[33px] lg:w-[216px] lg:h-[40px] lg:text-[18px] lg:mt-[51px] bg-[#E2C6AA] font-century text-[12px] text-[#713324] rounded-[44px] mt-[10.3vw] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
                GOOGLE MAPS
              </button>
            </a>
          </motion.div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLocation;


// VERSI UNTUK ASET MOBILE MASIH SATU PERSATU FILE DAN DEKSTOP BELU STYLING
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, stagger } from "@/lib/animation";

// const TimeLocation = () => {
//   return (
//     <section
//       id="time"
//       className="bg-[#EADCC8] relative w-full pt-[54.4vw] pb-[80.3vw] lg:pt-[170px] lg:pb-[358px] overflow-x-hidden"
//     >
//       {/* ASET BAGIAN ATAS */}
//       <Image
//         src="/images/Time/Ranting-KiriAtas.png"
//         alt="Pohon Kiri Atas"
//         width={558}
//         height={211}
//         className="absolute top-0 left-0 w-[64.2vw] z-0 lg:hidden"
//       />

//       <Image
//         src="/images/Time/Capung.svg"
//         alt="Capung Kiri"
//         width={558}
//         height={211}
//         className="absolute top-[30vw] left-[4vw] w-[14vw] z-0"
//       />

//       <Image
//         src="/images/Time/Capung.svg"
//         alt="Capung Tengah"
//         width={558}
//         height={211}
//         className="absolute bottom-[22vw] left-[32vw] w-[18vw] z-0 scale-x-[-1]"
//       />

//       <Image
//         src="/images/Time/Ranting-KananAtas.png"
//         alt="Pohon Kanan Atas"
//         width={558}
//         height={211}
//         className="absolute top-0 right-0 w-[64.2vw] z-0 lg:hidden"
//       />

//       <Image
//         src="/images/Time/Ranting-Tengah.png"
//         alt="Ranting Tengah"
//         width={558}
//         height={211}
//         className="absolute top-[47.5%] right-0 w-[33.5vw] z-0"
//       />


//       {/* RANTING DEKSTOP */}
//        <Image
//         src="/images/Time/dekstop/Ranting-Kiri.webp"
//         alt="Pohon Kiri Atas"
//         width={558}
//         height={211}
//         className="absolute top-0 left-0 w-[420px] z-0 hidden lg:block"
//       />
//        <Image
//         src="/images/Time/dekstop/Ranting-Kanan.webp"
//         alt="Pohon Kiri Atas"
//         width={558}
//         height={211}
//         className="absolute top-0 right-0 w-[420px] z-0 hidden lg:block"
//       />



//       {/* ASET BAWAH */}
//       <Image
//         src="/images/Time/Ranting-KiriBawah.png"
//         alt="Ranting Kiri Bawah"
//         width={558}
//         height={211}
//         className="absolute bottom-0 left-0 w-[39vw] z-0"
//       />
//       <Image
//         src="/images/Time/Ranting-KananBawah.png"
//         alt="Ranting Kanan Bawah"
//         width={558}
//         height={211}
//         className="absolute bottom-0 right-0 w-[53vw] z-0"
//       />
//       <Image
//         src="/images/LoveStory/Pohon-BungaMerah.png"
//         alt="Pohon Buah Merah"
//         width={550}
//         height={120}
//         className="absolute bottom-0 -left-[23vw] w-[58vw] z-[3]"
//       />
//       <Image
//         src="/images/Time/Dedaunan-BelakangKiri..png"
//         alt="Dedaunan Belakang Kiri"
//         width={550}
//         height={80}
//         className="absolute bottom-0 -left-[7vw] w-[76vw] z-[1]"
//       />
//       <Image
//         src="/images/Time/DedaunanTengah.png"
//         alt="Dedaunan Tengah"
//         width={550}
//         height={80}
//         className="absolute bottom-0 right-[12vw] w-[60vw] z-[0]"
//       />
//       <Image
//         src="/images/Time/DedaunanTengah.png"
//         alt="Dedaunan Tengah 2"
//         width={550}
//         height={80}
//         className="absolute bottom-0 -right-[10vw] w-[60vw] z-[0]"
//       />
//       <Image
//         src="/images/Hero/Pohon-Akar.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 left-[14vw] w-[37vw] z-[5]"
//       />
//       <Image
//         src="/images/Hero/Daun-Pandan.png"
//         alt="Daun Pandan"
//         width={547}
//         height={81}
//         className="absolute bottom-0 left-[3vw] w-[38vw] z-[4]"
//       />
//       <Image
//         src="/images/Hero/Mawar-Putih.png"
//         alt="Bunga Mawar Putih"
//         width={570}
//         height={70}
//         className="absolute bottom-0 left-[23vw] w-[32vw] z-[7]"
//       />
//       <Image
//         src="/images/LoveStory/Pohon-BungaMerah.png"
//         alt="Pohon Buah Merah 2"
//         width={550}
//         height={120}
//         className="absolute bottom-0 left-[38vw] w-[45vw] z-[5]"
//       />
//       <Image
//         src="/images/Hero/svg/Daun-Pandan.svg"
//         alt="Daun Pandan SVG"
//         width={147}
//         height={81}
//         className="absolute bottom-0 left-[43vw] w-[37vw] z-[5]"
//       />
//       <Image
//         src="/images/Hero/MawarKuning..png"
//         alt="Bunga Mawar Kuning"
//         width={580}
//         height={80}
//         className="absolute bottom-0 left-[72vw] w-[15vw] z-[6]"
//       />
//       <Image
//         src="/images/LoveStory/Pohon-BungaMerah.png"
//         alt="Pohon Buah Merah 3"
//         width={550}
//         height={120}
//         className="absolute bottom-0 left-[70vw] w-[33vw] z-[5]"
//       />
//       <Image
//         src="/images/LoveStory/Dedaunan.png"
//         alt="Dedaunan Kanan"
//         width={550}
//         height={80}
//         className="absolute bottom-0 right-[7vw] w-[25vw] z-[1]"
//       />
//       <Image
//         src="/images/LoveStory/Dedaunan.png"
//         alt="Dedaunan Kanan 2"
//         width={550}
//         height={80}
//         className="absolute bottom-0 -right-[18vw] w-[45vw] z-[1]"
//       />

//       {/* KONTEN */}
//       <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <h2 className="font-cylburn text-[42px] lg:text-[64px] text-[#713324]">
//             Time & Location
//           </h2>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center justify-center leading-none">
//         {/* Catholic */}
//         <div className="flex flex-col items-center justify-center text-center mt-[15.6vw]">
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <h3 className="font-creators text-[20px] lg:text-[26px] text-[#713324] tracking-wide">Catholic Holy Matrimony</h3>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw] tracking-wide">
//               <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">08.30 WIB</p>
//               <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">at</p>
//             </div>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[4.9vw] leading-[20px] tracking-wide">
//               Gereja Katolik <br />
//               Paroki Bunda Tujuh Kedukaan, Pandu
//             </p>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <p className="font-creators text-[12px] text-[#713324] mt-[5.1vw] tracking-wide">Jl. Pandu No.4, Bandung</p>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <a href="https://www.google.com/maps/place/Gereja+Katolik+Paroki+Bunda+Tujuh+Kedukaan,+Pandu/@-6.9055223,107.5908405,17z" target="_blank" rel="noopener noreferrer">
//               <button className="w-[160px] h-[33px] lg:w-[216px] lg:h-[40px] bg-[#E2C6AA] font-century text-[12px] lg:text-[18px] text-[#713324] rounded-[44px] mt-[10.3vw] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
//                 GOOGLE MAPS
//               </button>
//             </a>
//           </motion.div>
//         </div>

//         <div className="w-3 h-3 lg:w-[13px] lg:h-[12px] rounded-full bg-[#713324] my-[11.3vw]" />

//         {/* Buddhist */}
//         <div className="flex flex-col items-center justify-center text-center tracking-wide">
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <h3 className="font-creators text-[20px] lg:text-[26px]  text-[#713324] tracking-wide">Buddhist Holy Matrimony</h3>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw]">
//               <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">16.00 WIB</p>
//               <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">at</p>
//             </div>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.5vw] leading-[20px]">Imah Seniman</p>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.7vw]">Jl. Kolonel Masturi No. VIII, Kab. <br className="hidden lg:block" /> Bandung, Lembang</p>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <a href="https://www.google.com/maps/place/Imah+Seniman/@-6.8326678,107.6093505,17z" target="_blank" rel="noopener noreferrer">
//               <button className="w-[160px] h-[33px] lg:w-[216px] lg:h-[40px] lg:text-[18px] bg-[#E2C6AA] font-century text-[12px] text-[#713324] rounded-[44px] mt-[10.3vw] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
//                 GOOGLE MAPS
//               </button>
//             </a>
//           </motion.div>
//         </div>

//         <div className="w-3 h-3 lg:w-[13px] lg:h-[13px] rounded-full bg-[#713324] my-[11.3vw]" />

//         {/* Wedding Reception */}
//         <div className="flex flex-col items-center justify-center text-center tracking-wide">
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <h3 className="font-creators text-[20px] lg:text-[26px] text-[#713324]">Wedding Reception</h3>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw]">
//               <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">08.30 WIB</p>
//               <p className="font-creators text-[14px] lg:text-[20px] text-[#713324]">at</p>
//             </div>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.5vw]">Imah Seniman</p>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[5.7vw]">Jl. Kolonel Masturi No. VIII, Kab. <br className="hidden lg:block" /> Bandung, Lembang</p>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <a href="https://www.google.com/maps/place/Imah+Seniman/@-6.8326678,107.6093505,17z" target="_blank" rel="noopener noreferrer">
//               <button className="w-[160px] h-[33px] lg:w-[216px] lg:h-[40px] lg:text-[18px] bg-[#E2C6AA] font-century text-[12px] text-[#713324] rounded-[44px] mt-[10.3vw] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
//                 GOOGLE MAPS
//               </button>
//             </a>
//           </motion.div>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TimeLocation;