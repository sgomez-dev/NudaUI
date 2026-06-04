import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// Node environment is enough — the audit reads registry data as plain
// objects; previews are never rendered. tsconfig's "jsx": "react-jsx"
// lets esbuild transpile the registry's JSX without a DOM.
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
