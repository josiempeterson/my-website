/**
 * Replaces the last space in a paragraph with a non-breaking space so the
 * final two words stay on one line and avoid a single-word orphan.
 */
export function tieLastTwoWords(text: string): string {
  const trimmed = text.trimEnd();
  const trailingWs = text.slice(trimmed.length);
  const i = trimmed.lastIndexOf(" ");
  if (i <= 0) return text;
  return `${trimmed.slice(0, i)}\u00A0${trimmed.slice(i + 1)}${trailingWs}`;
}
