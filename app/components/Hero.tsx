"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";
import Link from "next/link";

export default function HeroSection() {
  const phrases = [
    "Pamper your hands & feet",
    "Nail your perfect look",
    "Lashes, brows, and more",
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        height: isMobile ? "calc(100vh - 64px)" : "calc(100vh)",
        marginTop: "64px", // Exactly the height of the header (16 = 4rem = 64px)
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 md:from-black/40 md:to-black/20 z-10" />

      {/* Mobile Image (shown only on small screens) */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/nailHero.jpg"
          alt="Beautiful hairstyle"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Desktop Image (hidden on small screens) */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/nailHero.jpg"
          alt="Beautiful hairstyle"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-8 md:p-16 container mx-auto z-20">
        <h1 className="font-serif text-4xl font-medium md:text-5xl lg:text-6xl mb-6 leading-tight max-w-3xl">
          <Typewriter texts={phrases} />
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-10 font-normal text-gray-100 opacity-70">
          Expert nail care, lash extensions, and beauty services to elevate your
          style in our welcoming salon.
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.picktime.com/009fd765-a783-4506-a80c-114fd53e8ebd">
          <Button className="bg-white cursor-pointer text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg group">
            Book Your Appointment
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
