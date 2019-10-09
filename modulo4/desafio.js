function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}

checaIdade(20)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });

var listElement = document.querySelector("ul");
var btnElement = document.querySelector("button.botao");

btnElement.onclick = () => {
  listRepositories();
};

function renderRepositories(repositories) {
  listElement.innerHTML = "";

  for (repo of repositories) {
    const liElement = document.createElement("li");
    const textElement = document.createTextNode(repo.name);

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function renderLoading() {
  listElement.innerHTML = "";

  const loadingElement = document.createElement("li");
  const textElement = document.createTextNode("Carregando...");

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError() {
  listElement.innerHTML = "";

  const errorElement = document.createElement("li");
  const textElement = document.createTextNode("ERRO!");

  errorElement.style.color = "F00";

  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}

function listRepositories() {
  var user = document.querySelector("#user").value;

  if (!user) return;

  renderLoading();

  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      renderRepositories(response.data);
    })
    .catch(error => {
      renderError();
    });
}
