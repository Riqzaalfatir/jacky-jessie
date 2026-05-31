// VERSI SUDAH IS MOBILE DAN ASET DEKSTOP DAN MOBILE DISATUKAN 1 FILE
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";
import useIsMobile from "@/hooks/useIsMobile";
import { useState, useEffect } from "react";

// Tambahkan ini di atas return, setelah useState/useEffect
const bottomAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 1.2, ease: "easeIn" },
};

const Tentang = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="tentang"
      className="relative w-full  pt-[42.3vw] lg:pt-[109px] bg-[#EADCC8] overflow-x-hidden scrollbar-hide overflow-y-hidden  "
    >
      {/* ── ASET BAGIAN ATAS ── */}
      <Image
        src="/images/Hero/Burung.gif"
        alt="Burung"
        width={400}
        height={150}
        className="absolute top-[5px] w-[102.6vw] lg:w-[667px] lg:left-[350px]"
      />

     {/* 3 KUNANG KUNANG KHUSUS DEKSTOP */}
      <video
        src="/images/Hero/dekstop/Kunang.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute pointer-events-none z-[2] hidden lg:block"
        style={{
          // Cover seluruh section hero
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
        className="absolute pointer-events-none z-[2] hidden lg:block"
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
        className="absolute pointer-events-none z-[2] hidden lg:block"
        style={{
          // Cover seluruh section hero
          width: "40%",
          height: "22vw",
          bottom: 0,
          right: 0,
          objectFit: "cover",
          mixBlendMode: "screen",
        }}
      />

      
      {/* MODE MOBILE */}
     <video
  src="/images/Hero/Kunang.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute pointer-events-none z-[2] lg:hidden"
  style={{
    // Cover seluruh section hero
    width: "100%",
    height: "12%",
    bottom: 0,
    left: 0,
    objectFit: "cover",
    mixBlendMode: "screen",
  }}
/>

      <Image
        src="/images/Tentang/Pohon-goldenKanan.png"
        alt="Pohon Golden Kanan"
        width={550}
        height={80}
        className="absolute right-0 z-[1] top-[22.5%] w-[31.8vw]  lg:hidden"
      />

      <Image
        src="/images/Tentang/Ranting-Kiri.webp"
        alt="Pohon Golden Kanan"
        width={550}
        height={80}
        className="absolute left-0 z-[1] bottom-[33%] w-[27vw] lg:hidden"
      />


      {/* RANTING KIRI ATAS MOBILE */}
      <Image
        src="/images/Tentang/Ranting-KiriAtas.png"
        alt="Ranting Kiri Atas"
        width={538}
        height={238}
        className="absolute left-0 -top-[63vw] w-[63vw] lg:hidden"
      />

      {/* RANTING KIRI ATAS dekstop */}
      <Image
        src="/images/Tentang/dekstop/Ranting-Kiri.svg"
        alt="Ranting Kiri Atas"
        width={838}
        height={238}
        className="absolute left-0 -top-[1vw] w-[375px] hidden lg:block"
      />

      {/* RANTING KANAN ATAS MOBILE */}
      <Image
        src="/images/Tentang/Ranting-KananAtas.svg"
        alt="Ranting Kanan Atas"
        width={538}
        height={238}
        className="absolute right-0 -top-[61.1vw] w-[61vw] lg:hidden"
      />

      {/* RANTING KANAN ATAS DEKSTOP */}
      <Image
        src="/images/Tentang/dekstop/Ranting-Kanan.svg"
        alt="Ranting Kiri Atas"
        width={838}
        height={238}
        className="absolute right-0 -top-[1vw] w-[375px] hidden lg:block"
      />

      {/* ── ASET BAWAH ── */}

      <img
        src="/images/Tentang/dekstop/Aset.webp"
        alt="Pohon Kanan Bawah"
        className="absolute -bottom-[0.1vw] z-[1] hidden lg:block"
        style={{
          width: "115vw",
          height: "auto",
          left: "51%",
          transform: "translateX(-50%)",
          maxWidth: "none",
        }}
      />

      <img
        src="/images/Tentang/AsetMobile.webp"
        alt="Pohon Kanan Bawah"
        className="absolute -bottom-[10.3vw] z-[1] lg:hidden"
        style={{
          width: "178vw",
          height: "auto",
          left: "57%",
          transform: "translateX(-50%)",
          maxWidth: "none",
        }}
      />

      <Image
        src="/images/Tentang/Pohon-Kiri.png"
        alt="Pohon Golden Kiri Bawah"
        width={560}
        height={282}
        className="absolute bottom-0 left-0 z-[0] w-[38vw] lg:w-[14.8vw] "
      />

      <Image
        src="/images/Tentang/Pohon-KananBawah.png"
        alt="Pohon Kanan Bawah"
        width={560}
        height={282}
        className="absolute bottom-0 right-0 z-[0] w-[38vw] lg:hidden"
      />

      {/* POHON KANAN BAWAH UNTUK DEKSTOP */}
      <Image
        src="/images/Tentang/dekstop/Pohon-Kanan.webp"
        alt="Pohon Kanan Bawah"
        width={560}
        height={282}
        className="absolute bottom-0 right-0 z-[0] w-[14.8vw] hidden lg:block "
      />

      {/* ── KUPU-KUPU ── */}
      <Image
        src="/images/Hero/KupuKupu-2.gif"
        alt="Kupu Kupu 2"
        width={50}
        height={80}
        className="absolute right-[1.5vw] z-[5] top-[47vw] w-[12vw] lg:top-[180px] lg:w-[50px] lg:hidden"
      />
      <Image
        src="/images/Hero/KupuKupu-1.gif"
        alt="Kupu Kupu 1"
        width={50}
        height={80}
        className="absolute z-[5] bottom-[23vw] left-[21vw] w-[11vw] lg:bottom-[120px] lg:left-[200px] lg:w-[45px] lg:hidden"
      />
      <Image
        src="/images/Hero/KupuKupu-3.gif"
        alt="Kupu Kupu 3"
        width={50}
        height={80}
        className="absolute z-[5] bottom-[123vw] left-[10vw] w-[11vw] lg:bottom-[350px] lg:left-[100px] lg:w-[40px] lg:hidden"
      />

      {/* ── KONTEN ── */}
      <div className="relative z-10 flex flex-col items-center leading-none text-center px-0 lg:px-[80px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] tracking-wide leading-[20px] lg:leading-[28px]">
            By the Grace of Our God
            <br />
            We request the honour of your presence
            <br />
            of our wedding
          </p>
        </motion.div>

        <div className="flex flex-col w-full lg:flex-row items-center lg:items-start justify-center gap-0 lg:gap-[300px] mt-[5px] lg:mt-[75px]">

          {/* Kolom Jacky */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/Tentang/Pengantin-Laki.png"
              alt="Pengantin Laki-Laki"
              width={360}
              height={261}
              className="mt-[26px] lg:mt-0 w-[200px] lg:w-[260px]"
            />
            <h1 className="font-cylburn w-full  text-[40px] lg:text-[64px] text-[#713324] mt-[49px] lg:mt-[35px]">
              Jacky Steven Rusli
            </h1>
            <div className="flex flex-col items-center mt-[31px] lg:mt-[43px]">
              <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] tracking-wide">
                The Son of
              </p>
              <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-3.5 lg:mt-[27px] tracking-wide">
                Mr. AGUS RUSLI and
              </p>
              <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-2 lg:mt-3 tracking-wide">
                Mrs. ONG KIE LIM (TRIDEWI)
              </p>
            </div>
          </motion.div>

          {/* Kolom Jessie */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/Tentang/Pengantin-Perempuan.png"
              alt="Pengantin Perempuan"
              width={360}
              height={261}
              className="mt-[45px] lg:mt-0 w-[200px] lg:w-[260px]"
            />
            <h1 className="font-cylburn w-full text-[40px] lg:text-[64px] text-[#713324] mt-[43px] lg:mt-[35px]">
              Jessie Andayani Santoso
            </h1>
            <div className="flex flex-col items-center mt-[24px] lg:mt-[43px] tracking-wide">
              <p className="font-creators text-[12px] lg:text-[18px] text-[#713324]">
                The Daughter of
              </p>
              <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-4 lg:mt-[27px]">
                Mr. WIBOWO SANTOSO and
              </p>
              <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-2 lg:mt-3">
                Mrs. IMELDA SIEN
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[46px] lg:mt-[80px] pb-[46vw] lg:pb-[261px] tracking-wide leading-[20px] lg:leading-[28px]">
            We would be honoured
            <br />
            by your presence and blessing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang;

// // VERSI SUDAH IS MOBILE DAN ASET DEKSTOP DAN MOBILE TERPISAH PISAH
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "@/lib/animation";
// import useIsMobile from "@/hooks/useIsMobile";
// import { useState, useEffect } from "react";

// // Tambahkan ini di atas return, setelah useState/useEffect
// const bottomAnim = {
//   initial: { opacity: 0, y: 40 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.1 },
//   transition: { duration: 1.2, ease: "easeIn" },
// };

// const Tentang = () => {
//   const isMobile = useIsMobile();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <section
//       id="tentang"
//       className="relative w-full pt-[42.3vw] lg:pt-[109px] bg-[#EADCC8] overflow-x-hidden scrollbar-hide"
//     >
//       {/* ── ASET BAGIAN ATAS ── */}
//       <Image src="/images/Hero/Burung.gif" alt="Burung" width={400} height={150}
//         className="absolute top-[5px] w-[102.6vw] lg:w-[667px] lg:left-[350px]"
//       />
//       <Image src="/images/Tentang/Pohon-goldenKanan.png" alt="Pohon Golden Kanan" width={550} height={80}
//         className="absolute right-0 z-[1] top-[23%] w-[31vw] lg:top-[280px] lg:w-[180px] lg:hidden"
//       />

//       {/* RANTING KIRI ATAS MOBILE */}
//       <Image src="/images/Tentang/Ranting-KiriAtas.png" alt="Ranting Kiri Atas" width={538} height={238}
//         className="absolute left-0 -top-[63vw] w-[63vw] lg:hidden"
//       />

//       {/* RANTING KIRI ATAS dekstop */}
//       <Image src="/images/Tentang/dekstop/Ranting-Kiri.svg" alt="Ranting Kiri Atas" width={838} height={238}
//         className="absolute left-0 -top-[1vw] w-[375px] hidden lg:block"
//       />

//       {/* RANTING KANAN ATAS MOBILE */}
//       <Image src="/images/Tentang/Ranting-KananAtas.svg" alt="Ranting Kanan Atas" width={538} height={238}
//         className="absolute right-0 -top-[61.1vw] w-[61vw] lg:hidden"
//       />

//       {/* RANTING KANAN ATAS DEKSTOP */}
//        <Image src="/images/Tentang/dekstop/Ranting-Kanan.svg" alt="Ranting Kiri Atas" width={838} height={238}
//         className="absolute right-0 -top-[1vw] w-[375px] hidden lg:block"
//       />

//       {/* Khusus mobile */}
//       {isMobile && (
//         <Image src="/images/Tentang/Ranting-Kiri.png" alt="Ranting Kiri Tengah" width={538} height={138}
//           className="absolute top-[47%] left-0 w-[27vw]"
//         />
//       )}

//       {/* ── ASET BAWAH ── */}
//       <Image src="/images/Tentang/Pohon-Kiri.png" alt="Pohon Golden Kiri Bawah" width={560} height={282}
//         className="absolute bottom-0 left-0 z-[1] w-[35vw] lg:w-[14.8vw]"
//       />
//       <Image src="/images/Tentang/dekstop/Dedaunan-Kiri.svg" alt="Dedaunan Belakang" width={550} height={80}
//         className="absolute bottom-0 z-[0] -left-[30vw] w-[90vw] lg:-left-[1.2vw] lg:w-[28vw]"
//       />
//       <Image src="/images/LoveStory/Dedaunan.png" alt="Dedaunan Belakang" width={650} height={80}
//         className="absolute bottom-0 z-[0] opacity-50 left-[0vw] w-[82vw] lg:left-[5.4vw] lg:w-[39vw] lg:scale-x-[-1]"
//       />
//       <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={747} height={81}
//         className="absolute bottom-0 z-[2] -left-[16vw] w-[33vw] lg:-left-[1.5vw] lg:w-[13.5vw]"
//       />

//       {/* DEDAUNAN KHUSUS DEKSTOP */}
//       <Image src="/images/Tentang/dekstop/Dedaunan1.webp" alt="Dedaunan Belakang" width={650} height={80}
//         className="absolute bottom-0 z-[0] left-[28vw] w-[29vw] hidden lg:block"
//       />

//       <Image src="/images/LoveStory/Dedaunan.png" alt="Dedaunan Belakang" width={650} height={80}
//         className="absolute bottom-0 z-[0] left-[37vw] w-[38vw] hidden lg:block opacity-50 scale-x-[-1]"
//       />

//        <Image src="/images/Tentang/dekstop/Dedaunan1.webp" alt="Dedaunan Belakang" width={650} height={80}
//         className="absolute bottom-0 z-[0] left-[51.2vw] w-[27vw] hidden lg:block"
//       />

//        <Image src="/images/LoveStory/Dedaunan.png" alt="Dedaunan Belakang" width={650} height={80}
//         className="absolute bottom-0 z-[0] left-[61.2vw] w-[33vw] hidden lg:block opacity-50 scale-x-[-1]"
//       />

//        <Image src="/images/Tentang/dekstop/Dedaunan1.webp" alt="Dedaunan Belakang" width={650} height={80}
//         className="absolute bottom-0 z-[0] -right-[8.5vw] w-[28vw] hidden lg:block "
//       />

//       {/* BUAH MERAH KIRI MOBILE */}
//       <Image src="/images/Hero/Buah-MerahKiri.png" alt="Pohon Buah Merah" width={560} height={120}
//         className="absolute bottom-0 z-[1] -left-[10.5vw] w-[38vw] lg:hidden"
//       />

//       {/* BUAH MERAH KIRI DEKSTOP */}
//       <Image src="/images/Tentang/dekstop/Buah-MerahKiri.webp" alt="Pohon Buah Merah" width={560} height={120}
//         className="absolute bottom-0 z-[1] left-[0vw] w-[16vw] hidden lg:block"
//       />

//       <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={507} height={81}
//         className="absolute bottom-0 z-[1] left-[3vw] w-[26vw] lg:left-[6.4vw] lg:w-[10.3vw]"
//       />

//       <Image src="/images/Tentang/Daun.png" alt="Pohon Akar" width={520} height={80}
//         className="absolute bottom-0 z-[2] left-[11vw] w-[26vw] lg:left-[10.2vw] lg:w-[11.5vw]"
//       />

//       <Image src="/images/Tentang/Bunga-MawarPutih.png" alt="Bunga Mawar Putih" width={520} height={80}
//         className="absolute bottom-0 z-[3] left-[23vw] w-[22vw] lg:left-[14.5vw] lg:w-[9.5vw]"
//       />

//       <Image src="/images/Tentang/Bunga-BuahMerah.png" alt="Bunga Buah Merah" width={620} height={80}
//         className="absolute bottom-0 z-[1] left-[34vw] w-[37vw] lg:left-[19.5vw] lg:w-[15.7vw]"
//       />

//       <Image src="/images/Hero/MawarKuning..png" alt="Bunga Mawar Kuning" width={500} height={80}
//         className="absolute bottom-0 z-[2] left-[32vw] w-[19vw] lg:left-[18.7vw] lg:w-[8vw]"
//       />
//       <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={507} height={81}
//         className="absolute bottom-0 z-[2] left-[36vw] w-[30vw] lg:left-[21.5vw] lg:w-[12vw]"
//       />

//       <Image src="/images/Hero/Pohon-BungaKecil.png" alt="Pohon Bunga Kecil" width={500} height={80}
//         className="absolute bottom-0 z-[1] left-[57vw] w-[24vw] lg:left-[29.5vw] lg:w-[8vw]"
//       />
//       <Image src="/images/Hero/MawarKuning..png" alt="Bunga Mawar Kuning" width={500} height={80}
//         className="absolute bottom-0 z-[2] left-[67vw] w-[18vw] lg:left-[32.7vw] lg:w-[5.3vw]"
//       />
//       <Image src="/images/Tentang/Bunga-MawarPutih.png" alt="Bunga Mawar Putih" width={520} height={80}
//         className="absolute bottom-0 z-[2] left-[77vw] w-[17vw] lg:left-[35.7vw] lg:w-[6.8vw]"
//       />
//       <Image src="/images/Tentang/Daun-BungaMerah.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[1] left-[76vw] w-[25vw] lg:left-[34vw] lg:w-[10vw]"
//       />

//       {/* ASET ASET SISA KHUSUS UNTUK DEKSTOP */}
//        <Image src="/images/Tentang/dekstop/Bunga-Kecil.svg" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[5] left-[39.4vw] w-[10vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/Bunga-MawarPutih.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[5] left-[44.3vw] w-[9.5vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/dekstop/Buah-Merah.webp" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[48vw] w-[17.5vw] hidden lg:block"
//       />

//        <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[5] left-[47.7vw] w-[13.4vw] hidden lg:block"
//       />

//        <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[55vw] w-[9.8vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/Daun.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[58.5vw] w-[10.9vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/Bunga-MawarPutih.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[5] left-[62.5vw] w-[9.2vw] hidden lg:block"
//       />

//        <Image src="/images/Hero/MawarKuning..png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[67vw] w-[7vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/dekstop/Buah-Merah.webp" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[67.2vw] w-[15.3vw] hidden lg:block"
//       />

//        <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[5] left-[68.6vw] w-[12vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/dekstop/Bunga-PutihKecil.webp" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[76.5vw] w-[9vw] hidden lg:block"
//       />

//        <Image src="/images/Hero/MawarKuning..png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[5] left-[80vw] w-[6vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/dekstop/Buah-Merah.webp" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[81vw] w-[10.5vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/Bunga-MawarPutih.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[83.3vw] w-[7vw] hidden lg:block"
//       />

//        <Image src="/images/Tentang/dekstop/Bunga-Kecil.svg" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] left-[86.5vw] w-[10vw] hidden lg:block"
//       />

//        <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Bunga Merah" width={560} height={120}
//         className="absolute bottom-0 z-[4] -right-[2.9vw] w-[13vw] hidden lg:block"
//       />

//       <Image src="/images/Tentang/Bunga-PojokKanan.png" alt="Bunga Pojok Kanan" width={520} height={80}
//         className="absolute bottom-0 right-0 z-[2] w-[15vw] lg:w-[100px] lg:hidden"
//       />
//       <Image src="/images/Tentang/Daun-BelakangKanan.png" alt="Daun Belakang Kanan" width={520} height={80}
//         className="absolute bottom-0 right-0 z-[1] w-[35vw] lg:w-[260px] lg:hidden"
//       />
//       <Image src="/images/Tentang/Daun-BelakangKanan.png" alt="Daun Belakang Kanan" width={520} height={80}
//         className="absolute bottom-0 z-[0] right-[15vw] w-[25vw] lg:right-[160px] lg:w-[180px] lg:hidden"
//       />
//       <Image src="/images/Tentang/ranting.png" alt="Ranting" width={520} height={80}
//         className="absolute bottom-0 z-[1] right-3 w-[42vw] lg:right-[10px] lg:w-[300px] lg:hidden"
//       />
//       <Image src="/images/Tentang/Pohon-KananBawah.png" alt="Pohon Kanan Bawah" width={560} height={282}
//         className="absolute bottom-0 right-0 z-[0] w-[37vw] lg:hidden"
//       />

//       {/* POHON KANAN BAWAH UNTUK DEKSTOP */}
//       <Image src="/images/Tentang/dekstop/Pohon-Kanan.webp" alt="Pohon Kanan Bawah" width={560} height={282}
//         className="absolute bottom-0 right-0 z-[0] w-[14.8vw] hidden lg:block"
//       />

//       {/* ── KUPU-KUPU ── */}
//       <Image src="/images/Hero/KupuKupu-2.gif" alt="Kupu Kupu 2" width={50} height={80}
//         className="absolute right-[1.5vw] z-[5] top-[47vw] w-[12vw] lg:top-[180px] lg:w-[50px] lg:hidden"
//       />
//       <Image src="/images/Hero/KupuKupu-1.gif" alt="Kupu Kupu 1" width={50} height={80}
//         className="absolute z-[5] bottom-[23vw] left-[21vw] w-[11vw] lg:bottom-[120px] lg:left-[200px] lg:w-[45px] lg:hidden"
//       />
//       <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu 3" width={50} height={80}
//         className="absolute z-[5] bottom-[123vw] left-[10vw] w-[11vw] lg:bottom-[350px] lg:left-[100px] lg:w-[40px] lg:hidden"
//       />

//       {/* ── KONTEN ── */}
//       <div className="relative z-10 flex flex-col items-center leading-none text-center px-0 lg:px-[80px]">

//         <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//           <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] tracking-wide leading-[20px] lg:leading-[28px]">
//             By the Grace of Our God<br />
//             We request the honour of your presence<br />
//             of our wedding
//           </p>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-0 lg:gap-[300px] mt-[50px] lg:mt-[75px]">

//           {/* Kolom Jacky */}
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}
//             className="flex flex-col items-center"
//           >
//             <Image src="/images/Tentang/Pengantin-Laki.png" alt="Pengantin Laki-Laki" width={360} height={261}
//               className="mt-[26px] lg:mt-0 w-[200px] lg:w-[260px]"
//             />
//             <h1 className="font-cylburn text-[40px] lg:text-[64px] text-[#713324] mt-[49px] lg:mt-[40px]">
//               Jacky Steven Rusli
//             </h1>
//             <div className="flex flex-col items-center mt-[31px] lg:mt-[23px]">
//               <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] tracking-wide">The Son of</p>
//               <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-3.5 lg:mt-6 tracking-wide">Mr. AGUS RUSLI and</p>
//               <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-2 lg:mt-3 tracking-wide">Mrs. ONG KIE LIM (TRIDEWI)</p>
//             </div>
//           </motion.div>

//           {/* Kolom Jessie */}
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}
//             className="flex flex-col items-center"
//           >
//             <Image src="/images/Tentang/Pengantin-Perempuan.png" alt="Pengantin Perempuan"width={360} height={261}
//               className="mt-[45px] lg:mt-0 w-[200px] lg:w-[260px]"
//             />
//             <h1 className="font-cylburn text-[40px] lg:text-[64px] text-[#713324] mt-[43px] lg:mt-[40px]">
//               Jessie Andayani Santoso
//             </h1>
//             <div className="flex flex-col items-center mt-[24px] lg:mt-[23px] tracking-wide">
//               <p className="font-creators text-[12px] lg:text-[18px] text-[#713324]">The Daughter of</p>
//               <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-4 lg:mt-6">Mr. WIBOWO SANTOSO and</p>
//               <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-2 lg:mt-3">Mrs. IMELDA SIEN</p>
//             </div>
//           </motion.div>

//         </div>

//         <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//           <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-[46px] lg:mt-[80px] pb-[44vw] lg:pb-[261px] tracking-wide leading-[20px] lg:leading-[28px]">
//             We would be honoured<br />by your presence and blessing.
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Tentang;

// VERSI BELUM IS MOBILE
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, stagger } from "@/lib/animation";

