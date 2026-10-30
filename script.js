
/* MENU */

function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

/* PROJECT LIST */

function showArduino(){
document.getElementById("arduino").style.display="block";
document.getElementById("nonarduino").style.display="none";
}

function showNonArduino(){
document.getElementById("nonarduino").style.display="block";
document.getElementById("arduino").style.display="none";
}

/* FAQ */

function toggleFAQ(el){
let ans=el.nextElementSibling;
ans.style.display=ans.style.display==="block"?"none":"block";
}

/* MATRIX RAIN */

const canvas=document.getElementById("matrix");
const ctx=canvas.getContext("2d");

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

const letters="01";
const fontSize=16;
const columns=canvas.width/fontSize;

const drops=[];

for(let x=0;x<columns;x++) drops[x]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(0,242,255,0.25)";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}

}

setInterval(draw,40);

/* PARTICLES */

const pcanvas=document.getElementById("particles");
const pctx=pcanvas.getContext("2d");

pcanvas.width=window.innerWidth;
pcanvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<70;i++){

particles.push({

x:Math.random()*pcanvas.width,
y:Math.random()*pcanvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)

});

}

function animateParticles(){

pctx.clearRect(0,0,pcanvas.width,pcanvas.height);

particles.forEach(p=>{

p.x+=p.dx;
p.y+=p.dy;

pctx.beginPath();
pctx.arc(p.x,p.y,p.r,0,Math.PI*2);
pctx.fillStyle="rgba(0,255,255,0.2)";
pctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();

