function switchdarkmode() {
    var darkmode = document.getElementById("switchToggle");
    var bodycolor = document.getElementsByClassName("mainbody").style.color;
    if (darkmode.checked == true) {
        console.log("darkmode");
        bodycolor = "#333333";
    } else {
        console.log("normal");
    }
}