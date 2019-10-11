
// var mode = "";
// var switcher;

window.onload = () => {
    var modeCookie = getCookie("mode");
    if (modeCookie != "") {
        switchdarkmode();
    }
}

function switchdarkmode() {
    var darkmode = document.getElementById("switchToggle");
    var body = document.getElementById("mainbody");
    var nav = document.getElementById("mainnav");
    var containerbody = document.getElementById("containerbody");
    if (darkmode.checked == true) {
        console.log("darkmode");
        setCookie("mode", "dark", 5);
        body.style.backgroundColor = "#333333";
        nav.style.backgroundColor = "#1a0d00";
        containerbody.style.backgroundColor = "#333333";
        containerbody.style.color = "#f9f9f9";
    } else {
        console.log("normal");
        setCookie("mode", "normal", 5);
        body.style.backgroundColor = "#f9f9f9";
        nav.style.backgroundColor = "#f9f9f9";
        containerbody.style.backgroundColor = "#f9f9f9";
        containerbody.style.color = "#333333"
    }
}

function checkMode() {

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); 
        }
    }
    return "";
}