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

    result = findGetParameter("mess");
    if (result === "uploadsuccess") {
        window.alert("Your FPftI was uploaded successfully!");
    } else if (result === "notitle") {
        window.alert("Your FPftI must have the title");
    } else if (result === "nofpfti") {
        window.alert("Your FPftI must include the FPftI");
    } else if (result === "wrongext") {
        window.alert("Extension of your FPftI in not allowed");
    } else if (result === "nofpfti") {
        window.alert("Your FPftI must include the FPftI");
    } else if (result === "uploaderror") {
        window.alert("Some error has occured during the upload");
    } else if (result === "toobig") {
        window.alert("Your FPftI is greater than 10MB. We don't have enough money for this kind of luxury");
    } else if (result === "registrationsuccess") {
        window.alert("Your account was registered successfully. Now try to login in!");
    } else if (result === "passwordthesame") {
        window.alert("Repeat password doesn't match to Password");
    } else if (result === "formnotfilled") {
        window.alert("Too less information provided");
    } else if (result === "tooshort") {
        window.alert("Provided login or password is too short");
    } else if (result === "wronglogpass") {
        window.alert("Provided login or password is wrong");
    } else if (result === "loginsuccess") {
        window.alert("Logged in successfully!");
    } else if (result === "error") {
        window.alert("Some other error has occured");
    }
});