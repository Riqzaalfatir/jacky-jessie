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
        className="relative w-full flex flex-col items-center px-8 bg-[#F7F4EF] pt-[190px] pb-[220px] lg:pt-[100px] lg:pb-[132px] overflow-x-hidden"
      >
        {/* Background Image */}
        <Image
          src="/images/Wishes/Bg-Wishes.png"
          alt="Hero Background"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Ranting Kanan Atas */}
        <Image
          src="/images/Wishes/Ranting-KananAtas.svg"
          alt="Pohon Kanan Atas"
          width={251}
          height={205}
          className="absolute top-0 right-0 w-[67vw]"
        />

        {/* Pohon Golden Kanan */}
        <Image
          src="/images/Hero/svg/Pohon-GoldenKanan.svg"
          alt="Pohon Golden Kanan"
          width={50}
          height={80}
          className="absolute bottom-[85vw] right-0 w-[26vw] z-[1]"
        />

        {/* Ranting Kiri Tengah */}
        <Image
          src="/images/Wishes/Ranting-KiriTengah.png"
          alt="Pohon Golden Kanan"
          width={50}
          height={80}
          className="absolute bottom-[100vw] left-0 w-[18vw] z-[1]"
        />

        {/* Pohon Kiri Bawah */}
        <Image
          src="/images/Wishes/Pohon-Kiri.svg"
          alt="Pohon Kiri"
          width={50}
          height={80}
          className="absolute bottom-[0vw] left-0 w-[30vw] z-[1]"
        />

        {/* Pohon Kanan Bawah */}
        <Image
          src="/images/Wishes/Pohon-Kanan.png"
          alt="Pohon Kiri"
          width={50}
          height={80}
          className="absolute bottom-[0vw] right-0 w-[29vw] z-[1]"
        />

        {/* Dedaunan Belakang Kiri */}
        <Image
          src="/images/Time/Dedaunan-BelakangKiri.svg"
          alt="Dedaunan Belakang"
          width={50}
          height={80}
          className="absolute bottom-0 -left-[5vw] w-[54vw] z-[2]"
        />

        {/* Dedaunan Belakang Kanan */}
        <Image
          src="/images/Wishes/Dedaunan-BungaKanan.svg"
          alt="Dedaunan Belakang"
          width={50}
          height={80}
          className="absolute bottom-0 right-[0vw] w-[25vw] z-[3]"
        />

        {/* Pohon Buah Merah Kiri */}
        <Image
          src="/images/LoveStory/Pohon-BungaMerah.png"
          alt="Pohon Buah Merah"
          width={150}
          height={120}
          className="absolute bottom-0 -left-[15vw] w-[45vw] z-[3]"
        />

        {/* Daun Pandan dari aset hero */}
        <Image
          src="/images/Hero/svg/Daun-Pandan.svg"
          alt="Daun Pandan"
          width={147}
          height={81}
          className="absolute bottom-0 -left-[17vw] w-[43vw] z-[5]"
          // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
        />

        {/* Daun Pandan dari aset hero */}
        <Image
          src="/images/Hero/svg/Daun-Pandan.svg"
          alt="Daun Pandan"
          width={147}
          height={81}
          className="absolute bottom-0 left-[4vw] w-[32vw] z-[4]"
          // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
        />

        {/* Pohon Akar */}
        <Image
          src="/images/Hero/svg/Pohon-Akar.svg"
          alt="Pohon Akar"
          width={120}
          height={80}
          className="absolute bottom-0 left-[15vw] w-[27vw] z-[5]"
        />

        {/* Bunga Mawar Putih */}
        <Image
          src="/images/Hero/svg/Bunga-MawarPutih.svg"
          alt="Bunga Mawar Putih"
          width={70}
          height={70}
          className="absolute bottom-0 left-[24vw] w-[24vw] z-[5]"
        />

        {/* Bunga Mawar Kuning */}
        <Image
          src="/images/Hero/svg/Bunga-MawarKuning.svg"
          alt="Bunga Mawar Kuning"
          width={80}
          height={80}
          className="absolute bottom-0 left-[39.5vw] w-[15vw] z-[6]"
        />

        {/* Pohon Buah Merah Kiri */}

        {/* Daun Pandan dari aset hero */}
        <Image
          src="/images/Hero/svg/Daun-Pandan.svg"
          alt="Daun Pandan"
          width={147}
          height={81}
          className="absolute bottom-0 left-[39vw] w-[34vw] z-[6]"
          // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
        />
        <Image
          src="/images/LoveStory/Pohon-BungaMerah.png"
          alt="Pohon Buah Merah"
          width={150}
          height={120}
          className="absolute bottom-0 left-[35vw] w-[37vw] z-[4]"
        />

        {/* Pohon Bunga Kecil */}
        <Image
          src="/images/Hero/svg/Pohon-BungaKecil.svg"
          alt="Pohon Bunga Kecil"
          width={100}
          height={80}
          className="absolute bottom-0 left-[54vw] w-[27vw] z-[2]"
        />

        {/* Bunga Mawar Kuning */}
        <Image
          src="/images/Hero/svg/Bunga-MawarKuning.svg"
          alt="Bunga Mawar Kuning"
          width={80}
          height={80}
          className="absolute bottom-0 left-[66vw] w-[20vw] z-[6]"
        />

        {/* Bunga Mawar Putih */}
        <Image
          src="/images/Hero/svg/Bunga-MawarPutih.svg"
          alt="Bunga Mawar Putih"
          width={70}
          height={70}
          className="absolute bottom-0 left-[77vw] w-[20vw] z-[7]"
        />
        {/* Pohon Bunga Kecil */}
        <Image
          src="/images/Hero/svg/Pohon-BungaKecil.svg"
          alt="Pohon Bunga Kecil"
          width={100}
          height={80}
          className="absolute bottom-0 left-[86vw] w-[25vw] z-[7]"
        />

        <Image
          src="/images/LoveStory/Pohon-BungaMerah.png"
          alt="Pohon Buah Merah"
          width={150}
          height={120}
          className="absolute bottom-0 left-[71vw] w-[30vw] z-[4]"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <h2 className="font-cylburn text-[42px] lg:text-[46px] text-[#713324] tracking-wide">
            Share Your Wishes
          </h2>
        </motion.div>

        <div className="max-w-[284px] lg:max-w-[564px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-col gap-[20px] mt-[37px]">
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
                  className="w-full text-[#713324] font-trajanRegular border-[1px] text-[12px] lg:text-[18px]  bg-transparent border-[#713324] px-[13px] lg:px-[23px] h-[33px] lg:h-[40px] rounded-full outline-none placeholder:text-[#713324]/50"
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
                  className="w-full text-[#713324] font-trajanRegular border-[1px] text-[12px] lg:text-[18px] bg-transparent border-[#713324] px-[13px] lg:px-[23px] h-[60px] lg:h-[261px] rounded-xl outline-none placeholder:text-[#713324]/50 resize-none"
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
                      <div className="grid grid-cols-2 gap-[2vw] lg:gap-[1.5vw]">
                        {pesanList.map((item) => (
                          <motion.div
                            key={item.id}
                            variants={fadeIn}
                            transition={{ duration: 1.3, ease: "easeOut" }}
                            onClick={() => setSelectedMessage(item)}
                            className="rounded-md overflow-hidden shadow-md bg-[#F4F8F5] flex flex-col cursor-pointer"
                          >
                            <div className="p-[10px] relative flex-1 flex flex-col justify-center">
                              <p className="absolute top-[8px] left-[10px] text-[22px] font-bold font-quattrocento text-[#37546B]">
                                "
                              </p>
                              <p className="font-quattrocento text-[12px] lg:text-[18px] text-[#37546B] text-center mt-6 mb-2 line-clamp-4">
                                {item.pesan}
                              </p>
                            </div>
                            <div className="bg-[#37546B] h-[35px] flex items-center justify-center px-6">
                              <p className="text-white text-center line-clamp-1 text-[13px] lg:text-[19px] font-quattrocento">
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
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-[#F5F2EC] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#37546B]/20">
              <h3 className="text-[22px] font-quattrocento font-semibold text-[#37546B] mb-3 tracking-wide">
                Pesan Terkirim!
              </h3>
              <div className="w-10 h-[2px] bg-[#37546B] mx-auto mb-4 opacity-60" />
              <p className="text-[16px] text-[#37546B] font-quattrocento leading-relaxed mb-6">
                Terima kasih atas doa dan ucapan baik Anda. Kami sangat
                menghargai pesan yang telah diberikan.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#37546B] hover:bg-[#2E4559] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-quattrocento"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center justify-center text-center gap-[40px] mt-[98px] z-10">
          <h2 className="text-[#713324] font-cylburn text-[42px]">Thank You</h2>
          <p className="font-creators text-[12px] text-[#713324]">
            for being part of our journey. <br />
            We look forward to celebrating love, <br />
            laughter, and happily ever after with you!
          </p>
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
