import LanguageProvider from "@/contexts/LanguageContext.tsx";
import Navbar from "@/components/ui/Navbar.tsx";
import Hero from "@/components/sections/Hero.tsx";
import Introduction from "@/components/sections/Introduction.tsx";
import Accreditation from "@/components/sections/Accreditation.tsx";
import About from "@/components/sections/About.tsx";
import Partners from "@/components/sections/Partners.tsx";
import Programs from "@/components/sections/Programs.tsx";
import Certifications from "@/components/sections/Certifications.tsx";
import Admissions from "@/components/sections/Admissions.tsx";
import Footer from "@/components/sections/Footer.tsx";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <section id="home">
          <Hero carouselOptions={{ pauseAutoplayOnInteraction: false }} />
        </section>
        <section id="courses">
          <Introduction />
        </section>
        <Accreditation />
        <section id="about">
          <About />
        </section>
        <Partners />
        <Programs />
        <Certifications />
        <section id="contact">
          <Admissions />
        </section>
        <Footer />
      </main>
    </LanguageProvider>
  );
}
