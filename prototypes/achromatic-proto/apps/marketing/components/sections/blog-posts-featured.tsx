'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from 'content-collections';
import { format, isBefore } from 'date-fns';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { baseUrl } from '@workspace/routes';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@workspace/ui/components/avatar';
import { Badge } from '@workspace/ui/components/badge';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { getInitials } from '~/lib/formatters';

// Featured card - larger, more prominent
function FeaturedCard({ post }: { post: typeof allPosts[0] }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BlurFade delay={0.1}>
      <Link href={`${baseUrl.Marketing}${post.slug}`}>
        <motion.article
          className="group relative flex flex-col rounded-2xl border bg-card overflow-hidden cursor-pointer lg:flex-row"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
        >
          {/* Image */}
          <div className="relative h-48 lg:h-auto lg:w-2/5 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"
              animate={{ opacity: isHovered ? 0.8 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary/10">
                {post.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 lg:w-3/5 lg:p-8">
            {/* Meta */}
            <div className="mb-3 flex items-center gap-3">
              <Badge variant="secondary" className="rounded-full text-xs">
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
                  <AvatarImage src={post.author?.avatar} alt={post.author?.name ?? ''} />
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
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
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
function SmallCard({ post, index }: { post: typeof allPosts[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BlurFade delay={0.2 + index * 0.05}>
      <Link href={`${baseUrl.Marketing}${post.slug}`}>
        <motion.article
          className="group flex h-full flex-col rounded-xl border bg-card p-5 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {/* Category */}
          <div className="mb-2">
            <span className="text-xs font-medium text-primary">{post.category}</span>
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
              animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0.5 }}
              transition={{ duration: 0.2 }}
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
              <Badge variant="outline" className="mb-4 rounded-full">
                Blog
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Latest from the blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:mt-0"
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
              <SmallCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