// const Tentang = () => {
//   return (
//     <section
//       id="tentang"
//       className="relative w-full pt-[42.3vw] lg:pt-[209px]  bg-[#EADCC8] overflow-x-hidden scrollbar-hide"
//       // pt: 165/390*100 = 42.3vw | pb: 267/390*100 = 68.5vw
//     >
//       {/* ASET BAGIAN ATAS */}
//       <Image
//         src="/images/Hero/Burung.gif"
//         alt="Burung"
//         width={400}
//         height={150}
//         className="absolute top-[5px] w-[102.6vw]"
//       />

//       {/* Pohon Golden Kanan */}
//       <Image
//         src="/images/Tentang/Pohon-goldenKanan.png"
//         alt="Pohon Golden Kanan"
//         width={550}
//         height={80}
//         className="absolute top-[89vw] right-0 w-[32vw] z-[1]"
//       />
//       {/* Ranting Kiri Atas */}
//       <Image
//         src="/images/Tentang/Ranting-KiriAtas.png"
//         alt="Ranting Kiri Atas"
//         width={538}
//         height={238}
//         className="absolute -top-[63vw] left-0 w-[63vw]"
//         // -top: 250/390*100 = 64.1vw | w: 238/390*100 = 61vw
//       />

//       {/* Ranting Kanan Atas */}
//       <Image
//         src="/images/Tentang/Ranting-KananAtas.svg"
//         alt="Ranting Kanan Atas"
//         width={538}
//         height={238}
//         className="absolute -top-[61.1vw] right-0 w-[61vw]"
//       />

