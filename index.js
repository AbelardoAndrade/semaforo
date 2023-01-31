const vermelho = document.getElementById("red");
const amarelo = document.getElementById("yellow");
const verde = document.getElementById("green");
const automatico = document.getElementById("automatic");
const stop = document.getElementById("stop");
const img = document.getElementById("img");
const sobre = document.getElementById("sobre");
const breve = document.getElementById("breve");
let colorIndex = 0;

function pare() {
  img.src = "./assets/vermelho.png";
}

function atencao() {
  img.src = "./assets/amarelo.png";
}

function siga() {
  img.src = "./assets/verde.png";
}

function about() {
  resultado.textContent =
    "⚠️ Este desafio foi criado através de alguns estudos baseados em JavaScript puro (Vanilla JS) e foi utilizado para aprendizado e treinamento da linguagem JavaScript. Visite meu GitHub ou o meu Portifólio para ver mais trabalhos meus! Obrigado por visitar esta página, seu apoio é muito importante⚠️!";
}

function comming() {
  resultado.textContent = "⚠️Em breve este link estará disponível!⚠️";
}

function parar () {
resultado2.textContent = "🔴 Ops! Farol vermelho! Indica que você deve parar e aguardar a luz verde! ";
}

function aguardar () {
    resultado2.textContent = "🟡 Atenção! a luz vai ficar vermelha! Indica que você deve parar e aguardar até que a luz verde apareça (Em alguns casos o amarelo pode aparecer piscando, que indica que você pode passar, mas deve ter muita atenção aos carros que cruzam nos sentidos opostos.";
    }

    function prosseguir () {
        resultado2.textContent = "🟢 Luz verde acesa! Eba! Hora de prosseguir viagem ( o verde indica que o caminho está liberado, porém, é sempre bom olhar para ambos os lados, existem muitos infratores que passam na luz vermelha e também na amarela!). ";
        }
        
    function automatizado () {
        resultado2.textContent = "🚦 Agora que você aprendeu sobre o semáforo e suas regras, não pode dar a mancada de passar na cor errada heim!🚦 Boa viagem!"
    }


const trafficLight = (event) => {
  turnOn[event.target.id]();
};

const trafficOff = (event) => {
  turnOff[event.target.id]();
};

const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

const auto = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const nullAuto = () => {
  const turnOff = ["auto"];
  turnOff[color]();
};

const turnOn = {
  red: () => (img.src = "./assets/vermelho.png"),
  yellow: () => (img.src = "./assets/amarelo.png"),
  green: () => (img.src = "./assets/verde.png"),
  automatic: () => setInterval(auto, 1200),
};

const turnOff = {
  stop: () => (img.src = "./assets/desligado.png"),
  automatic: () => clearInterval(nullAuto),
};

vermelho.addEventListener("click", pare);
vermelho.addEventListener("click", parar);

amarelo.addEventListener("click", atencao);
amarelo.addEventListener("click", aguardar);

verde.addEventListener("click", siga);
verde.addEventListener("click", prosseguir);

stop.addEventListener("click", trafficOff);
automatico.addEventListener("click", trafficLight);
automatico.addEventListener("click", automatizado);

sobre.addEventListener("click", about);
breve.addEventListener("click", comming);
