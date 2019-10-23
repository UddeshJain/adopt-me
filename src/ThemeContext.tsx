import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  theme => theme
]);

export default ThemeContext;
