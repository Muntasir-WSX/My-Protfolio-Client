import { useTheme } from "../ThemeProvider/useTheme";

const ThemeToggle = ({ compact = false }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <label
      className={`swap swap-rotate cursor-pointer ${isDark ? "swap-active" : ""} btn btn-ghost btn-circle border border-gray-200 text-gray-700 hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-700 dark:text-gray-200 ${
        compact ? "" : "w-auto gap-2 px-3"
      }`}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      />
      <span className="swap-off" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M5.64 17.657a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0ZM12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm6.364-.343a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414ZM4 11H2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Zm17 0h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2ZM4.226 3.515a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 5.64 6.343L4.226 4.929a1 1 0 0 1 0-1.414ZM18.36 5.657l1.414-1.414a1 1 0 1 1 1.414 1.414L19.774 7.07a1 1 0 1 1-1.414-1.414ZM12 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
        </svg>
      </span>
      <span className="swap-on" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.36.73A8.15 8.15 0 0 1 9.08 5.44a8.05 8.05 0 0 1 .73-3.36A1 1 0 0 0 8.76 1a10.14 10.14 0 1 0 12.48 12Z" />
        </svg>
      </span>
      {!compact && <span className="text-xs font-bold uppercase tracking-wider">{isDark ? "Light" : "Dark"}</span>}
    </label>
  );
};

export default ThemeToggle;
