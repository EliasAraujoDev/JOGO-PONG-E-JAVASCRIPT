//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 1;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 589;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0
let pontosDoPonente = 0


//Sons DO Jogo
let raquetada;
let ponto;
let trilha;



function setup() {
    createCanvas(600, 400);
    trilha.loop()
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    //verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar()
    marcaPonto()



}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento,
        raqueteAltura);
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento &&
        yBolinha - raio < yRaquete + raqueteAltura &&
        yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura,
        xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play()
    }
}

function movimentaRaqueteOponente() {
    if (keyIsDown(87)) {
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)) {
        yRaqueteOponente += 10;
    }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER)
    textSize(16);
    fill(color(255, 140, 0))
    rect(130, 10, 40, 20)
    rect(430, 10, 40, 20)
    fill(255)
    text(meusPontos, 150, 26)
    text(pontosDoPonente, 450, 26)
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play()
    };
    if (xBolinha < 10) {
        pontosDoPonente += 1
        ponto.play()
    };
}

function preload() {
    trilha = loadSound("./mp3/trilha.mp3");
    ponto = loadSound("./mp3/ponto.mp3");
    raquetada = loadSound("./mp3/raquetada.mp3");

}