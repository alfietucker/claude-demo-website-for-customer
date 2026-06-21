## Goal
Replace the static review grid on `/reviews` with a horizontal carousel that has left/right arrow buttons so visitors can click through reviews one panel at a time.

## Changes

**`src/routes/reviews.tsx`**
- Replace the static `grid md:grid-cols-2 lg:grid-cols-3` block with the shadcn `Carousel` (`embla-carousel-react`, already installed).
- Each review card becomes a `CarouselItem`:
  - Mobile: 1 card per view (`basis-full`)
  - Tablet: 2 cards (`md:basis-1/2`)
  - Desktop: 3 cards (`lg:basis-1/3`)
- Add `CarouselPrevious` / `CarouselNext` arrows styled with the brand primary color (orange circular buttons), positioned at the top-right of the section on desktop and inline-centered below the carousel on mobile so they don't get cut off on narrow viewports.
- Enable `opts={{ align: "start", loop: true }}` so arrows keep cycling through reviews.
- Keep the existing card styling (rounded-2xl, shadow-card, stars, quote, attribution) untouched — only the layout wrapper changes.

## Notes
- Pure presentation change. No data, routing, or business-logic edits.
- No new dependencies — `embla-carousel-react` and the shadcn `Carousel` component already exist in the project.
- Hero section and bottom QuoteForm section remain unchanged.
