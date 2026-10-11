/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  splitBy?: "words" | "characters";
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as = "p",
  splitBy = "words",
  staggerDelay = 0.05,
  duration = 0.5,
  once = true,
  className,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const Component = as as React.ElementType;

  const items = React.useMemo(() => {
    if (splitBy === "characters") {
      return text.split("");
    }
    return text.split(" ");
  }, [text, splitBy]);

  return (
    <Component
      ref={ref}
      className={cn("inline-block flex-wrap", className)}
    >
      {items.map((item, index) => {
        const isSpace = item === " ";
        return (
          <motion.span
            key={index}
            className="inline-block"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 8,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }
                : {
                    opacity: 0,
                    filter: "blur(10px)",
                    y: 8,
                  }
            }
            transition={{
              duration,
              delay: index * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {splitBy === "characters" ? (
              isSpace ? "\u00A0" : item
            ) : (
              <span className="mr-[0.26em]">{item}</span>
            )}
          </motion.span>
        );
      })}
    </Component>
  );
};

export default TextReveal;
