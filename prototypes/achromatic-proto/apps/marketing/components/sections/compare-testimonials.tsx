"use client";

import * as React from "react";
import { BlurFade } from "~/components/fragments/blur-fade";
import { GridSection } from "~/components/fragments/grid-section";

const TESTIMONIALS = [
  {
    quote:
      "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
    name: "Cem Ortabas",
    title: "Co-founder and CEO",
    company: "HubX",
  },
  {
    quote:
      "We've been working with Adapty since 2021 and I couldn't be happier about it. We've tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty.",
    name: "Chris Bick",
    title: "Founder and CEO",
    company: "Bickster",
  },
  {
    quote:
      "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.",
    name: "Yalcin Ozdemir",
    title: "Founder & CEO",
    company: "AppNation",
  },
  {
    quote:
      "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
    name: "Kyle Smith",
    title: "Head of data",
    company: "Smitten Dating",
  },
  {
    quote:
      "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
    name: "Roi Mulia",
    title: "Founder & CEO",
    company: "SocialKit",
  },
];

export function CompareTestimonials(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        <BlurFade delay={0.1}>
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            People from all kinds of businesses turn to Adapty to grow their
            revenue
          </h2>
        </BlurFade>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <BlurFade key={testimonial.name} delay={0.2 + index * 0.1}>
              <div className="flex h-full flex-col rounded-lg border bg-card p-6">
                <blockquote className="flex-1 text-sm text-muted-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6 border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
