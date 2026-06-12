import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section id="about"><Hero /></section>
      <section id="skills" className="bg-white"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact" className="bg-white"><Contact /></section>
      <section id="donate" className="bg-white"><Donate /></section>
      <Footer />
    </main>
  );
}