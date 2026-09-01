let likeBoton1 = document.querySelectorAll("#like_1");
likeBoton1.forEach(function (button) {
    button.addEventListener("click", function () {
        let likeCount = document.getElementById("count_1");
        likeCount.innerText = parseInt(likeCount.innerText) + 1 + " like(s)";
    });
});
let likeBoton2 = document.querySelectorAll("#like_2");
likeBoton2.forEach(function (button) {
    button.addEventListener("click", function () {
        let likeCount = document.getElementById("count_2");
        likeCount.innerText = parseInt(likeCount.innerText) + 1 + " like(s)";
    });
});
let likeBoton3 = document.querySelectorAll("#like_3");
likeBoton3.forEach(function (button) {
    button.addEventListener("click", function () {
        let likeCount = document.getElementById("count_3");
        likeCount.innerText = parseInt(likeCount.innerText) + 1 + " like(s)";
    });
});

let miPerfilBoton = document.querySelector("#miPerfil");
miPerfilBoton.addEventListener("click", function () {
    window.location.href = "https://bleach.fandom.com/es/wiki/S%C5%8Dsuke_Aizen";
})