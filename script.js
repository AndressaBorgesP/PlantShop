const filterBtn = document.querySelectorAll(".filter-btn button");
const filterCards = document.querySelectorAll(".filter-cards .card");

const cardsFilter = e =>{
   document.querySelector(".active").classList.remove("active");
   e.target.classList.add("active");
   
   filterCards.forEach(card => {
      card.classList.add("hide");

      if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide")
       }
      

    });
};


filterBtn.forEach(button => button.addEventListener("click", cardsFilter))