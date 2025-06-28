document.addEventListener("DOMContentLoaded", function () {
  const widgets = document.querySelectorAll("[data-webring-json]");

  widgets.forEach(async (widget) => {
    const style = widget.getAttribute("data-webring-style") || "compact";
    const color = widget.getAttribute("data-webring-color") || "#ccc";
    const ringPath = widget.getAttribute("data-webring-json") || "ring.json";

    try {
      const res = await fetch(ringPath);
      const ring = await res.json();
      const sites = ring.sites || [];
      const name = ring.name || "Webring";

      let currentIndex = sites.findIndex(site => location.hostname.includes(new URL(site.url).hostname));
      if (currentIndex === -1) currentIndex = 0;

      const prev = sites[(currentIndex - 1 + sites.length) % sites.length];
      const next = sites[(currentIndex + 1) % sites.length];

      const container = document.createElement("div");
      container.className = `webring-widget ${style}`;
      container.style.borderColor = color;

      if (style === "card" || style === "compact") {
        container.innerHTML = `
          <div class="ring-name">${name}</div>
          <div class="ring-count">${sites.length} member${sites.length !== 1 ? "s" : ""}</div>
          <div class="ring-links">
            <a href="${ringPath}" target="_blank">View</a>${style === "card" ? '<a href="#">Join</a>' : ""}
          </div>
          <div class="ring-nav">
            ← <a href="${prev.url}">Previous</a>
            <a href="${next.url}">Next</a> →
          </div>
        `;
      } else if (style === "minimal") {
        container.innerHTML = `
          <div class="ring-name">${name} (${sites.length})</div>
          <div class="ring-nav">
            ← <a href="${prev.url}">Previous</a>
            <a href="${next.url}">Next</a> →
          </div>
        `;
      }

      widget.appendChild(container);
    } catch (error) {
      console.error("Webring error:", error);
    }
  });
});