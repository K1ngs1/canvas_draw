canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){
    document.getElementById("color").value;
    console.log(color);

    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;

    console.log("X = ", mousex, "Y = ", mousey);
    circle(mousex, mousey);
}

function circle(mousex, mousey){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mousex, mousey, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clear_area(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
