import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import Experiences from "@/components/sections/experiences";
import Truth from "@/components/sections/truth";
import Vision from "@/components/sections/vision";
import Waitlist from "@/components/sections/waitlist";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Experiences />
      <Truth />
      <Vision />
      <Waitlist />
    </main>
  );
}