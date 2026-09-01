const img = document.getElementById("mimg");

img.addEventListener("mouseover", function () {
    img.src = "static/images/noche.png" 
});
    
img.addEventListener("mouseout", function () {
    img.src = "static/images/campo-de-trigo-con-cipreses.png" 
});