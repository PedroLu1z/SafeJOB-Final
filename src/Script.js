function backToTop(){
    document.documentElement.scrollTo = 0;
}

const active = document.querySelector("#concordo-maximo");

active.addEventListener("click", function() {
    console.log("Clicou!");
})

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}
function selecionarAba() {

    if(aba.classList.contains("selecionado")){
        return;
    }

    selecionarAba(abas)
    mostrarInformacoesDaAba(abas)
}


function scrollDown(){
    document.documentElement.scrollTo = 100;
}