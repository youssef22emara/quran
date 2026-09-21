async function loadComponent(id, file) {
    const container = document.getElementById(id);

    if (!container) return;

    const response = await fetch(file);
    container.innerHTML = await response.text();
}

async function loadAll() {

    await loadComponent("header-container", "components/header.html");

    await loadComponent("footer-container", "components/footer.html");

    // هنا نشغل الأكواد بعد تحميل الهيدر
    document.dispatchEvent(new Event("componentsLoaded"));
}

loadAll();

await loadComponent(
    "bottom-nav-container",
    "components/bottom-nav.html"
);