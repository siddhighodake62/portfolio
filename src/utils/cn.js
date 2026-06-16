import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to smartly merge Tailwind classes
 * Crucial for Aceternity/Magic UI components
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
