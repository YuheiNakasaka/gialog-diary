import ssg from "@hono/vite-ssg";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    ssg(),
    devServer({
      entry: "src/index.tsx",
    }),
  ],
});
