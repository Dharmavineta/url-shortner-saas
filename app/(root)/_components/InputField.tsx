import { Input, InputProps } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Lock } from "lucide-react";
import React from "react";

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const isLock = true;
    const disabled = true;
    return (
      <div className="relative">
        <Input
          disabled={disabled}
          placeholder="eg: google"
          {...props}
          ref={ref}
        />
        <div className="absolute top-3 right-2">
          {isLock ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Lock className="w-4 h-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="relative right-5">
                  <h1>Only premium members get to choose domain names</h1>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
);
InputField.displayName = "InputField";

export { InputField };
