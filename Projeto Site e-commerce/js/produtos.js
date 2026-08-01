fetch('produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const container = document.getElementById('lista-produtos');
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'card-produto';
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="valor">R$ ${produto.valor.toFixed(2)}</span>
        <button>Comprar</button>
      `;
      container.appendChild(card);
    });
  })
  .catch(erro => console.error('Erro ao carregar produtos:', erro));