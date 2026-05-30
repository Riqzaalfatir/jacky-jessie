"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import { useState, useEffect } from "react";

type HeroProps = {
  start: boolean;
};

const topAnim = (start: boolean, delay: number) => ({
  initial: false as const,
  animate: { opacity: start ? 1 : 0 },
  transition: { duration: 1.5, ease: "easeIn" as const, delay },
});

const bottomAnim = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 1.2, ease: "easeIn" as const },
};

const Hero = ({ start }: HeroProps) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative w-full pt-[42vw] pb-[70vw] lg:pt-[107px] lg:pb-[302px] overflow-x-hidden overflow-y-hidden bg-[#F2E8D8] "
    >
      {/* Background Image */}
      {isMobile ? (
        <Image
          src="/images/Hero/Bg-Hero.svg"
          alt="Hero Background"
          fill
          className="object-cover object-top"
          priority
        />
      ) : (
        <Image
          src="/images/Hero/dekstop/Bg-Dekstop.svg"
          alt="Hero Background"
          fill
          className="object-cover object-top"
          priority
        />
      )}

      {/* KUNANG KUNANG */}
      {isMobile ? (
        <video
          src="/images/Hero/Kunang.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute pointer-events-none z-[2]"
          style={{
            width: "100%",
            height: "25%",
            bottom: 0,
            left: 0,
            objectFit: "cover",
            mixBlendMode: "screen",
          }}
        />
      ) : (
        <>
          <video
            src="/images/Hero/dekstop/Kunang.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute pointer-events-none z-[2]"
            style={{
              width: "40%",
              height: "22vw",
              bottom: 0,
              left: 0,
              objectFit: "cover",
              mixBlendMode: "screen",
            }}
          />
          <video
            src="/images/Hero/dekstop/Kunang.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute pointer-events-none z-[2]"
            style={{
              width: "40%",
              height: "22vw",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              objectFit: "cover",
              mixBlendMode: "screen",
            }}
          />
          <video
            src="/images/Hero/dekstop/Kunang.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute pointer-events-none z-[2]"
            style={{
              width: "40%",
              height: "22vw",
              bottom: 0,
              right: 0,
              objectFit: "cover",
              mixBlendMode: "screen",
            }}
          />
        </>
      )}


      {/* Pohon Kiri Atas */}
      {isMobile ? (
        <div className="absolute top-0 left-0 w-[66vw]">
          <Image
            src="/images/Hero/PohonKiriAtas.png"
            alt="Pohon Kiri Atas"
            width={458}
            height={211}
            className="w-full"
          />
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-[416px]">
          <Image
            src="/images/Hero/dekstop/Pohon-KiriAtas.png"
            alt="Pohon Kiri Atas"
            width={958}
            height={211}
            className="w-full"
          />
        </div>
      )}

      {/* Pohon Kanan Atas */}
      {isMobile ? (
        <div className="absolute top-0 right-0 w-[64.4vw]">
          <Image
            src="/images/Hero/Pohon-KananAtas.webp"
            alt="Pohon Kanan Atas"
            width={451}
            height={205}
            className="w-full"
          />
        </div>
      ) : (
        <div className="absolute top-0 right-0 w-[416px]">
          <Image
            src="/images/Hero/dekstop/Pohon-KananAtas.png"
            alt="Pohon Kanan Atas"
            width={958}
            height={211}
            className="w-full"
          />
        </div>
      )}

      {/* POHON KANAN BAWAH */}
      {isMobile ? (
        <div className="absolute bottom-[10vw] right-0 w-[32vw] z-[1]">
          <Image
            src="/images/Hero/Pohon-GoldenKanan.png"
            alt="Pohon Golden Kanan"
            width={550}
            height={80}
            className="w-full"
          />
        </div>
      ) : (
        <motion.div className="absolute z-[1] bottom-[6vw] right-[0vw] w-[15vw]">
          <Image
            src="/images/Hero/dekstop/Golden-Kanan.webp"
            alt="Pohon Golden Kanan"
            width={550}
            height={80}
            className="w-full"
          />
        </motion.div>
      )}

      {/* ASET ORNAMENT BAWAH */}
      {isMobile ? (
        <img
          src="/images/Hero/Aset-Bawah.webp"
          alt="Pohon Kanan Bawah"
          className="absolute -bottom-[0.1vw] z-[1]"
          style={{
            width: "138vw",
            height: "auto",
            left: "57.5%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      ) : (
        <img
          src="/images/Hero/dekstop/Aset-Bawah.webp"
          alt="Pohon Kanan Bawah"
          className="absolute -bottom-[0.1vw] z-[1] hidden lg:block"
          style={{
            width: "125vw",
            height: "auto",
            left: "54%",
            transform: "translateX(-50%)",
            maxWidth: "none",
          }}
        />
      )}

      {/* KUPU KUPU */}
      <Image
        src="/images/Hero/KupuKupu-1.gif"
        alt="Kupu Kupu 1"
        width={87}
        height={87}
        className="absolute bottom-[10.5vw] left-[24.5vw] w-[11vw] lg:bottom-[17vw] lg:left-[17vw] lg:w-[5vw] z-[5]"
      />
      <Image
        src="/images/Hero/KupuKupu-2.gif"
        alt="Kupu Kupu 2"
        width={87}
        height={87}
        className="absolute bottom-[9vw] left-[69vw] w-[11vw] z-[5] lg:bottom-[7.8vw] lg:left-[73.4vw] lg:w-[3.5vw]"
      />
      <Image
        src="/images/Hero/KupuKupu4.png"
        alt="Kupu Kupu 4"
        width={87}
        height={87}
        className="absolute bottom-[21vw] right-[3.5vw] w-[7vw] z-[5] lg:hidden"
      />
      <Image
        src="/images/Hero/KupuKupu-3.gif"
        alt="Kupu Kupu 3"
        width={87}
        height={87}
        className="absolute bottom-[51vw] right-[20vw] w-[11vw] z-[5] scale-x-[-1]   lg:bottom-[8vw] lg:left-[40vw] lg:w-[3.5vw]"
      />

      {/* KUPU KUPU TAMBAHAN UNTUK ASET DEKSTOP */}
      <Image
        src="/images/Hero/KupuKupu-3.gif"
        alt="Kupu Kupu 3"
        width={87}
        height={87}
        className="absolute top-[40%] right-[7vw] w-[4vw] z-[5] hidden lg:block"
      />

      <motion.div
        initial={false}
        animate={{ opacity: start ? 1 : 0 }}
        transition={{ duration: 1.8, ease: "easeIn", delay: 0 }}
        className={`absolute top-[70px] ${isMobile ? "w-[102.6vw]" : "w-[667px] left-[400px]"}`}
      >
        <Image
          src="/images/Hero/dekstop/Burung.gif"
          alt="Burung"
          width={400}
          height={150}
          className="w-full"
        />
      </motion.div>

      {/* Konten — muncul saat start, bertahap */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
        <motion.div
          initial={false}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
          className="mx-auto"
        >
          <Image
            src="/images/Hero/Logo-J.svg"
            alt="Logo J"
            width={99}
            height={99}
            className={`${isMobile ? "w-[65px]" : "w-[99px]"}`}
          />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
        >
          <p
            className={`uppercase font-creators ${isMobile ? "text-[14px] mt-[38px]" : "text-[20px] mt-[50px]"} text-[#713324] tracking-widest`}
          >
            THE WEDDING OF
          </p>
        </motion.div>
        <div className="flex flex-col items-center text-[#713324] mt-[20px] lg:mt-[30px]">
          <motion.div
            initial={false}
            animate={{ opacity: start ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.8 }}
          >
            <h1
              className={`font-creators ${isMobile ? "text-[48px] -ml-[60px]" : "text-[58px] -ml-[100px]"}`}
            >
              <span className="font-burgues">J</span>acky
            </h1>
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: start ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 1.1 }}
          >
            <h3
              className={`font-creators ${isMobile ? "text-[24px] ml-[25px]" : "text-[28px]"}`}
            >
              &amp;
            </h3>
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: start ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 1.4 }}
          >
            <h1
              className={`font-creators ${isMobile ? "text-[48px] ml-[135px]" : "text-[58px] ml-[145px]"}`}
            >
              <span className="font-burgues">J</span>essie
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 1.7 }}
        >
          <p
            className={`uppercase font-creators ${isMobile ? "text-[14px] mt-[31px]" : "text-[20px] mt-[45px]"} text-[#713324] tracking-wide`}
          >
            27 June 2026
          </p>
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: start ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 2 }}
        >
          <p
            className={`font-century ${isMobile ? "text-[12px] mt-[28px]" : "text-[18px] mt-[58px]"} text-[#6D3323] tracking-wide text-center leading-[20px]`}
          >
            In a forest of a billion souls, <br />I found the one who speaks my
            silence.
          </p>
        </motion.div>
      </div>


          {/* Pohon Golden Kiri Bawah */}
          {isMobile ? (
            <div className="absolute bottom-0 left-0 w-[38vw] z-[3]">
              <Image
                src="/images/Hero/Pohon-KiriBawah.png"
                alt="Pohon Golden Kiri Bawah"
                width={460}
                height={282}
                className="w-full"
              />
            </div>
          ) : (
            <div className="absolute bottom-0 left-0 w-[21vw] z-[3]">
              <Image
                src="/images/Hero/dekstop/Pohon-KiriBawah.png"
                alt="Pohon Golden Kiri Bawah"
                width={460}
                height={282}
                className="w-full"
              />
            </div>
          )}
    </section>
  );
};

