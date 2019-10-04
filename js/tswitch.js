function switchdarkmode() {
    var darkmode = document.getElementById("switchToggle");
    var body = document.getElementById("mainbody");
    var nav = document.getElementById("mainnav");
    var containerbody = document.getElementById("containerbody");
    if (darkmode.checked == true) {
        console.log("darkmode");
        body.style.backgroundColor = "#333333";
        nav.style.backgroundColor = "#1a0d00";
        containerbody.style.backgroundColor = "#333333";
        containerbody.style.color = "#f9f9f9";
    } else {
        console.log("normal");
        body.style.backgroundColor = "#f9f9f9";
        nav.style.backgroundColor = "#f9f9f9";
        containerbody.style.backgroundColor = "#f9f9f9";
        containerbody.style.color = "#333333"
    }
}