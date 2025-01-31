# Next.js 15 useEffect Cleanup Issue

This repository demonstrates a problem encountered in a Next.js 15 application where a `useEffect` hook's cleanup function doesn't seem to be working correctly when navigating away from and back to the page.  The counter continues to increment even after leaving the About page.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to the `/about` page.
5. Navigate to the `/` (home) page.
6. Navigate back to the `/about` page.  Observe that the counter continues to increment from where it left off, indicating that the `clearInterval` function in the `useEffect` cleanup is not properly stopping the interval.

## Potential Causes

- Incorrect usage of `useEffect` hook.
- Issues with Next.js's component lifecycle in the context of client-side navigation.
- Potential bug within Next.js 15 itself (although less likely).