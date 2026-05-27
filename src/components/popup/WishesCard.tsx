"use client";
import { motion } from "framer-motion";

type PesanItem = {
  id: number;
  nama: string;
  pesan: string;
};

type WishesCardProps = {
  data: PesanItem | null;
  onClose: () => void;
};

const WishesCard = ({ data, onClose }: WishesCardProps) => {
  if (!data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed flex-col inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4"
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white/10 rounded-2xl p-6 w-[320px] md:w-[350px] h-[280px] md:h-[350px] text-center shadow-2xl border border-white/20 mb-5"
      >
        <h3 className="text-[25px] md:text-[28px] text-white font-semibold tracking-wide leading-snug font-quattrocento">
          {data.nama}
        </h3>
        <div className="w-18 h-[1px] text-white bg-white mx-auto my-4 opacity-50 mb-5" />
        <p className="text-[13px] md:text-[15px] font-quattrocento leading-relaxed mb-6 text-white line-clamp-6 md:line-clamp-6">
          {data.pesan}
        </p>
      </motion.div>

      <button
        onClick={onClose}
        className="w-[320px] md:w-[350px] bg-[#37546B] hover:bg-[#2E4559] active:bg-[#243545] transition-colors duration-200 text-white px-6 py-2 rounded-xl text-[14px] font-quattrocento tracking-widest"
      >
        BACK
      </button>
      
    </div>
  );
};

export default WishesCard;