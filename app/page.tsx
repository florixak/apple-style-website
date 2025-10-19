"use client";

import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import ProductViewer from "@/components/product-viewer";
import Showcase from "@/components/showcase";
import Performance from "@/components/performance";
import Features from "@/components/features";
import Highlights from "@/components/highlights";
import Footer from "@/components/footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}