export default Hero;

// // VERSI SUDAH CLEAN DESAIN SUDAH KUNANG KUNANG TETAPI FILE ASETNYA MASIH TERPISAH PISAH SEMUA
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import useIsMobile from "@/hooks/useIsMobile";
// import { useState, useEffect } from "react";

// type HeroProps = {
//   start: boolean;
// };

// const topAnim = (start: boolean, delay: number) => ({
//   initial: false as const,
//   animate: { opacity: start ? 1 : 0 },
//   transition: { duration: 1.5, ease: "easeIn" as const, delay },
// });

// const bottomAnim = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   viewport: { once: true, amount: 0.1 },
//   transition: { duration: 1.2, ease: "easeIn" as const },
// };

// const Hero = ({ start }: HeroProps) => {
//   const isMobile = useIsMobile();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     // bg-[#F2E8D8]
//     <section
//       id="hero"
//       className="relative w-full pt-[42vw] pb-[70vw] lg:pt-[107px] lg:pb-[302px] overflow-x-hidden bg-[#F2E8D8] "
//     >
//       {/* Background Image */}
//       {isMobile ? (
//         <Image
//           src="/images/Hero/Bg-Hero.svg"
//           alt="Hero Background"
//           fill
//           className="object-cover object-top"
//           priority
//         />
//       ) : (
//         <Image
//           src="/images/Hero/dekstop/Bg-Dekstop.svg"
//           alt="Hero Background"
//           fill
//           className="object-cover object-top"
//           priority
//         />
//       )}

//       {/* 3 KUNANG KUNANG KHUSUS DEKSTOP */}
//       <video
//         src="/images/Hero/dekstop/Kunang.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute pointer-events-none z-[2] hidden lg:block"
//         style={{
//           // Cover seluruh section hero
//           width: "40%",
//           height: "22vw",
//           bottom: 0,
//           left: 0,
//           objectFit: "cover",
//           mixBlendMode: "screen",
//         }}
//       />

//       <video
//         src="/images/Hero/dekstop/Kunang.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute pointer-events-none z-[2] hidden lg:block"
//         style={{
//           width: "40%",
//           height: "22vw",
//           bottom: 0,
//           left: "50%",
//           transform: "translateX(-50%)",
//           objectFit: "cover",
//           mixBlendMode: "screen",
//         }}
//       />

//       <video
//         src="/images/Hero/dekstop/Kunang.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute pointer-events-none z-[2] hidden lg:block"
//         style={{
//           // Cover seluruh section hero
//           width: "40%",
//           height: "22vw",
//           bottom: 0,
//           right: 0,
//           objectFit: "cover",
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* MODE MOBILE */}
//       <video
//         src="/images/Hero/Kunang.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute pointer-events-none z-[2] lg:hidden"
//         style={{
//           // Cover seluruh section hero
//           width: "100%",
//           height: "25%",
//           bottom: 0,
//           left: 0,
//           objectFit: "cover",
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* ── ASET ATAS (langsung muncul saat start) ── */}

//       {/* Pohon Kiri Atas */}
//       {isMobile ? (
//         <motion.div
//           {...topAnim(start, 0)}
//           className="absolute top-0 left-0 w-[66vw]"
//         >
//           <Image
//             src="/images/Hero/PohonKiriAtas.png"
//             alt="Pohon Kiri Atas"
//             width={458}
//             height={211}
//             className="w-full"
//           />
//         </motion.div>
//       ) : (
//         <motion.div
//           {...topAnim(start, 0)}
//           className="absolute top-0 left-0 w-[416px]"
//         >
//           <Image
//             src="/images/Hero/dekstop/Pohon-KiriAtas.png"
//             alt="Pohon Kiri Atas"
//             width={958}
//             height={211}
//             className="w-full"
//           />
//         </motion.div>
//       )}

