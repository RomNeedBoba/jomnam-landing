import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-3 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-3 lg:grid-rows-1 xl:gap-20">
          {/* Tools Block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://docs.jomnam.tech/image-annotation/legacy-version"
                >
                  Images Annotation
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://docs.jomnam.tech/audio-annotation/turtorials"
                >
                  Audio Annotation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://docs.jomnam.tech/"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://docs.jomnam.tech/dataset/aksor"
                >
                  Datasets
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://docs.jomnam.tech/model/aksor"
                >
                  Models
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <div className="border-t border-gray-700 pt-4 mt-8">
              <ul className="flex gap-6 text-sm">
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://jomnam.tech/terms-of-service"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://jomnam.tech/privacy-policy"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}