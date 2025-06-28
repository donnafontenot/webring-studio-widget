// webring-widget.js
// A simple placeholder script for webring navigation
document.addEventListener('DOMContentLoaded', function () {
  const widgets = document.querySelectorAll('.webring-widget');

  widgets.forEach(el => {
    const style = el.dataset.style || 'compact';
    const color = el.dataset.color || '#999';
    const prev = el.dataset.prev || '#';
    const next = el.dataset.next || '#';
    const view = el.dataset.view || '#';

    // Inject minimal styling if using "card"
    if (style === 'card') {
      el.style.border = `2px solid ${color}`;
      el.style.borderRadius = '12px';
      el.style.padding = '16px';
      el.style.maxWidth = '320px';
      el.style.background = '#fff';
      el.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 2px 8px';
      el.style.margin = '20px auto';
      el.style.fontFamily = 'system-ui, sans-serif';
      el.style.setProperty('--webring-color', color);

      el.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-top: 10px;">
          <a href="${prev}" style="text-decoration:none; color:${color}; font-weight:bold;">⟵ Prev</a>
          <a href="${view}" style="text-decoration:none; color:${color}; font-weight:bold;">🌐 View Ring</a>
          <a href="${next}" style="text-decoration:none; color:${color}; font-weight:bold;">Next ⟶</a>
        </div>
      `;
    } else {
      // Basic fallback style — update later as needed
      el.innerHTML = `
        <p><a href="${prev}">Prev</a> | <a href="${view}">View Ring</a> | <a href="${next}">Next</a></p>
      `;
    }
  });
});
