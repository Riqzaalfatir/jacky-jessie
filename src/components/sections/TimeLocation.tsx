import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

const TimeLocation = () => {
  return (
    <section
      id="time"
      className="bg-[#EADCC8] relative w-full pt-[54.4vw] pb-[80.3vw] overflow-x-hidden"
    >
      {/* ASET BAGIAN ATAS */}
      <Image
        src="/images/Time/Ranting-KiriAtas.png"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute top-0 left-0 w-[64.2vw] z-0"
      />

      <Image
        src="/images/Time/Capung.svg"
        alt="Capung Kiri"
        width={558}
        height={211}
        className="absolute top-[30vw] left-[4vw] w-[14vw] z-0"
      />

      <Image
        src="/images/Time/Capung.svg"
        alt="Capung Tengah"
        width={558}
        height={211}
        className="absolute bottom-[22vw] left-[32vw] w-[18vw] z-0 scale-x-[-1]"
      />

      <Image
        src="/images/Time/Ranting-KananAtas.png"
        alt="Pohon Kanan Atas"
        width={558}
        height={211}
        className="absolute top-0 right-0 w-[64.2vw] z-0"
      />

      <Image
        src="/images/Time/Ranting-Tengah.png"
        alt="Ranting Tengah"
        width={558}
        height={211}
        className="absolute top-[47.5%] right-0 w-[33.5vw] z-0"
      />

      {/* ASET BAWAH */}
      <Image
        src="/images/Time/Ranting-KiriBawah.png"
        alt="Ranting Kiri Bawah"
        width={558}
        height={211}
        className="absolute bottom-0 left-0 w-[39vw] z-0"
      />
      <Image
        src="/images/Time/Ranting-KananBawah.png"
        alt="Ranting Kanan Bawah"
        width={558}
        height={211}
        className="absolute bottom-0 right-0 w-[53vw] z-0"
      />
      <Image
        src="/images/LoveStory/Pohon-BungaMerah.png"
        alt="Pohon Buah Merah"
        width={550}
        height={120}
        className="absolute bottom-0 -left-[23vw] w-[58vw] z-[3]"
      />
      <Image
        src="/images/Time/Dedaunan-BelakangKiri..png"
        alt="Dedaunan Belakang Kiri"
        width={550}
        height={80}
        className="absolute bottom-0 -left-[7vw] w-[76vw] z-[1]"
      />
      <Image
        src="/images/Time/DedaunanTengah.png"
        alt="Dedaunan Tengah"
        width={550}
        height={80}
        className="absolute bottom-0 right-[12vw] w-[60vw] z-[0]"
      />
      <Image
        src="/images/Time/DedaunanTengah.png"
        alt="Dedaunan Tengah 2"
        width={550}
        height={80}
        className="absolute bottom-0 -right-[10vw] w-[60vw] z-[0]"
      />
      <Image
        src="/images/Hero/Pohon-Akar.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 left-[14vw] w-[37vw] z-[5]"
      />
      <Image
        src="/images/Hero/Daun-Pandan.png"
        alt="Daun Pandan"
        width={547}
        height={81}
        className="absolute bottom-0 left-[3vw] w-[38vw] z-[4]"
      />
      <Image
        src="/images/Hero/Mawar-Putih.png"
        alt="Bunga Mawar Putih"
        width={570}
        height={70}
        className="absolute bottom-0 left-[23vw] w-[32vw] z-[7]"
      />
      <Image
        src="/images/LoveStory/Pohon-BungaMerah.png"
        alt="Pohon Buah Merah 2"
        width={550}
        height={120}
        className="absolute bottom-0 left-[38vw] w-[45vw] z-[5]"
      />
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan SVG"
        width={147}
        height={81}
        className="absolute bottom-0 left-[43vw] w-[37vw] z-[5]"
      />
      <Image
        src="/images/Hero/MawarKuning..png"
        alt="Bunga Mawar Kuning"
        width={580}
        height={80}
        className="absolute bottom-0 left-[72vw] w-[15vw] z-[6]"
      />
      <Image
        src="/images/LoveStory/Pohon-BungaMerah.png"
        alt="Pohon Buah Merah 3"
        width={550}
        height={120}
        className="absolute bottom-0 left-[70vw] w-[33vw] z-[5]"
      />
      <Image
        src="/images/LoveStory/Dedaunan.png"
        alt="Dedaunan Kanan"
        width={550}
        height={80}
        className="absolute bottom-0 right-[7vw] w-[25vw] z-[1]"
      />
      <Image
        src="/images/LoveStory/Dedaunan.png"
        alt="Dedaunan Kanan 2"
        width={550}
        height={80}
        className="absolute bottom-0 -right-[18vw] w-[45vw] z-[1]"
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
          <h2 className="font-cylburn text-[42px] text-[#713324]">
            Time & Location
          </h2>
        </motion.div>

        {/* Catholic */}
        <div className="flex flex-col items-center justify-center text-center mt-[15.6vw]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <h3 className="font-creators text-[20px] text-[#713324] tracking-wide">Catholic Holy Matrimony</h3>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw] tracking-wide">
              <p className="font-creators text-[14px] text-[#713324]">08.30 WIB</p>
              <p className="font-creators text-[14px] text-[#713324]">at</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] text-[#713324] mt-[4.9vw] leading-[20px] tracking-wide">
              Gereja Katolik <br />
              Paroki Bunda Tujuh Kedukaan, Pandu
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] text-[#713324] mt-[5.1vw] tracking-wide">Jl. Pandu No.4, Bandung</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <a href="https://www.google.com/maps/place/Gereja+Katolik+Paroki+Bunda+Tujuh+Kedukaan,+Pandu/@-6.9055223,107.5908405,17z" target="_blank" rel="noopener noreferrer">
              <button className="w-[160px] h-[33px] bg-[#E2C6AA] font-century text-[12px] text-[#713324] rounded-[44px] mt-[10.3vw] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
                GOOGLE MAPS
              </button>
            </a>
          </motion.div>
        </div>

        <div className="w-3 h-3 rounded-full bg-[#713324] my-[11.3vw]" />

        {/* Buddhist */}
        <div className="flex flex-col items-center justify-center text-center tracking-wide">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <h3 className="font-creators text-[20px] text-[#713324] tracking-wide">Buddhist Holy Matrimony</h3>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw]">
              <p className="font-creators text-[14px] text-[#713324]">16.00 WIB</p>
              <p className="font-creators text-[14px] text-[#713324]">at</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] text-[#713324] mt-[5.5vw] leading-[20px]">Imah Seniman</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] text-[#713324] mt-[5.7vw]">Jl. Kolonel Masturi No. VIII, Kab. Bandung, Lembang</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <a href="https://www.google.com/maps/place/Imah+Seniman/@-6.8326678,107.6093505,17z" target="_blank" rel="noopener noreferrer">
              <button className="w-[160px] h-[33px] bg-[#E2C6AA] font-century text-[12px] text-[#713324] rounded-[44px] mt-[10.3vw] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
                GOOGLE MAPS
              </button>
            </a>
          </motion.div>
        </div>

        <div className="w-3 h-3 rounded-full bg-[#713324] my-[11.3vw]" />

        {/* Wedding Reception */}
        <div className="flex flex-col items-center justify-center text-center tracking-wide">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <h3 className="font-creators text-[20px] text-[#713324]">Wedding Reception</h3>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <div className="flex flex-col items-center justify-center mt-[9.5vw] gap-[5vw]">
              <p className="font-creators text-[14px] text-[#713324]">08.30 WIB</p>
              <p className="font-creators text-[14px] text-[#713324]">at</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] text-[#713324] mt-[5.5vw]">Imah Seniman</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <p className="font-creators text-[12px] text-[#713324] mt-[5.7vw]">Jl. Kolonel Masturi No. VIII, Kab. Bandung, Lembang</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.8, ease: "easeOut" }}>
            <a href="https://www.google.com/maps/place/Imah+Seniman/@-6.8326678,107.6093505,17z" target="_blank" rel="noopener noreferrer">
              <button className="w-[160px] h-[33px] bg-[#E2C6AA] font-century text-[12px] text-[#713324] rounded-[44px] mt-[10.3vw] transition-all duration-300 ease-in-out hover:bg-[#713324] hover:text-[#E2C6AA] active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95 cursor-pointer">
                GOOGLE MAPS
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLocation;