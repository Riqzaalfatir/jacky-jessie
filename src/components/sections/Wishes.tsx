"use client";

import { dummyPesan } from "@/components/data/wishes";
import { useState, useEffect } from "react";
import Image from "next/image";
import WishesCard from "@/components/popup/WishesCard";
import NotifModal from "@/components/popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

type ModalType = string | null;

const Wishes = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );

  const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
    if (typeof window === "undefined") return dummyPesan;
    const saved = localStorage.getItem("pesan");
    return saved ? JSON.parse(saved) : dummyPesan;
  });
  const [modalType, setModalType] = useState<ModalType>(null); // ← tambah

  const handleSubmit = (): void => {
    if (!nama || !pesan) {
      setModalType("incomplete_wishes");
      return;
    }

    const newPesan: PesanItem = {
      id: Date.now(),
      nama,
      pesan,
    };

    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  useEffect(() => {
    localStorage.setItem("pesan", JSON.stringify(pesanList));
  }, [pesanList]);

  return (
    <>
      <section
        id="wishes"
        className="relative w-full flex flex-col items-center px-8 bg-[#F7F4EF] pt-[48.7vw] pb-[56.4vw] lg:pt-[160px] lg:pb-[327px]  overflow-x-hidden overflow-y-hidden"
      >

        {/* Background Image */}
        <Image
          src="/images/Wishes/Bg-Wishes.png"
          alt="Hero Background"
          fill
          className="object-cover object-top lg:hidden"
          priority
        />

        <Image
          src="/images/Wishes/Bg-Wishes.svg"
          alt="Hero Background"
          fill
          className="object-cover object-bottom hidden lg:block"
          priority
        />

        {/* KUPU KUPU */}
        {/* kupu kupu 1 */}
        <Image
          src="/images/Hero/KupuKupu-1.gif"
          alt="Kupu Kupu 1"
          width={50}
          height={80}
          className="absolute bottom-[20vw] left-[21vw] w-[12vw] z-[5]"
        />

        {/* kupu kupu 1 */}
        <Image
          src="/images/Hero/KupuKupu-2.gif"
          alt="Kupu Kupu 1"
          width={50}
          height={80}
          className="absolute top-[35vw] left-[7vw] w-[14vw] z-[5]"
        />

        {/* Kupu Kupu 4 */}
        <Image
          src="/images/Hero/KupuKupu-3.gif"
          alt="Kupu Kupu 4"
          width={50}
          height={80}
          className="absolute bottom-[73vw] right-[16vw] w-[10vw] z-[5]"
        />


        {/* Ranting Kanan Atas MOBILE */}
        <Image
          src="/images/Wishes/Ranting-KananAtas.webp"
          alt="Pohon Kanan Atas"
          width={551}
          height={205}
          className="absolute top-[2vw] right-0 w-[60vw] lg:hidden"
        />

        {/* Ranting Kanan Atas DEKSTOP */}
        <Image
          src="/images/Wishes/dekstop/Ranting-Kanan.svg"
          alt="Pohon Kanan Atas"
          width={551}
          height={205}
          className="absolute top-[0vw] right-0 w-[32vw] hidden lg:block"
        />

        {/* Pohon Golden Kanan */}
        <Image
          src="/images/Hero/Pohon-GoldenKanan.png"
          alt="Pohon Golden Kanan"
          width={550}
          height={80}
          className="absolute bottom-[85vw] right-0 w-[26vw] z-[1] lg:hidden"
        />

        {/* Ranting Kiri Tengah */}
        <Image
          src="/images/Wishes/Ranting-KiriTengah.png"
          alt="Pohon Golden Kanan"
          width={550}
          height={80}
          className="absolute bottom-[100vw] left-0 w-[17vw] z-[1] lg:hidden"
        />



        {/* Pohon Kiri Bawah */}
        <Image
          src="/images/Wishes/Ranting-Kiri.png"
          alt="Pohon Kiri"
          width={550}
          height={80}
          className="absolute bottom-[0vw] left-0 w-[30vw] lg:w-[17vw] z-[1]"
        />

        {/* Pohon Kanan Bawah */}
        <Image
          src="/images/Wishes/Pohon-Kanan.png"
          alt="Pohon Kiri"
          width={550}
          height={80}
          className="absolute bottom-[0vw] right-0 w-[29vw] lg:w-[17vw] z-[1]"
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
        src="/images/Wishes/dekstop/Aset-Bawah.webp"
        alt="Pohon Kanan Bawah"
        className="absolute bottom-0 z-[1] hidden lg:block"
        style={{
          width: "119vw",
          height: "auto",
          left: "46.9%",
          transform: "translateX(-50%)",
          maxWidth: "none",
        }}
      />

        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <h2 className="font-cylburn text-[42px] lg:text-[64px] text-[#713324] tracking-wide">
            Share Your Wishes
          </h2>
        </motion.div>

        <div className="max-w-[284px] lg:max-w-[564px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col gap-[20px] mt-[20px] lg:mt-[45px]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <input
                  type="text"
                  value={nama}
                  placeholder="Desy (Tester)"
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full text-[#713324] font-trajanRegular border-[1px] text-[12px] lg:text-[18px]  bg-transparent border-[#713324]/80 px-[13px] lg:px-[23px] h-[33px] lg:h-[40px] rounded-full outline-none placeholder:text-[#713324]/50"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <textarea
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full text-[#713324] font-trajanRegular border-[1px] text-[12px] lg:text-[18px] bg-transparent border-[#713324]/80 px-[13px] lg:px-[23px] h-[60px] lg:h-[261px] rounded-xl outline-none placeholder:text-[#713324]/50 resize-none"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <button
                  onClick={handleSubmit}
                  className="bg-[#E2C6AA]  w-full  rounded-full h-[33px] lg:h-[40px] text-[12px] lg:text-[18px] font-trajanRegular uppercase flex items-center justify-center gap-1.5 lg:gap-2 text-[#713324]"
                >
                  <Image
                    src="/images/Wishes/Panah.svg"
                    alt="Kirim"
                    width={24}
                    height={30}
                    className="object-contain w-[17px] lg:w-[22px]"
                  />
                  Send
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <div
                  className={`w-full rounded-2xl h-[329px] lg:h-[526px] overflow-y-auto scrollbar-hide ${
                    showAll ? "bg-transparent rounded-none" : "bg-[#E2C6AA] "
                  }`}
                >
                  {!showAll ? (
                    <div>
                      <div className="sticky top-0 w-full h-[18px] bg-[#E2C6AA]  z-10" />
                      <div className="px-[13px] lg:px-[23px] py-[2px]">
                        {pesanList.slice(0, 8).map((item, index, array) => (
                          <div key={item.id}>
                            <p className="text-[#713324] font-trajanBold text-[12px] lg:text-[18px] mb-[4px] lg:mb-[12px]">
                              {item.nama}
                            </p>
                            <p className="text-[#713324] font-trajanRegular text-[10px] lg:text-[18px] tracking-[0.5px] mb-[10px]">
                              {item.pesan}
                            </p>
                            {index !== array.length - 1 && (
                              <div className="border-t border-[#713324] mt-[8px] mb-[15px]" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="sticky bottom-0 w-full h-[18px] bg-[#E2C6AA]  z-10" />
                    </div>
                  ) : (
                    <motion.div
                      variants={stagger}
                      initial="hidden"
                      animate="show"
                      transition={{ staggerChildren: 2.6 }}
                      className="w-full"
                    >
                      <div className="grid grid-cols-2 gap-[2vw] lg:gap-[1.5vw] item-start">
                        {pesanList.map((item) => (
                          // ✅ BENAR
                          <motion.div
                            key={item.id}
                            variants={fadeIn}
                            transition={{ duration: 1.3, ease: "easeOut" }}
                            onClick={() => setSelectedMessage(item)}
                            className="rounded-md overflow-hidden shadow-md bg-[#7A4D2F] flex flex-col cursor-pointer active:scale-95 transition-transform duration-150"
                          >
                            <div className="p-[10px] relative flex-1 flex flex-col justify-center">
                              <p className="absolute top-[8px] left-[10px] text-[32px] font-bold font-cylburn text-[#FEF8EF]">
                                "
                              </p>
                              <p className="font-creators text-[10px] text-[#FEF8EF]/90 text-center mt-6 mb-2 line-clamp-4">
                                {item.pesan}
                              </p>
                            </div>
                            <div className="bg-[#5C3520] h-[35px] flex items-center justify-center px-4">
                              <p className="text-[#FEF8EF] text-center line-clamp-1 text-[11px] font-creators">
                                {item.nama}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              <WishesCard
                data={selectedMessage}
                onClose={() => setSelectedMessage(null)}
              />

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ willChange: "transform" }}
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-[#E2C6AA] w-full rounded-full h-[33px] lg:h-[40px] text-[12px] font-trajanRegular lg:text-[18px] uppercase flex items-center justify-center gap-1.5 lg:gap-2 text-[#713324]"
                >
                  <Image
                    src="/images/Wishes/Pesan.svg"
                    alt="Pesan"
                    width={20}
                    height={25}
                    className="object-cover w-[15px] h-[19px] lg:w-[20px]"
                  />
                  {showAll ? "BACK" : "VIEW ALL MESSAGES"}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* POPUP KETIKA PESAN DIKIRIM */}

        {/* POPUP KETIKA PESAN DIKIRIM */}
        {showPopup && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#2E1D14]/40 backdrop-blur-[4px] px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[28px] border border-[#713324]/20 bg-[#F6EBDD]/95 shadow-[0_10px_40px_rgba(113,51,36,0.18)] w-full max-w-[330px]"
            >
              {/* ORNAMEN ATAS */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#C58B63] via-[#E2C6AA] to-[#C58B63]" />

              {/* ISI */}
              <div className="px-7 pt-9 pb-7 flex flex-col items-center text-center">
                {/* ICON */}
                <div className="w-[72px] h-[72px] rounded-full bg-[#E2C6AA]/60 border border-[#713324]/10 flex items-center justify-center mb-5 shadow-inner">
                  <Image
                    src="/images/Wishes/Pesan.svg"
                    alt="Success"
                    width={34}
                    height={34}
                    className="object-contain opacity-90"
                  />
                </div>

                {/* TITLE */}
                <h3 className="font-cylburn text-[30px] leading-none text-[#713324]">
                  Thank You
                </h3>

                {/* LINE */}
                <div className="w-[70px] h-[1px] bg-[#713324]/30 my-4" />

                {/* DESC */}
                <p className="font-creators text-[12px] leading-[22px] text-[#713324]/85 max-w-[240px]">
                  Your wishes and prayers mean so much to us. Thank you for
                  sharing your kind words on our special day.
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-7 bg-[#713324] hover:bg-[#5c281c] active:scale-95 transition-all duration-300 text-[#FEF8EF] font-trajanRegular uppercase tracking-[1.5px] text-[11px] px-8 h-[38px] rounded-full shadow-md"
                >
                  Close
                </button>
              </div>

              {/* ORNAMEN BAWAH */}
              <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#C58B63] via-[#E2C6AA] to-[#C58B63]" />
            </motion.div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center text-center gap-[40px] mt-[98px] lg:mt-[130px] z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <h2 className="text-[#713324] font-cylburn text-[42px] lg:text-[64px]">
              Thank You
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <p className="font-creators text-[12px] lg:text-[18px] text-[#713324] leading-[25px] lg:leading-[38px]">
              for being part of our journey. <br />
              We look forward to celebrating love, <br />
              laughter, and happily ever after with you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* NOTIF MODAL — untuk incomplete_wishes */}
      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={() => setModalType(null)}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Wishes;








// VERSI ASET ASET MOBILE DIPISAHN DAN UNTUK ASET DEKSTOP BELUM DI STYLING
// "use client";

// import { dummyPesan } from "@/components/data/wishes";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import WishesCard from "@/components/popup/WishesCard";
// import NotifModal from "@/components/popup/NotifModal";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, stagger } from "@/lib/animation";

// type PesanItem = {
//   id: number;
//   nama: string;
//   pesan: string;
// };

// type ModalType = string | null;

// const Wishes = () => {
//   const [nama, setNama] = useState<string>("");
//   const [pesan, setPesan] = useState<string>("");
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [showAll, setShowAll] = useState<boolean>(false);
//   const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
//     null,
//   );

//   const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
//     if (typeof window === "undefined") return dummyPesan;
//     const saved = localStorage.getItem("pesan");
//     return saved ? JSON.parse(saved) : dummyPesan;
//   });
//   const [modalType, setModalType] = useState<ModalType>(null); // ← tambah

//   const handleSubmit = (): void => {
//     if (!nama || !pesan) {
//       setModalType("incomplete_wishes");
//       return;
//     }

//     const newPesan: PesanItem = {
//       id: Date.now(),
//       nama,
//       pesan,
//     };

//     setPesanList((prev) => [newPesan, ...prev]);
//     setShowPopup(true);
//     setNama("");
//     setPesan("");
//   };

//   useEffect(() => {
//     localStorage.setItem("pesan", JSON.stringify(pesanList));
//   }, [pesanList]);

//   return (
//     <>
//       <section
//         id="wishes"
//         className="relative w-full flex flex-col items-center px-8 bg-[#F7F4EF] pt-[48.7vw] pb-[56.4vw]  overflow-x-hidden"
//       >
//         {/* Background Image */}
//         <Image
//           src="/images/Wishes/Bg-Wishes.png"
//           alt="Hero Background"
//           fill
//           className="object-cover object-top lg:hidden"
//           priority
//         />

//         <Image
//           src="/images/Wishes/Bg-Wishes.svg"
//           alt="Hero Background"
//           fill
//           className="object-cover object-top hidden lg:block"
//           priority
//         />

//         {/* KUPU KUPU */}
//         {/* kupu kupu 1 */}
//         <Image
//           src="/images/Hero/KupuKupu-1.gif"
//           alt="Kupu Kupu 1"
//           width={50}
//           height={80}
//           className="absolute bottom-[20vw] left-[21vw] w-[12vw] z-[5]"
//         />

//         {/* kupu kupu 1 */}
//         <Image
//           src="/images/Hero/KupuKupu-2.gif"
//           alt="Kupu Kupu 1"
//           width={50}
//           height={80}
//           className="absolute top-[35vw] left-[7vw] w-[14vw] z-[5]"
//         />

//         {/* Kupu Kupu 4 */}
//         <Image
//           src="/images/Hero/KupuKupu-3.gif"
//           alt="Kupu Kupu 4"
//           width={50}
//           height={80}
//           className="absolute bottom-[73vw] right-[16vw] w-[10vw] z-[5]"
//         />

//         {/* Ranting Kanan Atas */}
//         <Image
//           src="/images/Wishes/Ranting-KananAtas.webp"
//           alt="Pohon Kanan Atas"
//           width={551}
//           height={205}
//           className="absolute top-[2vw] right-0 w-[60vw]"
//         />

//         {/* Pohon Golden Kanan */}
//         <Image
//           src="/images/Hero/Pohon-GoldenKanan.png"
//           alt="Pohon Golden Kanan"
//           width={550}
//           height={80}
//           className="absolute bottom-[85vw] right-0 w-[26vw] z-[1]"
//         />

//         {/* Ranting Kiri Tengah */}
//         <Image
//           src="/images/Wishes/Ranting-KiriTengah.png"
//           alt="Pohon Golden Kanan"
//           width={550}
//           height={80}
//           className="absolute bottom-[100vw] left-0 w-[18vw] z-[1]"
//         />

//         {/* Pohon Kiri Bawah */}
//         <Image
//           src="/images/Wishes/Ranting-Kiri.png"
//           alt="Pohon Kiri"
//           width={550}
//           height={80}
//           className="absolute bottom-[0vw] left-0 w-[30vw] z-[1]"
//         />

//         {/* Pohon Kanan Bawah */}
//         <Image
//           src="/images/Wishes/Pohon-Kanan.png"
//           alt="Pohon Kiri"
//           width={550}
//           height={80}
//           className="absolute bottom-[0vw] right-0 w-[29vw] z-[1]"
//         />

//         {/* Dedaunan Belakang Kiri */}
//         <Image
//           src="/images/Time/Dedaunan-BelakangKiri.png"
//           alt="Dedaunan Belakang"
//           width={550}
//           height={80}
//           className="absolute bottom-0 -left-[4vw] w-[65vw] z-[2]"
//         />

//         <Image
//           src="/images/Time/Dedaunan-BelakangKiri.png"
//           alt="Dedaunan Belakang"
//           width={550}
//           height={80}
//           className="absolute bottom-0 left-[24vw] w-[57vw] z-[1] opacity-60"
//         />

//         {/* Dedaunan Belakang Kanan */}
//         <Image
//           src="/images/Wishes/Dedaunan-BelakangKanan..png"
//           alt="Dedaunan Belakang"
//           width={550}
//           height={80}
//           className="absolute bottom-0 right-[0vw] w-[33vw] z-[3]"
//         />

//         {/* Pohon Buah Merah Kiri */}
//         <Image
//           src="/images/LoveStory/Pohon-BungaMerah.png"
//           alt="Pohon Buah Merah"
//           width={550}
//           height={120}
//           className="absolute bottom-0 -left-[15vw] w-[45vw] z-[3]"
//         />

//         {/* Daun Pandan dari aset hero */}
//         <Image
//           src="/images/Hero/Daun-Pandan.png"
//           alt="Daun Pandan"
//           width={547}
//           height={81}
//           className="absolute bottom-0 -left-[17vw] w-[37vw] z-[5]"
//           // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
//         />

//         {/* Daun Pandan dari aset hero */}
//         <Image
//           src="/images/Hero/Daun-Pandan.png"
//           alt="Daun Pandan"
//           width={547}
//           height={81}
//           className="absolute bottom-0 left-[4vw] w-[27vw] z-[4]"
//           // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
//         />

//         {/* Pohon Akar */}
//         <Image
//           src="/images/Hero/Pohon-Akar.png"
//           alt="Pohon Akar"
//           width={520}
//           height={80}
//           className="absolute bottom-0 left-[15vw] w-[27vw] z-[5]"
//         />

//         {/* Bunga Mawar Putih */}
//         <Image
//           src="/images/Hero/Mawar-Putih.png"
//           alt="Bunga Mawar Putih"
//           width={570}
//           height={70}
//           className="absolute bottom-0 left-[24vw] w-[24vw] z-[5]"
//         />

//         {/* Bunga Mawar Kuning */}
//         <Image
//           src="/images/Hero/MawarKuning..png"
//           alt="Bunga Mawar Kuning"
//           width={580}
//           height={80}
//           className="absolute bottom-0 left-[39.5vw] w-[15vw] z-[6]"
//         />

//         {/* Pohon Buah Merah Kiri */}

//         {/* Daun Pandan dari aset hero */}
//         <Image
//           src="/images/Hero/Daun-Pandan.png"
//           alt="Daun Pandan"
//           width={547}
//           height={81}
//           className="absolute bottom-0 left-[39vw] w-[30vw] z-[6]"
//           // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
//         />
//         <Image
//           src="/images/LoveStory/Pohon-BungaMerah.png"
//           alt="Pohon Buah Merah"
//           width={550}
//           height={120}
//           className="absolute bottom-0 left-[35vw] w-[37vw] z-[4]"
//         />

//         {/* Pohon Bunga Kecil */}
//         <Image
//           src="/images/Hero/Pohon-BungaKecil.png"
//           alt="Pohon Bunga Kecil"
//           width={500}
//           height={80}
//           className="absolute bottom-0 left-[54vw] w-[27vw] z-[2]"
//         />

//         {/* Bunga Mawar Kuning */}
//         <Image
//           src="/images/Hero/MawarKuning..png"
//           alt="Bunga Mawar Kuning"
//           width={580}
//           height={80}
//           className="absolute bottom-0 left-[66vw] w-[20vw] z-[6]"
//         />

//         {/* Bunga Mawar Putih */}
//         <Image
//           src="/images/Hero/Mawar-Putih.png"
//           alt="Bunga Mawar Putih"
//           width={570}
//           height={70}
//           className="absolute bottom-0 left-[77vw] w-[20vw] z-[7]"
//         />
//         {/* Pohon Bunga Kecil */}
//         <Image
//           src="/images/Hero/Pohon-BungaKecil.png"
//           alt="Pohon Bunga Kecil"
//           width={500}
//           height={80}
//           className="absolute bottom-0 left-[86vw] w-[25vw] z-[7]"
//         />

//         <Image
//           src="/images/LoveStory/Pohon-BungaMerah.png"
//           alt="Pohon Buah Merah"
//           width={550}
//           height={120}
//           className="absolute bottom-0 left-[71vw] w-[30vw] z-[4]"
//         />
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           style={{ willChange: "transform" }}
//         >
//           <h2 className="font-cylburn text-[42px] lg:text-[46px] text-[#713324] tracking-wide">
//             Share Your Wishes
//           </h2>
//         </motion.div>

//         <div className="max-w-[284px] lg:max-w-[564px] mx-auto">
//           <div className="flex flex-col items-center">
//             <div className="w-full flex flex-col gap-[20px] mt-[20px]">
//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 1.8, ease: "easeOut" }}
//                 style={{ willChange: "transform" }}
//               >
//                 <input
//                   type="text"
//                   value={nama}
//                   placeholder="Desy (Tester)"
//                   onChange={(e) => setNama(e.target.value)}
//                   className="w-full text-[#713324] font-trajanRegular border-[1px] text-[12px] lg:text-[18px]  bg-transparent border-[#713324]/80 px-[13px] lg:px-[23px] h-[33px] lg:h-[40px] rounded-full outline-none placeholder:text-[#713324]/50"
//                 />
//               </motion.div>

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 1.8, ease: "easeOut" }}
//                 style={{ willChange: "transform" }}
//               >
//                 <textarea
//                   value={pesan}
//                   onChange={(e) => setPesan(e.target.value)}
//                   className="w-full text-[#713324] font-trajanRegular border-[1px] text-[12px] lg:text-[18px] bg-transparent border-[#713324]/80 px-[13px] lg:px-[23px] h-[60px] lg:h-[261px] rounded-xl outline-none placeholder:text-[#713324]/50 resize-none"
//                 />
//               </motion.div>

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 1.8, ease: "easeOut" }}
//                 style={{ willChange: "transform" }}
//               >
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-[#E2C6AA]  w-full  rounded-full h-[33px] lg:h-[40px] text-[12px] lg:text-[18px] font-trajanRegular uppercase flex items-center justify-center gap-1.5 lg:gap-2 text-[#713324]"
//                 >
//                   <Image
//                     src="/images/Wishes/Panah.svg"
//                     alt="Kirim"
//                     width={24}
//                     height={30}
//                     className="object-contain w-[17px] lg:w-[22px]"
//                   />
//                   Send
//                 </button>
//               </motion.div>

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.35 }}
//                 transition={{ duration: 1.8, ease: "easeOut" }}
//                 style={{ willChange: "transform" }}
//               >
//                 <div
//                   className={`w-full rounded-2xl h-[329px] lg:h-[526px] overflow-y-auto scrollbar-hide ${
//                     showAll ? "bg-transparent rounded-none" : "bg-[#E2C6AA] "
//                   }`}
//                 >
//                   {!showAll ? (
//                     <div>
//                       <div className="sticky top-0 w-full h-[18px] bg-[#E2C6AA]  z-10" />
//                       <div className="px-[13px] lg:px-[23px] py-[2px]">
//                         {pesanList.slice(0, 8).map((item, index, array) => (
//                           <div key={item.id}>
//                             <p className="text-[#713324] font-trajanBold text-[12px] lg:text-[18px] mb-[4px] lg:mb-[12px]">
//                               {item.nama}
//                             </p>
//                             <p className="text-[#713324] font-trajanRegular text-[10px] lg:text-[18px] tracking-[0.5px] mb-[10px]">
//                               {item.pesan}
//                             </p>
//                             {index !== array.length - 1 && (
//                               <div className="border-t border-[#713324] mt-[8px] mb-[15px]" />
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                       <div className="sticky bottom-0 w-full h-[18px] bg-[#E2C6AA]  z-10" />
//                     </div>
//                   ) : (
//                     <motion.div
//                       variants={stagger}
//                       initial="hidden"
//                       animate="show"
//                       transition={{ staggerChildren: 2.6 }}
//                       className="w-full"
//                     >
//                       <div className="grid grid-cols-2 gap-[2vw] lg:gap-[1.5vw] item-start">
//                         {pesanList.map((item) => (
//                           // ✅ BENAR
//                           <motion.div
//                             key={item.id}
//                             variants={fadeIn}
//                             transition={{ duration: 1.3, ease: "easeOut" }}
//                             onClick={() => setSelectedMessage(item)}
//                             className="rounded-md overflow-hidden shadow-md bg-[#7A4D2F] flex flex-col cursor-pointer active:scale-95 transition-transform duration-150"
//                           >
//                             <div className="p-[10px] relative flex-1 flex flex-col justify-center">
//                               <p className="absolute top-[8px] left-[10px] text-[32px] font-bold font-cylburn text-[#FEF8EF]">
//                                 "
//                               </p>
//                               <p className="font-creators text-[10px] text-[#FEF8EF]/90 text-center mt-6 mb-2 line-clamp-4">
//                                 {item.pesan}
//                               </p>
//                             </div>
//                             <div className="bg-[#5C3520] h-[35px] flex items-center justify-center px-4">
//                               <p className="text-[#FEF8EF] text-center line-clamp-1 text-[11px] font-creators">
//                                 {item.nama}
//                               </p>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </div>
//               </motion.div>

//               <WishesCard
//                 data={selectedMessage}
//                 onClose={() => setSelectedMessage(null)}
//               />

//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.35 }}
//                 transition={{ duration: 1.8, ease: "easeOut" }}
//                 style={{ willChange: "transform" }}
//               >
//                 <button
//                   onClick={() => setShowAll(!showAll)}
//                   className="bg-[#E2C6AA] w-full rounded-full h-[33px] lg:h-[40px] text-[12px] font-trajanRegular lg:text-[18px] uppercase flex items-center justify-center gap-1.5 lg:gap-2 text-[#713324]"
//                 >
//                   <Image
//                     src="/images/Wishes/Pesan.svg"
//                     alt="Pesan"
//                     width={20}
//                     height={25}
//                     className="object-cover w-[15px] h-[19px] lg:w-[20px]"
//                   />
//                   {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* POPUP KETIKA PESAN DIKIRIM */}

//         {/* POPUP KETIKA PESAN DIKIRIM */}
//         {showPopup && (
//           <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#2E1D14]/40 backdrop-blur-[4px] px-6">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               transition={{ duration: 0.45, ease: "easeOut" }}
//               className="relative overflow-hidden rounded-[28px] border border-[#713324]/20 bg-[#F6EBDD]/95 shadow-[0_10px_40px_rgba(113,51,36,0.18)] w-full max-w-[330px]"
//             >
//               {/* ORNAMEN ATAS */}
//               <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#C58B63] via-[#E2C6AA] to-[#C58B63]" />

//               {/* ISI */}
//               <div className="px-7 pt-9 pb-7 flex flex-col items-center text-center">
//                 {/* ICON */}
//                 <div className="w-[72px] h-[72px] rounded-full bg-[#E2C6AA]/60 border border-[#713324]/10 flex items-center justify-center mb-5 shadow-inner">
//                   <Image
//                     src="/images/Wishes/Pesan.svg"
//                     alt="Success"
//                     width={34}
//                     height={34}
//                     className="object-contain opacity-90"
//                   />
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="font-cylburn text-[30px] leading-none text-[#713324]">
//                   Thank You
//                 </h3>

//                 {/* LINE */}
//                 <div className="w-[70px] h-[1px] bg-[#713324]/30 my-4" />

//                 {/* DESC */}
//                 <p className="font-creators text-[12px] leading-[22px] text-[#713324]/85 max-w-[240px]">
//                   Your wishes and prayers mean so much to us. Thank you for
//                   sharing your kind words on our special day.
//                 </p>

//                 {/* BUTTON */}
//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="mt-7 bg-[#713324] hover:bg-[#5c281c] active:scale-95 transition-all duration-300 text-[#FEF8EF] font-trajanRegular uppercase tracking-[1.5px] text-[11px] px-8 h-[38px] rounded-full shadow-md"
//                 >
//                   Close
//                 </button>
//               </div>

//               {/* ORNAMEN BAWAH */}
//               <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#C58B63] via-[#E2C6AA] to-[#C58B63]" />
//             </motion.div>
//           </div>
//         )}

//         <div className="flex flex-col items-center justify-center text-center gap-[40px] mt-[98px] z-10">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 1.8, ease: "easeOut" }}
//           >
//             <h2 className="text-[#713324] font-cylburn text-[42px]">
//               Thank You
//             </h2>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 1.8, ease: "easeOut" }}
//           >
//             <p className="font-creators text-[12px] text-[#713324] leading-[25px]">
//               for being part of our journey. <br />
//               We look forward to celebrating love, <br />
//               laughter, and happily ever after with you!
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* NOTIF MODAL — untuk incomplete_wishes */}
//       {modalType && (
//         <NotifModal
//           type={modalType}
//           onClose={() => setModalType(null)}
//           onConfirm={() => setModalType(null)}
//           waNumber="6281234567890"
//         />
//       )}
//     </>
//   );
// };

// export default Wishes;
