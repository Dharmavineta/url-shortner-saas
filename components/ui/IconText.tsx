import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";

const IconVariant = cva("flex, items-center", {
  variants: {
    variant: {
      default: "text-sky-500",
      success: "text-lime-500",
      primary: "text-amber-500",
      danger: "text-rose-500",
    },
    size: {
      default: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

const backgroundVariant = cva(
  " rounded-full border w-7 h-7 flex items-center justify-center ",
  {
    variants: {
      variant: {
        default: "border-sky-500",
        success: "border-lime-500",
        primary: "border-amber-500",
        danger: "border-rose-500",
      },

      defaultVariants: {
        variant: "default",
      },
    },
  }
);

type IconProps = VariantProps<typeof IconVariant>;
type backgrounProps = VariantProps<typeof backgroundVariant>;

interface IconTextProps extends IconProps {
  icon: LucideIcon;
  text?: string;
  className?: string;
}

export const IconText: FC<IconTextProps> = ({
  className,
  icon: Icon,
  text,
  variant,
  size,
}) => {
  return (
    <div className={cn("flex items-center gap-x-2 ")}>
      <div className={cn(backgroundVariant({ variant }))}>
        <Icon className={cn(IconVariant({ variant, size }))} />
      </div>
      <div className={cn("whitespace-nowrap", className)}>{text}</div>
    </div>
  );
};
