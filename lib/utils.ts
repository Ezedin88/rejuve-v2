import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sanitizeTitle = (title: string) => {
  // Decode HTML entities
  const decodeEntities = (input: string) => {
    return input.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    }).replace(/&(#x[\da-fA-F]+);/g, (match, hex) => {
      return String.fromCharCode(parseInt(hex.substring(2), 16));
    }).replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
  };

  // Apply decoding
  let decodedTitle = decodeEntities(title);

  // Convert to lowercase (optional, based on your needs)
  decodedTitle = decodedTitle.toLowerCase();

  return decodedTitle;
};


export const getAbsolutePath = (baseUrl: string) => {
  let url = '';

  if (baseUrl) {
    try {
      url = new URL(baseUrl).pathname;
    } catch (error) {
      url = '#';
    }
  }

  return url;

}