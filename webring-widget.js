
function WebringWidget(container, config, currentUrl) {
  this.container = container;
  this.config = config || {};
  this.currentUrl = currentUrl || window.location.href;
  this.currentIndex = 0;
  this.totalSites = this.config.sites ? this.config.sites.length : 0;

  this.init();
}

WebringWidget.prototype.init = function () {
  if (!this.totalSites) {
    this.container.innerHTML = '<div style="padding: 12px; border: 1px solid red; color: red;">No sites configured</div>';
    return;
  }

  this.detectCurrentSite();
  this.render();
};

WebringWidget.prototype.detectCurrentSite = function () {
  if (!this.currentUrl) return;
  for (var i = 0; i < this.config.sites.length; i++) {
    var site = this.config.sites[i];
    try {
      var siteHost = new URL(site.url).hostname;
      var currentHost = new URL(this.currentUrl).hostname;
      if (siteHost === currentHost || site.url === this.currentUrl) {
        this.currentIndex = i;
        return;
      }
    } catch (e) {
      if (site.url === this.currentUrl) {
        this.currentIndex = i;
        return;
      }
    }
  }
};

WebringWidget.prototype.render = function () {
  var prevIndex = (this.currentIndex - 1 + this.totalSites) % this.totalSites;
  var nextIndex = (this.currentIndex + 1) % this.totalSites;
  var randomIndex = this.currentIndex;
  if (this.totalSites > 1) {
    do {
      randomIndex = Math.floor(Math.random() * this.totalSites);
    } while (randomIndex === this.currentIndex);
  }

  var ringName = this.config.ringName || "Webring";
  var prevUrl = this.config.sites[prevIndex].url;
  var nextUrl = this.config.sites[nextIndex].url;
  var randomUrl = this.config.sites[randomIndex].url;

  this.container.innerHTML = ''
    + '<div style="background:#fff;border:1px solid #d5b6f6;border-radius:8px;padding:10px 16px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#333;max-width:500px;margin:0 auto;">'
    + '<div style="font-size:14px;font-weight:600;margin-bottom:6px;">' + this.escapeHtml(ringName) + '</div>'
    + '<div style="font-size:14px;">'
    + '<a href="' + prevUrl + '" target="_blank" style="color:#333;text-decoration:none;" title="' + this.escapeHtml(prevUrl) + '">← Prev</a>'
    + ' <span style="color:#999;">•</span> '
    + '<a href="' + randomUrl + '" target="_blank" style="color:#333;text-decoration:none;" title="' + this.escapeHtml(randomUrl) + '">Random</a>'
    + ' <span style="color:#999;">•</span> '
    + '<a href="' + nextUrl + '" target="_blank" style="color:#333;text-decoration:none;" title="' + this.escapeHtml(nextUrl) + '">Next →</a>'
    + '</div></div>';
};

WebringWidget.prototype.escapeHtml = function (text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};
