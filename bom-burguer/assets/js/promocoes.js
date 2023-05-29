console.log("hello word!");
let test = document.getElementsByClassName("promocoes");
console.log(test)
const arrayCards = [
    {
        promotitle: "Promoção 01",
        h3card: "Combo Ruby",
        decricao: "Delicioso hamburguer de carne bovina com queijo reino cheddar e bacon",
        imgCard: "./assets/img/img-promo-um.png",
        preco: "R$33",
        button:"Comprar"
     },
    {
        promotitle: "Promoção 01",
        h3card: "Combo Ruby",
        decricao: "Delicioso hamburguer de carne bovina com queijo reino cheddar e bacon",
        imgCard: "./assets/img/img-promo-dois.png",
        preco: "R$33",
        button: "Comprar"
    },
    {
        promotitle: "Promoção 01",
        h3card: "Combo Ruby",
        decricao: "Delicioso hamburguer de carne bovina com queijo reino cheddar e bacon",
        imgCard: "./assets/img/img-promo-um.png",
        preco: "R$33",
        button: "Comprar"
    },
    {
        promotitle: "Promoção 01",
        h3card: "Combo Ruby",
        decricao: "Delicioso hamburguer de carne bovina com queijo reino cheddar e bacon",
        imgCard:"./assets/img/img-promo-tres.png",
        preco: "R$33",
        button:"Comprar"
    }
]

for (let i = 0; i < arrayCards.length; i++){
    //criar o elemento
    let section = document.createElement("section")

    //manipular o elemnto

    section.innerHTML = `
        <section class="test">
            <div class="titulo-promocao-1">
                <h3 class="promotitle"> ${arrayCards[i].promotitle}</h3>
            </div>
            <div class="promocao">
                <div class="img-card">
                    <img src=${arrayCards[i].imgCard}>
                </div>
                <div class="card-preco">
                    <div>
                        <h3 class="h3card"> ${arrayCards[i].h3card}</h3>
                        <p class="descricao"> ${arrayCards[i].descricao} </p>
                    </div>
                    <div class="preco-compra">
                        <div class="preco"> ${arrayCards[i].preco}</div>
                        <button class="button">
                            <a href="#"> ${arrayCards[i].button}</a>
                        </button>
                    </div>
                </div>
        </section>`

    console.log(section)

    //Adicionar o elemento

    let promocoes = document.querySelector("section.promocoes")
    promocoes.appendChild(section)

}