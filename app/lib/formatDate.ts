// utils/formatDate.ts

/**
 * Formats an ISO date string into a more readable format
 * @param dateString - ISO date string (e.g., "2025-03-20T09:36:05.287168+00:00")
 * @param format - Optional format specification ('short', 'medium', 'long')
 * @returns Formatted date string
 */

export function formatDate(
  dateString: string,
  format: "short" | "medium" | "long" = "medium"
): string {
  const date = new Date(dateString);

  // Handle invalid dates
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  // Format options based on the requested format
  switch (format) {
    case "short":
      // Mar 20, 2025
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

    case "medium":
      // March 20, 2025
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

    case "long":
      // March 20, 2025, 9:36 AM
      return date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

    default:
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
  }
}
