const openModelButtons = document.querySelectorAll('[data-model-target]');
const closeModelButtons = document.querySelectorAll('[data-close-button]');


const overlay = document.getElementById('overlay');

openModelButtons.forEach(button => {
  button.addEventListener('click', ()=>{
    const model = document.querySelector(button.dataset.modelTarget);
    openModel(model);
  })
});


closeModelButtons.forEach(button => {
  button.addEventListener('click', ()=> {
    const model = button.closest('.model');
    closeModel(model);
  })
});

overlay.addEventListener('click',()=> {
  const models = document.querySelectorAll('.model');
  models.forEach(model => {
    closeModel(model);
  });

})


function openModel(model){
  if(model == null) return
  model.classList.add('active')
  overlay.classList.add('active');
}
function closeModel(model){
  if(model == null) return
  model.classList.remove('active')
  overlay.classList.remove('active');
}
