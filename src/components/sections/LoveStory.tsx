"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const LoveStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const isFullyVisibleRef = useRef(false);

  // 1️⃣ Window scroll → aktifkan inner scroll + lock body
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top <= 0 && !isFullyVisibleRef.current) {
        isFullyVisibleRef.current = true;
        setIsFullyVisible(true);
        document.body.style.overflow = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2️⃣ Inner div scroll → mentok atas ATAU mentok bawah → unlock
  useEffect(() => {
    const innerDiv = scrollDivRef.current;
    if (!innerDiv) return;

    const handleInnerScroll = () => {
      if (!isFullyVisibleRef.current) return;

      const isAtTop = innerDiv.scrollTop === 0;
      const isAtBottom =
        innerDiv.scrollTop + innerDiv.clientHeight >= innerDiv.scrollHeight - 1;

      if (isAtTop || isAtBottom) {
        isFullyVisibleRef.current = false;
        setIsFullyVisible(false);
        document.body.style.overflow = "";
      }
    };

    innerDiv.addEventListener("scroll", handleInnerScroll, { passive: true });
    return () => innerDiv.removeEventListener("scroll", handleInnerScroll);
  }, []);

  // 3️⃣ Cleanup saat unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section
      id="lovestory"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "844px" }}
    >
      {/* Background Image */}
      <Image
        src="/images/LoveStory/Bg-LoveStory.png"
        alt="Hero Background"
        fill
        className="object-cover object-top"
        priority
      />

      {/* RANTING ATAS — diam */}
      <Image src="/images/LoveStory/Ranting-Kanan.png" alt="Ranting Kanan" width={560} height={282} className="absolute top-0 right-0 w-[43vw] z-[5]" />
      <Image src="/images/LoveStory/Ranting-Kiri.png" alt="Ranting Kiri" width={560} height={282} className="absolute top-0 left-0 w-[43vw] z-[5]" />

      {/* KONTEN SCROLL */}
      <div
        ref={scrollDivRef}
        className="absolute inset-0 z-[2]"
        style={{
          overflowY: isFullyVisible ? "auto" : "hidden",
          scrollbarWidth: "none",
        }}
      >
        <div className="relative w-full">

          {/* ASET DEKORASI */}
          <Image src="/images/Hero/Burung.gif" alt="Burung" width={400} height={150} className="absolute top-[65px] w-[102.6vw]" />
          <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute top-[104vw] left-0 w-[21vw] z-[3]" />
          <Image src="/images/LoveStory/Burung.svg" alt="Burung" width={133} height={99} className="absolute top-[200vw] -right-[6vw] w-[24vw] z-[3]" />
          <Image src="/images/Hero/KupuKupu-3.gif" alt="Kupu Kupu" width={50} height={80} className="absolute bottom-[20vw] left-[39vw] w-[11vw] z-[3]" />

          {/* KONTEN TEKS */}
          <div className="w-full flex flex-col items-center justify-center leading-none text-center pt-[40vw] pb-[100vw]">
            <h2 className="font-cylburn text-[42px] text-[#713324] tracking-wide">
              Love Story
            </h2>

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

            <div className="flex flex-col items-center text-center mt-7">
              <h3 className="font-creators text-[14px] text-[#713324]">Dating:</h3>
              <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
                From that first day, their connection grew through <br />
                laughter that felt like home, conversations that <br />
                stretched late into the night, and adventures across <br />
                many cities. They made memories by the sea and in <br />
                the mountains, dreamed of the future, and slowly <br />
                realised they had found their perfect match in each other.
              </h3>
            </div>

            <div className="flex flex-col items-center text-center mt-7">
              <h3 className="font-creators text-[14px] text-[#713324]">Engagement:</h3>
              <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
                Jessie thought it was just a casual trip to Singapore. <br />
                In reality, Jacky had planned a surprise trip to Hangzhou. <br />
                He'd been sneaking around Xiaohongshu like a wedding <br />
                planner on steroids—scouting the perfect spot, arranging <br />
                a violinist, and hiring a florist. To top it off, he flew in <br />
                two of Jessie's friends. The result? Tears, laughter, and a very big "yes."
              </h3>
            </div>

            <div className="flex flex-col items-center text-center mt-7">
              <h3 className="font-creators text-[14px] text-[#713324]">Together:</h3>
              <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
                Now, they can't wait to step into their next chapter <br />
                together. Surrounded by family and closest friends, <br />
                they're ready to celebrate their love and begin their <br />
                journey as husband and wife.
              </h3>
            </div>
          </div>

          {/* ASET BAWAH */}
          <div className="relative w-full" style={{ height: "0px" }}>
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoveStory;

