import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/Raw.png" 
        alt="Logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
}
