"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/70 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5">

        {/* Left: Logo + Menu together */}
        <div className="flex items-center gap-10">
          <Image
            src="/images/Raw.png"
            alt="Logo"
            width={50}
            height={40}
            className="object-contain"
          />


          <nav className="flex items-center gap-8 text-gray-200 font-medium">
            <Link href="/resources" className="hover:text-white">Resources</Link>
            <Link href="/docs" className="hover:text-white">Docs</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
        </div>

        {/* Right: CTA */}
        <Link
          href="/get-started"
          className="rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-500"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}