//       {/* Ranting Kiri Tengah */}
//       <Image
//         src="/images/Tentang/Ranting-Kiri.png"
//         alt="Ranting Kanan Atas"
//         width={538}
//         height={138}
//         className="absolute top-[185vw] left-0 w-[26vw]"
//         // top: 650/390*100 = 166.7vw | w: 138/390*100 = 35.4vw
//       />

//       {/* ASET BAWAH */}
//       {/* Pohon Kiri Bawah */}
//       <Image
//         src="/images/Tentang/Pohon-Kiri.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute bottom-0 left-0 w-[35vw] z-[1]"
//         // w: 160/390*100 = 41vw
//       />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/LoveStory/Dedaunan.png"
//         alt="Dedaunan Belakang"
//         width={550}
//         height={80}
//         className="absolute bottom-0 -left-[30vw] w-[90vw] z-[0]"
//       />

//       <Image
//         src="/images/LoveStory/Dedaunan.png"
//         alt="Dedaunan Belakang"
//         width={550}
//         height={80}
//         className="absolute bottom-0 left-[0vw] w-[82vw] z-[0] opacity-50"
//       />

//       {/* Daun Pandan dari aset hero */}
//       <Image
//         src="/images/Hero/Daun-Pandan.png"
//         alt="Daun Pandan"
//         width={547}
//         height={81}
//         className="absolute bottom-0 -left-[16vw] w-[33vw] z-[2]"
//         // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
//       />

