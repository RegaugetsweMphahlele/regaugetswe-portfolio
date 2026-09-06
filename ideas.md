# Design Direction — Regaugetswe Mphahlele Portfolio

## Three Distinct Approaches

### Theme Name: Editorial Atelier
**Very Brief Intro:** A premium editorial portfolio with cream paper, deep emerald ink, warm gold rules, and generous asymmetry. It treats the developer as a thoughtful maker whose work deserves the pacing of a well-designed magazine.

**Probability:** 0.07

### Theme Name: Emerald Signal
**Very Brief Intro:** A quiet technology-forward interface with dark emerald surfaces, restrained gold highlights, and structured data-like modules. It feels precise, modern, and confident without leaning into neon or cyberpunk.

**Probability:** 0.04

### Theme Name: Garden of Systems
**Very Brief Intro:** A softer, botanical-technical direction that pairs sage surfaces with refined type, organic curves, and visual metaphors for systems growing into products. It would feel warm, optimistic, and quietly human.

**Probability:** 0.02

## Selected Direction: Editorial Atelier

### Design Movement
Contemporary editorial design influenced by Swiss grid discipline, boutique creative studios, and luxury print identity systems. The interface should feel composed rather than decorated: generous margins, deliberate hierarchy, and a few expressive details that reward attention.

### Core Principles
1. **Structure with breathing room:** Every section has a clear rhythm and generous whitespace, using asymmetrical compositions when they strengthen hierarchy.
2. **Emerald as the ink, gold as the annotation:** Emerald grounds the brand; gold is reserved for active states, rules, data points, and high-intent actions.
3. **Textural restraint:** Use soft cream surfaces, thin linework, subtle grain, and quiet elevation instead of loud gradients or oversized effects.
4. **Portfolio as proof:** Each piece of information should help a visitor understand capability, reliability, and range quickly.

### Color Philosophy
Cream white is the paper; deep emerald is the ink; warm gold is the editor's pencil. The palette is intentionally narrow so both light and dark modes feel like two print editions of the same identity rather than unrelated themes. Gold should remain scarce and therefore meaningful: a signal of action, importance, or transition.

### Layout Paradigm
Use a wide editorial rail with a sticky vertical or horizontal index, section labels set as small caps, and content that alternates between a narrow reading column and wider evidence modules. Hero content should be left-weighted with a profile lockup offset to the right, while timeline and project sections use staggered cards rather than a uniform centered grid.

### Signature Elements
- Fine gold hairline rules paired with numbered section markers such as `01 / ABOUT`.
- A small emerald-and-gold monogram slot used as a brand anchor in the navbar and footer.
- Project cards with a paper-like front face and a restrained reveal state, using a small `VIEW CASE` label rather than loud badges.

### Interaction Philosophy
Interactions should feel like turning a page or revealing a footnote: quick, intentional, and legible. Hover states should clarify hierarchy, not add spectacle. Active navigation is communicated through a gold rule and small shift in spacing. The theme switch should feel like moving between two editions of the same publication.

### Animation
Use opacity and transform only. Hero content enters in a short 420ms cascade; cards rise 16px on reveal with 60ms stagger; project flips use a 600ms perspective transform with a calm cubic-bezier; typewriter copy uses a steady cursor and pauses long enough for comfortable reading. Respect `prefers-reduced-motion` by removing entrance movement and preserving only essential state transitions.

### Typography System
Use `Cormorant Garamond` for display headings and editorial emphasis, with `Manrope` for body copy, navigation, labels, and forms. Headlines should be large but not oversized, with tight leading and slight negative tracking; body copy should sit at 16–18px with relaxed line-height; labels use 11–12px uppercase text with 0.14em tracking.

### Brand Essence
A software developer portfolio for teams who value dependable execution, thoughtful systems, and human-centred digital products — presented with more editorial care than a typical résumé site.

**Personality adjectives:** composed, curious, dependable.

### Brand Voice
Headlines are clear, assured, and lightly editorial. CTAs are direct but never pushy. Microcopy is specific and useful rather than generic.

- “I build useful systems with a human point of view.”
- “Browse the work, then let’s talk about what’s next.”

### Wordmark & Logo
Reserve a clean upload slot for the final logo. Until the real asset is supplied, the interface should use a restrained monogram placeholder container rather than inventing a finished wordmark. The visible slot is a slim rounded rectangle with a small `RM` mark and `LOGO SLOT` label so replacement does not change layout dimensions.

### Signature Brand Color
**Warm Gold `#C8A96A`** — ownable, sparingly applied, and constant across both themes as the visual thread between paper and night modes.

## Asset Notes

The build will keep the logo, headshot, CV PDF, and project screenshots as clearly marked replacement slots. Project thumbnails will use lightweight CSS placeholders rather than local media so the site remains fast and can accept real images later without layout shifts.

## Style Decisions

- Keep the selected Editorial Atelier direction consistent across every page and component.
- Preserve an intentionally narrow palette and avoid adding a second accent color.
- Prefer hairline separators, editorial labels, and offset compositions over repeated rounded cards.
- Treat gold as scarce emphasis, never as a large surface fill.

## Style Decisions

- The Projects section is treated as an editorial case-file spread rather than an equal-card gallery: MenaCare is the featured lead, while the remaining work follows a staggered catalog rhythm.
- Placeholder thumbnails use a family of muted proof-sheet artifacts, diagram fragments, interface traces, and paper labels instead of repeating generic emerald gradients.
- Every major project card surfaces a compact proof cue with role, context, or outcome alongside its visual treatment.
- Certifications use catalog-entry pacing and fine rules instead of a standard dashboard tile treatment.
