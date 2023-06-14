"use client";
import * as React from "react";
import "../css/carousel.css";
import "keen-slider/keen-slider.min.css";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Aboutme from "@/components/sections/aboutme/aboutme";
import Techskills from "@/components/sections/techskills/techskills";
import Projects from "@/components/sections/projects/projects";
import Contact from "@/components/sections/contact/contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Aboutme />
      <Techskills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
