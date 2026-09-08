import { cpSync, rmSync } from "node:fs";
import { join } from "node:path";

if (process.env.NETLIFY) {
  process.exit(0);
}

const dist = "dist";

cpSync(join(dist, "index.html"), "index.html");
rmSync("assets", { recursive: true, force: true });
cpSync(join(dist, "assets"), "assets", { recursive: true });

for (const file of ["favicon.svg", "404.html", "resume.html"]) {
  cpSync(join(dist, file), file);
}

rmSync("images", { recursive: true, force: true });
cpSync(join(dist, "images"), "images", { recursive: true });


cpSync(join(dist, "index.html"), "index.html");
rmSync("assets", { recursive: true, force: true });
cpSync(join(dist, "assets"), "assets", { recursive: true });

for (const file of ["favicon.svg", "404.html", "resume.html"]) {
  cpSync(join(dist, file), file);
}

rmSync("images", { recursive: true, force: true });
cpSync(join(dist, "images"), "images", { recursive: true });
