function alerta()
{
    alert("Versão Beta 0.1. Aviso: O uso excessivo pode causar demissão!");
    document.getElementById("teste").classList.add("esconder");
}

function gerardica()
{
    let desculpaaleatoria = document.getElementById("desculpaaleatoria");
    desculpaaleatoria.textContent = "Dica: Culpe sempre o transporte público. Ninguém discute com o metrô.";
}

function personalizardesculpa()
{
    let nomechefe = document.getElementById("nomechefe").value;
    alert("Querido(a) " + nomechefe + ", o pneu do ônibus furou na Via Expressa! Tive que empurrar!");
}

function calcularstress()
{
    let minutos = Number(document.getElementById("minutos").value);
    let notastress = Number(document.getElementById("notastress").value);
    alert("Seu atraso equivale a " + minutos*notastress + " unidades de estresse acumulado do seu superior.");
}

function mostrarcomoagir()
{
    let stresscalculado = Number(document.getElementById("stresscalculado").value);

    if (stresscalculado <= 100)
    {
        document.getElementById("comoagir").innerText = "Comece a trabalhar e evite contato visual.";
    } 
    else if  (stresscalculado < 300)
    {
        document.getElementById("comoagir").innerText = "Prepare-se para um sermão...";
    }
    else 
    {
        document.getElementById("comoagir").innerText = "Procure um novo emprego!";
   
    }
}

let conteudooriginalbackup = document.getElementById('conteudomain').innerHTML;

function acionarpanico()
{
    const main = document.getElementById('conteudomain');

    conteudooriginalbackup = main.innerHTML;

    main.classList.add('panicoativo');

    main.innerHTML = `
        <h1 class="textoemergencia">FUJA IMEDIATAMENTE!!!</h1>
        <br><button class="botao" onclick="restaurarpagina()">ALARME FALSO! Volte ao trabalho criativo de desculpas.</button>
    `
}
function restaurarpagina()
{
    const main = document.getElementById('conteudomain');

    main.innerHTML = conteudooriginalbackup;
    main.classList.remove('panicoativo');
}
