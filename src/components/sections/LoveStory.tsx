// VERSI NORMAL UNTUK MOBILE DEKSTOP SUDAH SATU FILE
import React from "react";
import Image from "next/image";

const LoveStory = () => {
  return (
    <section
      id="lovestory"
      className="relative w-full pt-[156px] pb-[369px] lg:pt-[99px] lg:pb-[366px] overflow-x-hidden overflow-y-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/LoveStory/Bg-LoveStory.png"
        alt="Hero Background"
        fill
        className="object-cover object-top lg:hidden"
        priority
      />

      <Image
        src="/images/LoveStory/dekstop/Bg-LoveStory.svg"
        alt="Hero Background"
        fill
        className="object-cover object-top hidden lg:block"
        priority
      />

      <Image
        src="/images/Hero/Burung.gif"
        alt="Burung"
        width={400}
        height={150}
        className="absolute top-[65px] w-[102.6vw] lg:hidden"
      />

      <Image
        src="/images/LoveStory/Burung.svg"
        alt="Kupu Kupu 3"
        width={133}
        height={99}
        className="absolute top-[31%] left-[0vw] w-[21vw] z-[5] lg:hidden"
      />

      <Image
        src="/images/LoveStory/Burung.svg"
        alt="Kupu Kupu 3"
        width={133}
        height={99}
        className="absolute bottom-[33.5%] -right-[6vw] w-[24vw] z-[5] lg:hidden"
      />

      {/* Kupu Kupu 3 */}
      <Image
        src="/images/Hero/KupuKupu-3.gif"
        alt="Kupu Kupu 3"
        width={50}
        height={80}
        className="absolute bottom-[20vw] left-[37vw] w-[11vw] z-[5] lg:hidden"
      />

      {/* KUPU KUPU TAMBAHAN DEKSTOP */}
      <Image
        src="/images/Hero/KupuKupu-3.gif"
        alt="Kupu Kupu 3"
        width={50}
        height={80}
        className="absolute bottom-[13vw] right-[16vw] w-[5vw] z-[5] hidden lg:block"
      />

      {/* KUPU KUPU TAMBAHAN DEKSTOP */}
      <Image
        src="/images/Hero/KupuKupu-3.gif"
        alt="Kupu Kupu 3"
        width={50}
        height={80}
        className="absolute bottom-[9vw] left-[39.5vw] w-[3.5vw] z-[5] hidden lg:block scale-x-[-1]"
      />

            {/* KUPU KUPU TAMBAHAN DEKSTOP */}
 <Image
        src="/images/Hero/KupuKupu-1.gif"
        alt="Kupu Kupu 3"
        width={50}
        height={80}
        className="absolute bottom-[15vw] left-[7.5%] w-[5vw]  z-[5] hidden lg:block"
      />






      <Image
        src="/images/Hero/KupuKupu-1.gif"
        alt="Kupu Kupu 3"
        width={50}
        height={80}
        className="absolute bottom-[73vw] right-[5vw] w-[9.5vw] lg:top-[11.5%] lg:right-[9%] lg:w-[5vw]  z-[5]"
      />

      {/* RANTING KHUSUS MOBILE */}
      <Image
        src="/images/LoveStory/Ranting-Kanan.png"
        alt="Pohon Golden Kiri Bawah"
        width={560}
        height={282}
        className="absolute top-0 right-0 w-[43vw] z-[1] lg:hidden"
      />

      <Image
        src="/images/LoveStory/dekstop/Ranting-Kiri.webp"
        alt="Pohon Golden Kiri Bawah"
        width={560}
        height={282}
        className="absolute top-0 left-0 w-[43vw] z-[1] lg:hidden"
      />

      {/* RANTING KHUSUS DEKSTOP */}

      <Image
        src="/images/LoveStory/dekstop/Ranting-Kiri.webp"
        alt="Pohon Golden Kiri Bawah"
        width={960}
        height={282}
        className="absolute -top-[2vw] left-0 w-[250px] z-[1] hidden lg:block"
      />

      <Image
        src="/images/LoveStory/dekstop/Ranting-Kanan.webp"
        alt="Pohon Golden Kiri Bawah"
        width={960}
        height={282}
        className="absolute -top-[2vw] right-0 w-[250px] z-[1] hidden lg:block"
      />

      {/* Pohon Golden Kiri Bawah MOBILE */}
      <Image
        src="/images/Hero/Pohon-KiriBawah.png"
        alt="Pohon Golden Kiri Bawah"
        width={560}
        height={282}
        className="absolute bottom-0 lg:-bottom-[1vw] left-0 w-[48vw] lg:w-[21vw] lg:-left-[5vw] z-[1] lg:hidden"
      />

      {/* Pohon Golden Kiri Bawah DEKSTOP */}
      <Image
        src="/images/LoveStory/dekstop/Golden-Kiri.webp"
        alt="Pohon Golden Kiri Bawah"
        width={560}
        height={282}
        className="absolute bottom-0 lg:-bottom-[1vw] -left-[1vw] w-[23vw]  z-[1] hidden lg:block"
      />

      {/* Pohon Kanan Bawah MOBILE */}
      <Image
        src="/images/LoveStory/Pohon-KananBawah.png"
        alt="Pohon Kanan Bawah"
        width={160}
        height={282}
        className="absolute bottom-0 right-0 w-[53vw] lg:w-[21vw] z-[1] lg:hidden"
      />

      {/* Pohon Kanan Bawah DEKSTOP */}
      <Image
        src="/images/LoveStory/dekstop/Pohon-Kanan.webp"
        alt="Pohon Kanan Bawah"
        width={160}
        height={282}
        className="absolute bottom-0 right-0 w-[23.5vw] z-[1] hidden lg:block"
      />

      <img
        src="/images/LoveStory/dekstop/Aset.webp"
        alt="Pohon Kanan Bawah"
        className="absolute -bottom-[0.1vw] z-[1] hidden lg:block"
        style={{
          width: "117vw",
          height: "auto",
          left: "51%",
          transform: "translateX(-50%)",
          maxWidth: "none",
        }}
      />

      <img
        src="/images/LoveStory/Aset.webp"
        alt="Pohon Kanan Bawah"
        className="absolute -bottom-[0.5vw] z-[1] lg:hidden"
        style={{
          width: "150vw",
          height: "auto",
          left: "35%",
          transform: "translateX(-50%)",
          maxWidth: "none",
        }}
      />

      <div className="relative  w-full flex flex-col items-center justify-center leading-none z-10">
        <h2 className="font-cylburn text-[42px] lg:text-[64px] text-[#713324] tracking-wide">
          Love Story
        </h2>

        <div className="flex flex-col items-center justify-center text-center mt-[51px] lg:mt-[64px]">
          <h3 className="font-creators text-[14px] lg:text-[20px] text-[#713324]">
            First meeting:
          </h3>
          <h3 className="font-creators text-[12px] lg:text-[18px] text-[#713324] mt-3 leading-5 lg:mt-5 lg:leading-9">
            Their story began at a Starbucks in Bandung, where{" "}
            <br className="lg:hidden" />
            Jessie grabbed the coffee since she'd arrived{" "}
            <br className="hidden lg:block" /> on <br className="lg:hidden" />
            time. Then Jacky, visiting from Singapore, only had{" "}
            <br className="lg:hidden" />
            his SG cards and cash, so Jessie treated him{" "}
            <br className="hidden lg:block" /> to lunch{" "}
            <br className="lg:hidden" />
            too. Later, she drove him around the city, with Jacky{" "}
            <br className="lg:hidden" />
            happily riding along like a true <br className="hidden lg:block" />{" "}
            'passenger princess <br />
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
          <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
            Dating:
          </h3>
          <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
            From that first day, their connection grew through{" "}
            <br className="lg:hidden" />
            laughter that felt like home, conversations that <br />
            stretched late into the night, and adventures across{" "}
            <br className="lg:hidden" />
            many cities. They made memories by the sea{" "}
            <br className="hidden lg:block" /> and in{" "}
            <br className="lg:hidden" />
            the mountains, dreamed of the future, and slowly{" "}
            <br className="lg:hidden" />
            realised they had found their perfect{" "}
            <br className="hidden lg:block" /> match in each{" "}
            <br className="lg:hidden" />
            other.
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
          <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
            Engagement:
          </h3>
          <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
            Jessie thought it was just a casual trip to Singapore.{" "}
            <br className="lg:hidden" />
            In reality, Jacky had planned a surprise trip to <br />
            Hangzhou. He'd been sneaking around Xiaohongshu{" "}
            <br className="lg:hidden" />
            like a wedding planner on steroids—scouting{" "}
            <br className="hidden lg:block" /> the <br className="lg:hidden" />
            perfect spot, arranging a violinist, and hiring a{" "}
            <br className="lg:hidden" />
            florist. To top it off, he flew in two of Jessie's{" "}
            <br className="hidden lg:block" /> friends{" "}
            <br className="lg:hidden" />
            for the surprise. The result? Tears, laughter, and a{" "}
            <br className="lg:hidden" />
            very big "yes."
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
          <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
            Together:
          </h3>
          <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
            Now, they can't wait to step into their next chapter
            <br className="lg:hidden" />
            together. Surrounded by family and closest{" "}
            <br className="hidden lg:block" /> friends,
            <br className="lg:hidden" />
            they're ready to celebrate their love and begin their
            <br className="lg:hidden" />
            journey as husband and wife
          </h3>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;

// versi scrrol namun belum fix
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, stagger } from "@/lib/animation";

// const LoveStory = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const scrollDivRef = useRef<HTMLDivElement>(null);
//   const [isFullyVisible, setIsFullyVisible] = useState(false);
//   const isFullyVisibleRef = useRef(false);
//   const touchStartY = useRef(0);
//   const lastEventTime = useRef(0); // ← hanya tambahan ini

//   useEffect(() => {
//     const section = sectionRef.current;
//     const innerDiv = scrollDivRef.current;
//     if (!section || !innerDiv) return;

//     const handleWheel = (e: WheelEvent) => {
//       // Throttle: skip event yang terlalu cepat berturutan (< 32ms)
//       const now = Date.now();
//       if (now - lastEventTime.current < 32) {
//         // Tetap preventDefault jika sedang locked, agar page tidak ikut scroll
//         if (isFullyVisibleRef.current) e.preventDefault();
//         return;
//       }
//       lastEventTime.current = now;

//       const rect = section.getBoundingClientRect();
//       const isSectionActive =
//         rect.top <= 0 && rect.bottom >= window.innerHeight;
//       if (!isSectionActive) return;

//       if (rect.bottom < 0 || rect.top > window.innerHeight) return;
//       if (rect.top > 0) return;

//       if (!isFullyVisibleRef.current) {
//         isFullyVisibleRef.current = true;
//         setIsFullyVisible(true);
//       }

//       const { scrollTop, scrollHeight, clientHeight } = innerDiv;
//       const atTop = scrollTop === 0 && e.deltaY < 0;
//       const atBottom =
//         scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;

//       if (atTop || atBottom) {
//         isFullyVisibleRef.current = false;
//         setIsFullyVisible(false);
//         return;
//       }

//       e.preventDefault();
//       innerDiv.scrollTop += e.deltaY;
//     };

//     const handleTouchStart = (e: TouchEvent) => {
//       touchStartY.current = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       const rect = section.getBoundingClientRect();

//       const isSectionActive =
//         rect.top <= 0 && rect.bottom >= window.innerHeight;
//       if (!isSectionActive) return;

//       if (rect.bottom < 0 || rect.top > window.innerHeight) return;
//       if (rect.top > 0) return;

//       if (!isFullyVisibleRef.current) {
//         isFullyVisibleRef.current = true;
//         setIsFullyVisible(true);
//       }

//       const deltaY = touchStartY.current - e.touches[0].clientY;
//       const { scrollTop, scrollHeight, clientHeight } = innerDiv;
//       const atTop = scrollTop === 0 && deltaY < 0;
//       const atBottom =
//         scrollTop + clientHeight >= scrollHeight - 1 && deltaY > 0;

//       if (atTop || atBottom) {
//         isFullyVisibleRef.current = false;
//         setIsFullyVisible(false);
//         return;
//       }

//       e.preventDefault();
//       innerDiv.scrollTop += deltaY;
//       touchStartY.current = e.touches[0].clientY;
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("touchstart", handleTouchStart, { passive: true });
//     window.addEventListener("touchmove", handleTouchMove, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, []);

//   return (
//     <section
//       id="lovestory"
//       ref={sectionRef}
//       className="relative w-full overflow-hidden"
//       style={{ height: "844px" }}
//     >
//       <Image
//         src="/images/LoveStory/Bg-LoveStory.png"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top"
//         priority
//       />

//       <Image
//         src="/images/LoveStory/Ranting-Kanan.png"
//         alt="Ranting Kanan"
//         width={560}
//         height={282}
//         className="absolute top-0 right-0 w-[43vw] z-[5]"
//       />
//       <Image
//         src="/images/LoveStory/Ranting-Kiri.png"
//         alt="Ranting Kiri"
//         width={560}
//         height={282}
//         className="absolute top-0 left-0 w-[43vw] z-[5]"
//       />

//       <div
//         ref={scrollDivRef}
//         className="absolute inset-0 z-[2]"
//         style={{
//           overflowY: isFullyVisible ? "auto" : "hidden",
//           scrollbarWidth: "none",
//         }}
//       >
//         <div className="relative w-full">
//           <Image
//             src="/images/Hero/Burung.gif"
//             alt="Burung"
//             width={400}
//             height={150}
//             className="absolute top-[65px] w-[102.6vw]"
//           />
//           <Image
//             src="/images/LoveStory/Burung.svg"
//             alt="Burung"
//             width={133}
//             height={99}
//             className="absolute top-[110vw] left-0 w-[21vw] z-[3]"
//           />
//           <Image
//             src="/images/LoveStory/Burung.svg"
//             alt="Burung"
//             width={133}
//             height={99}
//             className="absolute top-[202vw] -right-[7vw] w-[24vw] z-[3]"
//           />
//           <Image
//             src="/images/Hero/KupuKupu-3.gif"
//             alt="Kupu Kupu"
//             width={50}
//             height={80}
//             className="absolute bottom-[20vw] left-[39vw] w-[11vw] z-[3]"
//           />

//           <div className="w-full flex flex-col items-center justify-center leading-none text-center pt-[40vw] pb-[100vw]">
//             <motion.div
//                       variants={fadeUp}
//                       initial="hidden"
//                       whileInView="show"
//                       viewport={{ once: true, amount: 0.25 }}
//                       transition={{ duration: 1.8, ease: "easeOut" }}
//                     >
//             <h2 className="font-cylburn text-[42px] text-[#713324] tracking-wide">
//               Love Story
//             </h2>
//             </motion.div>

//              <motion.div
//                       variants={fadeUp}
//                       initial="hidden"
//                       whileInView="show"
//                       viewport={{ once: true, amount: 0.25 }}
//                       transition={{ duration: 1.8, ease: "easeOut" }}
//                     >
//             <div className="flex flex-col items-center text-center mt-[51px]">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 First meeting:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Their story began at a Starbucks in Bandung, where <br />
//                 Jessie grabbed the coffee since she'd arrived on time. <br />
//                 Then Jacky, visiting from Singapore, only had his SG <br />
//                 cards and cash, so Jessie treated him to lunch too. <br />
//                 Later, she drove him around the city, with Jacky <br />
//                 happily riding along like a true 'passenger princess'
//               </h3>
//             </div>
//             </motion.div>

//              <motion.div
//                       variants={fadeUp}
//                       initial="hidden"
//                       whileInView="show"
//                       viewport={{ once: true, amount: 0.25 }}
//                       transition={{ duration: 1.8, ease: "easeOut" }}
//                     >
//             <div className="flex flex-col items-center text-center mt-9">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 Dating:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 From that first day, their connection grew through <br />
//                 laughter that felt like home, conversations that <br />
//                 stretched late into the night, and adventures across <br />
//                 many cities. They made memories by the sea and in <br />
//                 the mountains, dreamed of the future, and slowly <br />
//                 realised they had found their perfect match in each <br/>
//                 other.
//               </h3>
//             </div>
//             </motion.div>

//              <motion.div
//                       variants={fadeUp}
//                       initial="hidden"
//                       whileInView="show"
//                       viewport={{ once: true, amount: 0.25 }}
//                       transition={{ duration: 1.8, ease: "easeOut" }}
//                     >
//             <div className="flex flex-col items-center text-center mt-9">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 Engagement:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Jessie thought it was just a casual trip to Singapore. <br />
//                 In reality, Jacky had planned a surprise trip to Hangzhou.{" "}
//                 <br />
//                 He'd been sneaking around Xiaohongshu like a wedding <br />
//                 planner on steroids—scouting the perfect spot, arranging <br />
//                 a violinist, and hiring a florist. To top it off, he flew in{" "}
//                 <br />
//                 two of Jessie's friends. The result? Tears, laughter, and a  <br />
//                 very
//                 big "yes."
//               </h3>
//             </div>
//             </motion.div>

//               <motion.div
//                       variants={fadeUp}
//                       initial="hidden"
//                       whileInView="show"
//                       viewport={{ once: true, amount: 0.25 }}
//                       transition={{ duration: 1.8, ease: "easeOut" }}
//                     >
//             <div className="flex flex-col items-center text-center mt-9">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 Together:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Now, they can't wait to step into their next chapter <br />
//                 together. Surrounded by family and closest friends, <br />
//                 they're ready to celebrate their love and begin their <br />
//                 journey as husband and wife.
//               </h3>
//             </div>
//                       </motion.div>

//           </div>

//           <div className="relative w-full" style={{ height: "0px" }}>
//             <Image
//               src="/images/Hero/Pohon-KiriBawah.png"
//               alt="Pohon Kiri"
//               width={560}
//               height={282}
//               className="absolute bottom-0 left-0 w-[48vw] z-[1]"
//             />
//             <Image
//               src="/images/LoveStory/Pohon-KananBawah.png"
//               alt="Pohon Kanan"
//               width={160}
//               height={282}
//               className="absolute bottom-0 right-0 w-[50vw] z-[1]"
//             />
//             <Image
//               src="/images/Hero/DedaunanBelakangKiri.png"
//               alt="Dedaunan"
//               width={650}
//               height={80}
//               className="absolute bottom-0 left-0 w-[60vw] z-[0]"
//             />
//             <Image
//               src="/images/Hero/Daun-Pandan.png"
//               alt="Daun Pandan"
//               width={547}
//               height={81}
//               className="absolute bottom-0 -left-[18vw] w-[48vw] z-[2]"
//             />
//             <Image
//               src="/images/Hero/Buah-MerahKiri.png"
//               alt="Buah Merah"
//               width={550}
//               height={120}
//               className="absolute bottom-0 -left-[6vw] w-[47vw] z-[1]"
//             />
//             <Image
//               src="/images/Hero/Pohon-Akar.png"
//               alt="Pohon Akar"
//               width={520}
//               height={80}
//               className="absolute bottom-0 left-[25vw] w-[28vw] z-[1]"
//             />
//             <Image
//               src="/images/Hero/Mawar-Putih.png"
//               alt="Mawar Putih"
//               width={570}
//               height={70}
//               className="absolute bottom-0 left-[38vw] w-[26vw] z-[3]"
//             />
//             <Image
//               src="/images/Hero/MawarKuning..png"
//               alt="Mawar Kuning"
//               width={580}
//               height={80}
//               className="absolute bottom-0 left-[50vw] w-[19vw] z-[2]"
//             />
//             <Image
//               src="/images/LoveStory/Pohon-BungaMerah.png"
//               alt="Pohon Bunga Merah"
//               width={150}
//               height={120}
//               className="absolute bottom-0 left-[57vw] w-[42vw] z-[1]"
//             />
//             <Image
//               src="/images/LoveStory/Dedaunan.png"
//               alt="Dedaunan"
//               width={550}
//               height={80}
//               className="absolute bottom-0 right-[5.5vw] w-[29vw] z-[2]"
//             />
//             <Image
//               src="/images/Hero/Pohon-BungaKecil.png"
//               alt="Pohon Bunga Kecil"
//               width={500}
//               height={80}
//               className="absolute bottom-0 -right-[2vw] w-[24vw] z-[1]"
//             />
//             <Image
//               src="/images/LoveStory/Dedaunan-BelakangKanan.png"
//               alt="Dedaunan Kanan"
//               width={550}
//               height={80}
//               className="absolute bottom-0 right-0 w-[50vw] z-[0]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default LoveStory;

// VERSI 150
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";

// const LoveStory = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const scrollDivRef = useRef<HTMLDivElement>(null);
//   const [isFullyVisible, setIsFullyVisible] = useState(false);
//   const isFullyVisibleRef = useRef(false);
//   const touchStartY = useRef(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const innerDiv = scrollDivRef.current;
//     if (!section || !innerDiv) return;

//     const handleWheel = (e: WheelEvent) => {
//       const rect = section.getBoundingClientRect();

//       // Section harus full di viewport (dengan toleransi 50px)
//       const isSectionActive = rect.top <= 50 && rect.bottom >= window.innerHeight - 50;
//       if (!isSectionActive) return;

//       if (!isFullyVisibleRef.current) {
//         isFullyVisibleRef.current = true;
//         setIsFullyVisible(true);
//       }

//       const { scrollTop, scrollHeight, clientHeight } = innerDiv;
//       const atTop = scrollTop <= 0 && e.deltaY < 0;
//       const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;

//       if (atTop || atBottom) {
//         isFullyVisibleRef.current = false;
//         setIsFullyVisible(false);
//         return;
//       }

//       e.preventDefault();
//       innerDiv.scrollTop += e.deltaY;
//     };

//     const handleTouchStart = (e: TouchEvent) => {
//       touchStartY.current = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       const rect = section.getBoundingClientRect();

//       const isSectionActive = rect.top <= 50 && rect.bottom >= window.innerHeight - 50;
//       if (!isSectionActive) return;

//       if (!isFullyVisibleRef.current) {
//         isFullyVisibleRef.current = true;
//         setIsFullyVisible(true);
//       }

//       const deltaY = touchStartY.current - e.touches[0].clientY;
//       const { scrollTop, scrollHeight, clientHeight } = innerDiv;
//       const atTop = scrollTop <= 0 && deltaY < 0;
//       const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && deltaY > 0;

//       if (atTop || atBottom) {
//         isFullyVisibleRef.current = false;
//         setIsFullyVisible(false);
//         return;
//       }

//       e.preventDefault();
//       innerDiv.scrollTop += deltaY;
//       touchStartY.current = e.touches[0].clientY;
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("touchstart", handleTouchStart, { passive: true });
//     window.addEventListener("touchmove", handleTouchMove, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, []);

//   return (
//     <section
//       id="lovestory"
//       ref={sectionRef}
//       className="relative w-full overflow-hidden"
//       style={{ height: "844px" }}
//     >
//       <Image
//         src="/images/LoveStory/Bg-LoveStory.png"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top"
//         priority
//       />

//       <Image
//         src="/images/LoveStory/Ranting-Kanan.png"
//         alt="Ranting Kanan"
//         width={560}
//         height={282}
//         className="absolute top-0 right-0 w-[43vw] z-[5]"
//       />
//       <Image
//         src="/images/LoveStory/Ranting-Kiri.png"
//         alt="Ranting Kiri"
//         width={560}
//         height={282}
//         className="absolute top-0 left-0 w-[43vw] z-[5]"
//       />

//       <div
//         ref={scrollDivRef}
//         className="absolute inset-0 z-[2]"
//         style={{
//           overflowY: isFullyVisible ? "auto" : "hidden",
//           scrollbarWidth: "none",
//         }}
//       >
//         <div className="relative w-full">
//           <Image
//             src="/images/Hero/Burung.gif"
//             alt="Burung"
//             width={400}
//             height={150}
//             className="absolute top-[65px] w-[102.6vw]"
//           />
//           <Image
//             src="/images/LoveStory/Burung.svg"
//             alt="Burung"
//             width={133}
//             height={99}
//             className="absolute top-[104vw] left-0 w-[21vw] z-[3]"
//           />
//           <Image
//             src="/images/LoveStory/Burung.svg"
//             alt="Burung"
//             width={133}
//             height={99}
//             className="absolute top-[200vw] -right-[6vw] w-[24vw] z-[3]"
//           />
//           <Image
//             src="/images/Hero/KupuKupu-3.gif"
//             alt="Kupu Kupu"
//             width={50}
//             height={80}
//             className="absolute bottom-[20vw] left-[39vw] w-[11vw] z-[3]"
//           />

//           <div className="w-full flex flex-col items-center justify-center leading-none text-center pt-[40vw] pb-[100vw]">
//             <h2 className="font-cylburn text-[42px] text-[#713324] tracking-wide">
//               Love Story
//             </h2>

//             <div className="flex flex-col items-center text-center mt-[51px]">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 First meeting:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Their story began at a Starbucks in Bandung, where <br />
//                 Jessie grabbed the coffee since she'd arrived on time. <br />
//                 Then Jacky, visiting from Singapore, only had his SG <br />
//                 cards and cash, so Jessie treated him to lunch too. <br />
//                 Later, she drove him around the city, with Jacky <br />
//                 happily riding along like a true 'passenger princess'
//               </h3>
//             </div>

//             <div className="flex flex-col items-center text-center mt-7">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 Dating:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 From that first day, their connection grew through <br />
//                 laughter that felt like home, conversations that <br />
//                 stretched late into the night, and adventures across <br />
//                 many cities. They made memories by the sea and in <br />
//                 the mountains, dreamed of the future, and slowly <br />
//                 realised they had found their perfect match in each other.
//               </h3>
//             </div>

//             <div className="flex flex-col items-center text-center mt-7">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 Engagement:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Jessie thought it was just a casual trip to Singapore. <br />
//                 In reality, Jacky had planned a surprise trip to Hangzhou.{" "}
//                 <br />
//                 He'd been sneaking around Xiaohongshu like a wedding <br />
//                 planner on steroids—scouting the perfect spot, arranging <br />
//                 a violinist, and hiring a florist. To top it off, he flew in{" "}
//                 <br />
//                 two of Jessie's friends. The result? Tears, laughter, and a
//                 very big "yes."
//               </h3>
//             </div>

//             <div className="flex flex-col items-center text-center mt-7">
//               <h3 className="font-creators text-[14px] text-[#713324]">
//                 Together:
//               </h3>
//               <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//                 Now, they can't wait to step into their next chapter <br />
//                 together. Surrounded by family and closest friends, <br />
//                 they're ready to celebrate their love and begin their <br />
//                 journey as husband and wife.
//               </h3>
//             </div>
//           </div>

//           <div className="relative w-full" style={{ height: "0px" }}>
//             <Image
//               src="/images/Hero/Pohon-KiriBawah.png"
//               alt="Pohon Kiri"
//               width={560}
//               height={282}
//               className="absolute bottom-0 left-0 w-[48vw] z-[1]"
//             />
//             <Image
//               src="/images/LoveStory/Pohon-KananBawah.png"
//               alt="Pohon Kanan"
//               width={160}
//               height={282}
//               className="absolute bottom-0 right-0 w-[53vw] z-[1]"
//             />
//             <Image
//               src="/images/Hero/DedaunanBelakangKiri.png"
//               alt="Dedaunan"
//               width={650}
//               height={80}
//               className="absolute bottom-0 left-0 w-[60vw] z-[0]"
//             />
//             <Image
//               src="/images/Hero/Daun-Pandan.png"
//               alt="Daun Pandan"
//               width={547}
//               height={81}
//               className="absolute bottom-0 -left-[18vw] w-[48vw] z-[2]"
//             />
//             <Image
//               src="/images/Hero/Buah-MerahKiri.png"
//               alt="Buah Merah"
//               width={550}
//               height={120}
//               className="absolute bottom-0 -left-[6vw] w-[47vw] z-[1]"
//             />
//             <Image
//               src="/images/Hero/Pohon-Akar.png"
//               alt="Pohon Akar"
//               width={520}
//               height={80}
//               className="absolute bottom-0 left-[25vw] w-[28vw] z-[1]"
//             />
//             <Image
//               src="/images/Hero/Mawar-Putih.png"
//               alt="Mawar Putih"
//               width={570}
//               height={70}
//               className="absolute bottom-0 left-[38vw] w-[26vw] z-[3]"
//             />
//             <Image
//               src="/images/Hero/MawarKuning..png"
//               alt="Mawar Kuning"
//               width={580}
//               height={80}
//               className="absolute bottom-0 left-[50vw] w-[19vw] z-[2]"
//             />
//             <Image
//               src="/images/LoveStory/Pohon-BungaMerah.png"
//               alt="Pohon Bunga Merah"
//               width={150}
//               height={120}
//               className="absolute bottom-0 left-[57vw] w-[42vw] z-[1]"
//             />
//             <Image
//               src="/images/LoveStory/Dedaunan.png"
//               alt="Dedaunan"
//               width={550}
//               height={80}
//               className="absolute bottom-0 right-[5.5vw] w-[29vw] z-[2]"
//             />
//             <Image
//               src="/images/Hero/Pohon-BungaKecil.png"
//               alt="Pohon Bunga Kecil"
//               width={500}
//               height={80}
//               className="absolute bottom-0 -right-[2vw] w-[24vw] z-[1]"
//             />
//             <Image
//               src="/images/LoveStory/Dedaunan-BelakangKanan.png"
//               alt="Dedaunan Kanan"
//               width={550}
//               height={80}
//               className="absolute bottom-0 right-0 w-[50vw] z-[0]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoveStory;

// VERSI NORMAL UNTUK MOBILE ASETNYA MASIH SATU PERSATU FILE SEDANGKAN DEKSTOP SUDAH SATU FILE
// import React from "react";
// import Image from "next/image";

// const LoveStory = () => {
//   return (
//     <section
//       id="lovestory"
//       className="relative w-full pt-[156px] pb-[369px] lg:pt-[99px] lg:pb-[366px] overflow-x-hidden overflow-y-hidden"
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

//       <Image
//         src="/images/Hero/Burung.gif"
//         alt="Burung"
//         width={400}
//         height={150}
//         className="absolute top-[65px] w-[102.6vw] lg:hidden"
//       />

//       <Image
//         src="/images/LoveStory/Burung.svg"
//         alt="Kupu Kupu 3"
//         width={133}
//         height={99}
//         className="absolute top-[30%] left-[0vw] w-[21vw] z-[5] lg:hidden"
//       />

//       <Image
//         src="/images/LoveStory/Burung.svg"
//         alt="Kupu Kupu 3"
//         width={133}
//         height={99}
//         className="absolute bottom-[33.5%] -right-[6vw] w-[24vw] z-[5] lg:hidden"
//       />

//       {/* Kupu Kupu 3 */}
//             <Image
//               src="/images/Hero/KupuKupu-3.gif"
//               alt="Kupu Kupu 3"
//               width={50}
//               height={80}
//               className="absolute bottom-[vw] left-[39vw] w-[11vw] z-[5] lg:hidden"
//             />

//     {/* RANTING KHUSUS MOBILE */}
//       <Image
//         src="/images/LoveStory/Ranting-Kanan.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute top-0 right-0 w-[43vw] z-[1] lg:hidden"
//       />

//       <Image
//         src="/images/LoveStory/dekstop/Ranting-Kiri.webp"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute top-0 left-0 w-[43vw] z-[1] lg:hidden"
//       />

//     {/* RANTING KHUSUS DEKSTOP */}

//       <Image
//         src="/images/LoveStory/dekstop/Ranting-Kiri.webp"
//         alt="Pohon Golden Kiri Bawah"
//         width={960}
//         height={282}
//         className="absolute -top-[2vw] left-0 w-[250px] z-[1] hidden lg:block"
//       />

//     <Image
//         src="/images/LoveStory/dekstop/Ranting-Kanan.webp"
//         alt="Pohon Golden Kiri Bawah"
//         width={960}
//         height={282}
//         className="absolute -top-[2vw] right-0 w-[250px] z-[1] hidden lg:block"
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
//         className="absolute bottom-0 lg:-bottom-[1vw] left-0 w-[22vw]  z-[1] hidden lg:block"
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

// <img
//   src="/images/LoveStory/dekstop/Aset.webp"
//   alt="Pohon Kanan Bawah"
//   className="absolute -bottom-[0.1vw] z-[1] hidden lg:block"
//   style={{
//     width: '115vw',
//     height: 'auto',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     maxWidth: 'none'
//   }}
// />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/Hero/DedaunanBelakangKiri.png"
//         alt="Dedaunan Belakang"
//         width={650}
//         height={80}
//         className="absolute bottom-0 left-0 w-[60vw] z-[0] lg:hidden"
//       />

//       {/* Daun Pandan dari aset hero */}
//       <Image
//         src="/images/Hero/Daun-Pandan.png"
//         alt="Daun Pandan"
//         width={547}
//         height={81}
//         className="absolute bottom-0 -left-[18vw] w-[48vw] z-[2]  lg:hidden"
//         // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
//       />

//       {/* Pohon Buah Merah Kiri */}
//       <Image
//         src="/images/Hero/Buah-MerahKiri.png"
//         alt="Pohon Buah Merah"
//         width={550}
//         height={120}
//         className="absolute bottom-0 -left-[6vw] w-[47vw] z-[1] lg:hidden"
//       />

//       {/* Pohon Akar */}
//       <Image
//         src="/images/Hero/Pohon-Akar.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 left-[25vw] w-[28vw] z-[1] lg:hidden"
//       />

//       {/* Bunga Mawar Putih */}
//       <Image
//         src="/images/Hero/Mawar-Putih.png"
//         alt="Bunga Mawar Putih"
//         width={570}
//         height={70}
//         className="absolute bottom-0 left-[38vw] w-[26vw] z-[3] lg:hidden"
//       />

//       {/* Bunga Mawar Kuning */}
//       <Image
//         src="/images/Hero/MawarKuning..png"
//         alt="Bunga Mawar Kuning"
//         width={580}
//         height={80}
//         className="absolute bottom-0 left-[50vw] w-[19vw] z-[2] lg:hidden"
//       />

//       {/* Pohon Buah Merah Kiri */}
//       <Image
//         src="/images/LoveStory/Pohon-BungaMerah.png"
//         alt="Pohon Buah Merah"
//         width={150}
//         height={120}
//         className="absolute bottom-0 left-[57vw] w-[42vw] z-[1] lg:hidden"
//       />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/LoveStory/Dedaunan.png"
//         alt="Dedaunan Belakang"
//         width={550}
//         height={80}
//         className="absolute bottom-0 right-[5.5vw] w-[29vw] z-[2] lg:hidden"
//       />

//       {/* Pohon Bunga Kecil */}
//       <Image
//         src="/images/Hero/Pohon-BungaKecil.png"
//         alt="Pohon Bunga Kecil"
//         width={500}
//         height={80}
//         className="absolute bottom-0 -right-[2vw] w-[24vw] z-[1] lg:hidden"
//       />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/LoveStory/Dedaunan-BelakangKanan.png"
//         alt="Dedaunan Belakang"
//         width={550}
//         height={80}
//         className="absolute bottom-0 right-[0vw] w-[50vw] z-[0] lg:hidden"
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
//             Their story began at a Starbucks in Bandung, where <br className="lg:hidden" />
//             Jessie grabbed the coffee since she'd arrived <br className="hidden lg:block" /> on <br className="lg:hidden" />
//             time. Then Jacky, visiting from Singapore, only had <br className="lg:hidden" />
//             his SG cards and cash, so Jessie treated him <br className="hidden lg:block" /> to lunch <br className="lg:hidden" />
//             too. Later, she drove him around the city, with Jacky <br className="lg:hidden" />
//             happily riding along like a true <br className="hidden lg:block" /> 'passenger princess <br />
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
//           <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">Dating:</h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
//             From that first day, their connection grew through <br className="lg:hidden" />
//             laughter that felt like home, conversations that <br />
//             stretched late into the night, and adventures across <br className="lg:hidden" />
//             many cities. They made memories by the sea <br className="hidden lg:block"/> and in <br className="lg:hidden" />
//             the mountains, dreamed of the future, and slowly <br className="lg:hidden" />
//             realised they had found their perfect <br className="hidden lg:block" /> match in each <br className="lg:hidden" />
//             other.
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
//           <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
//             Engagement:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
//             Jessie thought it was just a casual trip to Singapore. <br className="lg:hidden" />
//             In reality, Jacky had planned a surprise trip to <br />
//             Hangzhou. He'd been sneaking around Xiaohongshu <br className="lg:hidden" />
//             like a wedding planner on steroids—scouting <br className="hidden lg:block" /> the <br className="lg:hidden" />
//             perfect spot, arranging a violinist, and hiring a <br className="lg:hidden" />
//             florist. To top it off, he flew in two of Jessie's <br className="hidden lg:block" /> friends <br className="lg:hidden" />
//             for the surprise. The result? Tears, laughter, and a <br className="lg:hidden" />
//             very big "yes."
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7 lg:mt-12">
//           <h3 className="font-creators text-[14px] text-[#713324] lg:text-[20px]">
//             Together:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5 lg:text-[18px] lg:mt-5 lg:leading-9">
//             Now, they can't wait to step into their next chapter<br className="lg:hidden" />
//             together. Surrounded by family and closest <br className="hidden lg:block" /> friends,<br className="lg:hidden" />
//             they're ready to celebrate their love and begin their<br className="lg:hidden" />
//             journey as husband and wife
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoveStory;
