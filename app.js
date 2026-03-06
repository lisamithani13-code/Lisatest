// ============================================
//  LISATEST — app.js
//  VERSION 1 (Baseline)
//  Push this to main → Vercel auto-deploys
// ============================================

const config = {
  version: "1.0",
  theme: "purple",
  greeting: "Hello from Version 1!",
};

function init() {
  document.querySelector("h1").textContent = config.greeting;

  const label = document.querySelector(".version-label");
  label.textContent = `v${config.version} · theme: ${config.theme} · branch: main`;

  document.querySelector("button").addEventListener("click", () => {
    alert(`You are on VERSION ${config.version}. Theme is ${config.theme}.`);
  });

  console.log("[app.js] Loaded:", config);
}

document.addEventListener("DOMContentLoaded", init);
