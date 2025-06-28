# Webring Studio Widget

This is the open source, self-hostable widget that powers rings created on [Webring Studio](https://webringstudio.com) — but you don't have to use the app to enjoy it.

## 🔗 What It Does

This widget displays the **loop** of your webring:
- Shows the current site title
- Links to **previous**, **next**, and **ring home page**
- Styled with one of three themes: `compact`, `card`, or `minimal`
- Reads data from a simple `ring.json` file

## ✨ Quick Demo

See it live:  
[https://donnafontenot.github.io/webring-studio-widget/](https://donnafontenot.github.io/webring-studio-widget/)

## 🧩 How It Works

The widget reads data from a small `ring.json` file:

{
  "name": "Sites of Donna Fontenot",
  "slug": "donna",
  "sites": [
    { "title": "Donna Fontenot", "url": "https://donnafontenot.com" },
    { "title": "The Grave Blogger", "url": "https://thegraveblogger.com" },
    { "title": "Revenge Begins With Insanity", "url": "https://revengebeginswithinsanity.com" }
  ]
}

Each widget block is rendered based on a `<div>` tag like this:

<div data-webring-json="ring.json"
     data-webring-style="card"
     data-webring-color="#ff6b9d"></div>

The style and color can be customized per embed.

## 🎨 Themes

- **Compact** – Tight layout for footers and narrow spaces  
- **Card** – App-style layout with full styling and buttons  
- **Minimal** – Just the links. Small and simple.

## ⚙️ Hosting

1. Fork this repo  
2. Customize your `ring.json`  
3. Upload the files to your server  
4. Embed the widget on your site (or everyone in the ring can use the same code)

## 🔒 No App Required — But It Helps

You can use this standalone… or use [Webring Studio](https://webringstudio.com) to:
- Create and moderate your ring with a dashboard  
- Style your ring visually  
- Let others request to join your ring  
- Appear in the public directory  
- Eventually: get RSS discovery tools and analytics

## 🧠 Why Open Source?

This project belongs to the Indie Web. That means:
- You control your ring, forever  
- You can fork and remix this however you like  
- The widget still works even if Webring Studio disappears  
- Community > Lock-in

---

Questions? Feedback? Want to contribute?  
Feel free to fork, remix, and share.

Made with love (and loops) by [@donnafontenot](https://donnafontenot.com)
