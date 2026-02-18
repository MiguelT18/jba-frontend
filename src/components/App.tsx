// Context Providers
import LanguageProvider from "@/contexts/LanguageContext.tsx";
import ModalProvider from "@/contexts/ModalContext";

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
      <ModalProvider>
        <Navbar />
        <main>
          <Hero carouselOptions={{ pauseAutoplayOnInteraction: false }} />
          <Introduction />
          <Accreditation />
          <About />
          <Partners />
          <Programs />
          <Certifications />
          <Admissions />
          <Footer />
        </main>
      </ModalProvider>
    </LanguageProvider>
  );
}
