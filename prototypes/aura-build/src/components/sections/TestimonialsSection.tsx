import { G2Badges } from "./G2Badges";
import { Testimonials } from "./Testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-stone-100 py-20 border-y border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6">
        <G2Badges />
      </div>
      <Testimonials />
    </section>
  );
}
