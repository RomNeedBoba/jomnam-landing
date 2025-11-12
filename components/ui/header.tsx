"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/70 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5">

        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="https://jomnam.tech">
            <Image
              src="/images/Raw.png"
              alt="Logo"
              width={50}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-200 font-medium">
            <Link href="https://docs.jomnam.tech/dataset/aksor" className="hover:text-white">Resources</Link>
            <Link href="https://docs.jomnam.tech" className="hover:text-white">Docs</Link>
          </nav>
        </div>

        {/* Right: CTA + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link href="https://dashboard.jomnam.tech"
            className="hidden sm:block rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-500 text-sm md:text-base"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700">
          <nav className="flex flex-col gap-4 px-6 py-4 text-gray-200 font-medium">
            <Link href="https://docs.jomnam.tech/dataset/aksor" className="hover:text-white py-2">Resources</Link>
            <Link href="https://docs.jomnam.tech" className="hover:text-white py-2">Docs</Link>
            <Link href="https://dashboard.jomnam.tech"
              className="rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-500 text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
