const nomeTimeA = prompt('Digite o nome do time A')
const nomeTimeB = prompt('Digite o nome do time B')

const nomeA_HTML = document.getElementById('nomeTimeA');
const nomeB_HTML = document.getElementById('nomeTimeB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');


nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;
let arraydepontosA = [];
let arraydepontosB = [];
let totaldepontosA = 0;
let totaldepontosB = 0;

pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;


pontoA_HTML.addEventListener('click', function(){
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarfimdoset();
});

pontoB_HTML.addEventListener('click', function(){
    pontoB= pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarfimdoset();
});

function verificarfimdoset() {
    if (pontoA >= 21 && pontoA - pontoB >= 2){
        alert (`${nomeTimeA} venceu o set.`)
        setA = setA + 1; //soma um ao valor anterior do set
        setA_HTML.innerText = setA; //exibir na tela
        salvarEzerarplacardosetanterior();
        verificarfimdojogo();
    }
    if(pontoB >= 21 && pontoB - pontoA >= 2){
        alert (`${nomeTimeB} venceu o set.`)
        setB = setB + 1;
        setB_HTML.innerText = setB;
        salvarEzerarplacardosetanterior();
        verificarfimdojogo();  
    }

}

function verificarfimdojogo() {
    if (setA == 2) {
        //timeA ganhou o jogo
        for (let item of arraydepontosA){
            totaldepontosA = totaldepontosA + item;
        }
        alert (`${nomeTimeA} venceu o jogo! Total de ${totaldepontosA} pontos!`)
    
    }
    if (setB == 2){
        //timeB ganhou o jogo
        for (let item of arraydepontosB){
            totaldepontosB = totaldepontosB + item;
        }
        alert (`${nomeTimeB} venceu o jogo! Total de ${totaldepontosB} pontos!`)

    }
}

function salvarEzerarplacardosetanterior() {
      //salvar a pontuação do set nos arrays
      arraydepontosA.push(pontoA);
      arraydepontosB.push(pontoB);
      //zerar pontuação do set
      pontoA = 0;
      pontoB = 0;
      //atualizar na tela
      pontoA_HTML.innerText = pontoA
      pontoB_HTML.innerText = pontoB
}