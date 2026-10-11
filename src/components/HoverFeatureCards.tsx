/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface HoverFeatureCard {
  name: string;
  description: string;
  href?: string;
  img?: string;
  imgLight?: string;
  imgClassName?: string;
  imgWidth?: number;
  containerClassName?: string;
  fadeBottom?: boolean;
  soon?: boolean;
  tag?: string;
  tagColor?: string;
  stats?: string;
}

export interface HoverFeatureCardsProps {
  items: HoverFeatureCard[];
  className?: string;
  renderLink?: (href: string, children: React.ReactNode) => React.ReactNode;
}

function HoverFeatureCard({
  item,
  renderLink,
}: {
  item: HoverFeatureCard;
  renderLink?: HoverFeatureCardsProps["renderLink"];
}) {
  const [isTouched, setIsTouched] = React.useState(false);

  const inner = (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate={isTouched ? "hover" : "rest"}
      whileTap={{ scale: item.href && !item.soon ? 0.97 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      variants={{ rest: { scale: 1, y: 0 } }}
      onClick={() => {
        if (!item.soon && item.href?.startsWith('#')) {
          const el = document.querySelector(item.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      onTouchStart={() => setIsTouched((prev) => !prev)}
      className={cn(
        "group flex flex-col w-full relative mb-4",
        item.soon
          ? "opacity-85 cursor-not-allowed"
          : item.href
            ? "cursor-pointer"
            : "",
      )}
    >
      {/* Main Top Card */}
      <div
        className={cn(
          "flex flex-col rounded-3xl border h-72 z-10 bg-white dark:bg-[#1C1C1E] transition-colors duration-200 w-full overflow-hidden shadow-xs",
          !item.soon && item.href ? "hover:border-black/30 dark:hover:border-white/30 hover:shadow-md" : "",
          item.soon ? "border-dashed border-black/20 dark:border-white/20" : "border-black/[0.08] dark:border-white/[0.08]",
        )}
      >
        {/* Status Pill Badge */}
        {item.soon && (
          <span className="absolute top-4 right-4 z-20 text-[11px] font-medium text-[#6E6E73] dark:text-[#A1A1A6] border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1 bg-white/90 dark:bg-[#2C2C2E]/90 backdrop-blur-md shadow-xs">
            Coming soon
          </span>
        )}

        {item.tag && !item.soon && (
          <span className="absolute top-4 right-4 z-20 text-[11px] font-mono font-medium text-[#4285F4] border border-[#4285F4]/20 rounded-full px-2.5 py-1 bg-[#4285F4]/05 dark:bg-[#4285F4]/10 backdrop-blur-md">
            {item.tag}
          </span>
        )}

        {/* Card Inner Content */}
        <div
          className={cn(
            "relative w-full h-full overflow-hidden bg-black/[0.015] dark:bg-white/[0.015] px-6 pt-6 pb-4 flex flex-col justify-between",
            item.containerClassName,
          )}
        >
          <div className="space-y-1">
            <span
              className={cn(
                "font-bold text-xl tracking-tight block",
                item.soon ? "text-[#6E6E73] dark:text-[#A1A1A6]" : "text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#4285F4] transition-colors",
              )}
            >
              {item.name}
            </span>
            {item.stats && (
              <span className="text-xs font-mono text-[#86868B] block">
                {item.stats}
              </span>
            )}
          </div>

          {/* Image & Illustration Slots */}
          <div className="relative my-auto flex items-center justify-center py-2">
            {item.img && (
              <img
                src={item.img}
                alt={item.name}
                width={item.imgWidth ?? 200}
                height={200}
                className={cn("h-auto max-h-36 object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105", item.imgClassName)}
              />
            )}
            {(item.imgLight ?? item.img) && (
              <img
                src={item.imgLight ?? item.img}
                alt={item.name}
                width={item.imgWidth ?? 200}
                height={200}
                className={cn("h-auto max-h-36 object-contain dark:hidden transition-transform duration-300 group-hover:scale-105", item.imgClassName)}
              />
            )}
          </div>

          {item.fadeBottom && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-[#1C1C1E] to-transparent" />
          )}
        </div>
      </div>

      {/* Layered Description Panel Animating Upward from Below */}
      <motion.div
        variants={{
          rest: { opacity: 0.2, y: -30 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="overflow-hidden z-0 w-11/12 self-center -mt-1"
      >
        <div className="py-3.5 px-5 relative border-t-0 rounded-b-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#1C1C1E] shadow-sm">
          <div className="pointer-events-none w-[103%] bg-gradient-to-b from-[#FAFAFC] dark:from-black to-transparent h-12 absolute -top-1 -left-1" />
          <p className="text-xs sm:text-sm font-normal text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed relative z-10">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );

  if (item.href && renderLink && !item.soon) {
    return renderLink(item.href, inner);
  }

  return inner;
}

function HoverFeatureCards({
  items,
  className,
  renderLink,
}: HoverFeatureCardsProps) {
  return (
    <div
      className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full", className)}
    >
      {items.map((item) => (
        <HoverFeatureCard key={item.name} item={item} renderLink={renderLink} />
      ))}
    </div>
  );
}

export { HoverFeatureCards, HoverFeatureCard };
