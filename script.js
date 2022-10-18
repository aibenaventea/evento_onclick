document.querySelector(".ctb").addEventListener("click", switchbtn);
document.querySelector(".rsec-btn").addEventListener("click", removebtn);
document.querySelector(".lsec-btn").addEventListener("click", alertbtn);

function switchbtn() {
    document.querySelector(".ctb").innerText = "Logout";
}
function removebtn() {
    document.querySelector(".rsec-btn").remove();
}
function alertbtn() {
    alert("Ninja was liked");
}