//       {/* Pohon Kanan Atas */}
//       {isMobile ? (
//         <motion.div
//           {...topAnim(start, 0)}
//           className="absolute top-0 right-0 w-[64.4vw]"
//         >
//           <Image
//             src="/images/Hero/Pohon-KananAtas.webp"
//             alt="Pohon Kanan Atas"
//             width={451}
//             height={205}
//             className="w-full"
//           />
//         </motion.div>
//       ) : (
//         <motion.div
//           {...topAnim(start, 0)}
//           className="absolute top-0 right-0 w-[416px]"
//         >
//           <Image
//             src="/images/Hero/dekstop/Pohon-KananAtas.png"
//             alt="Pohon Kanan Atas"
//             width={958}
//             height={211}
//             className="w-full"
//           />
//         </motion.div>
//       )}

//       {/* Burung */}
//       <motion.div
//         initial={false}
//         animate={{ opacity: start ? 1 : 0 }}
//         transition={{ duration: 1.8, ease: "easeIn", delay: 0 }}
//         className={`absolute top-[70px] ${isMobile ? "w-[102.6vw]" : "w-[667px] left-[400px]"}`}
//       >
//         <Image
//           src="/images/Hero/dekstop/Burung.gif"
//           alt="Burung"
//           width={400}
//           height={150}
//           className="w-full"
//         />
//       </motion.div>

//       {/* Konten — muncul saat start, bertahap */}
//       <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
//         <motion.div
//           initial={false}
//           animate={{ opacity: start ? 1 : 0 }}
//           transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
//           className="mx-auto"
//         >
//           <Image
//             src="/images/Hero/Logo-J.svg"
//             alt="Logo J"
//             width={99}
//             height={99}
//             className={`${isMobile ? "w-[65px]" : "w-[99px]"}`}
//           />
//         </motion.div>
//         <motion.div
//           initial={false}
//           animate={{ opacity: start ? 1 : 0 }}
//           transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
//         >
//           <p
//             className={`uppercase font-creators ${isMobile ? "text-[14px] mt-[38px]" : "text-[20px] mt-[50px]"} text-[#713324] tracking-widest`}
//           >
//             THE WEDDING OF
//           </p>
//         </motion.div>
//         <div className="flex flex-col items-center text-[#713324] mt-[20px] lg:mt-[30px]">
//           <motion.div
//             initial={false}
//             animate={{ opacity: start ? 1 : 0 }}
//             transition={{ duration: 1, ease: "easeIn", delay: 0.8 }}
//           >
//             <h1
//               className={`font-creators ${isMobile ? "text-[48px] -ml-[60px]" : "text-[58px] -ml-[100px]"}`}
//             >
//               <span className="font-burgues">J</span>acky
//             </h1>
//           </motion.div>
//           <motion.div
//             initial={false}
//             animate={{ opacity: start ? 1 : 0 }}
//             transition={{ duration: 1, ease: "easeIn", delay: 1.1 }}
//           >
//             <h3
//               className={`font-creators ${isMobile ? "text-[24px] ml-[25px]" : "text-[28px]"}`}
//             >
//               &amp;
//             </h3>
//           </motion.div>
//           <motion.div
//             initial={false}
//             animate={{ opacity: start ? 1 : 0 }}
//             transition={{ duration: 1, ease: "easeIn", delay: 1.4 }}
//           >
//             <h1
//               className={`font-creators ${isMobile ? "text-[48px] ml-[135px]" : "text-[58px] ml-[145px]"}`}
//             >
//               <span className="font-burgues">J</span>essie
//             </h1>
//           </motion.div>
//         </div>
//         <motion.div
//           initial={false}
//           animate={{ opacity: start ? 1 : 0 }}
//           transition={{ duration: 1, ease: "easeIn", delay: 1.7 }}
//         >
//           <p
//             className={`uppercase font-creators ${isMobile ? "text-[14px] mt-[31px]" : "text-[20px] mt-[45px]"} text-[#713324] tracking-wide`}
//           >
//             27 June 2026
//           </p>
//         </motion.div>
//         <motion.div
//           initial={false}
//           animate={{ opacity: start ? 1 : 0 }}
//           transition={{ duration: 1, ease: "easeIn", delay: 2 }}
//         >
//           <p
//             className={`font-century ${isMobile ? "text-[12px] mt-[28px]" : "text-[18px] mt-[58px]"} text-[#6D3323] tracking-wide text-center leading-[20px]`}
//           >
//             In a forest of a billion souls, <br />I found the one who speaks my
//             silence.
//           </p>
//         </motion.div>
//       </div>

//       {/* ── ASET BAWAH (muncul saat masuk viewport — setelah start) ── */}
//       {start && (
//         <>
//           {/* Pohon Golden Kiri Bawah */}
//           {isMobile ? (
//             <motion.div
//               {...bottomAnim}
//               className="absolute bottom-0 left-0 w-[38vw] z-[3]"
//             >
//               <Image
//                 src="/images/Hero/Pohon-KiriBawah.png"
//                 alt="Pohon Golden Kiri Bawah"
//                 width={460}
//                 height={282}
//                 className="w-full"
//               />
//             </motion.div>
//           ) : (
//             <motion.div
//               {...bottomAnim}
//               className="absolute bottom-0 left-0 w-[21vw] z-[3]"
//             >
//               <Image
//                 src="/images/Hero/dekstop/Pohon-KiriBawah.png"
//                 alt="Pohon Golden Kiri Bawah"
//                 width={460}
//                 height={282}
//                 className="w-full"
//               />
//             </motion.div>
//           )}

