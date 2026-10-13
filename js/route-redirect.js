"use strict";

const route = document.documentElement.dataset.routeRedirect;
if (route)
  window.location.replace(
    route + window.location.search + window.location.hash,
  );
