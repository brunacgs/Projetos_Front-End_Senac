function vercatalogo()
{

}

function ativarpromo()
{
    let cliente = document.getElementById("cliente").value;

    document.getElementById("saudacoes").textContent =
        "Saudações " + cliente + "!!! Veja nossos destaques da semana e ganhe *10% de desconto na compra de 3 produtos*!";

    document.getElementById("preco1").textContent = 
        "De R$120,00";
    preco1.style.textDecoration = "line-through";
    preco1.style.color = "#7C3AED";
    preco1.style.fontSize = "18px";    
    document.getElementById("preco11").textContent = 
        "por R$108,00";
    preco11.style.color = "#22D3EE";
    preco11.style.fontSize = "22px";
    
        document.getElementById("preco2").textContent = 
        "De R$150,00";
    preco2.style.textDecoration = "line-through";
    preco2.style.color = "#7C3AED";
    preco2.style.fontSize = "18px";
    document.getElementById("preco21").textContent = 
        "por R$135,00";
    preco21.style.color = "#22D3EE";
    preco21.style.fontSize = "22px";
  
        document.getElementById("preco3").textContent = 
        "De R$220,00";
    preco3.style.textDecoration = "line-through";
    preco3.style.color = "#7C3AED";
    preco3.style.fontSize = "18px";
    document.getElementById("preco31").textContent = 
        "por R$198,00";
    preco31.style.color = "#22D3EE";
    preco31.style.fontSize = "22px";
}
