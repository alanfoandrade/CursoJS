/* var myPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/diego3g');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      //redyState = 4 quando tiver terminado de puxar da api
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText)); //converte o json recebido em objeto
        } else {
          reject('Erro na requisição');
        }
      }
    };
  });
};

myPromise()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.warn(error);
  }); */

axios
  .get('https://api.github.com/users/diego3g')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.warn(error);
  });
