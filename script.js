const produtos = [
  {
    produto: "mouse",
    src: "https://tse3.mm.bing.net/th/id/OIP.3rlO2nKgQRUVW8zR6i-SiAHaHa?pid=Api&P=0&h=180",
    preco: "R$ 9,99",
    id: 1,
  },
  {
    produto: "teclado",
    src: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/reuxysnw/file.png",
    preco: "R$ 29,90",
    id: 2,
  },
  {
    produto: "notebook",
    src: "https://netshopinformatica.com.br/uploads/product_commerce/products/4891/image/aapkd24053001utpf76-821d3e.jpg",
    preco: "R$ 2,000",
    id: 3,
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
    divVitrine.classList.add(".card-produto");

    divVitrine.innerHTML = `
    <div class="grid-produtos">
    <h3>${item.produto}</h3>
    </div>
    `;

    vitrine.appendChild(divVitrine);
  });
}

renderizarVitrine();
