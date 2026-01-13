"use client";

import dynamic from "next/dynamic";
import { Section } from "~/components/ui/Section";

// Dynamically import UnicornScene to avoid SSR issues
const UnicornScene = dynamic(() => import("unicornstudio-react"), { ssr: false });

interface UnicornBlockProps {
  projectId: string;
  height?: string;
  className?: string;
}

export function UnicornBlock({
  projectId,
  height = "500px",
  className = ""
}: UnicornBlockProps) {
  return (
    <Section className={`relative overflow-hidden ${className}`}>
      <div
        className="w-full relative"
        style={{ height }}
      >
        <UnicornScene
          projectId={projectId}
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          lazyLoad={false}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </Section>
  );
}
