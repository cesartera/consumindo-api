console.log("Olá, Vamos consumir APIs");

const url = "https://reqres.in/api/users?page=2"

// console.log(fetch(url))

fetch(url)
.then(resposta => {
    console.log(resposta, "Essa é a Response");
    resposta.json()
    .then(dados => {
        console.log(dados);
        console.log(dados.data, "--> Apenas os Users");
        var users = dados.data;
        console.log(users);
        showAllUsers(users);
    })
})

function showAllUsers(users) {
    for (i=0 ; i<users.length; i++){
        // console.log(users[i]);
        var name = document.createElement("h3");
        name.innerText = users[i].first_name + " " + users[i].last_name;
        document.getElementById("userGallery").appendChild(name);     
    }
}

