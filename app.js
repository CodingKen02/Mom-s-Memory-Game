// Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

// Link text
playerLivesCount.textContent = playerLives;

//We generate the object
const getData = () => [
  { imgSrc: "./images/airplane.jpg", id: 1, name: "airplane" },
  { imgSrc: "./images/bday.jpg", id: 2, name: "bday" },
  { imgSrc: "./images/whiteshirts.jpg", id: 3, name: "white shirts" },
  { imgSrc: "./images/biloxi.jpg", id: 4, name: "biloxi" },
  { imgSrc: "./images/cocoa.jpg", id: 5, name: "cocoa" },
  { imgSrc: "./images/meandmom.jpg", id: 6, name: "me and mom" },
  { imgSrc: "./images/redshirts.jpg", id: 7, name: "red shirts" },
  { imgSrc: "./images/toby.jpg", id: 8, name: "toby" },
  { imgSrc: "./images/airplane.jpg", id: 9, name: "airplane" },
  { imgSrc: "./images/bday.jpg", id: 10, name: "bday" },
  { imgSrc: "./images/whiteshirts.jpg", id: 11, name: "white shirts" },
  { imgSrc: "./images/biloxi.jpg", id: 12, name: "biloxi" },
  { imgSrc: "./images/cocoa.jpg", id: 13, name: "cocoa" },
  { imgSrc: "./images/meandmom.jpg", id: 14, name: "me and mom" },
  { imgSrc: "./images/redshirts.jpg", id: 15, name: "red shirts" },
  { imgSrc: "./images/toby.jpg", id: 16, name: "toby" },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};


  // Check Cards
  const checkCards = (e) => {
      console.log(e);
      const clickedCard = e.target;
      clickedCard.classList.add("flipped");
      const flippedCards = document.querySelectorAll(".flipped");
      const toggleCard = document.querySelectorAll(".toggleCard");
      console.log(flippedCards);
      // Logic
      if(flippedCards.length === 2){
          if(
            flippedCards[0].getAttribute("name") === 
            flippedCards[1].getAttribute("name")
            ){
              console.log("match");
              flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
              });

          } else{
              console.log("wrong");
              flippedCards.forEach((card) => {
                  card.classList.remove("flipped");
                  setTimeout(() => card.classList.remove("toggleCard"), 1000);
              });
              playerLives--;
              playerLivesCount.textContent = playerLives;
              if(playerLives === 0){
                  restart("Try Again! If it's hard, let me know!");
              }
          }
      }
      // Run a check to see if you won
      if(toggleCard.length === 16){
          restart("Happy Mother's Day, Mom! Thank you for all you have done for me and my sister. I know I have been a handful lately, so I want to apologize again for the ache I have caused you and the family. I care dearly about you guys, especially you. You have always been there for me, depsite the ups and downs, and even whereabouts. You have never given up on us. I hope in the future I can return the favor and love back as well as you, Mom. To the world you may just be a person, but to me you are the world. I love you, Mom. I hope you are having a great day too <3 I always try to keep that beautiful smile on your face :) - P.S. I know this is not materialistic, but I wanted to do something different for you. I hope you like it ;) I had so much debugging to do!");
      }
  };
  

// Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");

        // randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
        
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();