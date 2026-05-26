import React from "react";
import Image from "next/image";

const Tentang = () => {
  return (
    <section
      id="tentang"
      className="relative w-full pt-[42.3vw] pb-[68.5vw] bg-[#FEF8EF] overflow-x-hidden"
      // pt: 165/390*100 = 42.3vw | pb: 267/390*100 = 68.5vw
    >
      {/* ASET BAGIAN ATAS */}
      {/* Ranting Kiri Atas */}
      <Image
        src="/images/Tentang/Ranting-KiriAtas.png"
        alt="Ranting Kiri Atas"
        width={238}
        height={238}
        className="absolute -top-[64.1vw] left-0 w-[61vw]"
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
        className="absolute top-[166.7vw] left-0 w-[35.4vw]"
        // top: 650/390*100 = 166.7vw | w: 138/390*100 = 35.4vw
      />

      {/* ASET BAWAH */}
      {/* Pohon Kiri Bawah */}
      <Image
        src="/images/Tentang/Pohon-Kiri.png"
        alt="Pohon Golden Kiri Bawah"
        width={160}
        height={282}
        className="absolute bottom-0 left-0 w-[41vw] z-[1]"
        // w: 160/390*100 = 41vw
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan"
        width={147}
        height={81}
        className="absolute bottom-0 -left-[16.7vw] w-[37.7vw] z-[2]"
        // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
      />

      {/* Pohon Buah Merah Kiri dari aset hero */}
      <Image
        src="/images/Hero/svg/Pohon-BuahMerah1.svg"
        alt="Pohon Buah Merah"
        width={160}
        height={120}
        className="absolute bottom-0 -left-[9vw] w-[41vw]"
        // -left: 35/390*100 = 9vw | w: 160/390*100 = 41vw
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan"
        width={107}
        height={81}
        className="absolute bottom-0 left-[7.4vw] w-[27.4vw] z-[2]"
        // left: 25/390*100 = 6.4vw | w: 107/390*100 = 27.4vw
      />

      {/* Pohon Akar aset dari hero */}
      <Image
        src="/images/Hero/svg/Pohon-Akar.svg"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[15.9vw] w-[30.8vw] z-[1]"
      />

      {/* Bunga Mawar Putih */}
      <Image
        src="/images/Tentang/Bunga-MawarPutih.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[28.9vw] w-[20.8vw] z-[2]"
      />

      {/* Pohon Buah Merah */}
      <Image
        src="/images/Tentang/Bunga-BuahMerah.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[41.9vw] w-[20.8vw] z-[2]"
      />

      {/* Bunga Mawar Kuning aset dari hero */}
      <Image
        src="/images/Hero/svg/Bunga-MawarKuning.svg"
        alt="Bunga Mawar Kuning"
        width={100}
        height={80}
        className="absolute bottom-0 left-[42vw] w-[12vw] z-[2]"
      />

       {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan"
        width={107}
        height={81}
        className="absolute bottom-0 left-[47vw] w-[18vw] z-[2]"
      />

       {/* Pohon Bunga Kecil */}
            <Image
              src="/images/Hero/svg/Pohon-BungaKecil.svg"
              alt="Pohon Bunga Kecil"
              width={100}
              height={80}
              className="absolute bottom-0 left-[51.3vw] w-[20vw] z-[1]"
            />

        {/* Bunga Mawar Kuning aset dari hero */}
      <Image
        src="/images/Hero/svg/Bunga-MawarKuning.svg"
        alt="Bunga Mawar Kuning"
        width={100}
        height={80}
        className="absolute bottom-0 left-[62vw] w-[12vw] z-[2]"
      />

      {/* Bunga Mawar Putih */}
      <Image
        src="/images/Tentang/Bunga-MawarPutih.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 left-[64.9vw] w-[20.8vw] z-[2]"
      />
      {/* Bunga Kanan */}
      <Image
        src="/images/Tentang/Bunga-PojokKanan.png"
        alt="Pohon Akar"
        width={120}
        height={80}
        className="absolute bottom-0 right-0 w-[20.8vw] z-[2]"
      />

      {/* Pohon Kanan bAWAH */}
      <Image
        src="/images/Tentang/Pohon-KananBawah.png"
        alt="Pohon Golden Kiri Bawah"
        width={160}
        height={282}
        className="absolute bottom-0 right-0 w-[41vw] z-[1]"
        // w: 160/390*100 = 41vw
      />


      {/* KONTEN - TIDAK DIUBAH */}
      <div className="relative z-10 flex flex-col items-center justify-center leading-none text-center">
        <p className="font-creators text-[12px] text-[#713324] text-center">
          By the Grace of Our God
          <br />
          We request the honour of your presence
          <br />
          of our wedding
        </p>

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
          <p className="font-creators text-[12px] text-[#713324]">The Son of</p>
          <p className="font-creators text-[12px] text-[#713324]">
            Mr. Agus Rusli and
          </p>
          <p className="font-creators text-[12px] text-[#713324]">
            Mrs. Ong Kie Lim (Tridewi)
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

        <div className="flex flex-col items-center justify-center mt-[14px]">
          <p className="font-creators text-[12px] text-[#713324]">
            The Daughter of
          </p>
          <p className="font-creators text-[12px] text-[#713324]">
            Mr. Wibowo Santoso and
          </p>
          <p className="font-creators text-[12px] text-[#713324]">
            Mrs. Imelda Sien
          </p>
        </div>

        <p className="font-creators text-[12px] text-[#713324] mt-[46px]">
          We would be honoured
          <br />
          by your presence and blessing.
        </p>
      </div>
    </section>
  );
};

export default Tentang;
