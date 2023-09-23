let favorites = [
    {
        "section" : "Beliebt",
        "picture" : "./icons/heart-red.svg"
    },
    {
        "name" : "Bauernsalat",
        "note" : "mit Weichkäse, Oliven und Olivenöl",
        "price": "8.00",
        "amount" : "0"
    },
    {
        "name" : "PizzaMargherita",
        "note" : "vegetarisch",
        "price": "7.00",
        "amount" : "0"
    },
    {
        "name" : "Panna Cotta",
        "note" : "nach Art des Hauses",
        "price": "5.10",
        "amount" : "0"
    }
];

let salads = [
    {
        "section" : "Salate",
        "picture" : "./img/salad.jpg"
    },
    {
        "name" : "Grüner Salat",
        "note" : "Wahl aus: Klein oder Groß",
        "price": "4.70",
        "amount" : "0"
    },
    {
        "name" : "Bauernsalat",
        "note" : "mit Weichkäse, Oliven und Olivenöl",
        "price": "8.00",
        "amount" : "0"
    },
    {
        "name" : "Tomaten mit Mozzarella",
        "note" : "Wahl aus: mit Essig-Öl-Dressing, mit Joghurt-Dressing oder ohne Dressing",
        "price": "8.00",
        "amount" : "0"
    }
];

let pizzas = [
    {
        "section" : "Pizzas",
        "picture" : "./img/pizza.jpg"
    },
    {
        "name" : "Pizza Margherita",
        "note" : "vegetarisch",
        "price": "7.00",
        "amount" : "0"
    },
    {
        "name" : "Pizza Salami",
        "note" : "mit Rindersalami",
        "price": "9.20",
        "amount" : "0"
    },
    {
        "name" : "Pizza Diavolo",
        "note" : "mit Speck, Zwiebeln und Knoblauch",
        "price": "10.50",
        "amount" : "0"
    }
];

let desserts = [
    {
        "section" : "Desserts",
        "picture" : "./img/dessert.jpg"
    },
    {
        "name" : "Tiramisu della Casa",
        "note" : "nach Art des Hauses",
        "price": "5.70",
        "amount" : "0"
    },
    {
        "name" : "Panna Cotta",
        "note" : "nach Art des Hauses",
        "price": "5.10",
        "amount" : "0"
    },
];
let shoppingCart = 0;
let like = false;
let sum = 0;

function render(){

    document.getElementById("dishesMainContainer").innerHTML = ``;
   
    // Add the Dishes 
    addFavoritesToMainContainer();
    addSaladsToMainContainer();
    addPizzasToMainContainer();
    addDessertsToMainContainer();
    window.scrollTo(0,0);
}

function addFavoritesToMainContainer(){
     document.getElementById("dishesMainContainer").innerHTML += `<h2 id="beliebt">${favorites[0].section}<img src="${favorites[0].picture}" alt=""></h2>`;

     for(let i = 1; i < favorites.length; i++){
        fillDishesMainContainer(favorites, i);
     }
}

function addSaladsToMainContainer(){
     document.getElementById("dishesMainContainer").innerHTML += `
     <img src="${salads[0].picture}" alt="Salat" class="dishesPicture" id="salate">
     <h2>${salads[0].section}</h2>`;
 
    for(let i = 1; i < salads.length; i++){
        fillDishesMainContainer(salads, i);
 }
}

function addPizzasToMainContainer(){
    document.getElementById("dishesMainContainer").innerHTML += `
          <img src="${pizzas[0].picture}" alt="Pizza" class="dishesPicture" id="pizzen">
          <h2>${pizzas[0].section}</h2>`;
      
      for(let i = 1; i < pizzas.length; i++){
        fillDishesMainContainer(pizzas, i);
      }
}

function addDessertsToMainContainer(){
    document.getElementById("dishesMainContainer").innerHTML += `
    <img src="${desserts[0].picture}" alt="Dessert" class="dishesPicture" id="desserts">
    <h2>${desserts[0].section}</h2>`;

for(let i = 1; i < desserts.length; i++){
    fillDishesMainContainer(desserts, i);
}
}

