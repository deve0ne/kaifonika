function createCookie() {
    const visitedPages = [["index.html", 0], ["catalog.html", 0], ["constructor.html", 0], ["about.html", 0]];
    document.cookie = JSON.stringify(visitedPages) + "; max-age=259200";
}

function modifyCookie() {
    const currPagePath = window.location.pathname;
    const currPageName = currPagePath.split("/").pop();

    let visitedPages = document.cookie.replace("; max-age=259200", "");
    visitedPages = JSON.parse(visitedPages);

    for (let i = 0; i < 4; i++) {
        if (visitedPages[i][0] === currPageName) {
            visitedPages[i][1] += 1;
            break;
        }
    }

    document.cookie = JSON.stringify(visitedPages) + "; max-age=259200";
}

function readCookie() {
    alert(document.cookie);
}

if (document.cookie == null)
    createCookie();

modifyCookie();