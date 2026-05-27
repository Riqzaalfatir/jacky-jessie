import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animation";

type HeroProps = {
  start: boolean;
};

const Hero = ({ start }: { start: boolean }) => {
  return (
    // pt-[167px] = 167/390*100 = 42.8vw | pb-[273px] = 273/390*100 = 70vw
    <motion.section
      id="hero"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="relative w-full pt-[42.8vw] pb-[70vw]  overflow-x-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/Hero/Bg-Hero.svg"
        alt="Hero Background"
        fill
        className="object-cover object-top"
        priority
      />

      {/* ASET BAGIAN ATAS */}

      {/* Pohon Kiri Atas */}
      <motion.div
        variants={fadeIn}
        transition={{ duration: 0.6, ease: "easeIn" }}
        animate={start ? "show" : "hidden"}
        className="absolute top-0 left-0 w-[66vw]"
      >
        <Image
          src="/images/Hero/PohonKiriAtas.png"
          alt="Pohon Kiri Atas"
          width={958}
          height={211}
          className="w-full"
        />
      </motion.div>

      {/* Pohon Kanan Atas */}
      <motion.div
         variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeIn" }}
        animate={start ? "show" : "hidden"}
        className="absolute top-0 right-0 w-[64.4vw]"
      >
        <Image
          src="/images/Hero/Pohon-KananAtas.webp"
          alt="Pohon Kanan Atas"
          width={251}
          height={205}
          className="w-full"
        />
      </motion.div>

      {/* Burung */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute top-[70px] w-[102.6vw]"
      >
        <Image
          src="/images/Hero/Burung.gif"
          alt="Burung"
          width={400}
          height={150}
          className="w-full"
        />
      </motion.div>

      {/* ASET BAGIAN BAWAH */}
      {/* Pohon Golden Kiri Bawah */}
      <motion.div
       variants={fadeIn}
        transition={{ duration: 1, ease: "easeIn" }}
        animate={start ? "show" : "hidden"}
        className="absolute bottom-0 left-0 w-[38vw] z-[1]"
      >
        <Image
          src="/images/Hero/svg/Pohon-GoldenKiri.svg"
          alt="Pohon Golden Kiri Bawah"
          width={160}
          height={282}
          className="w-full"
        />
      </motion.div>

      {/* Daun Pandan */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 -left-[10vw] w-[34.7vw] z-[2]"
      >
        <Image
          src="/images/Hero/svg/Daun-Pandan.svg"
          alt="Daun Pandan"
          width={80}
          height={81}
          className="w-full"
        />
      </motion.div>

      {/* Pohon Buah Merah Kiri */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-0 w-[36vw] z-[1]"
      >
        <Image
          src="/images/Hero/svg/Pohon-BuahMerah1.svg"
          alt="Pohon Buah Merah"
          width={150}
          height={120}
          className="w-full"
        />
      </motion.div>

      {/* Bunga Mawar Putih */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[11vw] w-[16vw] z-[3]"
      >
        <Image
          src="/images/Hero/svg/Bunga-MawarPutih.svg"
          alt="Bunga Mawar Putih"
          width={70}
          height={70}
          className="w-full"
        />
      </motion.div>

      {/* Bunga Mawar Kuning */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[13vw] w-[19vw] z-[2]"
      >
        <Image
          src="/images/Hero/svg/Bunga-MawarKuning.svg"
          alt="Bunga Mawar Kuning"
          width={80}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Daun Pandan */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[22.3vw] w-[22vw] z-[2]"
      >
        <Image
          src="/images/Hero/svg/Daun-Pandan.svg"
          alt="Daun Pandan"
          width={46}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Pohon Akar */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[30.5vw] w-[27.8vw] z-[1]"
      >
        <Image
          src="/images/Hero/svg/Pohon-Akar.svg"
          alt="Pohon Akar"
          width={120}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Pohon Bunga Kecil */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[44vw] w-[24vw] z-[2]"
      >
        <Image
          src="/images/Hero/svg/Pohon-BungaKecil.svg"
          alt="Pohon Bunga Kecil"
          width={100}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Pohon Akar 2 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[53vw] w-[17.8vw] z-[1]"
      >
        <Image
          src="/images/Hero/svg/Pohon-Akar.svg"
          alt="Pohon Akar"
          width={120}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Daun Pandan */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[58.5vw] w-[26.6vw] z-[2]"
      >
        <Image
          src="/images/Hero/svg/Daun-Pandan.svg"
          alt="Daun Pandan"
          width={100}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Bunga Mawar Putih */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[73.5vw] w-[16vw] z-[3]"
      >
        <Image
          src="/images/Hero/svg/Bunga-MawarPutih.svg"
          alt="Bunga Mawar Putih"
          width={100}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Bunga Mawar Kuning */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-[85.5vw] w-[20vw] z-[2]"
      >
        <Image
          src="/images/Hero/svg/Bunga-MawarKuning.svg"
          alt="Bunga Mawar Kuning"
          width={100}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Pohon-BungaMerah */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 right-0 w-[30vw] z-[1]"
      >
        <Image
          src="/images/Hero/svg/Pohon-BungaMerah2.svg"
          alt="Bunga Bunga Merah"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Pohon Golden Kanan */}
      <motion.div
       variants={fadeIn}
        transition={{ duration: 1.2, ease: "easeIn" }}
        animate={start ? "show" : "hidden"}
        className="absolute bottom-[10vw] right-0 w-[32vw] z-[1]"
      >
        <Image
          src="/images/Hero/svg/Pohon-GoldenKanan.svg"
          alt="Pohon Golden Kanan"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Dedaunan Belakang Kanan */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 right-0 w-[55vw] z-[0]"
      >
        <Image
          src="/images/Hero/svg/DedaunanBelakang.svg"
          alt="Dedaunan Belakang"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Dedaunan Belakang Tengah */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 right-[40vw] w-[33vw] z-[0]"
      >
        <Image
          src="/images/Hero/svg/DedaunanBelakang.svg"
          alt="Dedaunan Belakang"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Dedaunan Belakang Kiri */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-0 left-4 w-[55vw] z-[0]"
      >
        <Image
          src="/images/Hero/svg/Dedaunan-BelakangKiri.svg"
          alt="Dedaunan Belakang"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* KUPU KUPU */}
      {/* kupu kupu 1 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-[10.5vw] left-[24.5vw] w-[11vw] z-[5]"
      >
        <Image
          src="/images/Hero/KupuKupu-1.gif"
          alt="Kupu Kupu 1"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Kupu Kupu 2 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-[9vw] left-[69vw] w-[11vw] z-[5]"
      >
        <Image
          src="/images/Hero/KupuKupu-2.gif"
          alt="Kupu Kupu 2"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Kupu Kupu 4 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-[21vw] right-[3.5vw] w-[7vw] z-[5]"
      >
        <Image
          src="/images/Hero/KupuKupu4.png"
          alt="Kupu Kupu 4"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Kupu Kupu 3 */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-[51vw] right-[20vw] w-[11vw] z-[5]  scale-x-[-1]"
      >
        <Image
          src="/images/Hero/KupuKupu-3.gif"
          alt="Kupu Kupu 3"
          width={50}
          height={80}
          className="w-full"
        />
      </motion.div>

      {/* Kunang Kunang */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute bottom-0 w-full z-[3]"
      >
        <source src="/images/Hero/KunangKunang.mp4" type="video/mp4" />
      </video> */}

      {/* Konten */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
        
        <Image
          src="/images/Hero/Logo-J.svg"
          alt="Logo J"
          width={65}
          height={65}
          className="mx-auto"
        />
        <p className="uppercase font-creators text-[14px] text-[#713324] tracking-widest mt-[38px]">
          THE WEDDING OF
        </p>

        {/* Nama Pengantin */}
        <div className="flex flex-col items-center text-[#713324] mt-[20px]">
          <h1 className="font-creators text-[48px] -ml-[70px]">
            <span className="font-burgues">J</span>acky
          </h1>
          <h3 className="font-creators text-[24px]">&amp;</h3>
          <h1 className="font-creators text-[48px] ml-[115px]">
            <span className="font-burgues">J</span>essie
          </h1>
        </div>

        <p className="uppercase font-creators text-[14px] text-[#713324] tracking-wide mt-[31px]">
          27 June 2026
        </p>

        <p className="font-century text-[12px] text-[#6D3323] tracking-wide text-center mt-[28px] leading-[20px]">
          In a forest of a billion souls, <br />
          found the one who speaks my silence.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, stagger } from "@/lib/animation";

// const Hero = () => {
//   return (
//     // pt-[167px] = 167/390*100 = 42.8vw | pb-[273px] = 273/390*100 = 70vw
//     <motion.section
//       id="hero"
//       variants={stagger}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.05 }}
//       className="relative w-full pt-[42.8vw] pb-[70vw]  overflow-x-hidden"
//     >

//       {/* Background Image */}
//       <Image
//         src="/images/Hero/Bg-Hero.svg"
//         alt="Hero Background"
//         fill
//         className="object-cover object-top"
//         priority
//       />

//       {/* ASET BAGIAN ATAS */}

//       {/* Pohon Kiri Atas */}
//     <motion.div
//       variants={fadeIn}
// initial="hidden"
//   whileInView="show"
//       transition={{ duration: 1.5, ease: "easeIn" }}
//       className="absolute top-0 left-0 w-[66vw]"
//     >
//       <Image
//         src="/images/Hero/PohonKiriAtas.png"
//         alt="Pohon Kiri Atas"
//         width={958}
//         height={211}
//         className="w-full"
//       />
//     </motion.div>

//       {/* Pohon Kanan Atas */}
//       <Image
//         src="/images/Hero/Pohon-KananAtas.webp"
//         alt="Pohon Kanan Atas"
//         width={251}
//         height={205}
//         className="absolute top-0 right-0 w-[64.4vw]"
//       />

//       {/* Burung */}
//       <Image
//         src="/images/Hero/Burung.gif"
//         alt="Burung"
//         width={400}
//         height={150}
//         className="absolute top-[70px] w-[102.6vw]"
//       />

//       {/* ASET BAGIAN BAWAH */}
//       {/* Pohon Golden Kiri Bawah */}
//       <Image
//         src="/images/Hero/svg/Pohon-GoldenKiri.svg"
//         alt="Pohon Golden Kiri Bawah"
//         width={160}
//         height={282}
//         className="absolute bottom-0 left-0 w-[38vw] z-[1]"
//       />

//       {/* Daun Pandan */}
//       <Image
//         src="/images/Hero/svg/Daun-Pandan.svg"
//         alt="Daun Pandan"
//         width={80}
//         height={81}
//         className="absolute bottom-0 -left-[10vw] w-[34.7vw] z-[2]"
//       />

//       {/* Pohon Buah Merah Kiri */}
//       <Image
//         src="/images/Hero/svg/Pohon-BuahMerah1.svg"
//         alt="Pohon Buah Merah"
//         width={150}
//         height={120}
//         className="absolute bottom-0 left-0 w-[36vw] z-[1]"
//       />

//       {/* Bunga Mawar Putih */}
//       <Image
//         src="/images/Hero/svg/Bunga-MawarPutih.svg"
//         alt="Bunga Mawar Putih"
//         width={70}
//         height={70}
//         className="absolute bottom-0 left-[11vw] w-[16vw] z-[3]"
//       />

//       {/* Bunga Mawar Kuning */}
//       <Image
//         src="/images/Hero/svg/Bunga-MawarKuning.svg"
//         alt="Bunga Mawar Kuning"
//         width={80}
//         height={80}
//         className="absolute bottom-0 left-[13vw] w-[19vw] z-[2]"
//       />

//       {/* Daun Pandan */}
//       <Image
//         src="/images/Hero/svg/Daun-Pandan.svg"
//         alt="Daun Pandan"
//         width={46}
//         height={80}
//         className="absolute bottom-0 left-[22.3vw] w-[22vw] z-[2]"
//       />

//       {/* Pohon Akar */}
//       <Image
//         src="/images/Hero/svg/Pohon-Akar.svg"
//         alt="Pohon Akar"
//         width={120}
//         height={80}
//         className="absolute bottom-0 left-[30.5vw] w-[27.8vw] z-[1]"
//       />

//       {/* Pohon Bunga Kecil */}
//       <Image
//         src="/images/Hero/svg/Pohon-BungaKecil.svg"
//         alt="Pohon Bunga Kecil"
//         width={100}
//         height={80}
//         className="absolute bottom-0 left-[44vw] w-[24vw] z-[2]"
//       />

//       {/* Pohon Akar 2 */}
//       <Image
//         src="/images/Hero/svg/Pohon-Akar.svg"
//         alt="Pohon Akar"
//         width={120}
//         height={80}
//         className="absolute bottom-0 left-[53vw] w-[17.8vw] z-[1]"
//       />

//       {/* Daun Pandan */}
//       <Image
//         src="/images/Hero/svg/Daun-Pandan.svg"
//         alt="Daun Pandan"
//         width={100}
//         height={80}
//         className="absolute bottom-0 left-[58.5vw] w-[26.6vw] z-[2]"
//       />

//       {/* Bunga Mawar Putih */}
//       <Image
//         src="/images/Hero/svg/Bunga-MawarPutih.svg"
//         alt="Bunga Mawar Putih"
//         width={100}
//         height={80}
//         className="absolute bottom-0 left-[73.5vw] w-[16vw] z-[3]"
//       />

//       {/* Bunga Mawar Kuning */}
//       <Image
//         src="/images/Hero/svg/Bunga-MawarKuning.svg"
//         alt="Bunga Mawar Kuning"
//         width={100}
//         height={80}
//         className="absolute bottom-0 left-[85.5vw] w-[20vw] z-[2]"
//       />

//       {/* Pohon-BungaMerah */}
//       <Image
//         src="/images/Hero/svg/Pohon-BungaMerah2.svg"
//         alt="Bunga Bunga Merah"
//         width={50}
//         height={80}
//         className="absolute bottom-0 right-0 w-[30vw] z-[1]"
//       />

//       {/* Pohon Golden Kanan */}
//       <Image
//         src="/images/Hero/svg/Pohon-GoldenKanan.svg"
//         alt="Pohon Golden Kanan"
//         width={50}
//         height={80}
//         className="absolute bottom-[10vw] right-0 w-[32vw] z-[1]"
//       />

//       {/* Dedaunan Belakang Kanan */}
//       <Image
//         src="/images/Hero/svg/DedaunanBelakang.svg"
//         alt="Dedaunan Belakang"
//         width={50}
//         height={80}
//         className="absolute bottom-0 right-0 w-[55vw] z-[0]"
//       />

//       {/* Dedaunan Belakang Tengah */}
//       <Image
//         src="/images/Hero/svg/DedaunanBelakang.svg"
//         alt="Dedaunan Belakang"
//         width={50}
//         height={80}
//         className="absolute bottom-0 right-[40vw] w-[33vw] z-[0]"
//       />

//       {/* Dedaunan Belakang Kiri */}
//       <Image
//         src="/images/Hero/svg/Dedaunan-BelakangKiri.svg"
//         alt="Dedaunan Belakang"
//         width={50}
//         height={80}
//         className="absolute bottom-0 left-4 w-[55vw] z-[0]"
//       />

//       {/* KUPU KUPU */}
//       {/* kupu kupu 1 */}
//       <Image
//         src="/images/Hero/KupuKupu-1.gif"
//         alt="Kupu Kupu 1"
//         width={50}
//         height={80}
//         className="absolute bottom-[10.5vw] left-[24.5vw] w-[11vw] z-[5]"
//       />

//       {/* Kupu Kupu 2 */}
//       <Image
//         src="/images/Hero/KupuKupu-2.gif"
//         alt="Kupu Kupu 2"
//         width={50}
//         height={80}
//         className="absolute bottom-[9vw] left-[69vw] w-[11vw] z-[5]"
//       />

//       {/* Kupu Kupu 4 */}
//       <Image
//         src="/images/Hero/KupuKupu4.png"
//         alt="Kupu Kupu 4"
//         width={50}
//         height={80}
//         className="absolute bottom-[21vw] right-[3.5vw] w-[7vw] z-[5]"
//       />

//       {/* Kupu Kupu 3 */}
//       <Image
//         src="/images/Hero/KupuKupu-3.gif"
//         alt="Kupu Kupu 3"
//         width={50}
//         height={80}
//         className="absolute bottom-[51vw] right-[20vw] w-[11vw] z-[5]  scale-x-[-1]"
//       />

//       {/* Kunang Kunang */}
//       {/* <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute bottom-0 w-full z-[3]"
//       >
//         <source src="/images/Hero/KunangKunang.mp4" type="video/mp4" />
//       </video> */}

//       {/* Konten */}
//       <div className="relative z-10 w-full flex flex-col items-center justify-center leading-none">
//         <Image
//           src="/images/Hero/Logo-J.svg"
//           alt="Logo J"
//           width={65}
//           height={65}
//           className="mx-auto"
//         />
//         <p className="uppercase font-creators text-[14px] text-[#713324] tracking-widest mt-[38px]">
//           THE WEDDING OF
//         </p>

//         {/* Nama Pengantin */}
//         <div className="flex flex-col items-center text-[#713324] mt-[20px]">
//           <h1 className="font-creators text-[48px] -ml-[70px]">
//             <span className="font-burgues">J</span>acky
//           </h1>
//           <h3 className="font-creators text-[24px]">&amp;</h3>
//           <h1 className="font-creators text-[48px] ml-[115px]">
//             <span className="font-burgues">J</span>essie
//           </h1>
//         </div>

//         <p className="uppercase font-creators text-[14px] text-[#713324] tracking-wide mt-[31px]">
//           27 June 2026
//         </p>

//         <p className="font-century text-[12px] text-[#6D3323] tracking-wide text-center mt-[28px] leading-[20px]">
//           In a forest of a billion souls, <br />
//           found the one who speaks my silence.
//         </p>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;
