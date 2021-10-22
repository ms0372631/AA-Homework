document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("mycanvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(275, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(310, 75);
    ctx.arc(275, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(265, 65);
    ctx.arc(260, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(295, 65);
    ctx.arc(290, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
});