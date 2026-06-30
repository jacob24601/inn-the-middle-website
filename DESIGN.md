---
name: "Inn The Middle"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#D9D9D9"
    shade-3: "#B3B4B3"
    shade-4: "#808381"
    shade-5: "#4D514F"
    shade-6: "#1B1F1D"
    shade-7: "#020704"
    white: "#FFFFFF"
  red-berry:
    shade-1: "#F3E5E5"
    shade-2: "#E7CCCC"
    shade-3: "#AD4C4C"
    shade-4: "#8B0000"
    shade-5: "#6F0000"
    shade-6: "#370000"
    shade-7: "#290000"
  yellow-orange:
    shade-1: "#FFF7EC"
    shade-2: "#FFEFDA"
    shade-3: "#FFC97E"
    shade-4: "#FFB347"
    shade-5: "#CC8F38"
    shade-6: "#66471C"
    shade-7: "#4C3515"
  sea-green:
    shade-1: "#EAF3EE"
    shade-2: "#D5E7DD"
    shade-3: "#6CAD89"
    shade-4: "#2E8B57"
    shade-5: "#246F45"
    shade-6: "#123722"
    shade-7: "#0D291A"

typography:
  heading:
    fontFamily: "Fraunces"
    fontWeight: 700
  body:
    fontFamily: "Asap"
    fontWeight: 400
  sizes:
    desktop:
      h1: 84px
      h2: 60px
      h3: 48px
      h4: 40px
      h5: 32px
      h6: 26px
      text-large: 26px
      text-medium: 20px
      text-regular: 18px
      text-small: 16px
      text-tiny: 12px
    mobile:
      h1: 48px
      h2: 44px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 14px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "sleek"
  buttonRadius: 6px
  tagRadius: 4px
  inputRadius: 6px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#020704"
    accentHex: "#8B0000"
    borderValue: "#02070426"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#F2F2F2"
    textHex: "#020704"
    accentHex: "#8B0000"
    borderValue: "#02070426"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "chromatic1-shade-1"
    backgroundHex: "#F3E5E5"
    foregroundHex: "#F3E5E5"
    textHex: "#020704"
    accentHex: "#8B0000"
    borderValue: "#02070426"
    useLogoVariant: light
    cssClass: "scheme-3"
---

# Inn The Middle — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 3 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Red Berry** — primary shade: `#8B0000`
- **Yellow Orange** — primary shade: `#FFB347`
- **Sea Green** — primary shade: `#2E8B57`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Fraunces** at weight 700. Body text uses **Asap** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **sleek** with button radius 6px. Cards use the **outlined** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral White (#FFFFFF) | #020704 | #8B0000 | light | `.scheme-1` |
| Scheme 2 | Neutral Lightest (#F2F2F2) | #020704 | #8B0000 | light | `.scheme-2` |
| Scheme 3 | Red Berry Lightest (#F3E5E5) | #020704 | #8B0000 | light | `.scheme-3` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
