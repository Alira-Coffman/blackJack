let DECK_ID ="de27sw0mzjlv";
let API_URL ="https://deckofcardsapi.com/api/deck/" + DECK_ID;
let playerHand = document.querySelector('#playerHand');
const USER_HAND = "PLAYERHAND";

$.ajaxSetup({async: false});
function newDeck() {
    $.get('https://deckofcardsapi.com/api/deck/new', function(data) {
        DECK_ID = data.deck_id;
    });

    API_URL = 'https://deckofcardsapi.com/api/deck/' + DECK_ID;
}

function shuffleDeck()
{
    let shuffleURL = API_URL + "/shuffle/";
    $.get(shuffleURL, function (data) {
        console.log(data);
        
    })
}

function drawCards(numberOfCards)
{
    let drawURL = API_URL +"/draw/?count=" + numberOfCards;
    let codes = [];
   
    $.get(drawURL, function (data) {
        for(let i = 0; i < data.cards.length; i++)
        {
            console.log(data.cards[i]);
            
            let img_element = document.createElement("img");
            img_element.src = data.cards[i].images.svg;
            console.log(img_element);
            playerHand.appendChild(img_element);
            
            console.log(data.cards[i].code)
            codes.push(data.cards[i].code);
        }
    });
    addToPile(codes);
}

function addToPile(codes)
{
    let pileURL = API_URL +"/pile/"+ USER_HAND+'/add/?cards=' +codes[0] +","+ codes[1];
    $.get(pileURL, function (data)
    {
        console.log(data);
    })
}