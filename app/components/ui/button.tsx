import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "~/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b73b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11100f] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#e94235] px-6 py-3 text-white shadow-[0_12px_34px_rgba(233,66,53,0.24)] hover:-translate-y-0.5 hover:bg-[#f05245]",
        secondary:
          "border border-white/25 bg-white/8 px-6 py-3 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/14",
        light:
          "bg-[#f5eddd] px-6 py-3 text-[#171411] hover:-translate-y-0.5 hover:bg-white",
        ghost:
          "px-4 py-2 text-current hover:bg-white/8",
      },
      size: {
        default: "min-h-11",
        sm: "min-h-9 px-4 py-2 text-xs",
        lg: "min-h-12 px-7 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
