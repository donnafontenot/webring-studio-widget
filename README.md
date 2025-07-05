# Webring Studio Widget – Open Source Version

A lightweight, self-hostable webring widget that works with just a JSON configuration file.  
This version is built for maximum compatibility on shared hosts and legacy environments.

---

## ✅ Quick Start

1. Upload all files to your server (`example.html`, `webring-widget.js`, `webring-config.json`)
2. Edit `webring-config.json` with your ring's sites
3. Add this to your site:

```html
<div id="webring-container"></div>

<script src="webring-widget.js"></script>
<script>
  fetch('webring-config.json')
    .then(res => res.json())
    .then(config => {
      new WebringWidget(document.getElementById('webring-container'), config);
    });
</script>
```

---

## 🔧 Configuration

Edit `webring-config.json` to include your ring details:

```json
{
  "ringName": "Your Ring Name",
  "style": "minimal",
  "sites": [
    {
      "name": "Site Name",
      "url": "https://example.com",
      "description": "Optional"
    }
  ]
}
```

💡 The only required fields are "ringName" and "sites".

---

## 💜 Design

This version uses a single built-in **"minimal"** style:
- Lavender border
- Simple inline navigation: `← Prev • Random • Next →`
- Opens links in new tabs
- No dependencies, no frameworks, no build tools

---

## ✨ Self-Hosting Benefits

- **No third-party scripts**
- **Works on shared hosting and older environments**
- **No tracking or analytics**
- **Easily customized by editing just one file**

---

## 🧰 Support

This is the open-source self-hosted version.  
For a managed version with directories, moderation, and extra features, visit [Webring Studio](https://webringstudio.com).

---

## 📄 License

MIT License – free for personal and commercial use.
