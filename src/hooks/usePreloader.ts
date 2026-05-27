"use client";
import { useEffect, useState } from "react";

const IMAGES_TO_PRELOAD = [
  // OPENING
  "/images/Opening/Pengantin..png",
  "/images/Opening/Ranting-KiriAtas.png",
  "/images/Opening/Ranting-KananAtas.png",
  "/images/Opening/Pohon-Golden.png",
  "/images/Opening/Pohon-GoldenKanan.png",
  "/images/Opening/Aset-KiriBawah..png",
  "/images/Opening/Aset-KananBawah.png",
  // HERO — Background
  "/images/Hero/Bg-Hero.webp",

  // HERO — Aset Atas
  "/images/Hero/PohonKiriAtas.png",
  "/images/Hero/Pohon-KananAtas.webp",
  "/images/Hero/Burung.gif",

  // HERO — Aset Bawah
  "/images/Hero/svg/Pohon-GoldenKiri.svg",
  "/images/Hero/svg/Daun-Pandan.svg",
  "/images/Hero/svg/Pohon-BuahMerah1.svg",
  "/images/Hero/svg/Bunga-MawarPutih.svg",
  "/images/Hero/svg/Bunga-MawarKuning.svg",
  "/images/Hero/svg/Pohon-Akar.svg",
  "/images/Hero/svg/Pohon-BungaKecil.svg",
  "/images/Hero/svg/Pohon-BungaMerah2.svg",
  "/images/Hero/svg/Pohon-GoldenKanan.svg",
  "/images/Hero/svg/DedaunanBelakang.svg",
  "/images/Hero/svg/Dedaunan-BelakangKiri.svg",

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
