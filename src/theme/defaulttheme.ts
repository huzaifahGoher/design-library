// ─── Spacings (shared) ────────────────────────────────────────────────────────

const spacings = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "18px",
  },
};

// ─── Light Raw Colors ─────────────────────────────────────────────────────────

export const colors = {
  // Page / App Shell
  pageBg:             "#FAFAFA",
  surfaceWhite:       "#FFFFFF",
  surfaceRaised:      "#F3F4F6",   // elevated surfaces: dropdowns, menus, modals
  surfaceOverlay:     "#E5E7EB",   // tooltips, popovers

  // Text
  textPrimary:        "#111111",
  textSecondary:      "#555555",
  textTertiary:       "#6B7280",
  textDisabled:       "#9CA3AF",
  textInverse:        "#FFFFFF",
  textAccent:         "#166534",   // green text on light bg

  // Borders
  borderDefault:      "#E5E7EB",
  borderStrong:       "#D1D5DB",
  borderFocus:        "#9CA3AF",

  // Primary Accent — Green
  accentGreen:        "#16A34A",
  accentGreenLight:   "#4ADE80",
  accentGreenBg:      "#F0FDF4",
  accentGreenBgHover: "#DCFCE7",
  accentGreenBorder:  "#BBF7D0",
  accentGreenText:    "#166534",
  accentGreenLabel:   "#F0FDF4",

  // Badges
  badgeCoreBg:        "#DBEAFE",
  badgeCoreText:      "#1E40AF",

  badgeUniqueBg:      "#FEF3C7",
  badgeUniqueText:    "#92400E",

  badgePolishBg:      "#D1FAE5",
  badgePolishText:    "#065F46",

  badgeNiceBg:        "#F3F4F6",
  badgeNiceText:      "#374151",

  // Tip / Warning Box
  tipBoxBg:           "#FFFBEB",
  tipBoxBorder:       "#FDE68A",
  tipBoxText:         "#78350F",

  // Star Badge
  starBg:             "#FEF3C7",
  starText:           "#92400E",

  // Danger / Destructive
  dangerRed:          "#DC2626",
  dangerRedDark:      "#B91C1C",
  dangerBg:           "#FEF2F2",
  dangerBorder:       "#FECACA",
  dangerText:         "#DC2626",
  dangerTextOnDanger: "#FFFFFF",

  // Neutral Greys
  grey50:             "#F9FAFB",
  grey100:            "#F3F4F6",
  grey200:            "#E5E7EB",
  grey300:            "#D1D5DB",
  grey400:            "#9CA3AF",
  grey500:            "#6B7280",
  grey700:            "#374151",
  grey900:            "#111827",
};

// ─── Dark Raw Colors ──────────────────────────────────────────────────────────

export const darkColors = {
  // Page / App Shell
  pageBg:             "#09090B",
  surfaceWhite:       "#18181B",
  surfaceRaised:      "#27272A",
  surfaceOverlay:     "#3F3F46",

  // Text
  textPrimary:        "#FAFAFA",
  textSecondary:      "#A1A1AA",
  textTertiary:       "#71717A",
  textDisabled:       "#52525B",
  textInverse:        "#09090B",
  textAccent:         "#4ADE80",   // green text on dark bg

  // Borders
  borderDefault:      "#27272A",
  borderStrong:       "#3F3F46",
  borderFocus:        "#52525B",

  // Primary Accent — Green
  accentGreen:        "#16A34A",
  accentGreenLight:   "#4ADE80",
  accentGreenBg:      "#052E16",
  accentGreenBgHover: "#14532D",
  accentGreenBorder:  "#166534",
  accentGreenText:    "#4ADE80",
  accentGreenLabel:   "#052E16",

  // Badges
  badgeCoreBg:        "#172554",
  badgeCoreText:      "#93C5FD",

  badgeUniqueBg:      "#451A03",
  badgeUniqueText:    "#FCD34D",

  badgePolishBg:      "#052E16",
  badgePolishText:    "#4ADE80",

  badgeNiceBg:        "#27272A",
  badgeNiceText:      "#A1A1AA",

  // Tip / Warning Box
  tipBoxBg:           "#1C1400",
  tipBoxBorder:       "#92400E",
  tipBoxText:         "#FCD34D",

  // Star Badge
  starBg:             "#451A03",
  starText:           "#FCD34D",

  // Danger / Destructive
  dangerRed:          "#DC2626",
  dangerRedLight:     "#EF4444",
  dangerBg:           "#450A0A",
  dangerBorder:       "#991B1B",
  dangerText:         "#FCA5A5",
  dangerTextOnDanger: "#FFFFFF",

  // Neutral Zinc
  zinc50:             "#FAFAFA",
  zinc400:            "#A1A1AA",
  zinc500:            "#71717A",
  zinc600:            "#52525B",
  zinc700:            "#3F3F46",
  zinc800:            "#27272A",
  zinc900:            "#18181B",
};

