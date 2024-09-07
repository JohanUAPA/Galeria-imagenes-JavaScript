const fulImagen = document.getElementById("fulImagen"),
    fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
    fulImagen.style.display = "flex";
    fulImg.src = reference;
}

function closeFulImg() {
    fulImagen.style.display = "none";
}