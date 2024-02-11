var mainbody = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

mainbody.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
});