// types/clarity.d.ts

export {};

declare global {
  interface Window {
    clarity?: (...args: [string, ...any[]]) => void;
  }
}
