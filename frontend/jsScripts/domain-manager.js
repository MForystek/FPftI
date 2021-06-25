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
    result = findGetParameter("page"); 
    if (result === null || result === "main") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/main.html");
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/login.html");
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/registration.html");
    } else if (result === "waiting") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/waiting.html");
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/add-fpfti.html");
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/sleeping-reaper.html");
    } else if (result === "top") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/main.html");
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/login.html");
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/registration.html");
    } else if (result === "profile") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/profile.html");
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/information.html");
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/add-fpfti.html");
    } else if (result === "admin") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/admin.html");
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/remove.html");
        $("#aside-second").load("https://s113.labagh.pl/frontend/aside-subdomains/deadly-reaper.html");
    } else if (result === "settings") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/settings.html");
        $("#aside-first").load("https://s113.labagh.pl/frontend/aside-subdomains/information-settings.html");
    } else if (result === "fpfti") {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/fpfti.html");
    } else {
        $("#main-content").load("https://s113.labagh.pl/frontend/main-subdomains/oops.html");
    }
});