(function () {
  const selectorsToUpdate = [
    "title",
    ".garden_layout__header",
    ".garden_layout__main",
    ".garden_layout__toc",
  ];

  let loadedPage = new URL(location);

  async function loadPage(url) {
    const res = await fetch(url);
    const data = await res.text();
    const doc = new DOMParser().parseFromString(data, "text/html");

    for (const selector of selectorsToUpdate) {
      document.querySelector(selector).innerHTML = doc.querySelector(
        selector
      ).innerHTML;
    }

    loadedPage = url;
    window.scrollTo(0, 0);
  }

  document.addEventListener("click", async (e) => {
    if (e.target.tagName !== "A") {
      return;
    }

    const url = new URL(e.target.href);

    if (
      url.origin !== location.origin ||
      !url.pathname.startsWith("/garden/") ||
      url.pathname === location.pathname
    ) {
      return;
    }

    e.preventDefault();

    await loadPage(url);

    history.pushState(null, document.querySelector("title").innerHTML, url);
  });

  window.onpopstate = async () => {
    const newUrl = new URL(location);

    if (newUrl.pathname === loadedPage.pathname) {
      return;
    }

    await loadPage(new URL(location));
  };
})();
