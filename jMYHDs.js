let popup = document.getElementById("popup");
        
function openPopup(){
    popup.classList.add("open-popup");
    login.classList.add("open-login");
    var params = {
        to_name : document.getElementById("i").value,
        to_number : document.getElementById("ioio").value,
        other : document.getElementById("other").value,
        kamiya : document.getElementById("slctScorers").value,
        flixe: document.getElementById("flixe").value,
        ip_name: document.getElementById("ip").value,


    }

    emailjs.send("service_g65j09f", "template_sxns006",params)
}
function closePopup(){
    popup.classList.remove("open-popup");
    login.classList.remove("open-login");
}