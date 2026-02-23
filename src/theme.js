const THEME_KEY = "site-theme";

// Apply theme by setting attribute on <html>
export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

// Initialize theme on page load
export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);

  if (saved) {
    applyTheme(saved);
    return;
  }

  // Auto detect from OS
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

// Toggle theme manually
export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}