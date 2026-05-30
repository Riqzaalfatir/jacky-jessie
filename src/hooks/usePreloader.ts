"use client";
import { useEffect, useState } from "react";

const IMAGES_TO_PRELOAD = [
  // OPENING
 // OPENING
"/images/Cover/Pengantin.svg",
"/images/Opening/Pengantin..png",
"/images/Opening/Ranting-KiriAtas.png",
"/images/Opening/Ranting-KananAtas.png",
"/images/Opening/Pohon-Golden.png",
"/images/Opening/Pohon-GoldenKanan.png",
"/images/Opening/Aset-KiriBawah..png",
"/images/Opening/Daun-Akar.png",        
"/images/Opening/Aset-Tambahan.png",    
"/images/Opening/Aset-KananBawah.png",


   // HERO — Background
  "/images/Hero/Bg-Hero.svg",
  "/images/Hero/dekstop/Bg-Dekstop.svg",

  // HERO — Aset Atas Mobile
  "/images/Hero/PohonKiriAtas.png",
  "/images/Hero/Pohon-KananAtas.webp",

  // HERO — Aset Atas Desktop
  "/images/Hero/dekstop/Pohon-KiriAtas.png",
  "/images/Hero/dekstop/Pohon-KananAtas.png",
  "/images/Hero/dekstop/Burung.gif",

  // HERO — Aset Bawah Mobile
  "/images/Hero/Pohon-KiriBawah.png",
  "/images/Hero/svg/Daun-Pandan.svg",
  "/images/Hero/Buah-MerahKiri.png",
  "/images/Hero/MawarKuning..png",
  "/images/Hero/Daun-Pandan.png",
  "/images/Hero/Pohon-Akar.png",
  "/images/Hero/Pohon-BungaKecil.png",
  "/images/Hero/Pohon-GoldenKanan.png",
  "/images/Hero/DedaunanBelakang.png",
  "/images/Hero/DedaunanBelakangKiri.png",

  // HERO — Aset Bawah Desktop
  "/images/Hero/dekstop/Pohon-KiriBawah.png",
  "/images/Hero/dekstop/Mawar-Putih.svg",
  "/images/Hero/dekstop/Bunga-Merah.webp",
  "/images/Hero/dekstop/Golden-Kanan.webp",
  "/images/Hero/dekstop/Dedaunan-Belakang.webp",

  // HERO — Kupu Kupu
  "/images/Hero/KupuKupu-1.gif",
  "/images/Hero/KupuKupu-2.gif",
  "/images/Hero/KupuKupu4.png",
  "/images/Hero/KupuKupu-3.gif",

  // HERO — Konten
  "/images/Hero/Logo-J.svg",
];

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const total = IMAGES_TO_PRELOAD.length;

    if (total === 0) {
      Promise.resolve().then(() => {
        setProgress(100);
        setLoaded(true);
      });
      return;
    }

    let count = 0;

    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      };
    });
  }, []);

  return { loaded, progress };
}