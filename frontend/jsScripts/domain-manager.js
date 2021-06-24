function findGetParameter(parameterName) {
    var result = null;
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

$(function(){
    var result = findGetParameter("page");
    if (result === null || result === "main") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/main.html");
    } else if (result === "waiting") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/waiting.html");
    } else if (result === "top") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/top.html");
    } else if (result === "profile") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/profile.html");
    } else if (result === "admin") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/admin.html");
    } else if (result === "settings") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/settings.html");
    } else if (result === "fpfti") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/fpfti.html");
    } else {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/oops.html");
    }

    result = findGetParameter("asidefirst");
    if (result === null || result === "login") {
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/login.html");
    } else if (result === "") {
        $("#aside-first").load("https://s113.labagh.pl/frontend/subdomains/add-fpfti.html");
    } else if (result === "information") {
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/information.html");
    } else if (result === "addfpfti") {
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/add-fpfti.html");
    } else if (result === "remove") {
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/remove.html");
    } else if (result === "not") {}

    result = findGetParameter("asidesecond");
    if (result === null || result === "registration") {
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/registration.html");
    } else if (result === "sleepingreaper") {
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/sleeping-reaper.html");
    } else if (result === "deadlyreaper") {
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/deadly-reaper.html");
    } else if (result === "addfpfti") {
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/add-fpfti.html");
    } else if (result === "not") {}
});