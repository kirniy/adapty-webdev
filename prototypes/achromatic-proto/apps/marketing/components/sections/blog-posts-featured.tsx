'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from 'content-collections';
import { format, isBefore } from 'date-fns';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
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

// Magic animation: Blog articles counter
function ArticleCountMagic() {
  const shouldReduceMotion = useReducedMotion();
  const totalArticles = allPosts.length;

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.2, 1]
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <span>{totalArticles}+ articles</span>
    </motion.div>
  );
}

// Featured card - larger, more prominent
function FeaturedCard({ post }: { post: (typeof allPosts)[0] }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.1}>
      <Link href={`${baseUrl.Marketing}${post.slug}`}>
        <motion.article
          className="group relative flex flex-col rounded-2xl border bg-card overflow-hidden cursor-pointer lg:flex-row"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
        >
          {isHovered && (
            <BorderBeam
              size={180}
              duration={10}
              borderWidth={1.5}
              colorFrom="hsl(var(--primary))"
              colorTo="hsl(var(--primary)/0)"
            />
          )}
          <Spotlight
            className="from-primary/10 via-primary/5 to-transparent"
            size={300}
          />
          {/* Image */}
          <div className="relative h-48 lg:h-auto lg:w-2/5 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: isHovered ? 0.8 : 1 }
              }
              transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary/10">
                {post.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 lg:w-3/5 lg:p-8">
            {/* Meta */}
            <div className="mb-3 flex items-center gap-3">
              <Badge
                variant="secondary"
                className="rounded-full text-xs"
              >
                {post.category}
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <CalendarIcon className="size-3" />
                {format(post.published, 'MMM d, yyyy')}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold leading-tight lg:text-2xl">
              {post.title}
            </h3>

            {/* Description */}
            <p className="mb-6 flex-1 text-muted-foreground leading-relaxed line-clamp-3">
              {post.description}
            </p>

            {/* Author and CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarImage
                    src={post.author?.avatar}
                    alt={post.author?.name ?? ''}
                  />
                  <AvatarFallback className="text-xs">
                    {getInitials(post.author?.name ?? '')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{post.author?.name ?? ''}</p>
                </div>
              </div>

              <motion.div
                className="flex items-center gap-2 text-sm font-medium text-primary"
                animate={
                  shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }
                }
                transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
              >
                Read article
                <ArrowRightIcon className="size-4" />
              </motion.div>
            </div>
          </div>
        </motion.article>
      </Link>
    </BlurFade>
  );
}

// Smaller card for secondary posts
function SmallCard({
  post,
  index
}: {
  post: (typeof allPosts)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.1 + index * 0.05}>
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
          {/* Category */}
          <div className="mb-2">
            <span className="text-xs font-medium text-primary">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-base font-semibold leading-tight line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
            {post.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <time className="text-xs text-muted-foreground">
              {format(post.published, 'MMM d')}
            </time>
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

export function BlogPostsFeatured(): React.JSX.Element {
  const sortedPosts = allPosts
    .slice()
    .sort((a, b) => (isBefore(a.published, b.published) ? 1 : -1));

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1, 5); // Get 4 more posts

  if (!featuredPost) {
    return <></>;
  }

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 lg:py-24 relative z-10">
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
                Latest from the blog
              </h2>
              <div className="mt-3 lg:hidden">
                <ArticleCountMagic />
              </div>
            </div>
            <div className="hidden lg:block lg:mb-2">
              <ArticleCountMagic />
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

        {/* Featured + Grid Layout */}
        <div className="space-y-6">
          {/* Featured Post */}
          <FeaturedCard post={featuredPost} />

          {/* Grid of smaller posts */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherPosts.map((post, index) => (
              <SmallCard
                key={post.slug}
                post={post}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
