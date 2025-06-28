(function() {
  const widgetDiv = document.querySelector('[data-webring-json]');
  if (!widgetDiv) return;

  const jsonPath = widgetDiv.getAttribute('data-webring-json');
  const style = widgetDiv.getAttribute('data-webring-style') || 'compact';
  const color = widgetDiv.getAttribute('data-webring-color') || '#6c4eb6';

  fetch(jsonPath)
    .then(res => res.json())
    .then(data => {
      if (!data.sites || !Array.isArray(data.sites)) return;

      const container = document.createElement('div');
      container.className = `webring-widget webring-${style}`;
      container.style.border = `2px solid ${color}`;

      const list = document.createElement('ul');
      data.sites.forEach(site => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = site.url;
        link.textContent = site.title;
        link.target = '_blank';
        item.appendChild(link);
        list.appendChild(item);
      });

      container.appendChild(list);
      widgetDiv.appendChild(container);
    });
})();