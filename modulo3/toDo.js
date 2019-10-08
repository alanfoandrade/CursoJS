var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; //transforma o json armazenado em array, ou inicia vazio

function renderTodo() {
  listElement.innerHTML = ''; //apaga lista da pagina em exibição antes de renderizar novamente

  for (todo of todos) {
    var pos = todos.indexOf(todo); //pega a posição do todo no array de todos
    var todoElement = document.createElement('li'); //cria novo item da lista
    var todoText = document.createTextNode(todo); //texto do novo item

    var linkText = document.createTextNode('Excluir'); //cria o texto do link
    var linkElement = document.createElement('a'); //configura o link
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); //seta posição da entrada no array para chamar a função de excluir
    linkElement.appendChild(linkText);
    linkElement.style.marginLeft = 5;

    todoElement.appendChild(todoText); //adiciona o texto do novo item da lista
    todoElement.appendChild(linkElement); //adiciona o link a cada item da lista

    listElement.appendChild(todoElement); //adiciona novo item a lista
  }
}

renderTodo(); //renderiza todos items da lista

function addTodo() {
  todos.push(inputElement.value);
  inputElement.value = '';

  saveToStorage();
  renderTodo();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1); //elimina 1 item a partir da pos

  saveToStorage();
  renderTodo();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos)); //transforma o array em json
}
