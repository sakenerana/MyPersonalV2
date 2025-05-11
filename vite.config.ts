import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("", "routes/_index.tsx", () => {
            route("", "routes/about.tsx", { index: true });
            route("skills", "routes/skills.tsx", { index: true });
            route("work-and-education", "routes/work_and_educ.tsx", { index: true });
            route("projects", "routes/projects.tsx", { index: true });
            route("vibe-coding", "routes/vibe_coding.tsx", { index: true });
          });
        })
      }
    }),
    tsconfigPaths(),
  ],
});
