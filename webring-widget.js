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

    if (style === 'card') {
      // Apply layout & styling
      el.classList.add('webring-card');
      el.style.border = `2px solid ${color}`;
      el.style.borderRadius = '16px';
      el.style.padding = '20px';
      el.style.maxWidth = '340px';
      el.style.background = '#fff';
      el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      el.style.margin = '30px auto';
      el.style.fontFamily = 'system-ui, sans-serif';
      el.style.textAlign = 'center';
      el.style.setProperty('--webring-color', color);

      // Inject content
      el.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; gap: 24px; margin-top: 6px;">
          <a href="${prev}" style="text-decoration:none; color:${color}; font-weight:bold; font-size: 1.1rem;">⟵ Prev</a>
          <a href="${view}" style="text-decoration:none; color:${color}; font-weight:bold; font-size: 1.1rem;">🌐 View Ring</a>
          <a href="${next}" style="text-decoration:none; color:${color}; font-weight:bold; font-size: 1.1rem;">Next ⟶</a>
        </div>
      `;
    } else {
      // Basic fallback if no style="card"
      el.innerHTML = `
        <p><a href="${prev}">Prev</a> | <a href="${view}">View Ring</a> | <a href="${next}">Next</a></p>
      `;
    }
  });
});
