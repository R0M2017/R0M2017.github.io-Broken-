function switchdarkmode() {
    var darkmode = document.getElementById("switchToggle");
    var body = document.getElementsByTagName("body");
    var nav = document.getElementsByTagName("nav");
    if (darkmode.checked == true) {
        console.log("darkmode");
        body.style.backgroundColor = "#333333";
        nav.style.backgroundColor = "#1a0d00";
    } else {
        console.log("normal");
        body.style.backgroundColor = "#f9f9f9";
        nav.style.backgroundColor = "#f9f9f9";
    }
}