//       {/* Pohon Buah Merah Kiri dari aset hero */}
//       <Image
//         src="/images/Hero/Buah-MerahKiri.png"
//         alt="Pohon Buah Merah"
//         width={560}
//         height={120}
//         className="absolute bottom-0 -left-[10.5vw] w-[38vw] z-[1]"
//         // -left: 35/390*100 = 9vw | w: 160/390*100 = 41vw
//       />

//       {/* Daun Pandan dari aset hero */}
//       <Image
//         src="/images/Hero/Daun-Pandan.png"
//         alt="Daun Pandan"
//         width={507}
//         height={81}
//         className="absolute bottom-0 left-[3vw] w-[26vw] z-[2]"
//         // left: 25/390*100 = 6.4vw | w: 107/390*100 = 27.4vw
//       />

//       {/* Pohon Akar aset dari hero */}
//       <Image
//         src="/images/Tentang/Daun.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 left-[11vw] w-[26vw] z-[2]"
//       />

//       {/* Bunga Mawar Putih */}
//       <Image
//         src="/images/Tentang/Bunga-MawarPutih.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 left-[23vw] w-[22vw] z-[3]"
//       />

//       {/* Pohon Buah Merah */}
//       <Image
//         src="/images/Tentang/Bunga-BuahMerah.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 left-[34vw] w-[37vw] z-[1]"
//       />