//           {/* Daun Pandan */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }}
//             className={`absolute bottom-0 ${isMobile ? "-left-[10vw] w-[34.7vw] z-[4]" : "-left-[3vw] w-[11.98vw] z-[5]"}`}
//           >
//             <Image
//               src="/images/Hero/svg/Daun-Pandan.svg"
//               alt="Daun Pandan"
//               width={80}
//               height={81}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Pohon Buah Merah Kiri */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }}
//             className={`absolute bottom-0 left-0 ${isMobile ? "w-[36vw] z-[1]" : "w-[13vw] z-[4]"}`}
//           >
//             <Image
//               src="/images/Hero/Buah-MerahKiri.png"
//               alt="Pohon Buah Merah"
//               width={550}
//               height={120}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Bunga Mawar Putih kiri */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.2 }}
//             className={`absolute bottom-0 ${isMobile ? "left-[11vw] w-[16vw] z-[5]" : "left-[5vw] w-[9vw] z-[5]"}`}
//           >
//             <Image
//               src="/images/Hero/dekstop/Mawar-Putih.svg"
//               alt="Bunga Mawar Putih"
//               width={770}
//               height={70}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Bunga Mawar Kuning kiri */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.25 }}
//             className={`absolute bottom-0 ${isMobile ? "left-[13vw] w-[19vw] z-[2]" : "left-[10vw] w-[7.7vw] z-[4]"}`}
//           >
//             <Image
//               src="/images/Hero/MawarKuning..png"
//               alt="Bunga Mawar Kuning"
//               width={580}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Daun Pandan tengah kiri */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }}
//             className={`absolute bottom-0 z-[2] ${isMobile ? "left-[22.3vw] w-[18vw]" : "left-[13vw] w-[9.2vw]"}`}
//           >
//             <Image
//               src="/images/Hero/Daun-Pandan.png"
//               alt="Daun Pandan"
//               width={546}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Pohon Akar */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.35 }}
//             className={`absolute bottom-0 z-[1] ${isMobile ? "left-[30.5vw] w-[27.8vw]" : "left-[17vw] w-[11vw]"}`}
//           >
//             <Image
//               src="/images/Hero/Pohon-Akar.png"
//               alt="Pohon Akar"
//               width={520}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Pohon Bunga Kecil */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.4 }}
//             className={`absolute bottom-0 z-[2] ${isMobile ? "left-[44vw] w-[24vw]" : "left-[21.7vw] w-[10.2vw]"}`}
//           >
//             <Image
//               src="/images/Hero/Pohon-BungaKecil.png"
//               alt="Pohon Bunga Kecil"
//               width={500}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Pohon Akar 2 */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.45 }}
//             className={`absolute bottom-0 z-[1] ${isMobile ? "left-[53vw] w-[17.8vw]" : "left-[26vw] w-[10vw]"}`}
//           >
//             <Image
//               src="/images/Hero/Pohon-Akar.png"
//               alt="Pohon Akar"
//               width={520}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Daun Pandan kanan tengah */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.5 }}
//             className={`absolute bottom-0 z-[2] ${isMobile ? "left-[58.5vw] w-[26.6vw]" : "left-[31vw] w-[9vw]"}`}
//           >
//             <Image
//               src="/images/Hero/Daun-Pandan.png"
//               alt="Daun Pandan"
//               width={500}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Bunga Mawar Putih kanan */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.55 }}
//             className={`absolute bottom-0 z-[3] ${isMobile ? "left-[73.5vw] w-[16vw]" : "left-[37.2vw] w-[5.2vw]"}`}
//           >
//             <Image
//               src="/images/Hero/dekstop/Mawar-Putih.svg"
//               alt="Bunga Mawar Putih"
//               width={500}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Bunga Mawar Kuning kanan */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }}
//             className={`absolute bottom-0 ${isMobile ? "left-[82vw] w-[18vw] z-[3]" : "left-[38.5vw] w-[7vw] z-[2]"}`}
//           >
//             <Image
//               src="/images/Hero/MawarKuning..png"
//               alt="Bunga Mawar Kuning"
//               width={500}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Pohon Bunga Merah Kanan */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }}
//             className={`absolute bottom-0 z-[1] ${isMobile ? "right-[1vw] w-[29vw]" : "left-[41vw] w-[14vw]"}`}
//           >
//             <Image
//               src="/images/Hero/dekstop/Bunga-Merah.webp"
//               alt="Bunga Bunga Merah"
//               width={650}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Daun Pandan */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }}
//             className={`absolute bottom-0 ${isMobile ? "-left-[10vw] w-[34.7vw] z-[4]" : "left-[41vw] w-[10vw] z-[1]"}`}
//           >
//             <Image
//               src="/images/Hero/svg/Daun-Pandan.svg"
//               alt="Daun Pandan"
//               width={80}
//               height={81}
//               className="w-full"
//             />
//           </motion.div>

//           {/* ASET DESKTOP ONLY */}
//           {!isMobile && (
//             <>
//               {/* Pohon Buah Merah flip 1 */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }}
//                 className="absolute bottom-0 left-[10vw] w-[13vw] z-[1]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Bunga-Merah.webp"
//                   alt="Pohon Buah Merah"
//                   width={550}
//                   height={120}
//                   className="w-full scale-x-[-1]"
//                 />
//               </motion.div>

//               {/* Pohon Buah Merah flip 2 */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }}
//                 className="absolute bottom-0 left-[25vw] w-[15vw] z-[1]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Bunga-Merah.webp"
//                   alt="Pohon Buah Merah"
//                   width={550}
//                   height={120}
//                   className="w-full scale-x-[-1]"
//                 />
//               </motion.div>

//               {/* Mawar Putih tengah */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.55 }}
//                 className="absolute bottom-0 z-[3] left-[48vw] w-[7.2vw]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Mawar-Putih.svg"
//                   alt="Bunga Mawar Putih"
//                   width={500}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Mawar Kuning tengah */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }}
//                 className="absolute bottom-0 left-[52vw] w-[7vw] z-[2]"
//               >
//                 <Image
//                   src="/images/Hero/MawarKuning..png"
//                   alt="Bunga Mawar Kuning"
//                   width={500}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Pohon Bunga Merah tengah */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }}
//                 className="absolute bottom-0 left-[55.5vw] w-[12vw] z-[1]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Bunga-Merah.webp"
//                   alt="Bunga Bunga Merah"
//                   width={650}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Daun Pandan tengah */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }}
//                 className="absolute bottom-0 left-[55vw] w-[10vw] z-[2]"
//               >
//                 <Image
//                   src="/images/Hero/svg/Daun-Pandan.svg"
//                   alt="Daun Pandan"
//                   width={80}
//                   height={81}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Pohon Akar kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.35 }}
//                 className="absolute bottom-0 left-[60vw] w-[11vw] z-[1]"
//               >
//                 <Image
//                   src="/images/Hero/Pohon-Akar.png"
//                   alt="Pohon Akar"
//                   width={520}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Pohon Bunga Kecil kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.4 }}
//                 className="absolute bottom-0 left-[64vw] w-[9vw] z-[2]"
//               >
//                 <Image
//                   src="/images/Hero/Pohon-BungaKecil.png"
//                   alt="Pohon Bunga Kecil"
//                   width={500}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Pohon Akar kanan 2 */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.35 }}
//                 className="absolute bottom-0 left-[67vw] w-[10vw] z-[1]"
//               >
//                 <Image
//                   src="/images/Hero/Pohon-Akar.png"
//                   alt="Pohon Akar"
//                   width={520}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Daun Pandan kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }}
//                 className="absolute bottom-0 left-[70.5vw] w-[12vw] z-[5]"
//               >
//                 <Image
//                   src="/images/Hero/svg/Daun-Pandan.svg"
//                   alt="Daun Pandan"
//                   width={80}
//                   height={81}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Pohon Buah Merah flip kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }}
//                 className="absolute bottom-0 left-[66.5vw] w-[15.5vw] z-[4]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Bunga-Merah.webp"
//                   alt="Pohon Buah Merah"
//                   width={550}
//                   height={120}
//                   className="w-full scale-x-[-1]"
//                 />
//               </motion.div>

