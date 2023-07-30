function showdiv1() {
    document.getElementById("tthree").style.display = "none";
    document.getElementById("ttwo").style.display = "none";
    document.getElementById("oone").style.display = "block";
    document.getElementById("checkmark-one").style.display="block";
    document.getElementById("checkmark-two").style.display="none";
    document.getElementById("checkmark-three").style.display="none";
}
function showdiv2() {
    document.getElementById("tthree").style.display = "none";
    document.getElementById("oone").style.display = "none";
    document.getElementById("ttwo").style.display = "block";
    document.getElementById("checkmark-one").style.display="none";
    document.getElementById("checkmark-two").style.display="block";
    document.getElementById("checkmark-three").style.display="none";
}
function showdiv3() {
    document.getElementById("oone").style.display = "none";
    document.getElementById("ttwo").style.display = "none";
    document.getElementById("tthree").style.display = "block";
    document.getElementById("checkmark-one").style.display="none";
    document.getElementById("checkmark-two").style.display="none";
    document.getElementById("checkmark-three").style.display="block";
}
