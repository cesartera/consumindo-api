console.log("Olá, Vamos consumir APIs");

// const url = "https://reqres.in/api/users?page=2"
// const url = "https://pokeapi.co/api/v2/pokemon?limit=9"

// // console.log(fetch(url))

// fetch(url)
// .then(resposta => {
//     console.log(resposta, "Essa é a Response");
//     resposta.json()
//     .then(dados => {
//         console.log(dados);
//         console.log(dados.data, "--> Apenas os Users");
//         var users = dados.data;
//         console.log(users);
//         showAllUsers(users);
//     })
// })

// function showAllUsers(users) {
//     for (i=0 ; i<users.length; i++){
//         // console.log(users[i]);
//         var name = document.createElement("h3");
//         name.innerText = users[i].first_name + " " + users[i].last_name;
//         document.getElementById("userGallery").appendChild(name);     
//     }
// }



//BEATRIZ
// fetch(url)
//     .then(response => {
//         response.json()
//             .then(data => {
//                 var pokemon = data.results;
//                 console.log(pokemon);
//                 primeirosPokemons(pokemon);
//             })
//     })



// function primeirosPokemons(pokemon) {
//     console.log(pokemon, "Este aqui é pokemon")
//     console.log(pokemon, "este é pokemon.results")
//     for (i = 0; i < pokemon.length; i++) {
//         var nomes = document.createElement("h3");
//         nomes.innerText = pokemon[i].name;
//         document.getElementById("userGallery").appendChild(nomes);
//     }
// }

// const url="https://pokeapi.co/api/v2/pokemon?limit=9"

// console.log(fetch(url));

// fetch(url)
// .then(resposta => {
//   console.log(resposta, "Essa é a response!!");
//   resposta.json()
//    .then(data => {
//      var pokemon= data.results;
//      console.log(pokemon, "Este é pokemon");
//      primeirosPokemons(pokemon);
//    })
// })

// function primeirosPokemons (pokemon) {
//   for (i=0 ; i<pokemon.length; i++){
//   console.log(pokemon[i], `Pokemon ${i}`);
//   var name= document.createElement("h3");
//   name.innerText = pokemon[i].name;
//   document.getElementById("userGallery").appendChild(name);
//   }

// }

const url = "https://api.api-futebol.com.br/v1/ao-vivo"

// let headers = new Headers();

// headers.append('Athorization', 'Bearer test_7d3235ddea58b531a4a414a266cc16')
// console.log(headers);

const options = {
  headers: {'Authorization' : 'Bearer test_7d3235ddea58b531a4a414a266cc16'},
}

function buscarPartidas() {
  fetch(url, options)
  .then(resposta => {
    resposta.json()
    .then(obj => {
    console.log(obj)
    mostrarPartidas(obj);
  })
})
.catch()
}


function mostrarPartidas(partidas) {
  console.log(partidas, "Isso é partidas")

  for (i=0; i<partidas.length; i++){
    var placar = document.createElement('h3');
    placar.innerText = partidas[i].placar;
    var escudoMandante = document.createElement('img');
    escudoMandante.setAttribute('src', partidas[i].time_mandante.escudo);
    
    document.getElementById('partidasAoVivo').append(placar, escudoMandante);
  }
}

buscarPartidas();



