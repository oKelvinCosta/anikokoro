import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";

const starVariants = cva("transition-all duration-200", {
  variants: {
    interactive: {
      true: "cursor-pointer",
      false: "",
    },
    size: {
      default: "w-4 h-4",
      lg: "w-5 h-5",
    },
  },
});

interface StarProps extends VariantProps<typeof starVariants> {
  filled?: boolean;
  fillColor?: string;
  strokeColor?: string;
  // extends VariantProps<typeof starVariants> is the same as:
  // size?: "default" | "lg";
  // interactive?: boolean;
}

// Star unit Component
function Star({
  filled = false,
  size = "default",
  interactive = false,
  fillColor = "#F40C34",
  strokeColor = "#99a1af",
}: StarProps) {
  return (
    <svg
      className={cn(starVariants({ interactive, size }))}
      viewBox="0 0 24 24"
      fill={filled ? fillColor : "none"}
      stroke={strokeColor}
      strokeWidth={filled ? 0 : 1.5}
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
// ---------------------------------

// Star Rating Component

interface StarRatingProps extends StarProps {
  rating: number;
  maxRating?: number;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "default",
  interactive = false,
  ...props
}: StarRatingProps) {
  const [currentRating, setCurrentRating] = useState(rating);

  function handleStarClick(index: number) {
    const ID = index + 1;
    console.log(ID);
    // Set the current rating
    setCurrentRating((state) =>
      state === ID
        ? ID >= 1
          ? // but if you click the same star again, set it to -1 (empty)
            ID - 1
          : 0
        : // Set the current rating
          ID
    );
  }

  return (
    <div className="flex gap-0" {...props}>
      {Array(maxRating)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="inline-block"
            onClick={interactive ? () => handleStarClick(index) : undefined}
          >
            <Star
              filled={currentRating >= index + 1}
              size={size}
              interactive={interactive}
            />
          </div>
        ))}
    </div>
  );
}
