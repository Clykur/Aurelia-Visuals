/**
 * Vercel serverless entry: exports the Express app (no `listen()`).
 * Local / Docker: use `pnpm start` → `dist/index.mjs` from `src/index.ts`.
 */
import app from "../src/app";

export default app;
