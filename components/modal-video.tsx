"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ModalVideoProps = {
  thumb: StaticImageData; // imported image
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string; // public folder path
  videoWidth: number;
  videoHeight: number;
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
      {/* Thumbnail */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block overflow-hidden rounded-lg shadow-lg"
      >
        <Image
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
          className="object-cover"
        />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute top-2 right-2 z-50 text-white text-3xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <video
              src={video}
              width={videoWidth}
              height={videoHeight}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
