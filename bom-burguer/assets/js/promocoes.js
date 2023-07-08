const cardsPromo = [
    {
        titulo: "Combo Double Fritas",
        descricao: "Delicioso hamburguer duplo de carne bovina com queijo reino cheddar e bacon. Acompanha batata frita, refrigerante e milkshake",
        img: "./assets/img/img-promo-dois.png",
        preco: "R$23",
        button:"Add To Cart"
     },
    {
        titulo: "Combo Triple Burger",
        descricao: "Delicioso hamburguer de carne bovina com queijo reino cheddar e bacon. Acompanha batata frita e refrigerante",
        img: "./assets/img/img-promo-um.png",
        preco: "R$28",
        button:"Add To Cart"
    },
    {
        titulo: "Combo Veggie Burger",
        descricao: "Delicioso hamburguer vegano com hamburguer vegetal de quinoa. Acompanha suco e salada de frutas",
        img: "./assets/img/img-promo-quatro.png",
        preco: "R$32",
        button:"Add To Cart"
    },
    {
        titulo: "Combo Burguer Family",
        descricao: "Combo tamanho família. Com 4 Hamburgueres, 4 batata fritas e um refrigerante 2 litros",
        img:"./assets/img/img-promo-tres.png",
        preco: "R$39",
        button:"Add To Cart"
    }
]

for (let i = 0; i < cardsPromo.length; i++){
   
    const div = document.createElement('div');
    div.classList.add("card__body");

    div.innerHTML = `
            <div class="card__content__all">
                <div class="card__img">
                    <img src=${cardsPromo[i].img}>
                </div>
                <div class="card__descricao__preco">
                    <div>
                        <h3 class="card__titulo">${cardsPromo[i].titulo}</h3>
                        <p class="card__descricao">${cardsPromo[i].descricao}</p>
                    </div>
                    <div class="preco__btn">
                        <div class="card__preco">${cardsPromo[i].preco}</div>
                        <button class="card__btn">
                            <a href="#">${cardsPromo[i].button}</a>
                        </button>
                    </div>
                </div>
            </div> 
    `    

    const section = document.getElementsByClassName('cards__promo')[0];
    section.appendChild(div)

}