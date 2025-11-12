"use client";

import Image, { StaticImageData } from "next/image";

type ModalVideoProps = {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
};

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
}: ModalVideoProps) {
  return (
    <div className="relative mx-auto max-w-6xl text-center">
      <div className="inline-block overflow-hidden rounded-lg shadow-lg">
        <Image
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
          className="object-cover"
        />
      </div>
    </div>
  );
}
