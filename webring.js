
fetch('ring.json')
  .then(res => res.json())
  .then(data => {
    const color = data.color || "#ccc";
    const name = data.name;
    const members = data.sites.length;

    const createEl = (type, className, innerHTML = "") => {
      const el = document.createElement(type);
      el.className = className;
      el.innerHTML = innerHTML;
      return el;
    };

    const createWidget = (styleType) => {
      const container = createEl("div", `webring-widget webring-${styleType}`);
      const title = createEl("div", "title", name);
      const count = createEl("div", "count", `${members} members`);
      const links = createEl("div", "webring-links");
      const view = createEl("a", "", "View");
      view.href = "#";
      const join = createEl("a", "", "Join");
      join.href = "#";
      links.append(view, join);

      const nav = createEl("div", "webring-links");
      const prev = createEl("a", "", "← Previous");
      prev.href = "#";
      const next = createEl("a", "", "Next →");
      next.href = "#";
      nav.append(prev, next);

      container.append(title, count, links, nav);
      return container;
    };

    document.getElementById("compact-widget").appendChild(createWidget("compact"));
    document.getElementById("card-widget").appendChild(createWidget("card"));
    document.getElementById("minimal-widget").appendChild(createWidget("minimal"));
  });
