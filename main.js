canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    color="blue";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(220,221,40,0,360);
    ctx.stroke();

    color="black"
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(320,221,40,0,360);
    ctx.stroke();

    color="red"
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(420,221,40,0,360);
    ctx.stroke();

    color="yellow"
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(270,270,40,0,360);
    ctx.stroke();

    color="green"
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(370,270,40,0,360);
    ctx.stroke();