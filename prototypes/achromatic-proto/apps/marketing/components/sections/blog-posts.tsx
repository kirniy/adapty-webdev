'use client';

import * as React from 'react';
import Link from 'next/link';
import { allPosts } from 'content-collections';
import { format, isBefore } from 'date-fns';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { baseUrl } from '@workspace/routes';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';
import { getInitials } from '~/lib/formatters';

// Magic animation: Article count badge
function ArticleCountMagic({ count }: { count: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        className="size-2 rounded-full bg-green-500"
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <span>{count} articles</span>
    </motion.div>
  );
}

function BlogCard({
  post,
  index
}: {
  post: (typeof allPosts)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05}>
      <Link href={`${baseUrl.Marketing}${post.slug}`}>
        <motion.article
          className="group relative flex h-full flex-col rounded-xl border bg-card p-5 cursor-pointer overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        >
          {isHovered && (
            <BorderBeam
              size={100}
              duration={6}
              borderWidth={1.5}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
            />
          )}
          <Spotlight
            className="from-primary/10 via-primary/5 to-transparent"
            size={150}
          />
          {/* Category and Date */}
          <div className="mb-3 flex items-center justify-between relative z-10">
            <span className="text-xs font-medium text-primary">
              {post.category}
            </span>
            <time
              dateTime={post.published}
              className="text-xs text-muted-foreground"
            >
              {format(post.published, 'MMM d, yyyy')}
            </time>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold leading-tight line-clamp-2 relative z-10">
            {post.title}
          </h3>

          {/* Description */}
          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2 leading-relaxed relative z-10">
            {post.description}
          </p>

          {/* Author and Arrow */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50 relative z-10">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src={post.author?.avatar}
                  alt={post.author?.name ?? ''}
                />
                <AvatarFallback className="text-[9px]">
                  {getInitials(post.author?.name ?? '')}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">
                {post.author?.name ?? ''}
              </span>
            </div>

            <motion.div
              className="text-muted-foreground"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { x: isHovered ? 3 : 0, opacity: isHovered ? 1 : 0.5 }
              }
              transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              <ArrowRightIcon className="size-4" />
            </motion.div>
          </div>
        </motion.article>
      </Link>
    </BlurFade>
  );
}

export function BlogPosts(): React.JSX.Element {
  const sortedPosts = allPosts
    .slice()
    .sort((a, b) => (isBefore(a.published, b.published) ? 1 : -1))
    .slice(0, 6); // Limit to 6 posts

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 lg:py-24 relative z-10">
        <Spotlight
          className="from-primary/15 via-primary/5 to-transparent"
          size={350}
        />
        {/* Section Header */}
        <BlurFade className="mb-12">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <Badge
                variant="outline"
                className="mb-4 rounded-full"
              >
                Blog
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Insights & Resources
              </h2>
              <div className="mt-3">
                <ArticleCountMagic count={allPosts.length} />
              </div>
            </div>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground lg:mt-0 motion-reduce:transition-none"
            >
              View all posts
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </BlurFade>

        {/* Posts Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </GridSection>
  );
}