//               {/* Mawar Putih kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.2 }}
//                 className="absolute bottom-0 right-[16.5vw] w-[9vw] z-[7]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Mawar-Putih.svg"
//                   alt="Bunga Mawar Putih"
//                   width={770}
//                   height={70}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Mawar Kuning kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.25 }}
//                 className="absolute bottom-0 right-[11.5vw] w-[11vw] z-[6]"
//               >
//                 <Image
//                   src="/images/Hero/MawarKuning..png"
//                   alt="Bunga Mawar Kuning"
//                   width={580}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Daun Pandan paling kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }}
//                 className="absolute bottom-0 right-[6vw] w-[11vw] z-[2]"
//               >
//                 <Image
//                   src="/images/Hero/Daun-Pandan.png"
//                   alt="Daun Pandan"
//                   width={546}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Mawar Putih ujung kanan */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.2 }}
//                 className="absolute bottom-0 -right-[2vw] w-[10vw] z-[7]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Mawar-Putih.svg"
//                   alt="Bunga Mawar Putih"
//                   width={770}
//                   height={70}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Pohon Buah Merah ujung kanan flip */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }}
//                 className="absolute bottom-0 right-[0vw] w-[15.5vw] z-[1]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Bunga-Merah.webp"
//                   alt="Pohon Buah Merah"
//                   width={550}
//                   height={120}
//                   className="w-full scale-x-[-1]"
//                 />
//               </motion.div>

//               {/* Golden Kanan Desktop */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }}
//                 className="absolute z-[1] bottom-[6vw] right-[0vw] w-[15vw]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Golden-Kanan.webp"
//                   alt="Pohon Golden Kanan"
//                   width={550}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Dedaunan Belakang Dekstop */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1, ease: "easeIn", delay: 0 }}
//                 className="absolute bottom-0 left-[11.5vw] w-[30vw] z-[0]"
//               >
//                 <Image
//                   src="/images/Hero/DedaunanBelakangKiri.png"
//                   alt="Dedaunan Belakang"
//                   width={850}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Dedaunan Tambahan Desktop */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
//                 className="absolute bottom-0 w-[26vw] right-[6vw] z-[0]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Dedaunan-Belakang.webp"
//                   alt="Dedaunan Belakang"
//                   width={650}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
//                 className="absolute bottom-0 w-[21vw] right-[18vw] z-[0]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Dedaunan-Belakang.webp"
//                   alt="Dedaunan Belakang"
//                   width={650}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
//                 className="absolute bottom-0 w-[22vw] right-[26vw] z-[0]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Dedaunan-Belakang.webp"
//                   alt="Dedaunan Belakang"
//                   width={650}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
//                 className="absolute bottom-0 w-[34vw] right-[30vw] z-[0]"
//               >
//                 <Image
//                   src="/images/Hero/dekstop/Dedaunan-Belakang.webp"
//                   alt="Dedaunan Belakang"
//                   width={650}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Kupu Kupu Desktop */}
//               <Image
//                 src="/images/Hero/KupuKupu-1.gif"
//                 alt="Kupu Kupu 1"
//                 width={87}
//                 height={87}
//                 className="absolute bottom-[17vw] left-[17vw] w-[5vw] z-[5]"
//               />
//               <Image
//                 src="/images/Hero/KupuKupu-2.gif"
//                 alt="Kupu Kupu 2"
//                 width={87}
//                 height={87}
//                 className="absolute bottom-[7.8vw] left-[73.4vw] w-[3.5vw] z-[5]"
//               />
//               <Image
//                 src="/images/Hero/KupuKupu-3.gif"
//                 alt="Kupu Kupu 3"
//                 width={87}
//                 height={87}
//                 className="absolute bottom-[8vw] left-[40vw] w-[3.5vw] z-[5] scale-x-[-1]"
//               />
//               <Image
//                 src="/images/Hero/KupuKupu-3.gif"
//                 alt="Kupu Kupu 3"
//                 width={87}
//                 height={87}
//                 className="absolute top-[40%] right-[7vw] w-[4vw] z-[5]"
//               />
//             </>
//           )}

//           {/* ASET MOBILE ONLY */}
//           {isMobile && (
//             <>
//               {/* Pohon Golden Kanan Mobile */}
//               <motion.div
//                 {...bottomAnim}
//                 transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }}
//                 className="absolute bottom-[10vw] right-0 w-[32vw] z-[1]"
//               >
//                 <Image
//                   src="/images/Hero/Pohon-GoldenKanan.png"
//                   alt="Pohon Golden Kanan"
//                   width={550}
//                   height={80}
//                   className="w-full"
//                 />
//               </motion.div>

//               {/* Kupu Kupu Mobile */}
//               <Image
//                 src="/images/Hero/KupuKupu-1.gif"
//                 alt="Kupu Kupu 1"
//                 width={87}
//                 height={87}
//                 className="absolute bottom-[10.5vw] left-[24.5vw] w-[11vw] z-[5]"
//               />
//               <Image
//                 src="/images/Hero/KupuKupu-2.gif"
//                 alt="Kupu Kupu 2"
//                 width={87}
//                 height={87}
//                 className="absolute bottom-[13vw] left-[69vw] w-[10vw] z-[5]"
//               />
//               <Image
//                 src="/images/Hero/KupuKupu4.png"
//                 alt="Kupu Kupu 4"
//                 width={87}
//                 height={87}
//                 className="absolute bottom-[21vw] right-[3.5vw] w-[6vw] z-[5]"
//               />
//               <Image
//                 src="/images/Hero/KupuKupu-3.gif"
//                 alt="Kupu Kupu 3"
//                 width={87}
//                 height={87}
//                 className="absolute bottom-[51vw] right-[20vw] w-[11vw] z-[5] scale-x-[-1]"
//               />
//             </>
//           )}

//           {/* Dedaunan Belakang Kiri — tampil di keduanya tapi beda posisi/ukuran */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1, ease: "easeIn", delay: 0 }}
//             className={`absolute bottom-0 z-[0] ${isMobile ? "left-0 w-[55vw]" : "-left-[3.1vw] w-[31.5vw]"}`}
//           >
//             <Image
//               src="/images/Hero/DedaunanBelakangKiri.png"
//               alt="Dedaunan Belakang"
//               width={550}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Dedaunan Belakang Tengah */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1, ease: "easeIn", delay: 0.1 }}
//             className={`absolute bottom-0 z-[0] ${isMobile ? "right-[22vw] w-[43vw]" : "left-[27.59vw] w-[20.14vw]"}`}
//           >
//             <Image
//               src="/images/Hero/DedaunanBelakangKiri.png"
//               alt="Dedaunan Belakang"
//               width={520}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>

//           {/* Dedaunan Belakang Kanan */}
//           <motion.div
//             {...bottomAnim}
//             transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
//             className={`absolute bottom-0 right-0 z-[0] ${isMobile ? "w-[55vw]" : "w-[25vw] -right-[4.5vw]"}`}
//           >
//             <Image
//               src="/images/Hero/DedaunanBelakang.png"
//               alt="Dedaunan Belakang"
//               width={650}
//               height={80}
//               className="w-full"
//             />
//           </motion.div>
//         </>
//       )}
//     </section>
//   );
// };

// export default Hero;

// VERSI BELUM DENGAN USE IS MOBILE
// "use client"

