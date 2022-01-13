line_width=1;
var mouse_event="empty";
var width =screen.width;
var  new_height=screen.height-300;
var new_width=screen.width-70;
var last_position_of_x, last_position_of_y;


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    if (width < 992 ){
        canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden"
    }
    
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop
    }
    

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouse_event="mousedown";

}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
current_position_x=e.clientX-canvas.offsetLeft
current_position_y=e.clientY-canvas.offsetTop
if(mouse_event=="mousedown"){ 
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=line_width
    ctx.moveTo( last_position_x, last_position_y)
    ctx.lineTo (current_position_x, current_position_y)
   
    ctx.stroke();
}
last_position_x=current_position_x
last_position_y=current_position_y


}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouse_event="mouseup";

}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";

}


