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
  return (
    <>
      <Hero />
      <Tentang />
      <LoveStory />
      <CountDown />
      <TimeLocation />
      <Gallery />
      <Dresscode />
      <Rsvp/>
      <Wishes/>
    </>
  );
}
