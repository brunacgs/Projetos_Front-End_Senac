let desculpaaleatoria = document.getElementById("desculpaaleatoria");

function alerta()
{
    alert("Versão Beta 0.1. Aviso: O uso excessivo pode causar demissão!");
}

function gerardica()
{
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
