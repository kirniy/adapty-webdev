import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";

const trustedByLogos = [
  { name: "Feeld", src: "/logos/trusted-by/feeld.svg" },
  { name: "Bumble", src: "/logos/trusted-by/bumble.svg" },
  { name: "HubX", src: "/logos/trusted-by/hubx.svg" },
  { name: "AppNation", src: "/logos/trusted-by/appnation.webp" },
  { name: "Smitten", src: "/logos/trusted-by/smitten.webp" },
  { name: "Bickster", src: "/logos/trusted-by/bickster.png" },
  { name: "Almus", src: "/logos/trusted-by/almus.svg" },
  { name: "Impala Studios", src: "/logos/trusted-by/impala-studios.svg" },
  { name: "SocialKit", src: "/logos/trusted-by/socialkit.svg" },
  { name: "Weewoo", src: "/logos/trusted-by/weewoo.svg" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-stone-200 bg-white py-12 overflow-hidden relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 text-center mb-8 relative">
        <p className="text-sm font-medium text-stone-500 uppercase tracking-widest animate-intro-blur delay-0">
          Trusted by 15,000+ apps and the world&apos;s largest app publishers
        </p>
      </div>

      <div className="relative">
        {/* Thoughtful Touch: Soft Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee pauseOnHover speed="normal" className="bg-white">
          <div className="flex items-center gap-16 px-8">
            {trustedByLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative h-8 w-24 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 group cursor-pointer"
              >
                 <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
