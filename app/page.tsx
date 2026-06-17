import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}