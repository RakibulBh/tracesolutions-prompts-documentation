/**
 * Detects URLs in a string and replaces them with clickable links.
 * @param text - The input text that may contain URLs.
 * @returns A string with URLs wrapped in <a> tags.
 */
export const makeLinksClickable = (text: string): string => {
  // Regex to detect URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${url}</a>`;
  });
};
