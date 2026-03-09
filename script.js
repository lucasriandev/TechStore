const produtos = [
  {
    produto: "Mouse Ergonomico",
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1705310440-61QNE816-HL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    preco: 9.99,
    id: 1,
  },
  {
    produto: "Teclado Mecanico",
    src: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/reuxysnw/file.png",
    preco: 29.99,
    id: 2,
  },
  {
    produto: "Notebook",
    src: "https://netshopinformatica.com.br/uploads/product_commerce/products/4891/image/aapkd24053001utpf76-821d3e.jpg",
    preco: 2.199,
    id: 3,
  },
  {
    produto: "Fone Gamer",
    src: "https://static3.tcdn.com.br/img/img_prod/670412/fone_de_ouvido_headset_gamer_runmus_k1_led_rgb_preto_3849_1_2b689ab618837e504c865cff190d6b23.jpg",
    preco: 250,
    id: 4,
  },
];

const contador = document.querySelector("#contador-carrinho");
const listaCarrinho = document.querySelector("#lista-carrinho");
const vitrine = document.querySelector("#vitrine");
const valorTotal = document.querySelector("#valor-total");

const localStorageChave = "Carrinho";
let carrinho = JSON.parse(localStorage.getItem(localStorageChave)) || [];

function renderizarVitrine() {
  vitrine.innerHTML = "";
  produtos.forEach((item) => {
    const divVitrine = document.createElement("div");
    divVitrine.classList.add("card-produto");

    divVitrine.innerHTML = `
      <img src='${item.src}' alt='${item.produto}'>
      <h3>${item.produto}</h3>
      <span>R$ ${item.preco.toFixed(2)}</span>
      <button onclick="adicionarAoCarrinho(${item.id})">Comprar</button>
    `;

    vitrine.appendChild(divVitrine);
  });
}

function adicionarAoCarrinho(id) {
  const produtoEncontrado = produtos.find((p) => p.id === id);
  ("Pegue cada item (chamado aqui de p) e verifique se o id dele é igual ao id que eu estou procurando.");
  console.log(produtoEncontrado);

  if (produtoEncontrado) {
    carrinho.push(produtoEncontrado);
    localStorage.setItem(localStorageChave, JSON.stringify(carrinho));
  }
  renderizaCarrinho();
}

function renderizaCarrinho() {
  listaCarrinho.innerHTML = ``;

  contador.innerText = carrinho.length;
  console.log(contador);
  carrinho.forEach((adicionados, index) => {
    const novaDiv = document.createElement("div");
    novaDiv.classList.add("item-carrinho");
    novaDiv.innerHTML = `
     <p>${adicionados.produto}</p>
      <p> R$${adicionados.preco}</p>
      <img class="img-carrinho" src="${adicionados.src}">
    `;

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "❌";

    btnDelete.addEventListener("click", () => {
      carrinho.splice(index, 1);
      localStorage.setItem(localStorageChave, JSON.stringify(carrinho));
      renderizaCarrinho();
    });

    novaDiv.appendChild(btnDelete);
    listaCarrinho.appendChild(novaDiv);
  });
  totalCarrinho();
}

function totalCarrinho() {
  const total = carrinho.reduce((cofre, faseAtual) => {
    return cofre + faseAtual.preco;
  }, 0);
  valorTotal.innerHTML = `R$ ${total.toFixed(2)}`;
}
totalCarrinho();

renderizarVitrine();
renderizaCarrinho();
