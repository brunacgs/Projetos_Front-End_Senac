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

function acionarpanico()
{
    const corpo = document.body;
    const main = document.getElementById('conteudoprincipal');

    corpo.classList.add('panicoativo');

    main.innerHTML = `
        <div class="emergencia">
            <p class= "textograve">FUJA IMEDIATAMENTE!"</P>
            <br>
            <button class="botaosalvar" onclick="restaurarpagina()">ALARME FALSO! VOLTAR.</buton>
        </div>
    `;
}

function restaurarpagina()
{
    const corpo = document.body;
    const main = document.getElementById('conteudoprincipal');

    corpo.classList.remove('panicoativo');

    main.innerHTML = `
        <p>Volte ao trabalho criativo de desculpas.</p>
        <br>
        <button onclick="acionarpanico">BOTÃO DE PÂNICO!</button>
    `;
}
