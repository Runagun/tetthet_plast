

//VARIABLER ----------------------------------------------------- VARIABLER
let xAkse = 480;
let yAkse = 320;
let variantX = 67;
let variantY = 180;
let tetthet=1;

//BILDER -------------------------------------------------------- BILDER
let bakgrunn;
let vannTrans;
let bunn;
let plastbit;
let snakkeboble1;
let snakkeboble2;
let snakkeboble3;

//SETUP --------------------------------------------------------- SETUP
function setup() {
   createCanvas(800, 600);
   background(100);
   
//BILDER2 ------------------------------------------------------- BILDER2
bakgrunn = loadImage('bakgrunn1.png');
plastbit = loadImage('plastbit.png');
snakkeboble1 = loadImage("snakkeboble1.png");
snakkeboble2 = loadImage("https://runagun.github.io/tetthet_plast/snakkeboble2.png");
snakkeboble3 = loadImage("https://runagun.github.io/tetthet_plast/snakkeboble3.png");
}

//DRAW ---------------------------------------------------------- DRAW
function draw() {
   background(bakgrunn);
   tekst();
   pressKey();
   if (tetthet < 1) { flytOpp(); }
   if (tetthet > 1) { synkNed(); }
   plasten();
   vann();
   fill(255,0,0);
   ellipse(400,300,50,50);
}

//VANN ---------------------------------------------------------- VANN
function vann() {
   tint(255,230);
}

//PLASTEN ------------------------------------------------------ PLASTEN
function plasten() {
   fill(255,0,0); 
   image (plastbit, xAkse-50, yAkse);
   snakkeboble3.resize(200, 50);
   image(snakkeboble3, xAkse+47, yAkse-13);
   textSize(15);
   fill(0);
   text("Tetthet: ", xAkse+83, yAkse+15);
   text(tetthet, xAkse+138, yAkse+15); 
}

//FLYTOPP ------------------------------------------------------- FLYTOPP
function flytOpp() {
   fill(155,0,200);
   if(yAkse > 160) {
      yAkse = yAkse - 1;}
}
   
//SYNKNED ------------------------------------------------------- SYNKNED
function synkNed() {
    fill(155,0,200);
    if(yAkse < 580) {
       yAkse = yAkse + 1;}
}
      
      
//PRESSKEY ------------------------------------------------------ PRESSKEY
function pressKey() {
    if(keyPressed == true) {
    if(key == '0') {tetthet = 1;}
    if(key == '1') {tetthet = 0.9;}
    if(key == '2') {tetthet = 1.3;}
    if(key == '3') {tetthet = 0.92;}
    if(key == '4') {tetthet = 1.07;}
    if(key == '5') {tetthet = 1.5;}
    if(key == '6') {tetthet = 1.3;}
   }  
}

//TEKST --------------------------------------------------------- TEKST
function tekst() {
   snakkeboble1.resize(290, 400);
   image(snakkeboble1,20,100);
   //snakkeboble2.resize(60, 50);
   //image(snakkeboble2, 0, 0);
   
   textSize(15);
   fill(0);
   text("Her er en plastbit.", variantX, variantY+160); 
   text("Velg en polymer og se", variantX, variantY+180); 
   text("om jeg flyter eller synker.", variantX, variantY+200); 

  text("0. Nullstill", variantX, variantY); 
   text("1. PP, polypropanol", variantX, variantY+20); 
   text("2. PVC, polyvinylklorid", variantX, variantY+40);
   text("3. PE, polyeten", variantX, variantY+60); 
   text("4. PS, polystyren", variantX, variantY+80); 
   text("5. Melamin, melamine", variantX, variantY+100); 
   text("6. PET, polyetylentereftalat", variantX, variantY+120); 
}
      
