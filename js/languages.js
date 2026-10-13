"use strict";

// Native forms support navigation without JavaScript. The submit handler also retains the current section and query.
for (const button of document.querySelectorAll("button[data-language]")) {
  button.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const destination = new URL(button.dataset.url, window.location.href);
    destination.search = window.location.search;
    destination.hash = window.location.hash;
    const domains = [
      "",
      window.location.hostname,
      `.${window.location.hostname}`,
    ];
    const paths = [
      "/",
      ...window.location.pathname
        .split("/")
        .filter(Boolean)
        .map((_, index, parts) => `/${parts.slice(0, index + 1).join("/")}`),
    ];
    for (const domain of domains)
      for (const path of paths)
        document.cookie = `googtrans=; Max-Age=0; path=${path}${domain ? `; domain=${domain}` : ""}`;
    window.location.assign(destination.href);
  });
}

// Static preview hosts may not support .htaccess. Production redirects happen on the server.
if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  const home = document.querySelector('link[hreflang="x-default"]');
  if (home) {
    const destination = new URL(home.href);
    window.location.replace(
      destination.pathname + window.location.search + window.location.hash,
    );
  }
}
