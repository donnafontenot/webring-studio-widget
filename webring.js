async function renderWebring(container, jsonPath, style) {
  const res = await fetch(jsonPath);
  const data = await res.json();

  const { name, slug, color, sites } = data;

  const wrapper = document.createElement('div');
  wrapper.style.setProperty('--ring-color', color || '#6c4eb6');

  if (style === 'compact') {
    wrapper.className = 'webring-compact';
    wrapper.innerHTML = `
      <div class="webring-title">${name}</div>
      <a href="https://webringstudio.com/rings/${slug}" class="webring-link">View Webring</a>
    `;
  } else if (style === 'card') {
    wrapper.className = 'webring-card';
    wrapper.innerHTML = `
      <div class="webring-card-header">
        <div class="webring-avatar"></div>
        <div>
          <div class="webring-title">${name}</div>
          <div class="webring-subtext">${slug}</div>
        </div>
      </div>
      <div class="webring-card-buttons">
        <a href="https://webringstudio.com/rings/${slug}" class="webring-btn view">View</a>
        <a href="https://webringstudio.com/rings/${slug}#join" class="webring-btn join">Join</a>
      </div>
    `;
  } else if (style === 'minimal') {
    wrapper.className = 'webring-minimal';
    wrapper.innerHTML = `
      <div class="webring-pill">🟣 ${name} (${sites.length})</div>
    `;
  }

  container.appendChild(wrapper);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-webring-json]').forEach(el => {
    const json = el.getAttribute('data-webring-json');
    const style = el.getAttribute('data-webring-style') || 'compact';
    renderWebring(el, json, style);
  });
});
