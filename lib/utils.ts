import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sanitizeTitle = (title: string) => {
  // Create a temporary DOM element to decode HTML entities
  const tempElement = document.createElement('div');
  tempElement.innerHTML = title;

  // Extract the decoded text from the element
  let decodedTitle = tempElement.textContent || tempElement.innerText || '';

  // Convert to lowercase (optional, based on your needs)
  decodedTitle = decodedTitle.toLowerCase();

  return decodedTitle;
}

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