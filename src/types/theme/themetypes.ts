// ─── Semantic Theme Type ──────────────────────────────────────────────────────
// Matches both `semantic` and `darkSemantic` exactly.
// Usage: const theme: SemanticTheme = isDark ? darkSemantic : semantic;
// ─────────────────────────────────────────────────────────────────────────────

export interface SemanticColors {
  // Backgrounds
  bg:                 string;
  bgSurface:          string;
  bgRaised:           string;
  bgHover:            string;
  bgChecked:          string;
  bgCheckedHover:     string;
  bgTip:              string;

  // Text
  text:               string;
  textSubtle:         string;
  textMuted:          string;
  textFaint:          string;
  textOnAccent:       string;
  textAccent:         string;

  // Borders
  border:             string;
  borderStrong:       string;
  borderFocus:        string;
  borderChecked:      string;
  borderTip:          string;

  // Actions / Interactive
  actionPrimary:      string;
  actionPrimaryHover: string;
  actionText:         string;

  // Progress
  progressBg:         string;
  progressFill:       string;
  progressFillEnd:    string;

  // Checkboxes
  checkboxUnchecked:  string;
  checkboxChecked:    string;
  checkboxIcon:       string;

  // Tip / Warning boxes
  tipText:            string;

  // Badges
  badgeCoreBg:        string;
  badgeCoreText:      string;
  badgeUniqueBg:      string;
  badgeUniqueText:    string;
  badgePolishBg:      string;
  badgePolishText:    string;
  badgeNiceBg:        string;
  badgeNiceText:      string;
  starBg:             string;
  starText:           string;

  // Danger / Destructive
  actionDanger:       string;
  actionDangerHover:  string;
  bgDanger:           string;
  borderDanger:       string;
  textDanger:         string;
  textOnDanger:       string;
}

export interface SemanticSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface SemanticBorderRadius {
  sm: string;
  md: string;
  lg: string;
}

export interface SemanticFontSizes {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeTypes {
  colors:       SemanticColors;
  spacing:      SemanticSpacing;
  borderRadius: SemanticBorderRadius;
  fontSizes:    SemanticFontSizes;
}