'use client';

import * as React from 'react';
import Link from 'next/link';
import { CheckIcon } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import { toast } from '@workspace/ui/components/sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@workspace/ui/components/select';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/schedule-demo (scraped 2026-01-21)
// Benefits list: "Get to know our product and how it will help you grow"
const DEMO_BENEFITS = [
  'Learn how to increase app revenue',
  'Plan a migration',
  'Get a custom plan'
];

// Form field options from adapty.io/schedule-demo
const REFERRAL_SOURCES = [
  { value: 'google', label: 'Google Search' },
  { value: 'social', label: 'Social Media' },
  { value: 'recommendation', label: 'Recommendation' },
  { value: 'blog', label: 'Blog or Article' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'event', label: 'Conference/Event' },
  { value: 'other', label: 'Other' }
];

const DEMO_LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
  { value: 'es', label: 'Spanish' },
  { value: 'de', label: 'German' },
  { value: 'fr', label: 'French' }
];

const TIMEZONES = [
  { value: 'UTC-8', label: 'Pacific Time (UTC-8)' },
  { value: 'UTC-5', label: 'Eastern Time (UTC-5)' },
  { value: 'UTC+0', label: 'GMT (UTC+0)' },
  { value: 'UTC+1', label: 'Central European (UTC+1)' },
  { value: 'UTC+3', label: 'Moscow (UTC+3)' },
  { value: 'UTC+8', label: 'Singapore (UTC+8)' },
  { value: 'UTC+9', label: 'Tokyo (UTC+9)' }
];

// EXACT from adapty.io - "Last 30 days app revenue"
const REVENUE_RANGES = [
  { value: '0-10k', label: 'Under $10K' },
  { value: '10k-50k', label: '$10K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k-500k', label: '$100K - $500K' },
  { value: '500k+', label: '$500K+' }
];

export function ScheduleDemoHero(): React.JSX.Element {
  const handleScheduleDemo = (): void => {
    toast.error("Demo scheduling is not implemented yet.");
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Right side - Form (on mobile this appears first) */}
          <BlurFade delay={0.05} className="order-1 lg:order-2">
            <Card className="py-8 shadow-lg">
              <CardContent className="flex flex-col gap-5 px-6 lg:px-8">
                {/* EXACT title from adapty.io/schedule-demo */}
                <div className="text-center mb-2">
                  <h1 className="text-2xl font-bold tracking-tight">Request your personal demo</h1>
                </div>

                {/* Form fields EXACT from adapty.io/schedule-demo */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
                    <Label htmlFor="firstname">
                      First name<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
                    <Label htmlFor="lastname">Last name</Label>
                    <Input
                      id="lastname"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">
                    Work email<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                  />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="referral">How did you hear about us?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {REFERRAL_SOURCES.map((source) => (
                        <SelectItem key={source.value} value={source.value}>
                          {source.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
                    <Label htmlFor="language">
                      Preferred demo language<span className="text-destructive">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {DEMO_LANGUAGES.map((lang) => (
                          <SelectItem key={lang.value} value={lang.value}>
                            {lang.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
                    <Label htmlFor="timezone">
                      Preferred time zone<span className="text-destructive">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {TIMEZONES.map((tz) => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="revenue">
                    Last 30 days app revenue<span className="text-destructive">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {REVENUE_RANGES.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="w-full mt-2"
                  onClick={handleScheduleDemo}
                >
                  Schedule your demo
                </Button>

                {/* EXACT legal text from adapty.io/schedule-demo */}
                <p className="text-xs text-center text-muted-foreground">
                  By submitting the form, you are agreeing to the{' '}
                  <Link href="/terms-of-use" className="underline hover:text-foreground transition-colors duration-150 ease-out motion-reduce:transition-none">
                    Terms of Use
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="underline hover:text-foreground transition-colors duration-150 ease-out motion-reduce:transition-none">
                    Privacy Policy
                  </Link>
                </p>
              </CardContent>
            </Card>
          </BlurFade>

          {/* Left side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <BlurFade delay={0.1}>
              {/* EXACT headline from adapty.io/schedule-demo */}
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get to know our product and how it will help you grow
              </h2>
            </BlurFade>

            <BlurFade delay={0.15}>
              {/* EXACT benefits from adapty.io/schedule-demo */}
              <ul className="space-y-3">
                {DEMO_BENEFITS.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="size-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* G2 Awards section - from adapty.io/schedule-demo */}
            <BlurFade delay={0.2}>
              <div className="pt-6 border-t">
                <div className="flex flex-wrap items-center gap-4">
                  {/* G2 badges would go here - simplified for now */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="size-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">4.9 out of 5 stars</span>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
