function addCards(){
  var cards = {
    card01: {
        imagem: "./assets/img/img-burguer-um.png",
  
        footerTitulo: "Hamburguer 1",
 
         preco: "$10",
	
         buttonCard: "ADD TO CART",    
  },

  card02: {
        imagem: "./assets/img/img-burguer-dois.png",
  
        footerTitulo: "Hamburguer 2",
 
         preco: "$10",
	
         buttonCard: "ADD TO CART",    
  },

  card03: {
        imagem: "./assets/img/img-burguer-tres.png",
  
        footerTitulo: "Hamburguer 3",
 
         preco: "$10",
	
         buttonCard: "ADD TO CART", 
  },

  card04: {
        imagem: "./assets/img/img-sobremesa-milkshake.png",

        footerTitulo: "Milkshake",

        preco: "$10",

        buttonCard: "ADD TO CART", 
},

card05: {
      imagem: "./assets/img/img-sobremesa-banana-split.png",

      footerTitulo: "Banana Split",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card06: {
      imagem: "./assets/img/img-sobremesa-salada-de-fruta.png",

      footerTitulo: "Salada De Frutas",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card07: {
      imagem: "./assets/img/img-acompanhamento-batata-frita.png",

      footerTitulo: "Batata Frita",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card08: {
      imagem: "./assets/img/img-acompanhamento-nugget.png",

      footerTitulo: "Nuggets",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card09: {
      imagem: "./assets/img/img-acompanhamento-salada.png",

      footerTitulo: "Salada",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card10: {
      imagem: "./assets/img/img-bebida-refrigerante.png",

      footerTitulo: "Refrigerante",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card11: {
      imagem: "./assets/img/img-bebida-sucos.png",

      footerTitulo: "Sucos",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card12: {
      imagem: "./assets/img/img-bebida-agua.png",

      footerTitulo: "Água",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card13: {
      imagem: "./assets/img/img-combo-um.png",

      footerTitulo: "Combo Fritas",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card14: {
      imagem: "./assets/img/img-combo-dois.png",

      footerTitulo: "Combo Nuggets",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},

card15: {
      imagem: "./assets/img/img-combo-tres.png",

      footerTitulo: "Combo Duplo",

      preco: "$10",

      buttonCard: "ADD TO CART", 
},


};

var content = document.getElementById ("cardapio-content");

    for (var card in cards) {
      content.innerHTML +=
        '<div class="cardapio-item">' +
       	'<div>' +
        '<img class="imagem" src="' +
        cards[card].imagem +
        '"/>' +
        '</div>' +
        '<div class="footer-card">' +
        '<div>' +
        '<h3>' +
        cards[card].footerTitulo +
        '</h3>' +
        '</div>' +
        '<div class="preco-compra">' +
        '<div class="preco">' +
        cards[card].preco +
        '</div>' +
        '<button>' +
        '<a>' +
        cards[card].buttonCard +
        "</a>" +
        '</button>' +
        '</div>' +
        '</div>' +
        "</div>";
    }

}

addCards();