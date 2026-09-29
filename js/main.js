"use strict";
const picker = document.querySelector(".component-picker");
if (picker)
  picker.addEventListener("submit", (event) => {
    event.preventDefault();
    const destination = picker.querySelector("select").value;
    if (destination) window.location.assign(destination);
  });
const compact = window.matchMedia("(max-width: 1000px)");
for (const tablist of document.querySelectorAll('[role="tablist"]')) {
  tablist.setAttribute("aria-label", "Documentação do componente");
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  let selected = 0;
  const entries = tabs.map((tab, index) => {
    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    const heading = document.createElement("h2");
    heading.className = "accordion-heading";
    const button = document.createElement("button");
    button.type = "button";
    button.id = `${tab.id}-accordion`;
    button.className = "accordion-trigger";
    button.setAttribute("aria-controls", panel.id);
    button.append(document.createTextNode(tab.textContent.trim()));
    const icon = document.createElement("span");
    icon.className = "material-icons";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "expand_more";
    button.append(icon);
    heading.append(button);
    panel.before(heading);
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
      if (open) selected = index;
    });
    tab.addEventListener("click", () => {
      selected = index;
      render();
    });
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        selected = next;
        render();
        tabs[next].focus();
      }
    });
    return { tab, panel, heading, button };
  });
  function render() {
    const active = document.activeElement;
    tablist.hidden = compact.matches;
    entries.forEach(({ tab, panel, heading, button }, index) => {
      const open = index === selected;
      heading.hidden = !compact.matches;
      tab.setAttribute("aria-selected", String(open));
      tab.tabIndex = open ? 0 : -1;
      button.setAttribute("aria-expanded", String(open));
      panel.hidden = !open;
      panel.setAttribute("role", compact.matches ? "region" : "tabpanel");
      panel.setAttribute(
        "aria-labelledby",
        compact.matches ? button.id : tab.id,
      );
      if (compact.matches) panel.removeAttribute("tabindex");
      else panel.tabIndex = 0;
      panel.classList.toggle("accordion-panel", compact.matches);
      if (compact.matches && active === tab) button.focus();
      if (!compact.matches && active === button) tab.focus();
    });
  }
  function openLinkedPanel() {
    const index = entries.findIndex(
      ({ panel }) => `#${panel.id}` === window.location.hash,
    );
    if (index < 0) return;
    selected = index;
    render();
    const { panel } = entries[index];
    panel.tabIndex = -1;
    panel.focus({ preventScroll: true });
    panel.scrollIntoView({ block: "start" });
  }
  document.querySelectorAll(".reference-shortcut a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.location.hash !== link.hash)
        history.pushState(null, "", link.hash);
      openLinkedPanel();
    });
  });
  window.addEventListener("hashchange", openLinkedPanel);
  compact.addEventListener("change", render);
  render();
  if (window.location.hash) openLinkedPanel();
}
const menu = document.querySelector(".menu-panel");
if (menu) {
  const toggle = document.querySelector(".menu-toggle");
  const close = document.querySelector(".menu-close");
  const backdrop = document.createElement("button");
  backdrop.className = "menu-backdrop";
  backdrop.tabIndex = -1;
  backdrop.setAttribute("aria-label", "Fechar índice de componentes");
  backdrop.hidden = true;
  document.body.append(backdrop);
  let opened = false;
  function setOpen(value, restore = true) {
    opened = value;
    menu.hidden = compact.matches && !value;
    toggle.setAttribute("aria-expanded", String(value));
    backdrop.hidden = !value;
    document.body.classList.toggle("menu-open", value);
    if (value) close.focus();
    else if (restore) toggle.focus();
  }
  function layout() {
    const wasOpen = opened;
    setOpen(false, false);
    toggle.hidden = !compact.matches;
    close.hidden = !compact.matches;
    if (compact.matches) {
      menu.setAttribute("role", "dialog");
      menu.setAttribute("aria-modal", "true");
      menu.setAttribute("aria-label", "Índice de componentes");
    } else {
      menu.removeAttribute("role");
      menu.removeAttribute("aria-modal");
      menu.removeAttribute("aria-label");
    }
    if (wasOpen && !compact.matches)
      menu.querySelector("a[aria-current]")?.focus();
  }
  toggle.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  backdrop.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event) => {
    if (!opened) return;
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
    if (event.key === "Tab") {
      const elements = Array.from(
        menu.querySelectorAll("button:not([hidden]), a[href]"),
      );
      const first = elements[0],
        last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  compact.addEventListener("change", layout);
  layout();
}

// No celular e tablet, cada categoria pode ser expandida independentemente.
for (const [index, category] of [
  ...document.querySelectorAll(".home-page .category"),
].entries()) {
  const heading = category.querySelector("h3");
  const list = category.querySelector("ul");
  const categoryIcon = category.querySelector(".category-icon");
  const label = document.createElement("span");
  label.textContent = heading.textContent;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "category-toggle";
  list.id = `category-items-${index + 1}`;
  button.setAttribute("aria-controls", list.id);
  button.append(document.createTextNode(heading.textContent));
  const icon = document.createElement("span");
  icon.className = "material-icons";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "expand_more";
  icon.classList.add("category-chevron");
  button.prepend(categoryIcon);
  button.append(icon);
  heading.replaceChildren(label, button);
  let expanded = false;
  function updateCategory() {
    const focused = document.activeElement;
    if (compact.matches && !expanded && list.contains(focused)) expanded = true;
    if (compact.matches) button.prepend(categoryIcon);
    else category.prepend(categoryIcon);
    button.hidden = !compact.matches;
    label.hidden = compact.matches;
    list.hidden = compact.matches && !expanded;
    button.setAttribute("aria-expanded", String(expanded));
    category.classList.toggle("category-accordion", compact.matches);
    if (!compact.matches && focused === button) {
      heading.tabIndex = -1;
      heading.focus();
    }
  }
  button.addEventListener("click", () => {
    expanded = !expanded;
    updateCategory();
  });
  compact.addEventListener("change", updateCategory);
  updateCategory();
}

// Keep answers available when JavaScript is unavailable.
for (const trigger of document.querySelectorAll(".faq-trigger")) {
  const answer = document.getElementById(trigger.getAttribute("aria-controls"));
  const icon = trigger.querySelector(".material-icons");
  trigger.setAttribute("aria-expanded", "false");
  answer.hidden = true;
  icon.textContent = "add";
  trigger.addEventListener("click", () => {
    const expanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", String(expanded));
    answer.hidden = !expanded;
    icon.textContent = expanded ? "remove" : "add";
  });
}
