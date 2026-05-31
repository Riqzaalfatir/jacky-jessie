// GABUNGAN STICKY DAN VERSI NORMAL SUDAH DETAILING MOBILE DEKSTOP SATU FILE
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

const LoveStory = () => {
  return (
    <section
      id="lovestory"
      className="relative w-full lg:pt-[0px] lg:pb-[366px] lg:overflow-x-hidden lg:overflow-y-hidden bg-[#F2E8D8]"
      style={{ overflowX: "clip" }}
    >

      <video
    src="/images/Hero/Kunang.mp4"
    autoPlay loop muted playsInline
    className="absolute pointer-events-none z-[3] lg:hidden"
    style={{
      width: "100%",
      height: "15%",
      bottom: 0,
      left: 0,
      objectFit: "cover",
      mixBlendMode: "screen",
    }}
  />

      {/* ===================== BACKGROUND ===================== */}

      {/* BG MOBILE — sticky */}
      <div className="sticky top-0 w-full z-[0] lg:hidden" style={{ height: "844px" }}>
        <Image
          src="/images/LoveStory/Bg-LoveStory.png"
          alt="Hero Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Ranting Mobile */}
        <Image src="/images/LoveStory/Ranting-Kanan.png" alt="Ranting Kanan" width={560} height={282} className="absolute top-0 right-0 w-[45vw] z-[1]" />
        <Image src="/images/LoveStory/Ranting-Kiri.png" alt="Ranting Kiri" width={560} height={282} className="absolute top-0 left-0 w-[45vw] z-[1]" />
      </div>

      {/* BG DESKTOP — normal (tidak sticky) */}
      <Image
        src="/images/LoveStory/dekstop/Bg-LoveStory.svg"
        alt="Hero Background"
        fill
        className="object-cover object-top hidden lg:block"
        priority
      />

      {/* ===================== KONTEN MOBILE — overlap sticky bg ===================== */}
      <div
        className="relative w-full z-[2] lg:hidden"
        style={{ marginTop: "-844px" }}
      >

        <Image src="/images/Hero/Burung.gif" alt="Burung" width={400} height={150} className="absolute top-[65px] w-[102.6vw]" />
        <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute top-[110vw] left-0 w-[21vw] z-[3]" />
        <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute top-[202vw] -right-[7vw] w-[24vw] z-[3]" />
        <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu" width={50} height={80} className="absolute bottom-[20vw] left-[37vw] w-[11vw] z-[3]" />
        <Image src="/images/Hero/KupuKupu-1.gif" alt="Kupu Kupu 1" width={50} height={80} className="absolute bottom-[73vw] right-[5vw] w-[9.5vw] z-[5]" />

        <div className="w-full flex flex-col items-center justify-center leading-none text-center pt-[40vw] pb-[16vw]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <h2 className="font-cylburn text-[42px] text-[#713324] tracking-wide">Love Story</h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center text-center mt-[51px]">
              <h3 className="font-creators text-[14px] text-[#713324]">First meeting:</h3>
              <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
                Their story began at a Starbucks in Bandung, where <br />
                Jessie grabbed the coffee since she'd arrived on time. <br />
                Then Jacky, visiting from Singapore, only had his SG <br />
                cards and cash, so Jessie treated him to lunch too. <br />
                Later, she drove him around the city, with Jacky <br />
                happily riding along like a true 'passenger princess'
              </h3>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center text-center mt-9">
              <h3 className="font-creators text-[14px] text-[#713324]">Dating:</h3>
              <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
                From that first day, their connection grew through <br />
                laughter that felt like home, conversations that <br />
                stretched late into the night, and adventures across <br />
                many cities. They made memories by the sea and in <br />
                the mountains, dreamed of the future, and slowly <br />
                realised they had found their perfect match in each <br />
                other.
              </h3>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center text-center mt-9">
              <h3 className="font-creators text-[14px] text-[#713324]">Engagement:</h3>
              <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
                Jessie thought it was just a casual trip to Singapore. <br />
                In reality, Jacky had planned a surprise trip to Hangzhou. <br />
                He'd been sneaking around Xiaohongshu like a wedding <br />
                planner on steroids—scouting the perfect spot, arranging <br />
                a violinist, and hiring a florist. To top it off, he flew in <br />
                two of Jessie's friends. The result? Tears, laughter, and a <br />
                very big "yes."
              </h3>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center text-center mt-9">
              <h3 className="font-creators text-[14px] text-[#713324]">Together:</h3>
              <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
                Now, they can't wait to step into their next chapter <br />
                together. Surrounded by family and closest friends, <br />
                they're ready to celebrate their love and begin their <br />
                journey as husband and wife.
              </h3>
            </div>
          </motion.div>
        </div>

        
                   
        

        {/* Aset bawah MOBILE */}
        <div  className="relative w-full z-[-1]" 
  style={{ 
    height: "280px",
  }}>
          <Image src="/images/Hero/Pohon-KiriBawah.png" alt="Pohon Kiri" width={560} height={282} className="absolute bottom-0 left-0 w-[48vw] z-[1]" />
          <Image src="/images/LoveStory/Pohon-KananBawah.png" alt="Pohon Kanan" width={160} height={282} className="absolute bottom-0 right-0 w-[53vw] z-[1]" />
          <Image src="/images/Hero/DedaunanBelakangKiri.png" alt="Dedaunan" width={650} height={80} className="absolute bottom-0 left-0 w-[60vw] z-[0]" />
          <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={547} height={81} className="absolute bottom-0 -left-[18vw] w-[48vw] z-[2]" />
          <Image src="/images/Hero/Buah-MerahKiri.png" alt="Buah Merah" width={550} height={120} className="absolute bottom-0 -left-[6vw] w-[47vw] z-[1]" />
          <Image src="/images/Hero/Pohon-Akar.png" alt="Pohon Akar" width={520} height={80} className="absolute bottom-0 left-[25vw] w-[28vw] z-[1]" />
          <Image src="/images/Hero/Mawar-Putih.png" alt="Mawar Putih" width={570} height={70} className="absolute bottom-0 left-[38vw] w-[26vw] z-[3]" />
          <Image src="/images/Hero/MawarKuning..png" alt="Mawar Kuning" width={580} height={80} className="absolute bottom-0 left-[50vw] w-[19vw] z-[2]" />
          <Image src="/images/LoveStory/Pohon-BungaMerah.png" alt="Pohon Bunga Merah" width={150} height={120} className="absolute bottom-0 left-[57vw] w-[42vw] z-[1]" />
          <Image src="/images/LoveStory/Dedaunan.png" alt="Dedaunan" width={550} height={80} className="absolute bottom-0 right-[5.5vw] w-[29vw] z-[2]" />
          <Image src="/images/Hero/Pohon-BungaKecil.png" alt="Pohon Bunga Kecil" width={500} height={80} className="absolute bottom-0 -right-[2vw] w-[24vw] z-[1]" />
          <Image src="/images/LoveStory/Dedaunan-BelakangKanan.png" alt="Dedaunan Kanan" width={550} height={80} className="absolute bottom-0 right-0 w-[50vw] z-[0]" />
          {/* <img src="/images/LoveStory/Aset.webp" alt="Aset" className="absolute -bottom-[0.8vw] z-[1]" style={{ width: "155vw", height: "auto", left: "34.5%", transform: "translateX(-50%)", maxWidth: "none" }} /> */}
          {/* <video src="/images/Hero/Kunang.mp4" autoPlay loop muted playsInline className="absolute pointer-events-none z-[2]" style={{ width: "100%", height: "25%", bottom: 0, left: 0, objectFit: "cover", mixBlendMode: "screen" }} /> */}
           {/* <video
          src="/images/Hero/Kunang.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute pointer-events-none z-[1]"
          style={{
            width: "100%",
            height: "35%",
            bottom: 0,
            left: 0,
            objectFit: "cover",
            mixBlendMode: "screen",
          }}
        /> */}
        </div>
      </div>

      {/* ===================== KONTEN DESKTOP — normal ===================== */}
      <div className="hidden lg:block">
        {/* Kunang-kunang desktop */}
        {[0, "50%", undefined].map((left, i) => (
          <video key={i} src="/images/Hero/dekstop/Kunang.mp4" autoPlay loop muted playsInline className="absolute pointer-events-none z-[2]"
            style={{ width: "40%", height: "22vw", bottom: 0, ...(i === 0 ? { left: 0 } : i === 1 ? { left: "50%", transform: "translateX(-50%)" } : { right: 0 }), objectFit: "cover", mixBlendMode: "screen" }} />
        ))}

        <Image src="/images/Hero/Burung.gif" alt="Burung" width={400} height={150} className="absolute top-[65px] w-[667px] left-[350px]" />
        <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute top-[26%] left-[8vw] w-[11vw] z-[5]" />
        <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute bottom-[49%] right-[4vw] w-[10vw] z-[5]" />
        <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu" width={50} height={80} className="absolute bottom-[13vw] right-[16vw] w-[5vw] z-[5]" />
        <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu" width={50} height={80} className="absolute bottom-[9vw] left-[39.5vw] w-[3.5vw] z-[5] scale-x-[-1]" />
        <Image src="/images/Hero/KupuKupu-1.gif" alt="Kupu Kupu 1" width={50} height={80} className="absolute bottom-[15vw] left-[7.5%] w-[5vw] z-[5]" />
        <Image src="/images/Hero/KupuKupu-1.gif" alt="Kupu Kupu 1" width={50} height={80} className="absolute top-[10%] right-[9.5%] w-[5vw] z-[5]" />

        {/* Ranting desktop */}
        <Image src="/images/LoveStory/dekstop/Ranting-Kiri.webp" alt="Ranting Kiri" width={960} height={282} className="absolute -top-[4vw] left-0 w-[265px] z-[1]" />
        <Image src="/images/LoveStory/dekstop/Ranting-Kanan.webp" alt="Ranting Kanan" width={960} height={282} className="absolute -top-[4vw] right-0 w-[265px] z-[1]" />

        {/* Pohon & aset bawah desktop */}
        <Image src="/images/LoveStory/dekstop/Golden-Kiri.webp" alt="Golden Kiri" width={560} height={282} className="absolute bottom-0 -left-[1vw] w-[23vw] z-[1]" />
        <Image src="/images/LoveStory/dekstop/Pohon-Kanan.webp" alt="Pohon Kanan" width={160} height={282} className="absolute bottom-0 right-0 w-[23.5vw] z-[1]" />
        <img src="/images/LoveStory/dekstop/Aset.webp" alt="Aset" className="absolute -bottom-[0.1vw] z-[1]" style={{ width: "117vw", height: "auto", left: "51%", transform: "translateX(-50%)", maxWidth: "none" }} />

        {/* Teks konten desktop */}
        <div className="relative w-full flex flex-col items-center justify-center leading-none z-10 pt-[99px]">
          <h2 className="font-cylburn text-[64px] text-[#713324] tracking-wide">Love Story</h2>

          <div className="flex flex-col items-center justify-center text-center mt-[64px]">
            <h3 className="font-creators text-[20px] text-[#713324]">First meeting:</h3>
            <h3 className="font-creators text-[18px] text-[#713324] mt-5 leading-9">
              Their story began at a Starbucks in Bandung, where Jessie grabbed the coffee since she'd arrived <br /> on time. Then Jacky, visiting from Singapore, only had his SG cards and cash, so Jessie treated him <br /> to lunch too. Later, she drove him around the city, with Jacky happily riding along like a true <br /> 'passenger princess'
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center text-center mt-12">
            <h3 className="font-creators text-[20px] text-[#713324]">Dating:</h3>
            <h3 className="font-creators text-[18px] text-[#713324] mt-5 leading-9">
              From that first day, their connection grew through laughter that felt like home, conversations that <br />
              stretched late into the night, and adventures across many cities. They made memories by the sea <br /> and in the mountains, dreamed of the future, and slowly realised they had found their perfect <br /> match in each other.
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center text-center mt-12">
            <h3 className="font-creators text-[20px] text-[#713324]">Engagement:</h3>
            <h3 className="font-creators text-[18px] text-[#713324] mt-5 leading-9">
              Jessie thought it was just a casual trip to Singapore. In reality, Jacky had planned a surprise trip to <br />
              Hangzhou. He'd been sneaking around Xiaohongshu like a wedding planner on steroids—scouting <br /> the perfect spot, arranging a violinist, and hiring a florist. To top it off, he flew in two of Jessie's <br /> friends for the surprise. The result? Tears, laughter, and a very big "yes."
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center text-center mt-12">
            <h3 className="font-creators text-[20px] text-[#713324]">Together:</h3>
            <h3 className="font-creators text-[18px] text-[#713324] mt-5 leading-9">
              Now, they can't wait to step into their next chapter together. Surrounded by family and closest <br /> friends, they're ready to celebrate their love and begin their journey as husband and wife.
            </h3>
          </div>
        </div>
      </div>

    </section>
  );
};

export default LoveStory;


// // VERSI NORMAL sudah detailing UNTUK MOBILE DEKSTOP SUDAH SATU FILE
// import React from "react";
// import Image from "next/image";

// const LoveStory = () => {
//   return (
//     <section
//       id="lovestory"
//       className="relative w-full pt-[156px] pb-[369px] lg:pt-[99px] lg:pb-[366px] overflow-x-hidden overflow-y-hidden bg-[#F2E8D8]"
//     >
//       {/* Background Image */}
//       <Image
//         src="/images/LoveStory/Bg-LoveStory.png"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top lg:hidden"
//         priority
//       />

//       <Image
//         src="/images/LoveStory/dekstop/Bg-LoveStory.svg"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top hidden lg:block"
//         priority
//       />

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
//      <video
//   src="/images/Hero/Kunang.mp4"
//   autoPlay
//   loop
//   muted
//   playsInline
//   className="absolute pointer-events-none z-[2] lg:hidden"
//   style={{
//     // Cover seluruh section hero
//     width: "100%",
//     height: "15%",
//     bottom: 0,
//     left: 0,
//     objectFit: "cover",
//     mixBlendMode: "screen",
//   }}
// />


//       <Image
//         src="/images/Hero/Burung.gif"
//         alt="Burung"
//         width={400}
//         height={150}
//         className="absolute top-[65px] w-[102.6vw] lg:w-[667px] lg:left-[350px]"
//       />

//       <Image
//         src="/images/LoveStory/Burung.svg"
//         alt="Kupu Kupu 3"
//         width={133}
//         height={99}
//         className="absolute top-[31%] left-[0vw] w-[21vw] z-[5] lg:top-[26%] lg:left-[8vw] lg:w-[11vw]"
//       />

//       <Image
//         src="/images/LoveStory/Burung.svg"
//         alt="Kupu Kupu 3"
//         width={133}
//         height={99}
//         className="absolute bottom-[33.5%] -right-[6vw] w-[24vw] z-[5] lg:bottom-[49%] lg:right-[4vw] lg:w-[10vw]"
//       />

//       {/* Kupu Kupu 3 */}
//       <Image
//         src="/images/Hero/KupuKupu-3.gif"
//         alt="Kupu Kupu 3"
//         width={50}
//         height={80}
//         className="absolute bottom-[20vw] left-[37vw] w-[11vw] z-[5] lg:hidden"
//       />

//       {/* KUPU KUPU TAMBAHAN DEKSTOP */}
//       <Image
//         src="/images/Hero/KupuKupu-3.gif"
//         alt="Kupu Kupu 3"
//         width={50}
//         height={80}
//         className="absolute bottom-[13vw] right-[16vw] w-[5vw] z-[5] hidden lg:block"
//       />

//       {/* KUPU KUPU TAMBAHAN DEKSTOP */}
//       <Image
//         src="/images/Hero/KupuKupu-3.gif"
//         alt="Kupu Kupu 3"
//         width={50}
//         height={80}
//         className="absolute bottom-[9vw] left-[39.5vw] w-[3.5vw] z-[5] hidden lg:block scale-x-[-1]"
//       />

//             {/* KUPU KUPU TAMBAHAN DEKSTOP */}
//  <Image
//         src="/images/Hero/KupuKupu-1.gif"
//         alt="Kupu Kupu 3"
//         width={50}
//         height={80}
//         className="absolute bottom-[15vw] left-[7.5%] w-[5vw]  z-[5] hidden lg:block"
//       />






//       <Image
//         src="/images/Hero/KupuKupu-1.gif"
//         alt="Kupu Kupu 3"
//         width={50}
//         height={80}
//         className="absolute bottom-[73vw] right-[5vw] w-[9.5vw] lg:top-[10%] lg:right-[9.5%] lg:w-[5vw]  z-[5]"
//       />

//       {/* RANTING KHUSUS MOBILE */}
//       <Image
//         src="/images/LoveStory/Ranting-Kanan.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute top-0 right-0 w-[45vw] z-[1] lg:hidden"
//       />

//       <Image
//         src="/images/LoveStory/Ranting-Kiri.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute top-0 left-0 w-[45vw] z-[1] lg:hidden"
//       />

//       {/* RANTING KHUSUS DEKSTOP */}

//       <Image
//         src="/images/LoveStory/dekstop/Ranting-Kiri.webp"
//         alt="Pohon Golden Kiri Bawah"
//         width={960}
//         height={282}
//         className="absolute -top-[4vw] left-0 w-[265px] z-[1] hidden lg:block"
//       />

//       <Image
//         src="/images/LoveStory/dekstop/Ranting-Kanan.webp"
//         alt="Pohon Golden Kiri Bawah"
//         width={960}
//         height={282}
//         className="absolute -top-[4vw] right-0 w-[265px] z-[1] hidden lg:block"
//       />

//       {/* Pohon Golden Kiri Bawah MOBILE */}
//       <Image
//         src="/images/Hero/Pohon-KiriBawah.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute bottom-0 lg:-bottom-[1vw] left-0 w-[48vw] lg:w-[21vw] lg:-left-[5vw] z-[1] lg:hidden"
//       />

//       {/* Pohon Golden Kiri Bawah DEKSTOP */}
//       <Image
//         src="/images/LoveStory/dekstop/Golden-Kiri.webp"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute bottom-0 lg:-bottom-[1vw] -left-[1vw] w-[23vw]  z-[1] hidden lg:block"
//       />

//       {/* Pohon Kanan Bawah MOBILE */}
//       <Image
//         src="/images/LoveStory/Pohon-KananBawah.png"
//         alt="Pohon Kanan Bawah"
//         width={160}
//         height={282}
//         className="absolute bottom-0 right-0 w-[53vw] lg:w-[21vw] z-[1] lg:hidden"
//       />

//       {/* Pohon Kanan Bawah DEKSTOP */}
//       <Image
//         src="/images/LoveStory/dekstop/Pohon-Kanan.webp"
//         alt="Pohon Kanan Bawah"
//         width={160}
//         height={282}
//         className="absolute bottom-0 right-0 w-[23.5vw] z-[1] hidden lg:block"
//       />

//       <img
//         src="/images/LoveStory/dekstop/Aset.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -bottom-[0.1vw] z-[1] hidden lg:block"
//         style={{
//           width: "117vw",
//           height: "auto",
//           left: "51%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       <img
//         src="/images/LoveStory/Aset.webp"
//         alt="Pohon Kanan Bawah"
//         className="absolute -bottom-[0.5vw] z-[1] lg:hidden"
//         style={{
//           width: "155vw",
//           height: "auto",
//           left: "34.5%",
//           transform: "translateX(-50%)",
//           maxWidth: "none",
//         }}
//       />

//       <div className="relative  w-full flex flex-col items-center justify-center leading-none z-10">
//         <h2 className="font-cylburn text-[42px] lg:text-[64px] text-[#713324] tracking-wide">
//           Love Story
//         </h2>

//         <div className="flex flex-col items-center justify-center text-center mt-[51px] lg:mt-[64px]">
//           <h3 className="font-creators text-[14px] lg:text-[20px] text-[#713324]">
//             First meeting:
//           </h3>
//           <h3 className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-3 leading-5 lg:mt-5 lg:leading-9">
//             Their story began at a Starbucks in Bandung, where{" "}
//             <br className="lg:hidden" />
//             Jessie grabbed the coffee since she'd arrived{" "}
//             <br className="hidden lg:block" /> on <br className="lg:hidden" />
//             time. Then Jacky, visiting from Singapore, only had{" "}
//             <br className="lg:hidden" />
//             his SG cards and cash, so Jessie treated him{" "}
//             <br className="hidden lg:block" /> to lunch{" "}
//             <br className="lg:hidden" />
//             too. Later, she drove him around the city, with Jacky{" "}
//             <br className="lg:hidden" />
//             happily riding along like a true <br className="hidden lg:block" />{" "}
//             'passenger princess <br />
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
//           <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
//             Dating:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
//             From that first day, their connection grew through{" "}
//             <br className="lg:hidden" />
//             laughter that felt like home, conversations that <br />
//             stretched late into the night, and adventures across{" "}
//             <br className="lg:hidden" />
//             many cities. They made memories by the sea{" "}
//             <br className="hidden lg:block" /> and in{" "}
//             <br className="lg:hidden" />
//             the mountains, dreamed of the future, and slowly{" "}
//             <br className="lg:hidden" />
//             realised they had found their perfect{" "}
//             <br className="hidden lg:block" /> match in each{" "}
//             <br className="lg:hidden" />
//             other.
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
//           <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
//             Engagement:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
//             Jessie thought it was just a casual trip to Singapore.{" "}
//             <br className="lg:hidden" />
//             In reality, Jacky had planned a surprise trip to <br />
//             Hangzhou. He'd been sneaking around Xiaohongshu{" "}
//             <br className="lg:hidden" />
//             like a wedding planner on steroids—scouting{" "}
//             <br className="hidden lg:block" /> the <br className="lg:hidden" />
//             perfect spot, arranging a violinist, and hiring a{" "}
//             <br className="lg:hidden" />
//             florist. To top it off, he flew in two of Jessie's{" "}
//             <br className="hidden lg:block" /> friends{" "}
//             <br className="lg:hidden" />
//             for the surprise. The result? Tears, laughter, and a{" "}
//             <br className="lg:hidden" />
//             very big "yes."
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
//           <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
//             Together:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
//             Now, they can't wait to step into their next chapter
//             <br className="lg:hidden" />
//             together. Surrounded by family and closest{" "}
//             <br className="hidden lg:block" /> friends,
//             <br className="lg:hidden" />
//             they're ready to celebrate their love and begin their
//             <br className="lg:hidden" />
//             journey as husband and wife
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoveStory;































// VERSI STICKY
// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "@/lib/animation";

// const LoveStory = () => {
//   return (
//    <section 
//   id="lovestory" 
//   className="relative w-full"
//   style={{ overflowX: "clip" }}  
// >

//       {/* BG sticky — diam saat konten scroll */}
// <div className="sticky top-0 w-full z-[0]" style={{ height: "844px" }}>
//         <Image
//           src="/images/LoveStory/Bg-LoveStory.png"
//           alt="Hero Background"
//           fill
//           className="object-cover object-bottom"
//           priority
//         />
//         <Image src="/images/LoveStory/Ranting-Kanan.png" alt="Ranting Kanan" width={560} height={282} className="absolute top-0 right-0 w-[43vw] z-[5]" />
//         <Image src="/images/LoveStory/Ranting-Kiri.png" alt="Ranting Kiri" width={560} height={282} className="absolute top-0 left-0 w-[43vw] z-[5]" />
//       </div>

//       {/* Konten scroll normal di atas BG */}
// <div className="relative w-full z-[2]" style={{ marginTop: "-844px" }}>
//         <Image src="/images/Hero/Burung.gif" alt="Burung" width={400} height={150} className="absolute top-[65px] w-[102.6vw]" />
//         <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute top-[110vw] left-0 w-[21vw] z-[3]" />
//         <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute top-[202vw] -right-[7vw] w-[24vw] z-[3]" />
//         <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu" width={50} height={80} className="absolute bottom-[20vw] left-[39vw] w-[11vw] z-[3]" />

//         <div className="w-full flex flex-col items-center justify-center leading-none text-center pt-[40vw] pb-[16vw]">
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <h2 className="font-cylburn text-[42px] text-[#713324] tracking-wide">Love Story</h2>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <div className="flex flex-col items-center text-center mt-[51px]">
//               <h3 className="font-creators text-[14px] text-[#713324]">First meeting:</h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Their story began at a Starbucks in Bandung, where <br />
//                 Jessie grabbed the coffee since she'd arrived on time. <br />
//                 Then Jacky, visiting from Singapore, only had his SG <br />
//                 cards and cash, so Jessie treated him to lunch too. <br />
//                 Later, she drove him around the city, with Jacky <br />
//                 happily riding along like a true 'passenger princess'
//               </h3>
//             </div>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <div className="flex flex-col items-center text-center mt-9">
//               <h3 className="font-creators text-[14px] text-[#713324]">Dating:</h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 From that first day, their connection grew through <br />
//                 laughter that felt like home, conversations that <br />
//                 stretched late into the night, and adventures across <br />
//                 many cities. They made memories by the sea and in <br />
//                 the mountains, dreamed of the future, and slowly <br />
//                 realised they had found their perfect match in each <br />
//                 other.
//               </h3>
//             </div>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <div className="flex flex-col items-center text-center mt-9">
//               <h3 className="font-creators text-[14px] text-[#713324]">Engagement:</h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Jessie thought it was just a casual trip to Singapore. <br />
//                 In reality, Jacky had planned a surprise trip to Hangzhou. <br />
//                 He'd been sneaking around Xiaohongshu like a wedding <br />
//                 planner on steroids—scouting the perfect spot, arranging <br />
//                 a violinist, and hiring a florist. To top it off, he flew in <br />
//                 two of Jessie's friends. The result? Tears, laughter, and a <br />
//                 very big "yes."
//               </h3>
//             </div>
//           </motion.div>
//           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
//             <div className="flex flex-col items-center text-center mt-9">
//               <h3 className="font-creators text-[14px] text-[#713324]">Together:</h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Now, they can't wait to step into their next chapter <br />
//                 together. Surrounded by family and closest friends, <br />
//                 they're ready to celebrate their love and begin their <br />
//                 journey as husband and wife.
//               </h3>
//             </div>
//           </motion.div>
//         </div>

//         {/* Aset bawah — ikut scroll normal */}
//         <div className="relative w-full" style={{ height: "280px" }}>
//           <Image src="/images/Hero/Pohon-KiriBawah.png" alt="Pohon Kiri" width={560} height={282} className="absolute bottom-0 left-0 w-[48vw] z-[1]" />
//           <Image src="/images/LoveStory/Pohon-KananBawah.png" alt="Pohon Kanan" width={160} height={282} className="absolute bottom-0 right-0 w-[50vw] z-[1]" />
//           <Image src="/images/Hero/DedaunanBelakangKiri.png" alt="Dedaunan" width={650} height={80} className="absolute bottom-0 left-0 w-[60vw] z-[0]" />
//           <Image src="/images/Hero/Daun-Pandan.png" alt="Daun Pandan" width={547} height={81} className="absolute bottom-0 -left-[18vw] w-[48vw] z-[2]" />
//           <Image src="/images/Hero/Buah-MerahKiri.png" alt="Buah Merah" width={550} height={120} className="absolute bottom-0 -left-[6vw] w-[47vw] z-[1]" />
//           <Image src="/images/Hero/Pohon-Akar.png" alt="Pohon Akar" width={520} height={80} className="absolute bottom-0 left-[25vw] w-[28vw] z-[1]" />
//           <Image src="/images/Hero/Mawar-Putih.png" alt="Mawar Putih" width={570} height={70} className="absolute bottom-0 left-[38vw] w-[26vw] z-[3]" />
//           <Image src="/images/Hero/MawarKuning..png" alt="Mawar Kuning" width={580} height={80} className="absolute bottom-0 left-[50vw] w-[19vw] z-[2]" />
//           <Image src="/images/LoveStory/Pohon-BungaMerah.png" alt="Pohon Bunga Merah" width={150} height={120} className="absolute bottom-0 left-[57vw] w-[42vw] z-[1]" />
//           <Image src="/images/LoveStory/Dedaunan.png" alt="Dedaunan" width={550} height={80} className="absolute bottom-0 right-[5.5vw] w-[29vw] z-[2]" />
//           <Image src="/images/Hero/Pohon-BungaKecil.png" alt="Pohon Bunga Kecil" width={500} height={80} className="absolute bottom-0 -right-[2vw] w-[24vw] z-[1]" />
//           <Image src="/images/LoveStory/Dedaunan-BelakangKanan.png" alt="Dedaunan Kanan" width={550} height={80} className="absolute bottom-0 right-0 w-[50vw] z-[0]" />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default LoveStory;
