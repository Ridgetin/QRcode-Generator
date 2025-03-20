let imgBox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrimage");
let inputText = document.querySelector("input");
let generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", generateQR);

function generateQR() {
    if(inputText.value.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText.value)}`;
        imgBox.classList.add("show-img");
    } else {
        inputText.classList.add("error");
        setTimeout(() => {
            inputText.classList.remove("error");
        }, 1000);
    }
}