/* 1. Bættu við class eigindið með heitinu active sem hefur litinn rauðann við div element sem geymir Jón
með aðferðinni .setAttribute() í JavaScript. Ath rauði liturinn á að sjást með CSS (0.5%) */
var changeAttribute = document.querySelector("div");
changeAttribute.setAttribute("class", "active");

//2. Fjarlægðu html elementið sem geymir Karen með JavaScript (0.5%)
var selectedEl = document.getElementsByTagName('div')[2];
var containerEl = selectedEl.parentNode;
containerEl.removeChild(selectedEl);

//3. Notaðu replace() aðferðina til að breyta textanum Gunnar í Jakob (1%)

var lastItem = document.getElementsByTagName('div')[1];
var text = lastItem.textContent;
//console.log(text);
text = text.replace('Gunnar', 'Jakob');
lastItem.textContent = text;

/*Notaðu .getAttribute() aðferðina til að velja class sem þú bjóst til í dæmi 1 og birtu nafnið Jón í html
skrá. (1%)*/
var firstItem = document.getElementsByTagName("div")[0].getAttribute('active');
console.log(firstItem); //Kemur út sem null, why?
document.getElementsByTagName("div")[2].innerHTML = firstItem;

/*5. Hver er munurinn á að nota innerHtml() og DOM Manipulation ( t.d. createElement,
createTextNode, appendChild)? (0.5%)*/

/*Munurinn er sá að innerHTML gefur manni kost á því að gera mikið með litlum kóða. Það getur verið fljótlegra að nota
innerHTML ef maður þarf að búa til mikið af elementum á síðu. Það er einnig fljótleg leið til þess að eyða út innihaldi úr elementum.
Ókosturinn er sá að það er lítið sem ekkert öryggi í því að nota innerHTML og opnar fyrir marga möguleika
til þess að meðhöndla nodes sem nota þessa aðferð. Það getur einnig verið erfitt að aðgreina elemnt sem maður vill meðhöndla
í stærra umhverfi. Það getur líka haft slæm áhrif á event handlera.

DOM Manipulation gefur manni kost á að meðhöndla domið á mjög fínann hátt, þeas ef eitthvað element er með marga undirliggjandi siblings.
Það hefur engin áhrif á event handlera.

6. Notaðu DOM manipulation í JavaScript til að búa til eftirfarandi html og skilaðu því í html
skrá. (3%)

Í sér skrá


7. Hvað er XSS (cross-site scripting attacks) og hvernig tengist JavaScript því? Hvað þurfum við að
varast. (0.5%)

XSS er þegar einstaklingur keyrir skriftu í gegnum t.d. innerHTML. Það gerir honum kleift að fá aðgang að DOM'inu,
auk þess að sjá cookies á tiltekinni vefsíðu og sjá session tokens. Hann gæti búið til prófíla, bætt við commentum osfv.

Það sem hægt er að gera til þess að koma í veg fyrir þetta er að nota gott validation á öllum formum þar sem notandi gæti mögulega gert input
á síðuna. Sleppa því algjörlega að nota innerHTML, nota front end validation í formum og server validation á back end til þess að koma í veg fyrir allt saman.

*/












