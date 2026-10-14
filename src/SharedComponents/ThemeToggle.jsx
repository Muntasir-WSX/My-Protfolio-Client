import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const ThemeToggle = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-colors hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:bg-emerald-950 dark:hover:text-emerald-300 ${
        compact ? "h-10 w-10" : "gap-2 px-3 py-2"
      }`}
    >
      {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
      {!compact && (
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
