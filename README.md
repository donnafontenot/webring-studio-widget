# 🌐 Open Source Webring Widget

This is a lightweight, forkable webring widget for the indie web.

## 🔧 How to Use
1. Clone or download this repo
2. Edit `ring.json` to list your sites
3. Upload the files to your own host (Netlify, GitHub Pages, etc.)
4. Add this to your site:

```html
<link rel="stylesheet" href="style.css">
<script src="webring-embed.js" async></script>
<div data-webring-json="ring.json" data-webring-style="compact" data-webring-color="#6c4eb6"></div>
```

## 🎨 Available Styles
Use `data-webring-style` to choose from:
- `compact` (default): simple list of links
- `card`: boxed layout with title, description, and buttons
- `minimal`: pill-style single-line badge

Customize colors using `data-webring-color`.

## 🛠 Example Config
```html
<div 
  data-webring-json="ring.json" 
  data-webring-style="card" 
  data-webring-color="#ff6b9d">
</div>
```

## ✅ No backend required. No tracking. No gatekeeping.
Just good old-fashioned mutual linking.

## 🖤 Built in the spirit of the indie web.
Fork it, remix it, make it yours.
