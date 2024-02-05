import { toSSG } from "hono/bun";
import app from "./src/index";

toSSG(app);
