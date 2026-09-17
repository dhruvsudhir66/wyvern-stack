import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact";

export const metadata = {
  title: "Contact | Wyvernstack",
  description: "Start a project with WYVERNSTACK.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-mesh font-sans">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
    </main>
  );
}
