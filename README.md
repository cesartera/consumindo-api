## Consumindo APIS no Front End

---

### O que é uma API?

- API é a sigla de Application Programming Interface (Interface de Programação de uma Aplicação).
- É uma forma / convenção que permite que aplicações distintas troquem informações entre si
- **Exemplo:**
    - Login with Facebook
        - Permite que a gente crie uma aplicação onde a gente pega os dados daquele usuário no Facebook, como nome, sobrenome, e-mail, data de aniversário, foto, diretamente do banco de dados do facebook, mas sem acessar os bancos de dados do facebook.
    - Login with Google
        - Mesma coisa aqui.
    - API de meios de pagamento
        - Permite que a gente crie aplicações que vai trocar informações com a empresa de meios de pagamentos, que é quem vai de fato processar um pagamento e então retornar pra gente a informação de que aquela compra foi autorizada, ou não.

---

### Como funciona uma API?

Basicamente:

1. A aplicação faz uma **Request** (Requisição
2. A API recebe a requisição, processa e devolve a resposta, chamada de **Response**.
3. A Web App, recebe a resposta, trata, e processa e acordo com seu propósito.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e25886eb-d2b1-48ee-a71a-d6bf772bcc5c/Untitled.png)

**ANALOGIA COM GARÇOM**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6769c6ef-1066-4f63-9cb1-028c5e58cfe2/Untitled.png)

1. O cliente faz o pedido ao garçom que é a API
2. O garçom faz uma **Request** para a Cozinha, que prepara o seu pedido e devolve ao garçom
3. O garçom leva o prato até a mesa.

---

### REST e RESTful

**REST** significa Representational State Transfer - Transferência de estado presentacional.

Resumindo:

- Conjunto de regras, princípios e restrições da arquitetura de software.
- Essas regras permitem a criação de um projeto de interfaces bem definidas.

**ANALOGIA COM GARÇOM**

- REST são as regras que são definidas para comunicação entre o cliente, o garçom e a cozinha. Por exemplo: Pedir um prato pelo número dele no cardápio.

---

### REQUEST - Métodos HTTP

- **GET -** Ler informações
- **POST** - Escrever informações
- **PUT** - Editar Informações
- **DELETE -** Deletar informações

---

### **RESPONSE - STATUS CODE**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1862ae65-db85-4ffe-8195-900c388296f9/Untitled.png)

- 1xx - Informativos
- 2xx - Indicativos de sucesso
- 3xx - Redirecionamentos. Indica a necessidade de uma segunda requisição
- 4xx - Erros do cliente na hora de fazer a requisição
- 5xx - Erros no lado do servidor

E dentro de cada uma das centenas existem os códigos específicos, por exemplo:

- 200 - Sucesso! Tudo ocorreu corretamente
- 301 - Indica um redirecionamento permanente
- 401 - Não autorizado
- 404 - Indica que o recurso solicitado não foi encontrado no servidor

---

### FETCH

> Fetch - Busca
> 

Fetch é um método JavaScript para realizar uma busca em uma URL, ou seja,  uma Request.

A sintaxe é:

```jsx

fetch(url, options)
```

Exemplo usando a api **[REQ|RES](https://reqres.in/)**

[https://reqres.in](https://reqres.in/)

Essa é uma API aberta que retorna usuários  e itens “fake”. 

É MUITO legal para testar o Front End de uma Aplicação.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a43f3378-f263-4e7e-943b-949cbf6e63d1/Untitled.png)

---

### Mão no código

Uma boa prática é criar uma variável para a url que queremos usar na request.

```jsx
const url = "https://reqres.in/api/unknown";
```

E aí podemos usar essa variável url como argumento no método fetch:

```jsx
fetch(url);
```

**O método `fetch` retorna uma Promise**

### Promise

**`Promise`** é um objeto usado para processamento assíncrono. Um `Promise` (*de "promessa"*) representa um valor que pode estar disponível agora, no futuro ou nunca.

Um **`Promise`** está em um destes estados:

- *pending (*pendente*)*: Estado inicial, que não foi realizada nem rejeitada.
- *fulfilled (*realizada): sucesso na operação.
- *rejected (*rejeitado): falha na operação.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cda36dac-48cd-4e92-a8fc-cba4b0e9feb1/Untitled.png)

