// webring-widget.js
// A simple placeholder script for webring navigation
document.addEventListener("DOMContentLoaded", () => {
  const widget = document.querySelector(".webring-widget");
  if (!widget) return;

  const prev = widget.dataset.prev || "#";
  const next = widget.dataset.next || "#";
  const view = widget.dataset.view || "#";

  widget.innerHTML = `
    <div class="webring-nav">
      <a href="${prev}">← Prev</a>
      <a href="${view}">🌐 Ring Home</a>
      <a href="${next}">Next →</a>
    </div>
  `;
});