// import React from "react";
// import Image from "next/image";

// const LoveStory = () => {
//   return (
//     <section
//       id="lovestory"
//       className="relative w-full pt-[156px] pb-[369px]  overflow-x-hidden"
//     >
//       {/* Background Image */}
//       <Image
//         src="/images/LoveStory/Bg-LoveStory.png"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top"
//         priority
//       />

//       <Image
//         src="/images/Hero/Burung.gif"
//         alt="Burung"
//         width={400}
//         height={150}
//         className="absolute top-[65px] w-[102.6vw]"
//       />

//       <Image
//         src="/images/LoveStory/Burung.svg"
//         alt="Kupu Kupu 3"
//         width={133}
//         height={99}
//         className="absolute top-[104vw] left-[0vw] w-[21vw] z-[5]"
//       />

//       <Image
//         src="/images/LoveStory/Burung.svg"
//         alt="Kupu Kupu 3"
//         width={133}
//         height={99}
//         className="absolute bottom-[108vw] -right-[6vw] w-[24vw] z-[5]"
//       />

//       {/* Kupu Kupu 3 */}
//             <Image
//               src="/images/Hero/KupuKupu-3.gif"
//               alt="Kupu Kupu 3"
//               width={50}
//               height={80}
//               className="absolute bottom-[vw] left-[39vw] w-[11vw] z-[5]"
//             />

//       <Image
//         src="/images/LoveStory/Ranting-Kanan.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute top-0 right-0 w-[43vw] z-[1]"
//       />

//       <Image
//         src="/images/LoveStory/Ranting-Kiri.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute top-0 left-0 w-[43vw] z-[1]"
//       />

//       {/* Pohon Golden Kiri Bawah */}
//       <Image
//         src="/images/Hero/Pohon-KiriBawah.png"
//         alt="Pohon Golden Kiri Bawah"
//         width={560}
//         height={282}
//         className="absolute bottom-0 left-0 w-[48vw] z-[1]"
//       />

//       {/* Pohon Kanan Bawah */}
//       <Image
//         src="/images/LoveStory/Pohon-KananBawah.png"
//         alt="Pohon Kanan Bawah"
//         width={160}
//         height={282}
//         className="absolute bottom-0 right-0 w-[53vw] z-[1]"
//       />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/Hero/DedaunanBelakangKiri.png"
//         alt="Dedaunan Belakang"
//         width={650}
//         height={80}
//         className="absolute bottom-0 left-0 w-[60vw] z-[0]"
//       />

//       {/* Daun Pandan dari aset hero */}
//       <Image
//         src="/images/Hero/Daun-Pandan.png"
//         alt="Daun Pandan"
//         width={547}
//         height={81}
//         className="absolute bottom-0 -left-[18vw] w-[48vw] z-[2]"
//         // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
//       />

//       {/* Pohon Buah Merah Kiri */}
//       <Image
//         src="/images/Hero/Buah-MerahKiri.png"
//         alt="Pohon Buah Merah"
//         width={550}
//         height={120}
//         className="absolute bottom-0 -left-[6vw] w-[47vw] z-[1]"
//       />

//       {/* Pohon Akar */}
//       <Image
//         src="/images/Hero/Pohon-Akar.png"
//         alt="Pohon Akar"
//         width={520}
//         height={80}
//         className="absolute bottom-0 left-[25vw] w-[28vw] z-[1]"
//       />

