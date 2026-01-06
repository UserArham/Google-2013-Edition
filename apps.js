// apps.js

// Example: Data for the bottom bar apps (you can expand this)
const appsData = [
  { name: "Advertising", url: "https://ads.google.com" },
  { name: "Business", url: "https://www.google.com/services/" },
  { name: "About", url: "https://about.google/" }
];

// Render bottom bar links dynamically
function renderFooterLinks() {
  const footerLeft = document.querySelector(".footer-left");
  if (!footerLeft) return;

  footerLeft.innerHTML = ""; // Clear existing content

  appsData.forEach(app => {
    const link = document.createElement("a");
    link.href = app.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = app.name;
    footerLeft.appendChild(link);
  });
}

// Add click functionality to the Apps button
function setupAppsButton() {
  const appsBtn = document.querySelector(".apps-btn");
  if (!appsBtn) return;

  appsBtn.addEventListener("click", () => {
    alert("Apps button clicked! You can add a menu here.");
    // Example: You could open a popup menu with your apps
  });
}

// Initialize apps features
function initApps() {
  renderFooterLinks();
  setupAppsButton();
}

// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", initApps);
