canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


var mouse_event = "empty";
var last_postition_of_x, last_postition_of_y;

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouse_event = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_postion_x = e.clientX - canvas.offsetLeft;
    current_postion_y = e.clientY - canvas.offsetTop;

    if( mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last Postition of x, and y coordinates = ");
        console.log("x = " + last_postition_of_x + "y = " + last_postition_of_y);
        ctx.moveTo(last_postition_of_x, last_postition_of_y);
        
        console.log("Currant Postition of x, and y coordinates = ");
        console.log("x = " + current_postion_x + "y = " + current_postion_y);
        ctx.moveTo(current_postion_x, current_postion_y);
        ctx.stroke();
    }

    last_postition_of_x = current_postion_x;
    last_postition_of_y = current_postion_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

function clear_area() {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}