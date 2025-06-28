fetch('ring.json')
  .then(response => response.json())
  .then(data => {
    const color = data.color || '#f472b6';
    document.documentElement.style.setProperty('--ring-color', color);
    document.querySelectorAll('.widget').forEach(widget => {
      widget.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.sites.length} members</p>
        <div class="button-group">
          <a class="button button-solid" href="#">View</a>
          <a class="button button-outline" href="#">Join</a>
        </div>
        <p><a href="#">← Previous</a> <a href="#">Next →</a></p>
      `;
    });
  });