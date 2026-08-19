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

function calcularcompra()
{
    let produto = document.getElementById("produto").value;
    let qtd = Number(document.getElementById("qtd").value);

    let precocalculado;

    if (produto == "Mouse Gamer")
    {
        precocalculado = 120;
    }
    else if (produto == "Headset Gamer")
    {
        precocalculado = 220;
    }
    else if (produto == "Controle Gamer")
    {
        precocalculado = 120;
    }
    else
    {
        precocalculado = 180;
    }
   
    let precofinal = precocalculado * qtd;

    if (qtd >= 3 && precofinal >= 500)
    {
        precofinal = precofinal * 0.9;
        document.getElementById("msg1").textContent = "O valor total será de R$" + precofinal + ".";
        document.getElementById("msg1").style.color = "#E020E0";
        document.getElementById("msg2").textContent = "Desconto de 10% e frete grátis aplicados!";
        document.getElementById("msg2").style.color = "#22D3EE";
    }
    else if (qtd < 3 && precofinal >= 500)
    {
        precofinal = precofinal
        document.getElementById("msg1").textContent = "O valor total será de R$" + precofinal + ".";
        document.getElementById("msg1").style.color = "#E020E0";
        document.getElementById("msg2").textContent = "Frete grátis aplicado!";
        document.getElementById("msg2").style.color = "#22D3EE";
        
    }
    else if (qtd >= 3 && precofinal < 500)
    {
        document.getElementById("msg1").textContent = "O valor total será de R$" + precofinal + ".";
        document.getElementById("msg1").style.color = "#E020E0";
        document.getElementById("msg2").textContent = "Desconto de 10% aplicado!";
        document.getElementById("msg2").style.color = "#22D3EE";
    }
    else 
    {
        document.getElementById("msg2").textContent = "Preencha os dados para simular o valor da sua compra";
        document.getElementById("msg2").style.color = "#E020E0";
    }
 
}

function enviar()
{
    let nome = document.getElementById("nome").value;
    let msg1 = document.getElementById("msg1");
    let idade = document.getElementById("idade").value;
    let msg2 = document.getElementById("msg2");
    
    if (nome === "" || idade === "" || email === "")
    {
        msg1.textContent = "Informe seus dados antes de continuar";
        msg1.style.color = "#E020E0";
    }
    else if (idade >= 18)
    {
        msg1.textContent = "Obrigada " + nome + ", sua mensagem foi enviada";
        msg1.style.color = "#A855F7";
        msg2.textContent = "Você pode participar das promoções para maiores de 18 anos";
        msg2.style.color = "#22D3EE";
    }
    else 
    {
        msg1.textContent = "Obrigada " + nome + ", sua mensagem foi enviada";
        msg1.style.color = "#A855F7";
        msg2.textContent = "As promoções gerais continuam disponíveis para você";
        msg2.style.color = "#A855F7";
    }  
}
