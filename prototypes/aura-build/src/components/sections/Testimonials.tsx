"use client";

import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    quote: "Adapty helped us increase our trial-to-paid conversion by 34%. The A/B testing features are incredibly robust.",
    name: "Cem Ortabas",
    role: "Co-founder & CEO",
    company: "Photo & Video App",
    image: "/images/testimonials/cem-ortabas.webp",
  },
  {
    quote: "Implementation took less than an afternoon. We doubled our revenue in 3 months with the paywall builder.",
    name: "Chris Bick",
    role: "Product Manager",
    company: "Productivity App",
    image: "/images/testimonials/chris-bick.webp",
  },
  {
    quote: "The analytics dashboard gives us real-time visibility into our subscription business. Best decision we made.",
    name: "Mike McSweeney",
    role: "CTO",
    company: "Travel App",
    image: "/images/testimonials/mike-mcsweeney.webp",
  },
  {
    quote: "We saved 40% of refund requests with the Refund Saver feature. That's money back in our pocket.",
    name: "Roi Mulia",
    role: "Founder",
    company: "Education App",
    image: "/images/testimonials/roi-mulia.webp",
  },
  {
    quote: "The SDK integration was seamless. Our developers loved the type-safe API and comprehensive documentation.",
    name: "Magnus Olafsson",
    role: "Lead Developer",
    company: "Health & Fitness App",
    image: "/images/testimonials/magnus-olafsson.webp",
  },
];

export function Testimonials() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x relative">
      {testimonials.map((testimonial, index) => (
        <Card
          key={testimonial.name}
          hover={false}
          className="min-w-[300px] md:min-w-[400px] p-8 snap-center relative group animate-intro-blur"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="mb-6 text-brand-lime">
            <Quotes size={24} weight="fill" />
          </div>
          <p className="text-lg font-medium text-stone-900 mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden relative bg-stone-100">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-semibold">{testimonial.name}</div>
              <div className="text-xs text-stone-500">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