// ─── Light Semantic ───────────────────────────────────────────────────────────

export const semantic = {
  colors: {
    // Backgrounds
    bg:                 colors.pageBg,
    bgSurface:          colors.surfaceWhite,
    bgRaised:           colors.surfaceRaised,
    bgHover:            colors.surfaceOverlay,
    bgChecked:          colors.accentGreenBg,
    bgCheckedHover:     colors.accentGreenBgHover,
    bgTip:              colors.tipBoxBg,

    // Text
    text:               colors.textPrimary,
    textSubtle:         colors.textSecondary,
    textMuted:          colors.textTertiary,
    textFaint:          colors.textDisabled,
    textOnAccent:       colors.textInverse,
    textAccent:         colors.textAccent,

    // Borders
    border:             colors.borderDefault,
    borderStrong:       colors.borderStrong,
    borderFocus:        colors.borderFocus,
    borderChecked:      colors.accentGreenBorder,
    borderTip:          colors.tipBoxBorder,

    // Actions / Interactive
    actionPrimary:      colors.accentGreen,
    actionPrimaryHover: colors.accentGreenLight,
    actionText:         colors.accentGreenText,

    // Progress
    progressBg:         colors.grey200,
    progressFill:       colors.accentGreen,
    progressFillEnd:    colors.accentGreenLight,

    // Checkboxes
    checkboxUnchecked:  colors.borderStrong,
    checkboxChecked:    colors.accentGreen,
    checkboxIcon:       colors.textInverse,

    // Tip / Warning boxes
    tipText:            colors.tipBoxText,

    // Badges
    badgeCoreBg:        colors.badgeCoreBg,
    badgeCoreText:      colors.badgeCoreText,
    badgeUniqueBg:      colors.badgeUniqueBg,
    badgeUniqueText:    colors.badgeUniqueText,
    badgePolishBg:      colors.badgePolishBg,
    badgePolishText:    colors.badgePolishText,
    badgeNiceBg:        colors.badgeNiceBg,
    badgeNiceText:      colors.badgeNiceText,
    starBg:             colors.starBg,
    starText:           colors.starText,

    // Danger / Destructive
    actionDanger:       colors.dangerRed,
    actionDangerHover:  colors.dangerRedDark,
    bgDanger:           colors.dangerBg,
    borderDanger:       colors.dangerBorder,
    textDanger:         colors.dangerText,
    textOnDanger:       colors.dangerTextOnDanger,
  },
  ...spacings,
};

// ─── Dark Semantic ────────────────────────────────────────────────────────────

