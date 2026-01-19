'use client';

import * as React from 'react';
import Link from 'next/link';
import { allPosts } from 'content-collections';
import { format, isBefore } from 'date-fns';
import { ArrowRightIcon } from 'lucide-react';
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

function BlogCard({ post, index }: { post: typeof allPosts[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BlurFade delay={0.05 + index * 0.05}>
      <Link href={`${baseUrl.Marketing}${post.slug}`}>
        <motion.article
          className="group flex h-full flex-col rounded-xl border bg-card p-5 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {/* Category and Date */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-primary">{post.category}</span>
            <time dateTime={post.published} className="text-xs text-muted-foreground">
              {format(post.published, 'MMM d, yyyy')}
            </time>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold leading-tight line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          {/* Author and Arrow */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src={post.author?.avatar} alt={post.author?.name ?? ''} />
                <AvatarFallback className="text-[9px]">
                  {getInitials(post.author?.name ?? '')}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{post.author?.name ?? ''}</span>
            </div>

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

export function BlogPosts(): React.JSX.Element {
  const sortedPosts = allPosts
    .slice()
    .sort((a, b) => (isBefore(a.published, b.published) ? 1 : -1))
    .slice(0, 6); // Limit to 6 posts

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
                Insights & Resources
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

        {/* Posts Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </GridSection>
  );
}
