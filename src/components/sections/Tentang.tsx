import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

const Tentang = () => {
  return (
    <section
      id="tentang"
      className="relative w-full pt-[42.3vw]  bg-[#EADCC8] overflow-x-hidden scrollbar-hide"
      // pt: 165/390*100 = 42.3vw | pb: 267/390*100 = 68.5vw
    >
      {/* ASET BAGIAN ATAS */}
      <Image
        src="/images/Hero/Burung.gif"
        alt="Burung"
        width={400}
        height={150}
        className="absolute top-[5px] w-[102.6vw]"
      />

      {/* Pohon Golden Kanan */}
      <Image
        src="/images/Tentang/Pohon-goldenKanan.png"
        alt="Pohon Golden Kanan"
        width={550}
        height={80}
        className="absolute top-[89vw] right-0 w-[32vw] z-[1]"
      />
      {/* Ranting Kiri Atas */}
      <Image
        src="/images/Tentang/Ranting-KiriAtas.png"
        alt="Ranting Kiri Atas"
        width={538}
        height={238}
        className="absolute -top-[63vw] left-0 w-[63vw]"
        // -top: 250/390*100 = 64.1vw | w: 238/390*100 = 61vw
      />

      {/* Ranting Kanan Atas */}
      <Image
        src="/images/Tentang/Ranting-KananAtas.svg"
        alt="Ranting Kanan Atas"
        width={538}
        height={238}
        className="absolute -top-[61.1vw] right-0 w-[61vw]"
      />

      {/* Ranting Kiri Tengah */}
      <Image
        src="/images/Tentang/Ranting-Kiri.png"
        alt="Ranting Kanan Atas"
        width={538}
        height={138}
        className="absolute top-[185vw] left-0 w-[26vw]"
        // top: 650/390*100 = 166.7vw | w: 138/390*100 = 35.4vw
      />

      {/* ASET BAWAH */}
      {/* Pohon Kiri Bawah */}
      <Image
        src="/images/Tentang/Pohon-Kiri.png"
        alt="Pohon Golden Kiri Bawah"
        width={560}
        height={282}
        className="absolute bottom-0 left-0 w-[35vw] z-[1]"
        // w: 160/390*100 = 41vw
      />

      {/* Dedaunan Belakang Kanan */}
      <Image
        src="/images/LoveStory/Dedaunan.png"
        alt="Dedaunan Belakang"
        width={550}
        height={80}
        className="absolute bottom-0 -left-[30vw] w-[90vw] z-[0]"
      />

      <Image
        src="/images/LoveStory/Dedaunan.png"
        alt="Dedaunan Belakang"
        width={550}
        height={80}
        className="absolute bottom-0 left-[0vw] w-[82vw] z-[0] opacity-50"
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/Daun-Pandan.png"
        alt="Daun Pandan"
        width={547}
        height={81}
        className="absolute bottom-0 -left-[16vw] w-[33vw] z-[2]"
        // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
      />

      {/* Pohon Buah Merah Kiri dari aset hero */}
      <Image
        src="/images/Hero/Buah-MerahKiri.png"
        alt="Pohon Buah Merah"
        width={560}
        height={120}
        className="absolute bottom-0 -left-[10.5vw] w-[38vw] z-[1]"
        // -left: 35/390*100 = 9vw | w: 160/390*100 = 41vw
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/Daun-Pandan.png"
        alt="Daun Pandan"
        width={507}
        height={81}
        className="absolute bottom-0 left-[3vw] w-[26vw] z-[2]"
        // left: 25/390*100 = 6.4vw | w: 107/390*100 = 27.4vw
      />

      {/* Pohon Akar aset dari hero */}
      <Image
        src="/images/Tentang/Daun.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 left-[11vw] w-[26vw] z-[2]"
      />

      {/* Bunga Mawar Putih */}
      <Image
        src="/images/Tentang/Bunga-MawarPutih.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 left-[23vw] w-[22vw] z-[3]"
      />

      {/* Pohon Buah Merah */}
      <Image
        src="/images/Tentang/Bunga-BuahMerah.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 left-[34vw] w-[37vw] z-[1]"
      />

      {/* Bunga Mawar Kuning aset dari hero */}
      <Image
        src="/images/Hero/MawarKuning..png"
        alt="Bunga Mawar Kuning"
        width={500}
        height={80}
        className="absolute bottom-0 left-[32vw] w-[19vw] z-[2]"
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/Daun-Pandan.png"
        alt="Daun Pandan"
        width={507}
        height={81}
        className="absolute bottom-0 left-[36vw] w-[30vw] z-[2]"
      />

      {/* Pohon Bunga Kecil */}
      <Image
        src="/images/Hero/Pohon-BungaKecil.png"
        alt="Pohon Bunga Kecil"
        width={500}
        height={80}
        className="absolute bottom-0 left-[57vw] w-[24vw] z-[1]"
      />

      {/* Bunga Mawar Kuning aset dari hero */}
      <Image
        src="/images/Hero/MawarKuning..png"
        alt="Bunga Mawar Kuning"
        width={500}
        height={80}
        className="absolute bottom-0 left-[67vw] w-[18vw] z-[2]"
      />

      {/* Bunga Mawar Putih */}
      <Image
        src="/images/Tentang/Bunga-MawarPutih.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 left-[77vw] w-[17vw] z-[2]"
      />
      {/* Pohon Buah Merah Kiri dari aset hero */}
      <Image
        src="/images/Tentang/Daun-BungaMerah.png"
        alt="Pohon Buah Merah"
        width={560}
        height={120}
        className="absolute bottom-0 left-[76vw] w-[25vw] z-[1]"
        // -left: 35/390*100 = 9vw | w: 160/390*100 = 41vw
      />
      {/* Bunga Kanan */}
      <Image
        src="/images/Tentang/Bunga-PojokKanan.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 right-0 w-[15vw] z-[2]"
      />

      {/* Bunga Kanan */}
      <Image
        src="/images/Tentang/Daun-BelakangKanan.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 right-0 w-[35vw] z-[1]"
      />
      <Image
        src="/images/Tentang/Daun-BelakangKanan.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 right-0 w-[35vw] z-[1]"
      />

      <Image
        src="/images/Tentang/Daun-BelakangKanan.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 right-[15vw] w-[25vw] z-[0]"
      />

      {/* Bunga Kanan */}
      <Image
        src="/images/Tentang/ranting.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 right-3 w-[42vw] z-[1]"
      />

      {/* Pohon Kanan bAWAH */}
      <Image
        src="/images/Tentang/Pohon-KananBawah.png"
        alt="Pohon Golden Kiri Bawah"
        width={560}
        height={282}
        className="absolute bottom-0 right-0 w-[37vw] z-[0]"
        // w: 160/390*100 = 41vw
      />

      {/* Kupu Kupu 2 */}
      <Image
        src="/images/Hero/KupuKupu-2.gif"
        alt="Kupu Kupu 2"
        width={50}
        height={80}
        className="absolute top-[47vw] right-[1.5vw] w-[12vw] z-[5]"
      />

      {/* kupu kupu 1 */}
      <Image
        src="/images/Hero/KupuKupu-1.gif"
        alt="Kupu Kupu 1"
        width={50}
        height={80}
        className="absolute bottom-[23vw] left-[21vw] w-[11vw] z-[5]"
      />

      {/* Kupu Kupu 3 */}
      <Image
        src="/images/Hero/KupuKupu-3.gif"
        alt="Kupu Kupu 3"
        width={50}
        height={80}
        className="absolute bottom-[123vw] left-[10vw] w-[11vw] z-[5]"
      />

      {/* KONTEN - TIDAK DIUBAH */}
      <div className="relative z-10 flex flex-col items-center justify-center leading-none text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <p className="font-creators text-[12px] text-[#713324] text-cente tracking-wide leading-[20px]">
            By the Grace of Our God
            <br />
            We request the honour of your presence
            <br />
            of our wedding
          </p>
        </motion.div>

        {/* Pengantin Laki-Laki */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src="/images/Tentang/Pengantin-Laki.png"
            alt="Pengantin Laki-Laki"
            width={200}
            height={261}
            className="mt-[26px]"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <h1 className="font-cylburn text-[40px] text-[#713324] mt-[49px]">
            Jacky Steven Rusli
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center mt-[31px]">
            <p className="font-creators text-[12px] text-[#713324] tracking-wide">
              The Son of
            </p>
            <p className="font-creators text-[12px] text-[#713324] mt-3.5 tracking-wide">
              Mr. AGUS RUSLI and
            </p>
            <p className="font-creators text-[12px] text-[#713324] mt-2 tracking-wide ">
              Mrs. ONG KIE LIM (TRIDEWI)
            </p>
          </div>
        </motion.div>

        {/* Pengantin Perempuan */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src="/images/Tentang/Pengantin-Perempuan.png"
            alt="Pengantin Perempuan"
            width={200}
            height={261}
            className="mt-[45px]"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <h1 className="font-cylburn text-[40px] text-[#713324] mt-[43px]">
            Jessie Andayani Santoso
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center mt-[24px] tracking-wide">
            <p className="font-creators text-[12px] text-[#713324]">
              The Daughter of
            </p>
            <p className="font-creators text-[12px] text-[#713324] mt-4">
              Mr. WIBOWO SANTOSO and
            </p>
            <p className="font-creators text-[12px] text-[#713324] mt-2">
              Mrs. IMELDA SIEN
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <p className="font-creators text-[12px] text-[#713324] mt-[46px] pb-[44vw] tracking-wide leading-[20px]">
            We would be honoured
            <br />
            by your presence and blessing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang