const cardsContainer = document.querySelector(".cards_container");
let globalStore = [];

const generateNewCard = (taskData) => `<div class="col-md-6 col-lg-4" id=${taskData.id}>
          
<div class="card-header d-flex justify-content-end gap-2">
  <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
  <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this, arguments)"><i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this, arguments)"></i></button>
</div>
<img src=${taskData.imageUrl}/>
<div class="card-body">
  <h5 class="card-title">${taskData.taskTitle}</h5>
  <p class="card-text">${taskData.taskDescription}</p>
  <a href="#" class="btn btn-primary">${taskData.taskType}</a>
</div>
<div class="card-footer d-flex justify-content-end">
  <button type="button" class="btn btn-outline-primary">Open Task</button>
</div>
</div>
`;

const LoadInitialCardData = () => {

  const getCardData = localStorage.getItem("tasky");

  const {cards} = JSON.parse(getCardData);
  cards.map((cardObject) =>
  {cardsContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
  globalStore.push(cardObject);
})
};


 const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //This is for unique number
        imageUrl: document.getElementById("imageUrl").value,
        taskTitle: document.getElementById("taskTitle").value,
        taskType: document.getElementById("taskType").value,
        taskDescription: document.getElementById("taskDescription").value,
    };





 cardsContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

 globalStore.push(taskData);

 localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));
};

// delete feature

const deleteCard = (event) => {

  event = window.event;

  const targetID = event.target.id;
  const tagname = event.target.tagName;

  globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
  localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));


  if(tagname === "BUTTON"){
    return cardsContainer.removeChild(event.target.parentNode.parentNode);
  }
  else{
    return cardsContainer.removeChild(event.target.parentNode.parentNode.parentNode);
  } 
};
