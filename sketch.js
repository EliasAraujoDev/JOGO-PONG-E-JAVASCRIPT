let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// Variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAutura = 90

function setup() {
    createCanvas(600, 400);
};



function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostrarRaquete();
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
}


function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
};

function movimentaBolinha() {
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
};

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadexBolinha *= -1;
    };

    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeyBolinha *= -1;
    };
};


function mostrarRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAutura)
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    };

    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    };
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento &&
        yBolinha - raio < yRaquete + raqueteAutura &&
        yBolinha + raio > yRaquete) {

        velocidadexBolinha *= -1;
    };
}