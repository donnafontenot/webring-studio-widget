async function renderWebring(container, jsonPath, style) {
  const res = await fetch(jsonPath);
  const data = await res.json();

  const { name, slug, color, sites } = data;
  const currentIndex = 0;

  const wrapper = document.createElement('div');
  wrapper.className = `webring-container webring-style-${style}`;
  wrapper.style.setProperty('--ring-color', color || '#6c4eb6');

  const title = document.createElement('div');
  title.className = 'webring-title';
  title.textContent = name || 'Webring';
  wrapper.appendChild(title);

  const nav = document.createElement('div');
  nav.className = 'webring-nav';
  const prev = document.createElement('a');
  const next = document.createElement('a');

  prev.href = sites[(currentIndex - 1 + sites.length) % sites.length].url;
  prev.textContent = '← Previous';
  next.href = sites[(currentIndex + 1) % sites.length].url;
  next.textContent = 'Next →';

  nav.appendChild(prev);
  nav.appendChild(next);
  wrapper.appendChild(nav);

  if (style !== 'compact') {
    const links = document.createElement('div');
    links.className = 'webring-links';

    const view = document.createElement('a');
    view.href = `https://webringstudio.com/rings/${slug}`;
    view.textContent = 'View Ring';

    const join = document.createElement('a');
    join.href = `https://webringstudio.com/rings/${slug}#join`;
    join.textContent = 'Join Ring';

    links.appendChild(view);
    links.appendChild(join);
    wrapper.appendChild(links);
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
