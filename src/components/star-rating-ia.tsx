import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const starRatingVariants = cva("flex items-center gap-1", {
  variants: {
    size: {
      sm: "gap-0.5",
      default: "gap-1",
      lg: "gap-2",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const starVariants = cva("transition-all duration-200", {
  variants: {
    size: {
      sm: "w-4 h-4",
      default: "w-5 h-5",
      lg: "w-6 h-6",
    },
    interactive: {
      true: "cursor-pointer hover:scale-110",
      false: "",
    },
  },
  defaultVariants: {
    size: "default",
    interactive: false,
  },
});

interface StarRatingProps extends VariantProps<typeof starRatingVariants> {
  rating: number;
  maxRating?: number;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

function Star({
  filled,
  size,
  interactive,
  onClick,
  onMouseEnter,
}: {
  filled: boolean;
  size: "sm" | "default" | "lg";
  interactive: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}) {
  return (
    <svg
      className={cn(starVariants({ size, interactive }))}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      role={interactive ? "button" : "img"}
      aria-label={
        interactive ? (filled ? "Filled star" : "Empty star") : undefined
      }
      tabIndex={interactive ? 0 : undefined}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarRatingIA({
  rating,
  maxRating = 5,
  readonly = true,
  onRatingChange,
  className,
  size,
  ...props
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = React.useState<number>(0);
  const displayRating = readonly ? rating : hoverRating || rating;

  const handleStarClick = (starRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const handleStarHover = (starRating: number) => {
    if (!readonly) {
      setHoverRating(starRating);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div
      className={cn(starRatingVariants({ size, className }))}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {Array.from({ length: maxRating }, (_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= displayRating;

        return (
          <Star
            key={starNumber}
            filled={isFilled}
            size={size || "default"}
            interactive={!readonly}
            onClick={() => handleStarClick(starNumber)}
            onMouseEnter={() => handleStarHover(starNumber)}
          />
        );
      })}
    </div>
  );
}

export { StarRating, starRatingVariants };
