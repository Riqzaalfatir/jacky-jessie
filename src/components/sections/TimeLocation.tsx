import React from "react";
import Image from "next/image";

const TimeLocation = () => {
  return (
    <section
      id="time"
      className="relative w-full pt-[212px] pb-[320px] overflow-x-hidden"
    >
      {/* ASET BAGIAN ATAS */}
      {/* Ranting Atas Kiri */}
      <Image
        src="/images/Time/Ranting-KiriAtas.png"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute top-0 left-0 w-[64.2vw] z-0"
      />

      {/* Ranting Atas Kanan */}
      <Image
        src="/images/Time/Ranting-KananAtas.png"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute top-0 right-0 w-[64.2vw] z-0"
      />

      {/* Ranting Tengah */}
      <Image
        src="/images/Time/Ranting-Tengah.png"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute top-[180vw] right-0 w-[34.2vw] z-0"
      />

      {/* Ornament Group Bawah */}
      {/* <Image
        src="/images/Time/Group.svg"
        alt="Ornament Bawah"
        width={390}
        height={320}
        className="absolute -bottom-[28vw] left-0 w-full z-0"
      /> */}

      {/* ASET BAWAH */}
      {/* Ranting Kiri */}
      <Image
        src="/images/Time/Ranting-KiriBawah.png"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute bottom-0 left-0 w-[39vw] z-0"
      />

      {/* Ranting Kanan */}
      <Image
        src="/images/Time/Ranting-KananBawah.png"
        alt="Pohon Kiri Atas"
        width={558}
        height={211}
        className="absolute bottom-0 right-0 w-[53vw] z-0"
      />

      {/* Pohon Buah Merah Kiri */}
      <Image
        src="/images/LoveStory/Pohon-BungaMerah.png"
        alt="Pohon Buah Merah"
        width={550}
        height={120}
        className="absolute bottom-0 -left-[23vw] w-[58vw] z-[3]"
      />

      {/* Dedaunan Belakang Kanan */}
      <Image
        src="/images/Time/Dedaunan-BelakangKiri..png"
        alt="Dedaunan Belakang"
        width={550}
        height={80}
        className="absolute bottom-0 -left-[7vw] w-[76vw] z-[1]"
      />

      {/* Dedaunan Belakang Kanan */}
      <Image
        src="/images/Time/DedaunanTengah.png"
        alt="Dedaunan Belakang"
        width={550}
        height={80}
        className="absolute bottom-0 right-[12vw] w-[80vw] z-[0]"
      />

      {/* Dedaunan Belakang Kanan */}
      <Image
        src="/images/Time/DedaunanTengah.png"
        alt="Dedaunan Belakang"
        width={550}
        height={80}
        className="absolute bottom-0 -right-[10vw] w-[75vw] z-[0]"
      />
      {/* Pohon Akar */}
      <Image
        src="/images/Hero/Pohon-Akar.png"
        alt="Pohon Akar"
        width={520}
        height={80}
        className="absolute bottom-0 left-[14vw] w-[37vw] z-[5]"
      />
      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/Daun-Pandan.png"
        alt="Daun Pandan"
        width={547}
        height={81}
        className="absolute bottom-0 left-[3vw] w-[38vw] z-[4]"
        // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
      />

      {/* Bunga Mawar Putih */}
      <Image
      src="/images/Hero/Mawar-Putih.png"
        alt="Bunga Mawar Putih"
        width={570}
        height={70}
        className="absolute bottom-0 left-[23vw] w-[32vw] z-[5]"
      />

      {/* Pohon Buah Merah Kiri */}
      <Image
        src="/images/Hero/Buah-MerahKiri.png"
        alt="Pohon Buah Merah"
        width={550}
        height={120}
        className="absolute bottom-0 left-[38vw] w-[40vw] z-[5]"
      />

      {/* Daun Pandan dari aset hero */}
      <Image
        src="/images/Hero/svg/Daun-Pandan.svg"
        alt="Daun Pandan"
        width={147}
        height={81}
        className="absolute bottom-0 left-[43vw] w-[37vw] z-[5]"
        // -left: 65/390*100 = 16.7vw | w: 147/390*100 = 37.7vw
      />

      {/* Bunga Mawar Kuning */}
      <Image
      src="/images/Hero/MawarKuning..png"
        alt="Bunga Mawar Kuning"
        width={580}
        height={80}
        className="absolute bottom-0 left-[72vw] w-[15vw] z-[6]"
      />
      {/* Pohon Buah Merah Kiri */}
      <Image
        src="/images/LoveStory/Pohon-BungaMerah.png"
        alt="Pohon Buah Merah"
        width={550}
        height={120}
        className="absolute bottom-0 left-[70vw] w-[33vw] z-[5]"
      />

      {/* Dedaunan Belakang Kanan */}
      <Image
        src="/images/LoveStory/Dedaunan.png"
        alt="Dedaunan Belakang"
        width={550}
        height={80}
        className="absolute bottom-0 right-[7vw] w-[55vw] z-[1]"
      />
      {/* Dedaunan Belakang Kanan */}
      <Image
        src="/images/LoveStory/Dedaunan.png"
        alt="Dedaunan Belakang"
        width={550}
        height={80}
        className="absolute bottom-0 -right-[18vw] w-[55vw] z-[1]"
      />

      {/* KONTEN */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
        <h2 className="font-cylburn text-[42px] text-[#713324]">
          Time & Location
        </h2>

        <div className="flex flex-col items-center justify-center  text-center mt-[61px]">
          <h3 className="font-creators text-[20px] text-[#713324] tracking-wide">
            Catholic Holy Matrimony
          </h3>
          <div className="flex flex-col items-center justify-center mt-[27px] gap-3 tracking-wide">
            <p className="font-creators text-[14px] text-[#713324]">
              08.30 WIB
            </p>
            <p className="font-creators text-[14px] text-[#713324]">at</p>
          </div>
          <p className="font-creators text-[12px] text-[#713324] mt-[19px] leading-[20px] tracking-wide">
            Gereja Katolik <br />
            Paroki Bunda Tujuh Kedukaan, Pandu
          </p>
          <p className="font-creators text-[12px] text-[#713324] mt-5 tracking-wide">
            Jl. Pandu No.4, Bandung
          </p>
          <a
            href="https://www.google.com/maps/place/Gereja+Katolik+Paroki+Bunda+Tujuh+Kedukaan,+Pandu/@-6.9055223,107.5908405,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e66b9767b619:0x307eda200152ee3d!8m2!3d-6.9055223!4d107.5934154!16s%2Fg%2F122yh67w?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
    w-[160px] h-[33px]
    bg-[#E2C6AA] 
    font-century text-[12px] text-[#713324] 
    rounded-[44px] mt-10
    transition-all duration-300 ease-in-out
    hover:bg-[#713324] hover:text-[#E2C6AA]
    active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95
    cursor-pointer
  "
            >
              GOOGLE MAPS
            </button>
          </a>
        </div>

        <div className="w-3 h-3 rounded-full bg-[#713324] my-[44px]" />

        <div className="flex flex-col items-center justify-center  text-center tracking-wide">
          <h3 className="font-creators text-[20px] text-[#713324] tracking-wide">
            Buddhist Holy Matrimony
          </h3>
          <div className="flex flex-col items-center justify-center mt-[27px] gap-3">
            <p className="font-creators text-[14px] text-[#713324]">
              16.00 WIB
            </p>
            <p className="font-creators text-[14px] text-[#713324] ">at</p>
          </div>
          <p className="font-creators text-[12px] text-[#713324] mt-[19px] leading-[20px]">
            Imah Seniman
          </p>
          <p className="font-creators text-[12px] text-[#713324] mt-5">
            Jl. Kolonel Masturi No. VIII, Kab. Bandung, Lembang
          </p>
          <a
            href="https://www.google.com/maps/place/Gereja+Katolik+Paroki+Bunda+Tujuh+Kedukaan,+Pandu/@-6.9055223,107.5908405,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e66b9767b619:0x307eda200152ee3d!8m2!3d-6.9055223!4d107.5934154!16s%2Fg%2F122yh67w?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
    w-[160px] h-[33px]
    bg-[#E2C6AA] 
    font-century text-[12px] text-[#713324] 
    rounded-[44px] mt-10
    transition-all duration-300 ease-in-out
    hover:bg-[#713324] hover:text-[#E2C6AA]
    active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95
    cursor-pointer
  "
            >
              GOOGLE MAPS
            </button>
          </a>
        </div>

        <div className="w-3 h-3 rounded-full bg-[#713324] my-[44px]" />

        <div className="flex flex-col items-center justify-center  text-center tracking-wide">
          <h3 className="font-creators text-[20px] text-[#713324]">
            Wedding Reception
          </h3>
          <div className="flex flex-col items-center justify-center mt-[27px] gap-3">
            <p className="font-creators text-[14px] text-[#713324]">
              08.30 WIB
            </p>
            <p className="font-creators text-[14px] text-[#713324]">at</p>
          </div>
          <p className="font-creators text-[12px] text-[#713324] mt-[19px]">
            Imag Seniman
          </p>
          <p className="font-creators text-[12px] text-[#713324] mt-5">
            Jl. Kolonel Masturi No. VIII, Kab. Bandung, Lembang
          </p>
         <a
            href="https://www.google.com/maps/place/Gereja+Katolik+Paroki+Bunda+Tujuh+Kedukaan,+Pandu/@-6.9055223,107.5908405,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e66b9767b619:0x307eda200152ee3d!8m2!3d-6.9055223!4d107.5934154!16s%2Fg%2F122yh67w?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
    w-[160px] h-[33px]
    bg-[#E2C6AA] 
    font-century text-[12px] text-[#713324] 
    rounded-[44px] mt-10
    transition-all duration-300 ease-in-out
    hover:bg-[#713324] hover:text-[#E2C6AA]
    active:bg-[#5a2819] active:text-[#E2C6AA] active:scale-95
    cursor-pointer
  "
            >
              GOOGLE MAPS
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TimeLocation;
