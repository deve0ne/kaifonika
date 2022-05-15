let el = document.getElementById("menu-button");

el.addEventListener("click", function () {
    let el = document.getElementById("menu-icon");
    const navPanel = document.getElementById("expanded-nav");

    if (el.className === "icon inactive") {
        el.className = "icon active";
        el.style.cssText = "mask-image: url(../media/menuCancel.svg);";
        navPanel.style.cssText = "display: block; width: 100%;"
    } else {
        el.className = "icon inactive";
        navPanel.style.cssText = "display: none; width: max-content;";
        el.style.cssText = "mask-image: url(../media/menu.svg);";
    }
});