export const darkSemantic = {
  colors: {
    // Backgrounds
    bg:                 darkColors.pageBg,
    bgSurface:          darkColors.surfaceWhite,
    bgRaised:           darkColors.surfaceRaised,
    bgHover:            darkColors.surfaceOverlay,
    bgChecked:          darkColors.accentGreenBg,
    bgCheckedHover:     darkColors.accentGreenBgHover,
    bgTip:              darkColors.tipBoxBg,

    // Text
    text:               darkColors.textPrimary,
    textSubtle:         darkColors.textSecondary,
    textMuted:          darkColors.textTertiary,
    textFaint:          darkColors.textDisabled,
    textOnAccent:       darkColors.textInverse,
    textAccent:         darkColors.textAccent,

    // Borders
    border:             darkColors.borderDefault,
    borderStrong:       darkColors.borderStrong,
    borderFocus:        darkColors.borderFocus,
    borderChecked:      darkColors.accentGreenBorder,
    borderTip:          darkColors.tipBoxBorder,

    // Actions / Interactive
    actionPrimary:      darkColors.accentGreen,
    actionPrimaryHover: darkColors.accentGreenLight,
    actionText:         darkColors.accentGreenText,

    // Progress
    progressBg:         darkColors.zinc800,
    progressFill:       darkColors.accentGreen,
    progressFillEnd:    darkColors.accentGreenLight,

    // Checkboxes
    checkboxUnchecked:  darkColors.borderStrong,
    checkboxChecked:    darkColors.accentGreen,
    checkboxIcon:       "#FFFFFF",

    // Tip / Warning boxes
    tipText:            darkColors.tipBoxText,

    // Badges
    badgeCoreBg:        darkColors.badgeCoreBg,
    badgeCoreText:      darkColors.badgeCoreText,
    badgeUniqueBg:      darkColors.badgeUniqueBg,
    badgeUniqueText:    darkColors.badgeUniqueText,
    badgePolishBg:      darkColors.badgePolishBg,
    badgePolishText:    darkColors.badgePolishText,
    badgeNiceBg:        darkColors.badgeNiceBg,
    badgeNiceText:      darkColors.badgeNiceText,
    starBg:             darkColors.starBg,
    starText:           darkColors.starText,

    // Danger / Destructive
    actionDanger:       darkColors.dangerRed,
    actionDangerHover:  darkColors.dangerRedLight,
    bgDanger:           darkColors.dangerBg,
    borderDanger:       darkColors.dangerBorder,
    textDanger:         darkColors.dangerText,
    textOnDanger:       darkColors.dangerTextOnDanger,
  },
  ...spacings,
};

// ─── Usage ────────────────────────────────────────────────────────────────────
//
//  const theme = isDark ? darkSemantic : semantic;
//
//  theme.colors.bg               → page background
//  theme.colors.bgSurface        → cards, panels, inputs
//  theme.colors.bgRaised         → dropdowns, menus, modals
//  theme.colors.bgHover          → hover states
//  theme.colors.bgChecked        → checked / active row background
//  theme.colors.bgCheckedHover   → checked row on hover
//  theme.colors.bgTip            → tip / warning box background
//
//  theme.colors.text             → headings, labels
//  theme.colors.textSubtle       → body copy, descriptions
//  theme.colors.textMuted        → captions, counters
//  theme.colors.textFaint        → placeholders, disabled
//  theme.colors.textOnAccent     → text on filled buttons
//  theme.colors.textAccent       → green-colored text (links, labels)
//
//  theme.colors.border           → default borders, dividers
//  theme.colors.borderStrong     → stronger borders, input rings
//  theme.colors.borderFocus      → focused input rings
//  theme.colors.borderChecked    → active / checked row borders
//  theme.colors.borderTip        → tip box border
//
//  theme.colors.actionPrimary      → button bg, checkbox fill
//  theme.colors.actionPrimaryHover → button hover bg
//  theme.colors.actionText         → green text in CTAs / links
//
//  theme.colors.progressBg       → progress bar track
//  theme.colors.progressFill     → progress bar fill start
//  theme.colors.progressFillEnd  → progress bar fill end (gradient)
//
//  theme.colors.checkboxUnchecked → unchecked ring color
//  theme.colors.checkboxChecked   → checked fill color
//  theme.colors.checkboxIcon      → checkmark icon color
//
//  theme.colors.tipText          → tip box text color
//
//  theme.colors.badgeCoreBg    / badgeCoreText    → "Must Have" badge
//  theme.colors.badgeUniqueBg  / badgeUniqueText  → "Unique to You" badge
//  theme.colors.badgePolishBg  / badgePolishText  → "Portfolio Signal" badge
//  theme.colors.badgeNiceBg    / badgeNiceText    → "Bonus" badge
//  theme.colors.starBg         / starText         → "Key Differentiator" star
//
//  theme.spacing.xs / sm / md / lg / xl
//  theme.borderRadius.sm / md / lg
//  theme.fontSizes.sm / md / lg