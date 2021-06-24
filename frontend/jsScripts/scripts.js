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
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/main.html");
    } else if (result === "waiting") {
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/waiting.html");
    } else if (result === "top") {
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/top.html");
    } else if (result === "profile") {
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/profile.html");
    } else if (result === "admin") {
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/admin.html");
    } else if (result === "settings") {
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/settings.html");
    } else if (result === "fpfti") {
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/fpfti.html");
    } else {
        $("#unique-content").load("https://s113.labagh.pl/frontend/subdomains/oops.html");
    }
});