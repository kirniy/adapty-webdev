'use client';

import * as React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon, CheckIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import { toast } from '@workspace/ui/components/sonner';
import { Textarea } from '@workspace/ui/components/textarea';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

const CONTACT_INFO = [
  { icon: PhoneIcon, text: '(123) 34567890', label: 'Phone' },
  { icon: MailIcon, text: 'support@adapty.io', label: 'Email' },
  { icon: MapPinIcon, text: 'Remote-first company', label: 'Location' },
];

// Magic animation: Response time badge
function ResponseTimeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [hours, setHours] = React.useState(48);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setHours(24);
      return;
    }
    const interval = setInterval(() => {
      setHours(prev => {
        if (prev <= 24) return 24;
        return prev - 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>{`<${hours}h avg response`}</span>
    </motion.div>
  );
}

export function Contact(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredContact, setHoveredContact] = React.useState<number | null>(null);
  const [isFormHovered, setIsFormHovered] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSendMessage = (): void => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.error("Contact form is not implemented yet.");
    }, 1000);
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container space-y-16 py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            badge="Contact"
            title={
              <>
                We would love to hear
                <br /> from you!
              </>
            }
          />
          <div className="mt-4 flex justify-center">
            <ResponseTimeMagic />
          </div>
        </BlurFade>

        <div className="lg:container lg:max-w-6xl">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            {/* Left side - Contact info */}
            <div className="order-2 space-y-8 text-center lg:order-1 lg:w-1/2 lg:text-left">
              <BlurFade delay={0.1}>
                <h3 className="hidden max-w-fit text-4xl font-semibold lg:block">
                  Get in touch
                </h3>
              </BlurFade>

              <BlurFade delay={0.15}>
                <p className="text-muted-foreground lg:max-w-[80%]">
                  If you have any questions, do not hesitate to contact our team.
                  We will get back to you within 48 hours.
                </p>
              </BlurFade>

              <div className="space-y-4">
                <BlurFade delay={0.2}>
                  <h4 className="hidden text-lg font-medium lg:block">
                    Contact details
                  </h4>
                </BlurFade>

                <div className="flex flex-col items-center gap-4 lg:items-start">
                  {CONTACT_INFO.map((contact, index) => (
                    <BlurFade key={index} delay={0.25 + index * 0.05}>
                      <motion.div
                        onMouseEnter={() => setHoveredContact(index)}
                        onMouseLeave={() => setHoveredContact(null)}
                        animate={shouldReduceMotion ? undefined : {
                          x: hoveredContact === index ? 8 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                        className={cn(
                          'group relative flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-150',
                          hoveredContact === index && 'bg-primary/5'
                        )}
                      >
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredContact === index ? 1.15 : 1,
                            rotate: hoveredContact === index ? 8 : 0,
                          }}
                          transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                          className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        >
                          <contact.icon className="size-5" />
                        </motion.div>
                        <div className="text-left">
                          <div className="text-xs text-muted-foreground">{contact.label}</div>
                          <div className="font-medium group-hover:text-primary transition-colors">
                            {contact.text}
                          </div>
                        </div>
                      </motion.div>
                    </BlurFade>
                  ))}
                </div>
              </div>

              {/* Trust indicators */}
              <BlurFade delay={0.4}>
                <div className="flex flex-col items-center gap-3 lg:items-start pt-4">
                  {['24/7 Support available', 'Response within 48 hours', 'Dedicated account manager'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={shouldReduceMotion ? undefined : { opacity: 0, x: -10 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="flex size-5 items-center justify-center rounded-full bg-emerald-500/10">
                        <CheckIcon className="size-3 text-emerald-500" />
                      </div>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </BlurFade>
            </div>

            {/* Right side - Form */}
            <BlurFade delay={0.15} className="order-1 lg:order-2 lg:w-1/2">
              <motion.div
                onMouseEnter={() => setIsFormHovered(true)}
                onMouseLeave={() => setIsFormHovered(false)}
                animate={shouldReduceMotion ? undefined : {
                  y: isFormHovered ? -4 : 0,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
              >
                <Card className="relative mx-auto w-full max-w-lg overflow-hidden py-6 lg:py-10 shadow-lg border-primary/10">
                  <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
                  <BorderBeam
                    size={200}
                    duration={12}
                    borderWidth={1.5}
                    colorFrom="hsl(var(--primary))"
                    colorTo="hsl(var(--primary)/0)"
                    className="opacity-50"
                  />

                  <CardContent className="relative flex flex-col gap-6 px-6 lg:px-10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 grid w-full items-center gap-1.5 sm:col-span-1">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                          id="firstname"
                          type="text"
                          placeholder="John"
                          className="transition-all duration-150 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="col-span-2 grid w-full items-center gap-1.5 sm:col-span-1">
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input
                          id="lastname"
                          type="text"
                          placeholder="Doe"
                          className="transition-all duration-150 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="johndoe@example.com"
                        className="transition-all duration-150 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here."
                        rows={6}
                        className="transition-all duration-150 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="relative">
                      {/* Pulsing ring effect */}
                      {!shouldReduceMotion && !isSubmitting && (
                        <motion.div
                          className="absolute inset-0 rounded-md border-2 border-primary/50"
                          animate={{
                            scale: [1, 1.03, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                      <Button
                        type="button"
                        className="w-full group relative"
                        onClick={handleSendMessage}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="size-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                        ) : (
                          <>
                            Send message
                            <motion.span
                              animate={shouldReduceMotion ? undefined : { x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <SendIcon className="ml-2 size-4" />
                            </motion.span>
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
