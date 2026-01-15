import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Marquee } from "@/components/ui/Marquee";

const testimonials = [
  {
    quote: "Adapty helped us increase our trial-to-paid conversion by 34%. The A/B testing features are incredibly robust.",
    name: "Cem Ortabas",
    role: "Co-founder & CEO",
    company: "HubX",
    image: "/images/testimonials/cem-ortabas.webp",
  },
  {
    quote: "Implementation took less than an afternoon. We doubled our revenue in 3 months with the paywall builder.",
    name: "Chris Bick",
    role: "Product Manager",
    company: "Bickster",
    image: "/images/testimonials/chris-bick.webp",
  },
  {
    quote: "The analytics dashboard gives us real-time visibility into our subscription business. Best decision we made.",
    name: "Mike McSweeney",
    role: "CTO",
    company: "AppNation",
    image: "/images/testimonials/mike-mcsweeney.webp",
  },
  {
    quote: "We saved 40% of refund requests with the Refund Saver feature. That's money back in our pocket.",
    name: "Roi Mulia",
    role: "Founder",
    company: "Smitten",
    image: "/images/testimonials/roi-mulia.webp",
  },
  {
    quote: "The SDK integration was seamless. Our developers loved the type-safe API and comprehensive documentation.",
    name: "Magnus Olafsson",
    role: "Lead Developer",
    company: "SocialKit",
    image: "/images/testimonials/magnus-olafsson.webp",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-cinematic-lg w-[400px] shrink-0 mx-3 card-elevate card-shine cursor-pointer group">
      {/* Quote Icon with hover rotation */}
      <div className="mb-6 text-brand-lime transition-transform duration-300 group-hover:rotate-6">
        <Quotes size={32} weight="fill" />
      </div>

      {/* Quote */}
      <p className="text-lg font-medium text-stone-900 mb-8 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden relative bg-stone-100 ring-2 ring-stone-100 transition-all duration-300 group-hover:ring-brand-lime/30 group-hover:ring-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-bold text-stone-900">{testimonial.name}</div>
          <div className="text-sm text-stone-500">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <Marquee pauseOnHover speed="slow" className="py-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </Marquee>
  );
}