//       {/* Bunga Mawar Kuning aset dari hero */}
//       <Image
//         src="/images/Hero/MawarKuning..png"
//         alt="Bunga Mawar Kuning"
//         width={500}
//         height={80}
//         className="absolute bottom-0 left-[32vw] w-[19vw] z-[2]"
//       />

//       {/* Daun Pandan dari aset hero */}
//       <Image
//         src="/images/Hero/Daun-Pandan.png"
//         alt="Daun Pandan"
//         width={507}
//         height={81}
//         className="absolute bottom-0 left-[36vw] w-[30vw] z-[2]"
//       />

//       {/* Pohon Bunga Kecil */}
//       <Image
//         src="/images/Hero/Pohon-BungaKecil.png"
//         alt="Pohon Bunga Kecil"
//         width={500}
//         height={80}
//         className="absolute bottom-0 left-[57vw] w-[24vw] z-[1]"
//       />

//       {/* Bunga Mawar Kuning aset dari hero */}
//       <Image
//         src="/images/Hero/MawarKuning..png"
//         alt="Bunga Mawar Kuning"
//         width={500}
//         height={80}
//         className="absolute bottom-0 left-[67vw] w-[18vw] z-[2]"
//       />

//       {/* Bunga Mawar Putih */}
//       <Image
//         src="/images/Tentang/Bunga-MawarPutih.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 left-[77vw] w-[17vw] z-[2]"
//       />
//       {/* Pohon Buah Merah Kiri dari aset hero */}
//       <Image
//         src="/images/Tentang/Daun-BungaMerah.png"
//         alt="Pohon Buah Merah"
//         width={560}
//         height={120}
//         className="absolute bottom-0 left-[76vw] w-[25vw] z-[1]"
//         // -left: 35/390*100 = 9vw | w: 160/390*100 = 41vw
//       />
//       {/* Bunga Kanan */}
//       <Image
//         src="/images/Tentang/Bunga-PojokKanan.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 right-0 w-[15vw] z-[2]"
//       />

