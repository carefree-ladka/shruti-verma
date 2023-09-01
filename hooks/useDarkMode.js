import { useTheme } from "next-themes";

export function useDarkMode() {
  const { theme, setTheme } = useTheme();
  return [theme, setTheme];
}