// import Image from "next/image";
// import { motion } from "framer-motion";
// import useIsMobile from "@/hooks/useIsMobile";
// import { useState, useEffect } from "react";

// type HeroProps = {
//   start: boolean;
// };

// // Helper: animasi atas (langsung saat start)
// const topAnim = (start: boolean, delay: number) => ({
//   initial: false as const,
//   animate: { opacity: start ? 1 : 0 },
//   transition: { duration: 1.5, ease: "easeIn" as const, delay },
// });

// // Helper: animasi bawah (saat masuk viewport, tapi hanya setelah start)
// const bottomAnim = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   viewport: { once: true, amount: 0.1 },
//   transition: { duration: 1.2, ease: "easeIn" as const },
// };

// const Hero = ({ start }: HeroProps) => {
//   const isMobile = useIsMobile()
//   const [mounted, setMounted] = useState(false)

//    useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <section
//       id="hero"
//       className="relative w-full pt-[42.8vw] pb-[70vw] lg:pt-[107px] lg:pb-[302px] overflow-x-hidden "
//     >

//       {/* Background Image */}

//        {isMobile ? (
//          <Image
//         src="/images/Hero/Bg-Hero.svg"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top lg:hidden"
//         priority
//       />
//       ) : (
//          <Image
//         src="/images/Hero/dekstop/Bg-Dekstop.svg"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top hidden lg:block"
//         priority
//       />
//       )}

//       {/* ── ASET ATAS (langsung muncul saat start) ── */}

//       {/* Pohon Kiri Atas */}
//       <motion.div {...topAnim(start, 0)} className="absolute top-0 left-0 w-[66vw] lg:hidden ">
//         <Image src="/images/Hero/PohonKiriAtas.png" alt="Pohon Kiri Atas" width={458} height={211} className="w-full" />
//       </motion.div>

//       {/* DEKSTOP */}
//       <motion.div {...topAnim(start, 0)} className="absolute top-0 left-0 w-[416px] hidden lg:block ">
//         <Image src="/images/Hero/dekstop/Pohon-KiriAtas.png" alt="Pohon Kiri Atas" width={958} height={211} className="w-full" />
//       </motion.div>

//       {/* Pohon Kanan Atas */}
//       <motion.div {...topAnim(start, 0)} className="absolute top-0 right-0 w-[64.4vw] lg:hidden">
//         <Image src="/images/Hero/Pohon-KananAtas.webp" alt="Pohon Kanan Atas" width={451} height={205} className="w-full" />
//       </motion.div>

//        {/* DEKSTOP */}
//       <motion.div {...topAnim(start, 0)} className="absolute top-0 right-0 w-[416px]  hidden lg:block ">
//         <Image src="/images/Hero/dekstop/Pohon-KananAtas.png" alt="Pohon Kiri Atas" width={958} height={211} className="w-full" />
//       </motion.div>

//       {/* Burung */}
//       <motion.div
//         initial={false}
//         animate={{ opacity: start ? 1 : 0 }}
//         transition={{ duration: 1.8, ease: "easeIn", delay: 0 }}
//         className="absolute top-[70px] w-[102.6vw] lg:w-[667px]"
//       >
//         <Image src="/images/Hero/Burung.gif" alt="Burung" width={400} height={150} className="w-full" />
//       </motion.div>

//       {/* Konten — muncul saat start, bertahap */}
//       <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
//         <motion.div initial={false} animate={{ opacity: start ? 1 : 0 }} transition={{ duration: 1, ease: "easeIn", delay: 0.2 }} className="mx-auto">
//           <Image src="/images/Hero/Logo-J.svg" alt="Logo J" width={99} height={99} className="w-[65px] lg:w-[99px]" />
//         </motion.div>
//         <motion.div initial={false} animate={{ opacity: start ? 1 : 0 }} transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}>
//           <p className="uppercase font-creators text-[14px] lg:text-[20px] text-[#713324] tracking-widest mt-[38px] lg:mt-[50px]">THE WEDDING OF</p>
//         </motion.div>
//         <div className="flex flex-col items-center text-[#713324] mt-[20px] lg:mt-[30px]">
//           <motion.div initial={false} animate={{ opacity: start ? 1 : 0 }} transition={{ duration: 1, ease: "easeIn", delay: 0.8 }}>
//             <h1 className="font-creators text-[48px] lg:text-[58px]  lg:-ml-[100px]"><span className="font-burgues">J</span>acky</h1>
//           </motion.div>
//           <motion.div initial={false} animate={{ opacity: start ? 1 : 0 }} transition={{ duration: 1, ease: "easeIn", delay: 1.1 }}>
//             <h3 className="font-creators text-[24px] lg:text-[28px]">&amp;</h3>
//           </motion.div>
//           <motion.div initial={false} animate={{ opacity: start ? 1 : 0 }} transition={{ duration: 1, ease: "easeIn", delay: 1.4 }}>
//             <h1 className="font-creators text-[48px] lg:text-[58px] ml-[115px] lg:ml-[145px]"><span className="font-burgues">J</span>essie</h1>
//           </motion.div>
//         </div>
//         <motion.div initial={false} animate={{ opacity: start ? 1 : 0 }} transition={{ duration: 1, ease: "easeIn", delay: 1.7 }}>
//           <p className="uppercase font-creators text-[14px] lg:text-[20px] text-[#713324] tracking-wide mt-[31px] lg:mt-[45px]">27 June 2026</p>
//         </motion.div>
//         <motion.div initial={false} animate={{ opacity: start ? 1 : 0 }} transition={{ duration: 1, ease: "easeIn", delay: 2 }}>
//           <p className="font-century text-[12px] lg:text-[18px] text-[#6D3323] tracking-wide text-center mt-[28px] lg:mt-[58px] leading-[25px]">
//             In a forest of a billion souls, <br />
//             I found the one who speaks my silence.
//           </p>
//         </motion.div>
//       </div>

//       {/* ── ASET BAWAH (muncul saat masuk viewport — setelah start) ── */}
//       {/* Render hanya setelah start=true agar whileInView tidak trigger duluan */}
//     {start && (
//   <>
//     {/* Pohon Golden Kiri Bawah */}
//     <motion.div {...bottomAnim} className="absolute bottom-0 left-0 w-[38vw] z-[3] lg:hidden">
//       <Image src="/images/Hero/Pohon-KiriBawah.png" alt="Pohon Golden Kiri Bawah" width={460} height={282} className="w-full" />
//     </motion.div>

//     {/* DEKSTOP */}
//     <motion.div {...bottomAnim} className="absolute bottom-0 left-0 lg:w-[21vw] z-[3] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Pohon-KiriBawah.png" alt="Pohon Golden Kiri Bawah" width={460} height={282} className="w-full" />
//     </motion.div>

