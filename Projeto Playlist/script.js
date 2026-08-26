let musicas = [
    'Duality',
    'Chop Suey',
    'Radioactive',
    'Killing in the name',
    'Creep',
    'Man in the box',
    'Psycho',
    'Come as you are',
    'One step closer',
    'Másacara',
    'Boa esperança',
    'A procura da batida perfeita',
    'Inquilino da dor',
    'Plágio',
    'Alto da colina',
    'Desabafo',
    'Bluesman',
    'Latinoamérica',
    'Tití me preguntó',
    'Fous seasons',
    'Man! I feel like a woman',
    'Ovelha negra',
    'Poeira',
    'Andei só',
    'Bang',
    'Cerol na mão',
    'Ocean',
    'Dançarina'
]

let inputmusica = document.getElementById('inputmusica').value;

function addmusica()
{
    musicas.push('inputmusica');
    document.getElementById("saida").innerText = "A música " + inputmusica + " foi adicionada à playlist."
}

function verificar()
{    
    if (musicas.includes('inputmusica')){
    document.getElementById("saida").innerText = "Música já adicionada a playlist";
    }
    else{
    document.getElementById("saida").innerText = "Música não encontrada na playlist";
    }
}

function posicao()
{
    let posicao = musicas.indexOf('inputmusica');
    document.getElementById("saida").innerText = "A música " + inputmusica + " está na posição " + posição + " da playlist."
}

function remover()
{

}










