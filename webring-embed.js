(function() {
  const widgets = document.querySelectorAll('[data-webring-json]');
  widgets.forEach(widgetDiv => {
    const jsonPath = widgetDiv.getAttribute('data-webring-json');
    const style = widgetDiv.getAttribute('data-webring-style') || 'compact';
    const color = widgetDiv.getAttribute('data-webring-color') || '#6c4eb6';
    const currentUrl = widgetDiv.getAttribute('data-webring-current');

    fetch(jsonPath)
      .then(res => res.json())
      .then(data => {
        if (!data.sites || !Array.isArray(data.sites)) return;

        let container = document.createElement('div');
        container.className = `webring-widget webring-${style}`;
        container.style.border = `2px solid ${color}`;

        if (style === 'compact') {
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

        } else if (style === 'card') {
          const title = document.createElement('h3');
          title.textContent = 'Webring';
          const desc = document.createElement('p');
          desc.textContent = `${data.sites.length} members`;

          const btns = document.createElement('div');
          btns.className = 'buttons';
          const viewBtn = document.createElement('a');
          viewBtn.href = '#';
          viewBtn.textContent = 'View';
          const joinBtn = document.createElement('a');
          joinBtn.href = '#';
          joinBtn.textContent = 'Join';
          btns.appendChild(viewBtn);
          btns.appendChild(joinBtn);

          container.appendChild(title);
          container.appendChild(desc);
          container.appendChild(btns);

        } else if (style === 'minimal') {
          const link = document.createElement('a');
          link.href = '#';
          link.textContent = `Webring (${data.sites.length})`;
          container.appendChild(link);

        } else if (style === 'loop' && currentUrl) {
          const index = data.sites.findIndex(site => site.url === currentUrl);
          if (index !== -1) {
            const prev = data.sites[(index - 1 + data.sites.length) % data.sites.length];
            const next = data.sites[(index + 1) % data.sites.length];

            const nav = document.createElement('div');
            nav.className = 'webring-loop-nav';

            const prevLink = document.createElement('a');
            prevLink.href = prev.url;
            prevLink.textContent = '← Previous';
            prevLink.style.marginRight = '1em';

            const nextLink = document.createElement('a');
            nextLink.href = next.url;
            nextLink.textContent = 'Next →';

            nav.appendChild(prevLink);
            nav.appendChild(nextLink);
            container.appendChild(nav);
          }
        }

        widgetDiv.appendChild(container);
      });
  });
})();
