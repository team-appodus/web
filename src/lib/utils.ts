import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class name values into a single string,
 * and intelligently merges Tailwind CSS classes to avoid conflicts.
 * It’s especially useful when:
     1. You want to conditionally join class names
     2. You're using tailwind-variants or clsx
     3. You want to merge conflicting Tailwind utilities properly
 *
 * @example
 * cn('bg-white', 'text-black', conditional && 'opacity-50')
 * // → "bg-white text-black opacity-50" (if conditional is truthy)
 *
 * @example
 * cn('p-2', 'p-4') // → "p-4" (twMerge resolves the conflict)
 *
 * @param {...ClassValue[]} inputs - A list of class values, which can be strings, objects, arrays, or conditionals.
 * @returns {string} - A single, space-separated, conflict-resolved string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
