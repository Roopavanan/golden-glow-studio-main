import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury gold variants
        gold: "bg-gradient-to-r from-[hsl(43,74%,35%)] via-[hsl(43,74%,49%)] to-[hsl(43,60%,65%)] text-[hsl(0,0%,4%)] font-semibold tracking-wide hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.4)] hover:scale-[1.02]",
        goldOutline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hover:shadow-[0_0_25px_hsl(43_74%_49%_/_0.3)] font-semibold tracking-wide",
        hero: "border border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_hsl(43_74%_49%_/_0.4)] font-semibold tracking-wider uppercase text-xs",
        luxury: "bg-card border border-primary/30 text-foreground hover:border-primary hover:shadow-[0_0_20px_hsl(43_74%_49%_/_0.2)] font-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
