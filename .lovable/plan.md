# Adding Motion to OdishaDentalImplants.com

The site currently has no animations — everything renders statically. Below are tasteful, medically-professional motion ideas (nothing bouncy or gimmicky), grouped by priority.

## Recommended (high impact, low risk)

1. **Scroll reveal on sections** — headings, cards and list items fade up gently as they enter the viewport, with a small stagger between cards (Services, Implant Team, Why Us, Across Odisha). Makes the page feel alive while scrolling.
2. **Hero entrance** — headline, subtext and the two CTAs fade up in sequence on load; hero image scales in softly from 98%.
3. **Card hover polish** — service, team and city cards lift slightly with a deeper shadow and a subtle blue-to-purple border glow on hover.
4. **Button interactions** — gradient CTAs shift their gradient and lift 1px on hover; the WhatsApp button gets a slow, subtle pulse ring so it stays noticeable without being loud.
5. **Journey / How It Works** — the step connector line draws itself in as the section scrolls into view, with each step number popping in after it.

## Nice to have

6. **Trust bar counters** — numbers count up once when scrolled into view.
7. **FAQ accordion** — smooth height + fade on open/close (already available via the accordion utility).
8. **Sticky mobile CTA bar** — slides up from the bottom after the user scrolls past the hero rather than being present from the start.
9. **Header** — background blur and shadow ease in on scroll (currently an instant toggle).
10. **Team photos** — slow zoom on hover inside the rounded frame.

## Accessibility and performance

- All motion respects `prefers-reduced-motion`; users with that setting see no movement.
- Reveals fire once, use transform/opacity only, and are throttled via IntersectionObserver so scrolling stays smooth on mobile.

## Technical notes

- Scroll reveals: a small `useInView` hook (IntersectionObserver) plus the existing `animate-fade-in` / `animate-scale-in` utilities and Tailwind delay classes for stagger — no new dependency needed.
- If richer sequencing is wanted for the hero and journey line, add `motion` (Motion for React) and use it only in those two components.
- No content, copy, layout or backend changes.

Tell me which numbers you want and whether to keep it dependency-free or add Motion.