//       {/* Bunga Mawar Putih */}
//       <Image
//         src="/images/Hero/Mawar-Putih.png"
//         alt="Bunga Mawar Putih"
//         width={570}
//         height={70}
//         className="absolute bottom-0 left-[38vw] w-[26vw] z-[3]"
//       />

//       {/* Bunga Mawar Kuning */}
//       <Image
//         src="/images/Hero/MawarKuning..png"
//         alt="Bunga Mawar Kuning"
//         width={580}
//         height={80}
//         className="absolute bottom-0 left-[50vw] w-[19vw] z-[2]"
//       />

//       {/* Pohon Buah Merah Kiri */}
//       <Image
//         src="/images/LoveStory/Pohon-BungaMerah.png"
//         alt="Pohon Buah Merah"
//         width={150}
//         height={120}
//         className="absolute bottom-0 left-[57vw] w-[42vw] z-[1]"
//       />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/LoveStory/Dedaunan.png"
//         alt="Dedaunan Belakang"
//         width={550}
//         height={80}
//         className="absolute bottom-0 right-[5.5vw] w-[29vw] z-[2]"
//       />

//       {/* Pohon Bunga Kecil */}
//       <Image
//         src="/images/Hero/Pohon-BungaKecil.png"
//         alt="Pohon Bunga Kecil"
//         width={500}
//         height={80}
//         className="absolute bottom-0 -right-[2vw] w-[24vw] z-[1]"
//       />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/LoveStory/Dedaunan-BelakangKanan.png"
//         alt="Dedaunan Belakang"
//         width={550}
//         height={80}
//         className="absolute bottom-0 right-[0vw] w-[50vw] z-[0]"
//       />

//       <div className="relative  w-full flex flex-col items-center justify-center leading-none z-10">
//         <h2 className="font-cylburn text-[42px] text-[#713324] tracking-wide">
//           Love Story
//         </h2>

//         <div className="flex flex-col items-center justify-center text-center mt-[51px]">
//           <h3 className="font-creators text-[14px] text-[#713324]">
//             First meeting:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//             First Their story began at a Starbucks in Bandung, where <br />
//             Jessie grabbed the coffee since she'd arrived on <br />
//             time. Then Jacky, visiting from Singapore, only had <br />
//             his SG cards and cash, so Jessie treated him to lunch <br />
//             too. Later, she drove him around the city, with Jacky <br />
//             happily riding along like a true 'passenger princess <br />
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7">
//           <h3 className="font-creators text-[14px] text-[#713324]">Dating:</h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//             First From that first day, their connection grew through <br />{" "}
//             laughter that felt like home, conversations that <br /> stretched
//             late into the night, and adventures across <br /> many cities. They
//             made memories by the sea and in <br />
//             the mountains, dreamed of the future, and slowly <br />
//             realised they had found their perfect match in each <br />
//             other.
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7">
//           <h3 className="font-creators text-[14px] text-[#713324]">
//             First Engagement:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//             First Jessie thought it was just a casual trip to Singapore. <br />
//             In reality, Jacky had planned a surprise trip to <br />
//             Hangzhou. He'd been sneaking around Xiaohongshu <br />
//             like a wedding planner on steroids—scouting the <br />
//             perfect spot, arranging a violinist, and hiring a <br /> florist. To
//             top it off, he flew in two of Jessie's friends <br /> for the
//             surprise. The result? Tears, laughter, and a <br /> very big "yes."
//           </h3>
//         </div>

//         <div className="flex flex-col items-center justify-center text-center mt-7">
//           <h3 className="font-creators text-[14px] text-[#713324]">
//             First Together:
//           </h3>
//           <h3 className="font-creators text-[12px] text-[#713324] mt-3 leading-5">
//             First Now, they can't wait to step into their next chapter <br />{" "}
//             together. Surrounded by family and closest friends, <br /> they're
//             ready to celebrate their love and begin their <br /> journey as
//             husband and wife
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoveStory;
