const tarefasInput= document.querySelector('.tarefas-input');
const tarefasHora = document.querySelector('.tarefas-horario');
const tarefasButton= document.querySelector('.tarefas-button');
const tarefasLista= document.querySelector('.lista-tarefas');
const tarefasFiltro = document.querySelector('.filtro');

tarefasButton.addEventListener('click', addTarefa);
tarefasLista.addEventListener('click', deleteCheck);
tarefasFiltro.addEventListener('click', filtro);

function addTarefa(event){
  event.preventDefault();
  
  const tarefaDiv= document.createElement('div');
  tarefaDiv.classList.add('tarefa');
  
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText= tarefasInput.value;
  novaTarefa.classList.add('tarefa-it');
  tarefaDiv.appendChild(novaTarefa);
  
  const horario = document.createElement('li');
  horario.innerText= tarefasHora.value;
  horario.classList.add('tarefa-it');
  tarefaDiv.appendChild(horario);
  
  const completoButton = document.createElement('button');
  completoButton.innerHTML = '<i class="fas fa-check"></i>';
  completoButton.classList.add('completo-bt');
  tarefaDiv.appendChild(completoButton);
  
  const deletarButton = document.createElement('button');
  deletarButton.innerHTML = '<i class="fas fa-trash"></i>';
  deletarButton.classList.add('delet-bt');
  tarefaDiv.appendChild(deletarButton);
  
  tarefasLista.appendChild(tarefaDiv);
  
  tarefasInput.value = "";
  tarefasHora.value = "";
}

function deleteCheck(e){
  const item= e.target;
  
  if(item.classList[0] === 'delet-bt'){
    const tarefa = item.parentElement;
    tarefa.remove();
  }
  
  if(item.classList[0] === 'completo-bt'){
    const tarefa = item.parentElement;
    tarefa.classList.toggle('completo');
  }
}

function filtro(e){
  const tarefas= tarefasLista.childNodes;
  tarefas.forEach(function(tarefa){
    switch(e.target.value){
      case "feitas":
        if(tarefa.classList.contains('completo-bt')){
          tarefa.style.display="flex";
        } else{
          tarefa.style.display="none";
        } 
        break;
        
      case "a-fazer":
        if(!tarefa.classList.contains('feitas')){
          tarefa.style.display="flex";
        }else{
          tarefa.style.display="none";
        } 
        break;
        
      case "canceladas": 
        if(tarefa.classList.contains('delet-bt')){
          tarefa.style.display="flex";
        }else{
          tarefa.style.display="none";
        } 
        break;
    }
  });
}
