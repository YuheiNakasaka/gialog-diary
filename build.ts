import { toSSG } from "hono/bun";
import { generateSitemap } from "sitemap-ts";
import app from "./src/index";

await toSSG(app);

const hostname = process.env.VITE_GIALOG_BASE_URL;
generateSitemap({
  outDir: "./static",
  readable: true,
  hostname,
});
