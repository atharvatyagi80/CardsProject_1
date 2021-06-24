const cardsContainer = document.querySelector(".cards_container");
const generateNewCard = (taskData) => `<div class="col-md-6 col-lg-4" id=${taskData.id}>
          
<div class="card-header d-flex justify-content-end gap-2">
  <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
  <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
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


const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //This is for unique number
        imageUrl: document.getElementById("imageUrl").value,
        taskTitle: document.getElementById("taskTitle").value,
        taskType: document.getElementById("taskType").value,
        taskDescription: document.getElementById("taskDescription").value,
    };





 cardsContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
}; 