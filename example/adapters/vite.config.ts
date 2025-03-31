import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const pkg = process.env.PACKAGE!;

export default defineConfig({
  plugins: [nodePolyfills()],
  root: "./",
  build: {
    emptyOutDir: false,
    outDir: "./public",
    rollupOptions: {
      input: {
        main: `./adapters/${pkg}.ts`,
      },
      output: {
        entryFileNames: `${pkg}.js`,
        assetFileNames: `${pkg}.js`,
        format: "iife",
      },
    },
  },
});