//     {/* Daun Pandan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }} className="absolute bottom-0 -left-[10vw] lg:-left-[3vw] w-[34.7vw] lg:w-[11.98vw] z-[4] lg:z-[5]">
//       <Image src="/images/Hero/svg/Daun-Pandan.svg" alt="Daun Pandan" width={80} height={81} className="w-full" />
//     </motion.div>

//     {/* Pohon Buah Merah Kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }} className="absolute bottom-0 left-0 w-[36vw] lg:left-[0vw] lg:w-[13vw] z-[1] lg:z-[4]">
//       <Image src="/images/Hero/Buah-MerahKiri.png" alt="Pohon Buah Merah" width={550} height={120} className="w-full" />
//     </motion.div>

//     {/* Bunga Mawar Putih kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 left-[11vw] lg:left-[5vw] w-[16vw] lg:w-[9vw] z-[3] lg:z-[5]">
//       <Image src="/images/Hero/dekstop/Mawar-Putih.svg" alt="Bunga Mawar Putih" width={770} height={70} className="w-full" />
//     </motion.div>

//     {/* Bunga Mawar Kuning kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.25 }} className="absolute bottom-0 left-[13vw] lg:left-[10vw] w-[19vw] lg:w-[7.7vw] z-[2] lg:z-[4]">
//       <Image src="/images/Hero/MawarKuning..png" alt="Bunga Mawar Kuning" width={580} height={80} className="w-full" />
//     </motion.div>

//     {/* Daun Pandan tengah kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }} className="absolute bottom-0 left-[22.3vw] lg:left-[13vw] w-[18vw] lg:w-[9.2vw] z-[2]">
//       <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={546} height={80} className="w-full" />
//     </motion.div>

//     {/* Pohon Akar */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.35 }} className="absolute bottom-0 left-[30.5vw] lg:left-[17vw] w-[27.8vw] lg:w-[11vw] z-[1]">
//       <Image src="/images/Hero/Pohon-Akar.png" alt="Pohon Akar" width={520} height={80} className="w-full" />
//     </motion.div>

//     {/* Pohon Bunga Kecil */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.4 }} className="absolute bottom-0 left-[44vw] lg:left-[21.7vw] lg:w-[10.2vw] w-[24vw] z-[2]">
//       <Image src="/images/Hero/Pohon-BungaKecil.png" alt="Pohon Bunga Kecil" width={500} height={80} className="w-full" />
//     </motion.div>

//     {/* Pohon Akar 2 */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.45 }} className="absolute bottom-0 left-[53vw] w-[17.8vw] z-[1] lg:left-[26vw] lg:w-[10vw]">
//       <Image src="/images/Hero/Pohon-Akar.png" alt="Pohon Akar" width={520} height={80} className="w-full" />
//     </motion.div>

//     {/* Daun Pandan kanan tengah */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.5 }} className="absolute bottom-0 left-[58.5vw] w-[26.6vw] z-[2] lg:left-[31vw] lg:w-[9vw]">
//       <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={500} height={80} className="w-full" />
//     </motion.div>

//     {/* Bunga Mawar Putih kanan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.55 }} className="absolute bottom-0 left-[73.5vw] w-[16vw] z-[3] lg:left-[37.2vw] lg:w-[5.2vw]">
//       <Image src="/images/Hero/dekstop/Mawar-Putih.svg" alt="Bunga Mawar Putih" width={500} height={80} className="w-full" />
//     </motion.div>

//     {/* Bunga Mawar Kuning kanan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }} className="absolute bottom-0 left-[82vw] w-[18vw] z-[3] lg:left-[38.5vw] lg:w-[7vw] lg:z-[2]">
//       <Image src="/images/Hero/MawarKuning..png" alt="Bunga Mawar Kuning" width={500} height={80} className="w-full" />
//     </motion.div>

//     {/* Pohon Bunga Merah Kanan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }} className="absolute bottom-0 right-[1vw] w-[29vw] z-[1] lg:left-[41vw] lg:w-[14vw]">
//       <Image src="/images/Hero/dekstop/Bunga-Merah.webp" alt="Bunga Bunga Merah" width={650} height={80} className="w-full" />
//     </motion.div>

//     {/* Daun Pandan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }} className="absolute bottom-0 -left-[10vw] lg:left-[41vw] w-[34.7vw] lg:w-[10vw] z-[4] lg:z-[1]">
//       <Image src="/images/Hero/svg/Daun-Pandan.svg" alt="Daun Pandan" width={80} height={81} className="w-full" />
//     </motion.div>

//     {/* PERSISAAN ASET ASET UNTUK DEKSTOP */}
//      {/* Bunga Mawar Putih kanan */}

//       {/* Pohon Buah Merah Kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }} className="absolute bottom-0 left-[10vw]  w-[13vw] z-[1] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Bunga-Merah.webp" alt="Pohon Buah Merah" width={550} height={120} className="w-full scale-x-[-1]" />
//     </motion.div>

//       {/* Pohon Buah Merah Kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }} className="absolute bottom-0 left-[25vw]  w-[15vw] z-[1] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Bunga-Merah.webp" alt="Pohon Buah Merah" width={550} height={120} className="w-full scale-x-[-1]" />
//     </motion.div>

//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.55 }} className="absolute bottom-0   z-[3] left-[48vw] w-[7.2vw] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Mawar-Putih.svg" alt="Bunga Mawar Putih" width={500} height={80} className="w-full" />
//     </motion.div>

//     {/* Bunga Mawar Kuning kanan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }} className="absolute bottom-0  left-[52vw] w-[7vw] z-[2] hidden lg:block">
//       <Image src="/images/Hero/MawarKuning..png" alt="Bunga Mawar Kuning" width={500} height={80} className="w-full" />
//     </motion.div>

//     {/* Pohon Bunga Merah Kanan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }} className="absolute bottom-0 left-[55.5vw] w-[12vw] hidden lg:block z-[1]">
//       <Image src="/images/Hero/dekstop/Bunga-Merah.webp" alt="Bunga Bunga Merah" width={650} height={80} className="w-full" />
//     </motion.div>

//     {/* Daun Pandan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }} className="absolute bottom-0 left-[55vw] w-[10vw] z-[2] hidden lg:block">
//       <Image src="/images/Hero/svg/Daun-Pandan.svg" alt="Daun Pandan" width={80} height={81} className="w-full" />
//     </motion.div>

//      {/* Pohon Akar */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.35 }} className="absolute bottom-0 left-[60vw]  w-[11vw] z-[1] hidden lg:block">
//       <Image src="/images/Hero/Pohon-Akar.png" alt="Pohon Akar" width={520} height={80} className="w-full" />
//     </motion.div>

//      {/* Pohon Bunga Kecil */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.4 }} className="absolute bottom-0 left-[64vw] w-[9vw] z-[2] hidden lg:block">
//       <Image src="/images/Hero/Pohon-BungaKecil.png" alt="Pohon Bunga Kecil" width={500} height={80} className="w-full" />
//     </motion.div>

