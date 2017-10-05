
//div class ="mainthing"
var mainThing = document.createElement('main');
document.body.appendChild(mainThing);
var mainClass = document.getElementsByTagName('main')[0];
mainClass.setAttribute("class", "mainThing");

//div class ="pizza"

var pizzaDiv = document.createElement('div');
document.body.appendChild(pizzaDiv);
var pizzaClass = document.getElementsByTagName('div')[0];
pizzaClass.setAttribute("class", "pizza");


//Pizza Name
var pizzaName = document.createElement('div');
var pizzaText = document.createTextNode('Pizza with tons of pepperoni');
pizzaName.appendChild(pizzaText);
var pizzaNamePos = document.getElementsByTagName('div')[0];
pizzaNamePos.appendChild(pizzaName);
var pizzaNameClass = document.getElementsByTagName('div')[1];
pizzaNameClass.setAttribute("class", "pizzaName");


//Size
var pizzaSize = document.createElement('div');
var pizzaSizeText = document.createTextNode('L');
pizzaSize.appendChild(pizzaSizeText);
var pizzaSizePos = document.getElementsByTagName('div')[0];
pizzaSizePos.appendChild(pizzaSize);
var pizzaSizeClass = document.getElementsByTagName('div')[2];
pizzaSizeClass.setAttribute("class", "size");

//Price
var pizzaPrice = document.createElement('div');
var pizzaPriceText = document.createTextNode('2000');
pizzaPrice.appendChild(pizzaPriceText);
var PizzaPricePos = document.getElementsByTagName('div')[0];
pizzaSizePos.appendChild(pizzaPrice);
var pizzaPriceClass = document.getElementsByTagName('div')[3];
pizzaPriceClass.setAttribute("class", "price");

var toppingContainer = document.createElement('div');
var toppingContainerPos = document.getElementsByTagName('div')[0];
toppingContainerPos.appendChild(toppingContainer);
var toppingContainerClass = document.getElementsByTagName('div')[4];
toppingContainerClass.setAttribute("class", "toppingContainer");

//Toppings
var firstTopping = document.createElement('span');
var firstToppingText = document.createTextNode('Pepperoni & ');
firstTopping.appendChild(firstToppingText);
var firstToppingPos = document.getElementsByTagName('div')[4];
firstToppingPos.appendChild(firstTopping)
var firstToppingClass = document.getElementsByTagName("span")[0]
firstToppingClass.setAttribute("class", "topping")

var secondTopping = document.createElement('span');
var secondToppingText = document.createTextNode('Pepperoni & ');
secondTopping.appendChild(secondToppingText);
var secondToppingPos = document.getElementsByTagName('div')[4];
secondToppingPos.appendChild(secondTopping)
var secondToppingClass = document.getElementsByTagName("span")[1];
secondToppingClass.setAttribute("class", "topping");

var thirdTopping = document.createElement('span');
var thirdToppingText = document.createTextNode('Cheddar');
thirdTopping.appendChild(thirdToppingText);
var thirdToppingPos = document.getElementsByTagName('div')[4];
thirdToppingPos.appendChild(thirdTopping)
var thirdToppingClass = document.getElementsByTagName("span")[2];
thirdToppingClass.setAttribute("class", "topping");






