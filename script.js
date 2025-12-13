let generatedLink = "";


function openWhatsApp() {
const code = document.getElementById("code").value.trim();
const number = document.getElementById("number").value.trim();
const message = document.getElementById("message").value.trim();


if (!number) {
alert("Please enter phone number");
return;
}


const text = encodeURIComponent(message);
generatedLink = `https://wa.me/${code}${number}?text=${text}`;


window.open(generatedLink, "_blank");
document.getElementById("result").innerText = "WhatsApp opened successfully";
}


function copyLink(){
if(!generatedLink){
alert("Generate link first");
return;
}


navigator.clipboard.writeText(generatedLink);
document.getElementById("result").innerText = "Link copied to clipboard";
}