const api = "https://pokeapi.co/api/v2/pokemon/";

async function aoclicar() {

    const pesquisaInput = document.getElementById("pesquisa-poke");
    const pokeImagem = document.getElementById("imagem-poke");
    const pokeNome = document.getElementById("nome-poke");


    let valorAtualInput = pesquisaInput.value;
    let pesquisaAtualPoke = api + valorAtualInput;

    try{

        const resposta = await fetch(pesquisaAtualPoke)
        const pokemon = await resposta.json();
        pokeImagem.style.display = "block";
        pokeNome.textContent = pokemon.name.toUpperCase();
        pokeImagem.setAttribute("src", pokemon.sprites.front_default);

    }catch{

        alert(`Pokemon não existente ${valorAtualInput}`);

    }


    
}

