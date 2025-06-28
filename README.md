# Webring Widget Kit

This is a self-hostable webring widget. Use it to create, host, and share your own webring — no dependencies, no lock-in.

## 📦 Files

- `webring-widget.js` - Simple prev/next/view script
- `example-ring.json` - Sample ring members list
- `style.css` - Optional styles
- `demo.html` - Working example you can preview in a browser

## 🛠️ How to Use

1. Upload these files to your own website or GitHub Pages
2. Embed the widget in your site like this:

```html
<script src="webring-widget.js"></script>
<div class="webring-widget"
     data-prev="https://donnafontenot.com"
     data-next="https://foxfire.blog"
     data-view="https://shadowwhispers.com/webring.html">
</div>
```

3. Want to customize your ring? Edit the `example-ring.json` file manually.

## 💡 Tips

- You can host this anywhere: WordPress theme folder, static site, or GitHub Pages
- You can also fork this kit and adapt it to your own needs