//     {/* Pohon Akar */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.35 }} className="absolute bottom-0 left-[67vw]  w-[10vw] z-[1] hidden lg:block">
//       <Image src="/images/Hero/Pohon-Akar.png" alt="Pohon Akar" width={520} height={80} className="w-full" />
//     </motion.div>

//      {/* Daun Pandan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }} className="absolute bottom-0 left-[70.5vw]  w-[12vw] z-[5] hidden lg:block">
//       <Image src="/images/Hero/svg/Daun-Pandan.svg" alt="Daun Pandan" width={80} height={81} className="w-full" />
//     </motion.div>

//     {/* Pohon Buah Merah Kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }} className="absolute bottom-0 left-[66.5vw]  w-[15.5vw] z-[4] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Bunga-Merah.webp" alt="Pohon Buah Merah" width={550} height={120} className="w-full scale-x-[-1]" />
//     </motion.div>

//     {/* Bunga Mawar Putih kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 right-[16.5vw]  w-[9vw] z-[7] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Mawar-Putih.svg" alt="Bunga Mawar Putih" width={770} height={70} className="w-full" />
//     </motion.div>

//     {/* Bunga Mawar Kuning kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.25 }} className="absolute bottom-0 right-[11.5vw]   w-[11vw] z-[6] hidden lg:block">
//       <Image src="/images/Hero/MawarKuning..png" alt="Bunga Mawar Kuning" width={580} height={80} className="w-full" />
//     </motion.div>

//     {/* Daun Pandan tengah kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }} className="absolute bottom-0 right-[6vw]   w-[11vw] z-[2] hidden lg:block">
//       <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={546} height={80} className="w-full" />
//     </motion.div>

//     {/* Bunga Mawar Putih kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 -right-[2vw]  w-[10vw] z-[7] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Mawar-Putih.svg" alt="Bunga Mawar Putih" width={770} height={70} className="w-full" />
//     </motion.div>

//     {/* Pohon Buah Merah Kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.15 }} className="absolute bottom-0 right-[0vw]  w-[15.5vw] z-[1] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Bunga-Merah.webp" alt="Pohon Buah Merah" width={550} height={120} className="w-full scale-x-[-1]" />
//     </motion.div>

//     {/* Pohon Golden Kanan Mobile */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }} className="absolute bottom-[10vw] right-0 w-[32vw] z-[1] lg:hidden">
//       <Image src="/images/Hero/Pohon-GoldenKanan.png" alt="Pohon Golden Kanan" width={550} height={80} className="w-full" />
//     </motion.div>

//     {/* Golden Kanan Dekstop */}
//     <motion.div {...bottomAnim} transition={{ duration: 1.2, ease: "easeIn", delay: 0.1 }} className="absolute  z-[1] bottom-[6vw] right-[0vw] w-[15vw] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Golden-Kanan.webp" alt="Pohon Golden Kanan" width={550} height={80} className="w-full" />
//     </motion.div>

//     {/* Dedaunan Belakang Kiri */}
//     <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0 }} className="absolute bottom-0 left-0 lg:-left-[3.1vw] w-[55vw] lg:w-[31.5vw] z-[0]">
//       <Image src="/images/Hero/DedaunanBelakangKiri.png" alt="Dedaunan Belakang" width={550} height={80} className="w-full" />
//     </motion.div>

//     {/* Dedaunan Belakang Dekstop */}
//     <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0 }} className="absolute bottom-0 lg:left-[11.5vw] lg:w-[30vw] z-[0] hidden lg:block">
//       <Image src="/images/Hero/DedaunanBelakangKiri.png" alt="Dedaunan Belakang" width={850} height={80} className="w-full" />
//     </motion.div>

//     {/* Dedaunan Belakang Tengah */}
//     <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0.1 }} className="absolute bottom-0 right-[22vw] lg:right-[0vw] lg:left-[27.59vw] w-[43vw] lg:w-[20.14vw] z-[0]">
//       <Image src="/images/Hero/DedaunanBelakangKiri.png" alt="Dedaunan Belakang" width={520} height={80} className="w-full" />
//     </motion.div>

//     {/* Dedaunan Belakang Kanan */}
//     <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 right-0 w-[55vw] lg:w-[25vw] lg:-right-[4.5vw] z-[0]">
//       <Image src="/images/Hero/DedaunanBelakang.png" alt="Dedaunan Belakang" width={650} height={80} className="w-full" />
//     </motion.div>

//     {/* ASET DEDAUNAN TAMBAHAN UNTUK DEKSTOP */}
//       <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 w-[26vw] right-[6vw] z-[0] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Dedaunan-Belakang.webp" alt="Dedaunan Belakang" width={650} height={80} className="w-full" />
//     </motion.div>

//       <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 w-[21vw] right-[18vw] z-[0] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Dedaunan-Belakang.webp" alt="Dedaunan Belakang" width={650} height={80} className="w-full" />
//     </motion.div>

//       <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 w-[22vw] right-[26vw] z-[0] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Dedaunan-Belakang.webp" alt="Dedaunan Belakang" width={650} height={80} className="w-full" />
//     </motion.div>

//       <motion.div {...bottomAnim} transition={{ duration: 1, ease: "easeIn", delay: 0.2 }} className="absolute bottom-0 w-[34vw] right-[30vw] z-[0] hidden lg:block">
//       <Image src="/images/Hero/dekstop/Dedaunan-Belakang.webp" alt="Dedaunan Belakang" width={650} height={80} className="w-full" />
//     </motion.div>

//     {/* KUPU KUPU */}
//     <Image src="/images/Hero/KupuKupu-1.gif" alt="Kupu Kupu 1" width={87} height={87} className="absolute bottom-[10.5vw] left-[24.5vw] w-[11vw] lg:bottom-[17vw] lg:left-[17vw] lg:w-[5vw] z-[5]" />
//     <Image src="/images/Hero/KupuKupu-2.gif" alt="Kupu Kupu 2" width={87} height={87} className="absolute bottom-[9vw] left-[69vw] w-[11vw] z-[5] lg:bottom-[7.8vw] lg:left-[73.4vw] lg:w-[3.5vw]" />
//     <Image src="/images/Hero/KupuKupu4.png" alt="Kupu Kupu 4" width={87} height={87} className="absolute bottom-[21vw] right-[3.5vw] w-[7vw] z-[5] lg:hidden" />
//     <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu 3" width={87} height={87} className="absolute bottom-[51vw] right-[20vw] w-[11vw] z-[5] scale-x-[-1]   lg:bottom-[8vw] lg:left-[40vw] lg:w-[3.5vw]" />

//     {/* KUPU KUPU TAMBAHAN UNTUK ASET DEKSTOP */}
//      <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu 3" width={87} height={87} className="absolute top-[40%] right-[7vw] w-[4vw] z-[5] hidden lg:block" />
//   </>
// )}

// </section>
// );
// };

// export default Hero;
