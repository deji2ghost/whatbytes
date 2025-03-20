"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

function Progress({
  className,
  value = 0,
  barColor,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { value: number, barColor: string }) {
  return (
    <div className="relative w-full flex items-center gap-9">
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          `relative h-2 w-full overflow-hidden rounded-full`,
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 w-full h-full rounded-full" />
        
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={`absolute left-0 h-full rounded-full transition-all ${barColor}`}
          style={{ width: `${value}%` }}
        />
        <p>{value}%</p>
      </ProgressPrimitive.Root>
      <p
        className="font-semibold text-gray-900"
      >
        {value}%
      </p>
    </div>
  );
}

export { Progress };
