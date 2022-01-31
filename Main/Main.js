

function togglebtn() {
    var btn = document.getElementById("toggle")

    if (btn.className == "toggle-on")
    {
        btn.className = "toggle-off"
        btn.innerHTML = "off"
    }
    else{
        btn.className = "toggle-on"
        btn.innerHTML = "on"
    }
}