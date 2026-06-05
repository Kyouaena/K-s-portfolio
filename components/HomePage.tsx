"use client";

import { About } from "./About";
import { AgentLab } from "./AgentLab";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Publications } from "./Publications";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Publications />
        <Projects />
        <AgentLab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