Uma promessa pendente pode se tornar *realizada* com um valor ou *rejeitada* por um motivo (erro). Quando um desses estados ocorre, o método `then` do `Promise` é chamado.

Usar um `console.log` para ver o que é uma *Promise*

```jsx

console.log(fetch(url);
```

Console:

```jsx
Promise {<pending>}
[[Prototype]]: Promise
catch: ƒ catch()
constructor: ƒ Promise()
finally: ƒ finally()
then: ƒ then()
Symbol(Symbol.toStringTag): "Promise"
[[Prototype]]: Object
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response
```

**OBS:** Note que a Promise possui dois métodos importantes (`.then e .catch`);

Para entender mais sobre o que é uma Promisse:

**[Promisse - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)**

```jsx
fetch (url)
.then()
.catch()
```

Dentro de `.then` é onde vou tratar os dados da resposta;

```jsx
fetch (url)
.then(response => {
    response.json()
})
.catch()
```

 `reponse.json()` também é uma promisse que vai pegar o arquivo JSON da response e transformá-lo em um Objeto JavaScript. Por ser uma promisse usamos outro `.then`

```jsx
fetch (url)
.then(response => {
    response.json()
    .then(data => {
        console.log(data)
    })
})
.catch()
```

Agora temos a resposta da API como um Objeto JavaScript no nosso código.

```jsx
app.js:19 {page: 2, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}data: (6) [{…}, {…}, {…}, {…}, {…}, {…}]page: 2per_page: 6support: {url: 'https://reqres.in/#support-heading', text: 'To keep ReqRes free, contributions towards server costs are appreciated!'}total: 12total_pages: 2[[Prototype]]: Object
```

Com isso podemos acessar apenas o Array dos dados dos usuários e armazená-lo em uma variável

```jsx
fetch (url)
.then(response => {
    response.json()
    .then(data => {
        console.log(data);
        var users = data.dada;
        console.log(users);
    })
})
.catch()
```

Uma vez que tenho eles armazenados em uma variável, posso usar este dados como eu quiser. Por exemplo em uma função para exibir os usuários no console.

```jsx
function showUsers(users){
    console.log(users);
    for(i=0; i<users.length; i++){
        console.log(users[i].first_name);
    }
}
```

E assim, podemos acessar os usuários e exibir seus nomes ou qualquer outra informação no DOM.

```jsx
function showUsers(users){
    console.log(users);
    for(i=0; i<users.length; i++){
        console.log(users[i].first_name);
        
        let userFirstName = document.createElement('h2');
        userFirstName.innerText = users[i].first_name;
        document.getElementById("usersGallery").appendChild(userFirstName);
    }
}
```

Adicionando Imagens:

```jsx
function showUsers(users){
    console.log(users);
    for(i=0; i<users.length; i++){
        console.log(users[i].first_name);
        
        let userFirstName = document.createElement('h2');
        userFirstName.innerText = users[i].first_name;
        document.getElementById("usersGallery").appendChild(userFirstName);

        let userImageProfile = document.createElement('div');
        userImageProfile.innerHTML = `<img src=${users[i].avatar} alt="user_avatar">`;
        document.getElementById("usersGallery").appendChild(userImageProfile)
    }
}
```

### API KEY

- API NASA

[https://api.nasa.gov/](https://api.nasa.gov/)

- APOD - Astronomic Picture of The Day
    - API que mostra uma imagem de astronomia a cada dia.
    
    [https://apod.nasa.gov/apod/astropix.html](https://apod.nasa.gov/apod/astropix.html)
    

### API PARAMETERS

Precisamos sempre entender como funciona de acordo com a documentação:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c857b472-0d6a-429c-a993-b32a16d1c88a/Untitled.png)

- final da URL add ?
- parametro=valor
- parametro1=valor1&parametro2=valor2

---

🔵  - **EXERCÍCIO**

Construir um calendário usando a API APOD da NASA.

- Pode ser uma lista das imagens dos últimos dias.
- Pode adicionar filtros de datas.
- Pode adicionar filtros de número de dias.
