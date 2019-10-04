function switchdarkmode() {
    var darkmode = document.getElementById("switchToggle");
    var bodycolor = document.getElementById("mainbody");
    if (darkmode.checked == true) {
        console.log("darkmode");
        bodycolor.style.color = "#333333";
    } else {
        console.log("normal");
    }
}