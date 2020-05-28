let result = 0;
let valorA = 0;
let valorB = 0;
let valorC = 0;

let buttonCalcular = null;
let buttonLimpar = null;
let tabResolutionn = null;
let msg = "";

let result1 = 0;
let result2 = 0;

let delta = 0;
let raizDelta = 0;
let raizIncompletaTipoC = 0;

window.addEventListener("load", () => {
  valorA = document.querySelector("#valorA");
  valorB = document.querySelector("#valorB");
  valorC = document.querySelector("#valorC");

  buttonCalcular = document.querySelector("#button");
  buttonLimpar = document.querySelector("#limpar");
  tabResolutionn = document.querySelector("#tabResolutionn");

  buttonLimpar.addEventListener("click", () => {
    inputClear();
  });

  start();
});

function inputClear() {
  resolutionn.innerHTML = `<h4>No calculate value</h4>`;
  tabResolutionn.innerHTML = ``;

  document.getElementById("valorA").value = "";
  document.getElementById("valorB").value = "";
  document.getElementById("valorC").value = "";
}

function start() {
  buttonCalcular.addEventListener("click", () => {
    render();
  });
}

function render() {
  if (verificarValorA() && verificarDelta()) {
    atribuirValor();
    calcular();
    resolutionComplet();
  } else {
    resolutionImpossibilit();
  }
}

function verificarDelta() {
  delta = valorB.value ** 2 - 4 * valorA.value * valorC.value;

  if (delta > 0 || delta == 0) {
    if (delta > 0) {
      msg = "Two solutions to the equation";
    }

    if (delta === 0) {
      msg = "The solutions to the equation are repeated";
    }
    return true;
  } else if (delta < 0) {
    msg = "no real value is admitted";
    return false;
  }
}

function atribuirValor() {
  valorA = valorA.value;
  valorB = valorB.value;
  valorC = valorC.value;

  raizDelta = Math.sqrt(delta);
  raizIncompletaTipoC = Math.sqrt((-1 * valorC) / valorA);
}

function verificarValorA() {
  if (valorA != 0) {
    return true;
  } else {
    return false;
  }
}

function calcular() {
  if (valorA != 0 && valorB != 0 && valorC != 0) {
    calcularCompleta();
  }

  if (valorC == 0) {
    calcularIncompletaTipoC();
  }

  if (valorB == 0) {
    calcularIncompletaTipoB();
  }
}

function calcularCompleta() {
  result1 = (-1 * valorB + raizDelta) / (2 * valorA);
  result2 = (-1 * valorB - raizDelta) / (2 * valorA);
}

function calcularIncompletaTipoC() {
  result1 = 0;
  result2 = (-1 * valorB) / valorA;
}

function calcularIncompletaTipoB() {
  result1 = -1 * raizIncompletaTipoC;
  result2 = raizIncompletaTipoC;
}

function resolutionComplet() {
  resolutionn.innerHTML = `Equation result`;
  let resolutionsHTML = "<div>";

  const resolutionnHTML = `          
                <div class='result'>

                    <li>Value of A = ${valorA}</li>
                    <li>Value of B = ${valorB}</li>
                    <li>Value of C = ${valorC}</li>
                    <li>=====================</li>
                    <li>${msg}</li>                    
                    <li>x' = ${result1}</li>
                    <li>x'' = ${result2}</li>

                </div>
            </div>`;

  resolutionsHTML += resolutionnHTML;

  tabResolutionn.innerHTML = resolutionsHTML;
}

function resolutionImpossibilit() {
  resolutionn.innerHTML = `Equation result`;
  let resolutionsHTML = "<div>";

  const resolutionnHTML = `          
            <div class='result' >
                <li>Value of A = <span>${valorA.value}</li>
                <li>Value of B = ${valorB.value}</li>
                <li>Value of C = ${valorC.value}</li>
                <li>=====================</li>
                <li>For delta = ${delta} ${msg}</li>
            </div>
        </div>`;

  resolutionsHTML += resolutionnHTML;

  tabResolutionn.innerHTML = resolutionsHTML;
}
