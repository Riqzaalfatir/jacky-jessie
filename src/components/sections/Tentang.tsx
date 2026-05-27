import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";


const Tentang = () => {
  return (
    <motion.section
      id="tentang"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="relative w-full pt-[42.3vw]  bg-[#FEF8EF] overflow-x-hidden"
      // pt: 165/390*100 = 42.3vw | pb: 267/390*100 = 68.5vw
    >
      {/* ASET BAGIAN ATAS */}

      {/* Pohon Golden Kanan */}
      <Image
        src="/images/Hero/svg/Pohon-GoldenKanan.svg"
        alt="Pohon Golden Kanan"
        width={50}
        height={80}
        className="absolute top-[74vw] right-0 w-[30vw] z-[1]"
      />
      {/* Ranting Kiri Atas */}
      <Image
        src="/images/Tentang/Ranting-KiriAtas.png"
        alt="Ranting Kiri Atas"
        width={238}
        height={238}
        className="absolute -top-[64.1vw] left-0 w-[63vw]"
        // -top: 250/390*100 = 64.1vw | w: 238/390*100 = 61vw
      />

      {/* Ranting Kanan Atas */}
      <Image
        src="/images/Tentang/Ranting-KananAtas.svg"
        alt="Ranting Kanan Atas"
        width={238}
        height={238}
        className="absolute -top-[64.1vw] right-0 w-[61vw]"
      />

      {/* Ranting Kiri Tengah */}
      <Image
        src="/images/Tentang/Ranting-Kiri.png"
        alt="Ranting Kanan Atas"
        width={138}
        height={138}
        className="absolute top-[165vw] left-0 w-[28vw]"
        // top: 650/390*100 = 166.7vw | w: 138/390*100 = 35.4vw
      />

      {/* ASET BAWAH */}
      {/* Pohon Kiri Bawah */}
      <Image
        src="/images/Tentang/Pohon-Kiri.png"
        alt="Pohon Golden Kiri Bawah"
        width={160}
        height={282}
        className="absolute bottom-0 left-0 w-[35vw] z-[1]"
        // w: 160/390*100 = 41vw
      />

      {/* Dedaunan Belakang Kanan */}
      <Image
        src="/images/Tentang/Bunga-BelakangKiri.svg"
        alt="Dedaunan Belakang"
        width={50}
        height={80}
        className="absolute bottom-0 left-0 w-[55vw] z-[0]"
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan"
        width={147}
        height={81}
        className="absolute bottom-0 -left-[12.7vw] w-[32vw] z-[2]"
        // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
      />

      {/* Pohon Buah Merah Kiri dari aset hero */}
      <Image
        src="/images/Hero/svg/Pohon-BuahMerah1.svg"
        alt="Pohon Buah Merah"
        width={160}
        height={120}
        className="absolute bottom-0 -left-[9vw] w-[35vw] z-[1]"
        // -left: 35/390*100 = 9vw | w: 160/390*100 = 41vw
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan"
        width={107}
        height={81}
        className="absolute bottom-0 left-[3vw] w-[27.4vw] z-[2]"
        // left: 25/390*100 = 6.4vw | w: 107/390*100 = 27.4vw
      />

      {/* Pohon Akar aset dari hero */}
      <Image
        src="/images/Tentang/Daun.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[11vw] w-[26vw] z-[2]"
      />

      {/* Bunga Mawar Putih */}
      <Image
        src="/images/Tentang/Bunga-MawarPutih.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[23vw] w-[22vw] z-[3]"
      />

      {/* Pohon Buah Merah */}
      <Image
        src="/images/Tentang/Bunga-BuahMerah.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[34vw] w-[37vw] z-[1]"
      />

      {/* Bunga Mawar Kuning aset dari hero */}
      <Image
        src="/images/Hero/svg/Bunga-MawarKuning.svg"
        alt="Bunga Mawar Kuning"
        width={100}
        height={80}
        className="absolute bottom-0 left-[32vw] w-[19vw] z-[2]"
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan"
        width={107}
        height={81}
        className="absolute bottom-0 left-[36vw] w-[37vw] z-[2]"
      />

      {/* Pohon Bunga Kecil */}
      <Image
        src="/images/Hero/svg/Pohon-BungaKecil.svg"
        alt="Pohon Bunga Kecil"
        width={100}
        height={80}
        className="absolute bottom-0 left-[57vw] w-[24vw] z-[1]"
      />

      {/* Bunga Mawar Kuning aset dari hero */}
      <Image
        src="/images/Hero/svg/Bunga-MawarKuning.svg"
        alt="Bunga Mawar Kuning"
        width={100}
        height={80}
        className="absolute bottom-0 left-[67vw] w-[12vw] z-[2]"
      />

      {/* Bunga Mawar Putih */}
      <Image
        src="/images/Tentang/Bunga-MawarPutih.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[71.5vw] w-[15vw] z-[2]"
      />
      {/* Pohon Buah Merah Kiri dari aset hero */}
      <Image
        src="/images/Tentang/Daun-BungaMerah.png"
        alt="Pohon Buah Merah"
        width={160}
        height={120}
        className="absolute bottom-0 left-[76vw] w-[25vw] z-[1]"
        // -left: 35/390*100 = 9vw | w: 160/390*100 = 41vw
      />
      {/* Bunga Kanan */}
      <Image
        src="/images/Tentang/Bunga-PojokKanan.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 right-0 w-[15vw] z-[2]"
      />

      {/* Bunga Kanan */}
      <Image
        src="/images/Tentang/Daun-BelakangKanan.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 right-0 w-[35vw] z-[1]"
      />

      {/* Bunga Kanan */}
      <Image
        src="/images/Tentang/Ranting.svg"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 right-1 w-[42vw] z-[1]"
      />

      {/* Pohon Kanan bAWAH */}
      <Image
        src="/images/Tentang/Pohon-KananBawah.png"
        alt="Pohon Golden Kiri Bawah"
        width={160}
        height={282}
        className="absolute bottom-0 right-0 w-[37vw] z-[0]"
        // w: 160/390*100 = 41vw
      />

      {/* KONTEN - TIDAK DIUBAH */}
      <div className="relative z-10 flex flex-col items-center justify-center leading-none text-center">
        <motion.p variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }} className="font-creators text-[12px] text-[#713324] text-cente tracking-wide leading-[20px]">
          By the Grace of Our God
          <br />
          We request the honour of your presence
          <br />
          of our wedding
        </motion.p>

        {/* Pengantin Laki-Laki */}
        <Image
          src="/images/Tentang/Pengantin-Laki.png"
          alt="Pengantin Laki-Laki"
          width={200}
          height={261}
          className="mt-[26px]"
        />

        <h1 className="font-cylburn text-[40px] text-[#713324] mt-[49px]">
          Jacky Steven Rusli
        </h1>

        <div className="flex flex-col items-center justify-center mt-[31px]">
          <p className="font-creators text-[12px] text-[#713324] tracking-wide">
            The Son of
          </p>
          <p className="font-creators text-[12px] text-[#713324] mt-3 tracking-wide">
            Mr. AGUS RUSLI and
          </p>
          <p className="font-creators text-[12px] text-[#713324] mt-1.5 tracking-wide ">
            Mrs. ONG KIE LIM (TRIDEWI)
          </p>
        </div>

        {/* Pengantin Perempuan */}
        <Image
          src="/images/Tentang/Pengantin-Perempuan.png"
          alt="Pengantin Perempuan"
          width={200}
          height={261}
          className="mt-[45px]"
        />

        <h1 className="font-cylburn text-[40px] text-[#713324] mt-[43px]">
          Jessie Andayani Santoso
        </h1>

        <div className="flex flex-col items-center justify-center mt-[24px] tracking-wide">
          <p className="font-creators text-[12px] text-[#713324]">
            The Daughter of
          </p>
          <p className="font-creators text-[12px] text-[#713324] mt-4">
            Mr. Wibowo Santoso and
          </p>
          <p className="font-creators text-[12px] text-[#713324] mt-2">
            Mrs. Imelda Sien
          </p>
        </div>

        <p className="font-creators text-[12px] text-[#713324] mt-[46px] pb-[171px] tracking-wide leading-[20px]">
          We would be honoured
          <br />
          by your presence and blessing.
        </p>
      </div>
    </motion.section>
  );
};

export default Tentang;