//       {/* Bunga Kanan */}
//       <Image
//         src="/images/Tentang/Daun-BelakangKanan.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 right-0 w-[35vw] z-[1]"
//       />
//       <Image
//         src="/images/Tentang/Daun-BelakangKanan.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 right-0 w-[35vw] z-[1]"
//       />

//       <Image
//         src="/images/Tentang/Daun-BelakangKanan.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 right-[15vw] w-[25vw] z-[0]"
//       />

//       {/* Bunga Kanan */}
//       <Image
//         src="/images/Tentang/ranting.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 right-3 w-[42vw] z-[1]"
//       />

//       {/* Pohon Kanan bAWAH */}
//       <Image
//         src="/images/Tentang/Pohon-KananBawah.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute bottom-0 right-0 w-[37vw] z-[0]"
//         // w: 160/390*100 = 41vw
//       />

//       {/* Kupu Kupu 2 */}
//       <Image
//         src="/images/Hero/KupuKupu-2.gif"
//         alt="Kupu Kupu 2"
//         width={50}
//         height={80}
//         className="absolute top-[47vw] right-[1.5vw] w-[12vw] z-[5]"
//       />

//       {/* kupu kupu 1 */}
//       <Image
//         src="/images/Hero/KupuKupu-1.gif"
//         alt="Kupu Kupu 1"
//         width={50}
//         height={80}
//         className="absolute bottom-[23vw] left-[21vw] w-[11vw] z-[5]"
//       />

//       {/* Kupu Kupu 3 */}
//       <Image
//         src="/images/Hero/KupuKupu-3.gif"
//         alt="Kupu Kupu 3"
//         width={50}
//         height={80}
//         className="absolute bottom-[123vw] left-[10vw] w-[11vw] z-[5]"
//       />

//       {/* KONTEN - TIDAK DIUBAH */}
//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center leading-none text-center">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <p className="font-creators text-[12px] text-[#713324] text-cente tracking-wide leading-[20px]">
//             By the Grace of Our God
//             <br />
//             We request the honour of your presence
//             <br />
//             of our wedding
//           </p>
//         </motion.div>

//         {/* Pengantin Laki-Laki */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <Image
//             src="/images/Tentang/Pengantin-Laki.png"
//             alt="Pengantin Laki-Laki"
//             width={200}
//             height={261}
//             className="mt-[26px]"
//           />
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <h1 className="font-cylburn text-[40px] text-[#713324] mt-[49px]">
//             Jacky Steven Rusli
//           </h1>
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <div className="flex flex-col items-center justify-center mt-[31px]">
//             <p className="font-creators text-[12px] text-[#713324] tracking-wide">
//               The Son of
//             </p>
//             <p className="font-creators text-[12px] text-[#713324] mt-3.5 tracking-wide">
//               Mr. AGUS RUSLI and
//             </p>
//             <p className="font-creators text-[12px] text-[#713324] mt-2 tracking-wide ">
//               Mrs. ONG KIE LIM (TRIDEWI)
//             </p>
//           </div>
//         </motion.div>

//         {/* Pengantin Perempuan */}

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <Image
//             src="/images/Tentang/Pengantin-Perempuan.png"
//             alt="Pengantin Perempuan"
//             width={200}
//             height={261}
//             className="mt-[45px]"
//           />
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <h1 className="font-cylburn text-[40px] text-[#713324] mt-[43px]">
//             Jessie Andayani Santoso
//           </h1>
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <div className="flex flex-col items-center justify-center mt-[24px] tracking-wide">
//             <p className="font-creators text-[12px] text-[#713324]">
//               The Daughter of
//             </p>
//             <p className="font-creators text-[12px] text-[#713324] mt-4">
//               Mr. WIBOWO SANTOSO and
//             </p>
//             <p className="font-creators text-[12px] text-[#713324] mt-2">
//               Mrs. IMELDA SIEN
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//         >
//           <p className="font-creators text-[12px] text-[#713324] mt-[46px] pb-[44vw] lg:pb-[261px] tracking-wide leading-[20px]">
//             We would be honoured
//             <br />
//             by your presence and blessing.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Tentang;
