import * as React from 'react';
import Link from 'next/link';
import {
  CalendarIcon,
  DollarSignIcon,
  GlobeIcon,
  LineChartIcon,
  MapPinIcon,
  TagsIcon,
  User2Icon
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import {
  Card,
  CardContent,
  CardFooter,
  type CardProps
} from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

function VercelLogo(): React.JSX.Element {
  return (
    <svg
      height="20"
      width="20"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      aria-label="Vercel Logo"
      className="text-black dark:text-white"
    >
      <g clipPath="url(#clip0_872_3186)">
        <circle
          cx="8"
          cy="8"
          r="7.25"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
          fill="currentColor"
          className="text-white dark:text-black"
        />
      </g>
      <defs>
        <clipPath id="clip0_872_3186">
          <rect
            width="16"
            height="16"
            fill="currentColor"
            className="text-white dark:text-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MotionCard = motion.create(Card);

export function AiAdvisorCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MotionCard>): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  } as const;

  return (
    <MotionCard
      className={cn('pb-0', className)}
      initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      {...props}
    >
      <CardContent>
        <div className="mb-3 flex items-center gap-2">
          <VercelLogo />
          <h2 className="text-xl font-semibold">Vercel</h2>
        </div>
        <div className="space-y-2">
          {[
            {
              icon: GlobeIcon,
              label: 'Domain',
              content: (
                <Link
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500"
                >
                  https://vercel.com
                </Link>
              )
            },
            {
              icon: User2Icon,
              label: 'CEO',
              content: <span className="text-sm">Guillermo Rauch</span>
            },
            {
              icon: CalendarIcon,
              label: 'Founded',
              content: <span className="text-sm">2015</span>
            },
            {
              icon: LineChartIcon,
              label: 'Est. ARR',
              content: <span className="text-sm">$100-120M</span>
            },
            {
              icon: MapPinIcon,
              label: 'Location',
              content: <span className="text-sm">California, USA</span>
            },
            {
              icon: TagsIcon,
              label: 'Tags',
              content: (
                <div className="flex gap-1">
                  <Badge
                    variant="secondary"
                    className="whitespace-nowrap pl-2 text-xs"
                  >
                    SaaS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="whitespace-nowrap pl-2 text-xs"
                  >
                    B2B
                  </Badge>
                </div>
              )
            },
            {
              icon: DollarSignIcon,
              label: 'Funding',
              content: <span className="text-sm">$250M Series E</span>
            }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="flex items-center gap-2"
            >
              <item.icon className="size-4 text-muted-foreground" />
              <span className="w-20 text-sm text-muted-foreground">
                {item.label}
              </span>
              {item.content}
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4 rounded-b-xl bg-neutral-50 py-6 dark:bg-neutral-900">
        <motion.div
          variants={
            shouldReduceMotion
              ? undefined
              : { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }
          }
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-semibold sm:text-lg">AI Advisor</h3>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
          <div className="min-h-10 max-w-md text-sm text-muted-foreground">
            Vercel has been contacted 4 times in the past year. Suggested next
            contact is in 3 days.
          </div>
        </motion.div>
      </CardFooter>
    </MotionCard>
  );
}
