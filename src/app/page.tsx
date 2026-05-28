// "use client";

// import { useState } from "react";
// import { usePreloader } from "@/hooks/usePreloader";
// import LoadingScreen from "@/components/ui/LoadingScreen";
// import Opening from "@/components/popup/Opening";
// import Header from "@/components/layout/Header";
// import Hero from "@/components/sections/Hero";
// import Tentang from "@/components/sections/Tentang";
// import LoveStory from "@/components/sections/LoveStory";
// import CountDown from "@/components/sections/CountDown";
// import TimeLocation from "@/components/sections/TimeLocation";
// import Gallery from "@/components/sections/Gallery";
// import Dresscode from "@/components/sections/Dresscode";
// import Rsvp from "@/components/sections/Rsvp";
// import Wishes from "@/components/sections/Wishes";

// export default function Home() {
//   const [start, setStart] = useState<boolean>(false);
//   const [showLoading, setShowLoading] = useState<boolean>(true);
//   const { progress } = usePreloader();

//   return (
//     <>
//       {showLoading && (
//         <LoadingScreen
//           progress={progress}
//           onDone={() => setShowLoading(false)}
//         />
//       )}

//       <div className={!showLoading && !start ? "block" : "hidden"}>
//         <Opening setStart={setStart} namaTamu="Sela" />
//       </div>

//       <div className={!showLoading && start ? "block" : "hidden"}>
//         <Header  />
//         <Hero  start={start}/>
//         <Tentang />
//         <LoveStory />
//         <CountDown />
//         <TimeLocation />
//         <Gallery />
//         <Dresscode />
//         <Rsvp />
//         <Wishes />
//       </div>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { usePreloader } from "@/hooks/usePreloader";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Opening from "@/components/popup/Opening";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Tentang from "@/components/sections/Tentang";
import LoveStory from "@/components/sections/LoveStory";
import CountDown from "@/components/sections/CountDown";
import TimeLocation from "@/components/sections/TimeLocation";
import Gallery from "@/components/sections/Gallery";
import Dresscode from "@/components/sections/Dresscode";
import Rsvp from "@/components/sections/Rsvp";
import Wishes from "@/components/sections/Wishes";

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const { progress } = usePreloader();

  // Opening mulai mount saat progress=100 (bersamaan LoadingScreen fade out)
  // bukan menunggu LoadingScreen selesai hilang
  const showOpening = progress === 100 && !showLoading && !start;

  return (
    <>
      <main className="block">
        <Header />
        <Hero start={start} />
        <Tentang />
        <LoveStory />
        <CountDown />
        <TimeLocation />
        <Gallery />
        <Dresscode />
        <Rsvp />
        <Wishes />
      </main>

      <LoadingScreen
        progress={progress}
        onDone={() => setShowLoading(false)}
      />

      {/* Mount Opening bersamaan saat loading selesai (progress=100) */}
      {progress === 100 && !start && (
        <Opening setStart={setStart} namaTamu="Sela" />
      )}
    </>
  );
}