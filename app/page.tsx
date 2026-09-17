import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";
import ContactPreview from "@/app/components/ContactPreview";
import Process from "@/app/components/Process";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-mesh font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Process />
      <ContactPreview />
    </main>
  );
}
