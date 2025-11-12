"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ModalVideoProps = {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string; // ✅ add
  videoWidth: number; // ✅ add
  videoHeight: number; // ✅ add
};

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-auto max-w-6xl text-center">
      <div
        className="inline-block overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsOpen(false)}
        >
          <video
            src={video}
            width={videoWidth}
            height={videoHeight}
            controls
            autoPlay
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