function addToShoppingCart(){
    let total = 0;
    sum = 0;
    document.getElementById("shoppingCartContainer").innerHTML = "";
    
    for(let i = 1; i < salads.length; i++){
        if(salads[i].amount != 0){
            let price = parseFloat(salads[i].price);
            price = Math.fround(price * salads[i].amount);

            document.getElementById("shoppingCartContainer").innerHTML += `
                <div class="shoppingCartDishContainer">
                    <h3>${salads[i].amount} ${salads[i].name} ${price.toFixed(2)} €</h3>
                    <div class="shoppingCartDishAddRemove">
                        <img src="./icons/add.svg" alt="" class="imgDishesSingleContainer" onclick="addDish(salads, ${i})">
                        <img src="./icons/remove.svg" alt="" class="imgDishesSingleContainer" onclick="removeDish(salads, ${i})">
                    </div>
                </div>`;
                sum += price;
        }
    }

    for(let i = 1; i < pizzas.length; i++){
        if(pizzas[i].amount != 0){
            let price = parseFloat(pizzas[i].price);
            price = Math.fround(price * pizzas[i].amount);

            document.getElementById("shoppingCartContainer").innerHTML += `
                <div class="shoppingCartDishContainer">
                    <h3>${pizzas[i].amount} ${pizzas[i].name} ${price.toFixed(2)} €</h3>
                    <div>
                        <img src="./icons/add.svg" alt="" class="imgDishesSingleContainer" onclick="addDish(pizzas, ${i})">
                        <img src="./icons/remove.svg" alt="" class="imgDishesSingleContainer" onclick="removeDish(pizzas, ${i})">
                    </div>
                </div>`;
                sum += price;
        }
    }

    for(let i = 1; i < desserts.length; i++){
        if(desserts[i].amount != 0){
            let price = parseFloat(desserts[i].price);
            price = Math.fround(price * desserts[i].amount);

            document.getElementById("shoppingCartContainer").innerHTML += `
                <div class="shoppingCartDishContainer">
                    <h3>${desserts[i].amount} ${desserts[i].name} ${price.toFixed(2)} €</h3>
                    <div>
                        <img src="./icons/add.svg" alt="" class="imgDishesSingleContainer" onclick="addDish(desserts, ${i})">
                        <img src="./icons/remove.svg" alt="" class="imgDishesSingleContainer" onclick="removeDish(desserts, ${i})">
                    </div>
                </div>`;
                sum += price;
        }
    }

    total = parseFloat(sum + 2);

    document.getElementById("shoppingCartContainer").innerHTML +=`
    <div class="shoppingCartDishContainer">
        <h4>Zwischensumme ${sum.toFixed(2)}</h4>
        <h4>Lieferkosten 2,00 €<h4>
        <h4>Gesamt ${total.toFixed(2)} €<h4>
    </div>`;
    
}


function addDish(arrayName, index){
    if(arrayName == favorites){
        switch(index){
            case 1:
                salads[2].amount = parseInt(salads[2].amount) + 1; 
                break;
            case 2:
                pizzas[1].amount = parseInt(pizzas[1].amount) + 1; 
                break;
            case 3:
                desserts[2].amount = parseInt(desserts[2].amount) + 1;    
        }
    }
    else{
        arrayName[index].amount = parseInt(arrayName[index].amount) + 1;
    }
    addToShoppingCart();
    shoppingCart++;
}

function removeDish(arrayName, index){
    if(arrayName == favorites){
        switch(index){
            case 1:
                salads[1].amount = parseInt(salads[1].amount) - 1; 
                break;
            case 2:
                pizzas[1].amount = parseInt(pizzas[1].amount) - 1; 
                break;
            case 3:
                desserts[1].amount = parseInt(desserts[1].amount) - 1;    
        }
    }
    else{
        arrayName[index].amount = parseInt(arrayName[index].amount) - 1;
    }
    
    addToShoppingCart();
    shoppingCart--;
    shoppingCartIsEmpty();
}

function shoppingCartIsEmpty(){
    if(shoppingCart < 1){
        document.getElementById("shoppingCartContainer").innerHTML = `
            <img src="./icons/shopping_bag.svg" alt="" id="shoppingCartShoppingBagImg">
            <h1>Fülle deinen Warenkorb</h1>
            <p>Füge einige leckere Gerichte aus der</p>
            <p>Speichsekarte hinzu und bestelle dein Essen.</p>`;
    }
}

function switchShippingTypeButtons(side){
    if(side == "right"){
        document.getElementById("shippingTypeButtonRight").style.backgroundColor ="white";
        document.getElementById("shippingTypeButtonLeft").style.backgroundColor ="#e8e9eb";
    }
    else{
        document.getElementById("shippingTypeButtonLeft").style.backgroundColor ="white";
        document.getElementById("shippingTypeButtonRight").style.backgroundColor ="#e8e9eb";
    }
}

function likeDisslike(){
    if(like == false){
        document.getElementById("likeButton").src = "./icons/heart-red.svg";
        like = true;
    }
    else{
        document.getElementById("likeButton").src = "./icons/heart.svg";
        like = false;
    }
}

function closeMobileShoppingCart(){
    document.getElementById("rightSideContainer").style.visibility = "collapse";
    document.getElementById("closeButtonShoppinCart").style.visibility = "collapse";
    document.getElementById("mobileShoppingCartButton").style.visibility = "visible";
}

function openMobileShoppingCart(){
    document.getElementById("rightSideContainer").style.visibility = "visible";
    document.getElementById("closeButtonShoppinCart").style.visibility = "visible";
    document.getElementById("mobileShoppingCartButton").style.visibility = "collapse";
}

function fillDishesMainContainer(arrayName, index){
    document.getElementById("dishesMainContainer").innerHTML += `
    <div class="dishesSingleContainer">
        <div>
            <h3>${arrayName[index].name}</h3>
            <p>${arrayName[index].note}</p>
            <h3>${arrayName[index].price} €</h3>
        </div>
        <img src="./icons/add.svg" alt="add" class="imgDishesSingleContainer" id="${arrayName}${index}" onclick="addDish(${arrayName}, ${index})">
    </div>`;
}

function changeVisibility(){
    let elementIsVisible = document.getElementById("rightSideContainer").style.visibility;

    if(window.innerWidth > 721){
        document.getElementById("closeButtonShoppinCart").style.visibility = "collapse";
        document.getElementById("mobileShoppingCartButton").style.visibility = "collapse";
        document.getElementById("rightSideContainer").style.visibility = "visible";
    }
    else{
        document.getElementById("rightSideContainer").style.visibility = "collapse";
        document.getElementById("mobileShoppingCartButton").style.visibility = "visible";
    }
}

window.addEventListener('resize', changeVisibility);